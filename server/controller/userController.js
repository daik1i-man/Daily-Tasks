const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const db = require("../model/db.js");
const SibApiV3Sdk = require('sib-api-v3-sdk');
const nodemailer = require("nodemailer")



async function createUser({ username, email, verificationToken }) {
    const response = await db.query("INSERT INTO users (username, email, verified, verification_token) VALUES ($1, $2, false, $3) RETURNING *", [username, email, verificationToken]);
    return response.rows[0];
}

async function userExists(username, email) {
    const users = await db.query("SELECT * FROM users WHERE username = $1 OR email = $2", [username, email]);
    return users.rows.some(user => user.username === username && user.email === email);
}
const sender = {
    email: "abduhakimovabdushukur0615@gmail.com",
    name: "netrunners"
};

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "netrunners.group@gmail.com",
        pass: "vvml xcek vjcp idxc",
    },
});

const signup = async (req, res) => {
    const { username, email } = req.body;
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
    try {
        if (await userExists(username, email)) {
            return res.status(409).json({ message: "User already exists" });
        }
        const verificationToken = crypto.randomBytes(32).toString("hex");
        const user = await createUser({ username, email, verificationToken });
        const verificationUrl = `http://localhost:3000/user/verification/${verificationToken}`;
        let info = await transporter.sendMail({
            from: 'Daily-Tasks Community.',
            to: email,
            subject: `${username}. You have successfully registered on our website.`,
            html: `<p>You can now access your profile.</p>`,
            html: `<button style="background-color: #333; color: #fff; font-size: 10px; padding: 9px; border-radius: 5px;cursor: pointer; border: none; "><a href="${verificationUrl}">Go to profile</a></button>`,
        });
        console.log(info.messageId);
        res.cookie("user_name", user.username);
        res.redirect(`/verification/:${verificationToken}`);
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

const verification = async (req, res) => {
    const token = req.params.token;
    try {
        const user = await db.query("SELECT * FROM users WHERE verification_token = $1", [token]);
        if (user.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.cookie("userData", `${user.rows[0].username}`);
        res.redirect(`http://localhost:5173/board/daily`);
        await db.query("UPDATE users SET verified = true, verification_token = NULL WHERE id = $1", [user.rows[0].id]);

    } catch (err) {
        console.error("Error during email verification:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

const logout = (req, res) => {
    res.clearCookie("user_name")
    res.redirect("http://localhost:5173/register")
}

const userName = (req, res) => {
    const {user_name} = req.cookies
    res.send(user_name)
}

module.exports = {
    signup,
    verification,
    logout,
    userName
}