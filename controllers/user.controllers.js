const { createToken } = require("../helpers/token.helpers");
const User = require("../models/user.model");
const createUser = async (req, res) => {
  try {
    const { name, email, password, image, address, occupations } = req.body;
    const user = await User.signup(
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

const loginUser = async (req, res) => {};

module.exports = {
  createUser,
  loginUser,
};
