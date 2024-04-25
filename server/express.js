const express = require("express")
const bodyParser = require("body-parser")
const cookies = require("cookie-parser")
const session = require("express-session")
const cors = require("cors")
const userAuth = require("./Routers/userAuth.js")

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cookies())
app.use(cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:3000'
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


app.listen(PORT , () =>{
    console.log(`http://localhost:${PORT}`);
})