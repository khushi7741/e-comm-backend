const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  category_name: String,
  role: String,
});

module.exports = mongoose.model("categories", categorySchema);
