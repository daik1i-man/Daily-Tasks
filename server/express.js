const express = require("express")
const bodyParser = require("body-parser")
const cookies = require("cookie-parser")
const session = require("express-session")
const cors = require("cors")
const db = require("./model/db.js");

const userAuth = require("./Routers/userAuth.js")

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cookies())
app.use(cors({
    origin: [
      'http://localhost:8080',
      'https://localhost:8080'
    ],
    credentials: true,
    exposedHeaders: ['set-cookie']
}));
app.use(session({
    secret:"topsecret",
    cookie: {
        maxAge: 600000,
        secure: true
    },
    saveUninitialized: false,
    resave: false,
    unset: 'destroy'
}))

app.use("/user", userAuth)



app.get("/verification/:token", async(req, res)=>{
    const token = req.params.token;
  try {
    const user = await db.query("SELECT * FROM users WHERE verification_token = $1", [token]);
    if (user.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    await db.query("UPDATE users SET verified = true, verification_token = NULL WHERE id = $1", [user.rows[0].id]);
    res.send("Email verified successfully");
  } catch (err) {
    console.error("Error during email verification:", err);
    res.status(500).json({ message: "Internal server error" });
  }
})
app.listen(PORT , () =>{
    console.log(`http://localhost:${PORT}`);
})