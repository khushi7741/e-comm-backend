const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  confirmPassword: String,
  role: String,
});

module.exports = mongoose.model("users", userSchema);
