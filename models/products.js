const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    category_name: String,
    product_image: String,
    product_name: String,
    product_price: Number,
    product_final_price: Number,
    role: String,
});

module.exports = mongoose.model("products", productSchema);
