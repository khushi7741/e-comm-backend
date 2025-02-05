const Category = require("../models/categories");

const AdminAddCategory = async (req, resp) => {
  let category = new Category(req.body);
  let result = await category.save();
  resp.send(result);
};