
require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const db = require("../model/db.js");
const SibApiV3Sdk = require('sib-api-v3-sdk');
const nodemailer = require("nodemailer")


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", 
  port: 465, 
  secure: true, 
  auth: {
    user: "netrunners.group@gmail.com",
    pass: process.env.PASS, 
  },
});

async function createUser({ username, email, verificationToken }) {
  const response = await db.query("INSERT INTO users (username, email, verified, verification_token) VALUES ($1, $2, false, $3) RETURNING *", [username, email, verificationToken]);
  return response.rows[0];
}

async function userExists(username, email) {
  const users = await db.query("SELECT * FROM users WHERE username = $1 OR email = $2", [username, email]);
  return users.rows.some(user => user.username === username && user.email === email);
}
const sender ={
    email:"abduhakimovabdushukur0615@gmail.com",
    name:"netrunners"
};


router.post("/signup", async (req, res) => {
  const { username, email } = req.body;
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
  try {
    if (await userExists(username, email)) {
      return res.status(409).json({ message: "User already exists" });
    }
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const user = await createUser({ username, email, verificationToken });
    const verificationUrl = `http://localhost:3000/verification/${verificationToken}`;
    let info = await transporter.sendMail({
      from: 'netrunners.group@gmail.com',
      to: email,
      subject: "Testing, testing, 123",
      html: `<p><a href="${verificationUrl}">verification</a></p>`
    });
    console.log(info.messageId); 
    res.cookie("user_name", user.username);
    res.redirect(`/verification/:${verificationToken}`);
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});




module.exports = router;

