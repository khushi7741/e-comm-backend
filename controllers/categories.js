const Category = require("../models/categories");

const AdminAddCategory = async (req, resp) => {
  try {
    let category = new Category(req.body);
    let result = await category.save();
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
};

const StoreAddCategory = async (req, resp) => {
  try {
    let category = new Category(req.body);
    let result = await category.save();
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
};

const CategoryList = async (req, resp) => {
  try {
    let category = await Category.find();
    if (category.length > 0) {
      resp.send(category);
    } else {
      resp.send({ result: "No Category Found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const AdminDeleteCategory = async (req, resp) => {
  try {
    const result = await Category.deleteOne({ _id: req.params.id });
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
};

const StoreDeleteCategory = async (req, resp) => {
  try {
    const result = await Category.deleteOne({ _id: req.params.id });
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
};

const GetAdminSelectedCategory = async (req, resp) => {
  try {
    const result = await Category.findOne({ _id: req.params.id });
    if (result) {
      resp.send(result);
    } else {
      resp.send({ result: "No Record Found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const GetStoreSelectedCategory = async (req, resp) => {
  try {
    const result = await Category.findOne({ _id: req.params.id });
    if (result) {
      resp.send(result);
    } else {
      resp.send({ result: "No Record Found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const AdminUpdateCategory = async (req, resp) => {
  try {
    let result = await Category.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
};

const StoreUpdateCategory = async (req, resp) => {
  try {
    let result = await Category.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  AdminAddCategory,
  StoreAddCategory,
  CategoryList,
  AdminDeleteCategory,
  StoreDeleteCategory,
  GetAdminSelectedCategory,
  GetStoreSelectedCategory,
  AdminUpdateCategory,
  StoreUpdateCategory,
};
