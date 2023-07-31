const express = require("express");
const router = express.Router();
const { createUser, loginUser } = require("../controllers/user.controllers");

// register
router.post("/auth/register/", createUser);
// login
router.post("/auth/login/", loginUser);

module.exports = router;
