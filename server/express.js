const express = require("express")
const bodyParser = require("body-parser")
const cookies = require("cookie-parser")
const session = require("express-session")
const cors = require("cors")
const db = require("./model/db.js");

const userAuth = require("./Routers/userAuth.js")
const tasks = require("./Routers/tasksRouter.js")

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
app.use("/tasks", tasks)

app.listen(PORT , () =>{
    console.log(`http://localhost:${PORT}`);
})