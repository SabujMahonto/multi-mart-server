const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    occupations: {
      type: String,
      required: true,
    },
    roll: {
      enum: ["user", "seller", "admin"],
      default: "user",
      required: true,
    },
  },
  { timestamps: true }
);

//signUp
userSchema.static.signUp = async function (
  name,
  email,
  password,
  image,
  address,
  occupations
) {
  if (!name || !email || !password || !image || !address || !occupations) {
    throw new Error("All field must be filled.");
  }

  if (validator.isEmail(email)) {
    throw new Error("Invalid email ");
  }

  if (validator.isStrongPassword(password)) {
    throw new Error(
      "Invalid password (must contain 8+ chars uppercase , lowercase number,& symbols)"
    );
  }
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(password, salt);
  const user = await this.create({
    name,
    email,
    password: hashPass,
    image,
    address,
    occupations,
  });
  return user;
};

model.exports = mongoose.model("User", userSchema);

// logIN
userSchema.static.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("All field must be filled");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error("incorrect Email or  Password");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("incorrect Email or  Password");
  }
  return user;
};
