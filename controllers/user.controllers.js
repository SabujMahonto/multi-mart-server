const { createToken } = require("../helpers/token.helpers");
const userModel = require("../models/user.model");
// create User
const createUser = async (req, res) => {
  try {
    const { name, email, password, image, address, occupations } = req.body;
    const user = await userModel.signup(
      name,
      email,
      password,
      image,
      address,
      occupations
    );
    const token = createToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.login(email, password);
    const token = createToken(user.id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all User
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
};
