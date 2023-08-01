const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getAllUsers,
} = require("../controllers/user.controllers");
const { isAuthenticated } = require("../middleware/auth.middleware");
const { isAdmin } = require("../middleware/admin.middleware");

// register
router.post("/auth/register/", createUser);
// login
router.post("/auth/login/", loginUser);
//GET ALL USERS
router.get("/", isAuthenticated, isAdmin, getAllUsers);

module.exports = router;
