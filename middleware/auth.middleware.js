const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const isAuthenticated = async (req, res, next) => {
  try {
    const authHeader = await req.header.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      throw new Error("Invalid Token Format");
    }
    const token = authHeader.split("")[1];
    if (!token) {
      throw new Error("No Token Provided");
    }
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await userModel.findById(id);
    next();
  } catch (error) {
    if (Error === "JsonWebTokenError") {
      res.status(401).json({ error: "invalidToken" });
    } else {
      res.status(403).json({ error: "unAuthorized access" });
    }
  }
};

module.exports = { isAuthenticated };
