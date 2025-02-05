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

const AdminDeleteProduct = async (req, resp) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
};

const StoreDeleteProduct = async (req, resp) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
};

const GetStoreSelectedProduct = async (req, resp) => {
  const result = await Product.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No Record Found" });
  }
};

const GetAdminSelectedProduct = async (req, resp) => {
  const result = await Product.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No Record Found" });
  }
};

const StoreUpdateProduct = async (req, resp) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
};

const AdminUpdateProduct = async (req, resp) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
};

module.exports = {
  AdminAddProduct,
  StoreAddProduct,
  productList,
  AdminDeleteProduct,
  StoreDeleteProduct,
  GetStoreSelectedProduct,
  GetAdminSelectedProduct,
  StoreUpdateProduct,
  AdminUpdateProduct
};
