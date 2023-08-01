// basic config lib import
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
//variables
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;
const userRoute = require("./routes/user.route");
//middleware
const app = new express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);

//test api
app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to Multi-Mart Server" });
});

//Bypass api
app.use("/api/users", userRoute);
// Mongo DB Database Connection
mongoose
  .connect(uri, { useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`server was running on Port......${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
