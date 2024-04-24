const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const db = require("../model/db.js");
require("dotenv").config();


const transporter = nodemailer.createTransport({
  service: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: "abduhakimovabdushukur@gmail.com",
    pass: "xsmtpsib-c3619fd005461555b742ecba8a6669e7eec4800146a131effa4f2d1e6e9fec99-GbmaOw9VU8hWgvcB",
  },
});

router.post("/signup", async (req, res) => {
  const { username, email } = req.body;
  try {
    const users = await db.query(
      "SELECT * FROM users WHERE username = $1 OR email = $2",
      [username, email]
    );
    if (users.rows.length > 0) {
      for (i = 0; i < users.rows.length; i++) {
        if (username === users.rows[i].username &&email === users.rows[i].email){
          res.status(409).json({ message: "User already exists" });
          return;
        }
      }
    } else {
      const verificationToken = crypto.randomBytes(32).toString("hex");
      const response = await db.query("INSERT INTO users (username, email, verified, verification_token) VALUES ($1, $2, false, $3) RETURNING *",[username, email, verificationToken]);
      await sendVerificationEmail(email, verificationToken);
      res.cookie("user_email", response.rows[0].email);
      res.redirect("/user/verification");
    }
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

async function sendVerificationEmail(email, token) {
    const mailOptions = {
      from: "no-reply@example.com",
      to: email,
      subject: "Email Verification",
      text: `Please click the following link to verify your email: http://localhost:4089/user/verification/${token}`,
      html: `<p>Please click the following link to verify your email: <a href="http://localhost:4089/user/verification/${token}">Verify Email</a></p>`,
    };
    try {
      await transporter.sendMail(mailOptions);
      console.log(`Verification email sent to: ${email}`);
    } catch (error) {
      console.error("Error sending verification email:", error);
    }
}
  

router.get("/verification/:token", async (req, res) => {
  const token = req.params.token;
  try {
    await verifyEmail(token);
    res.send("asdfasf");
  } catch (err) {
    console.error("Error during email verification:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

async function verifyEmail(token) {
  try {
    const user = await db.query(
      "SELECT * FROM users WHERE verification_token = $1",
      [token]
    );
    if (user.rows.length > 0) {
      await db.query("UPDATE users SET verified = true WHERE id = $1", [
        user.rows[0].id,
      ]);
      await db.query(
        "UPDATE users SET verification_token = NULL WHERE id = $1",
        [user.rows[0].id]
      );
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = router;
