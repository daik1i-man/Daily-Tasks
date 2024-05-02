const express = require("express");
const router = express.Router();
const userAuth = require("../controller/userController")

router.post("/signup", userAuth.signup);
router.get("/verification/:token", userAuth.verification);


module.exports = router;

