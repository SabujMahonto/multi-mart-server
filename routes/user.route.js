const express = require("express");
const router = express.Router();

// register
router.post("/auth/register/", createUser);
// login
router.post("/auth/register/", loginUser);
