const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const isAdmin = async (req, res, next) => {
  try {
    if (req.user?.roll === "admin") {
      next();
    } else {
      res.status(403).json({ error: "unAuthorized access" });
    }
  } catch (error) {}
};

module.exports = { isAdmin };
