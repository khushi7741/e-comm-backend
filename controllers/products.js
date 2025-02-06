const Product = require("../models/products");

const AdminAddProduct = async (req, resp) => {
  try {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
};

const StoreAddProduct = async (req, resp) => {
  try {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
};

const productList = async (req, resp) => {
  try {
    let product = await Product.find();
    if (product.length > 0) {
      resp.send(product);
    } else {
      resp.send({ result: "No Products Found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const AdminDeleteProduct = async (req, resp) => {
  try {
    const result = await Product.deleteOne({ _id: req.params.id });
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
};

const StoreDeleteProduct = async (req, resp) => {
  try {
    const result = await Product.deleteOne({ _id: req.params.id });
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
};

const GetStoreSelectedProduct = async (req, resp) => {
  try {
    const result = await Product.findOne({ _id: req.params.id });
    if (result) {
      resp.send(result);
    } else {
      resp.send({ result: "No Record Found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const GetAdminSelectedProduct = async (req, resp) => {
  try {
    const result = await Product.findOne({ _id: req.params.id });
    if (result) {
      resp.send(result);
    } else {
      resp.send({ result: "No Record Found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const StoreUpdateProduct = async (req, resp) => {
  try {
    let result = await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
};

const AdminUpdateProduct = async (req, resp) => {
  try {
    let result = await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
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
  AdminUpdateProduct,
};
