const Product = require("../models/products");

const AdminAddProduct = async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
};

const StoreAddProduct = async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
};

const productList = async (req, resp) => {
  let product = await Product.find();
  if (product.length > 0) {
    resp.send(product);
  } else {
    resp.send({ result: "No Products Found" });
  }
};

module.exports = {
  AdminAddProduct,
  StoreAddProduct,
  productList
};
