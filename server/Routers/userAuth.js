const express = require("express");
const router = express.Router();
const userAuth = require("../controller/userController.js");

router.post("/signup", userAuth.signup);
router.get("/verification/:token", userAuth.verification);
router.get("/logout", userAuth.logout)
router.get("/username", userAuth.userName)

module.exports = router;
