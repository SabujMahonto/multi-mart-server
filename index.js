const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = new express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to Multi-Mart Server" });
});

app.listen(port, () => {
  console.log(`server was running on Port......${port}`);
});
