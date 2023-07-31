const mongoose = require("mongoose");

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
