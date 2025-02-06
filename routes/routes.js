const express = require("express");
const {
  UserSignUp,
  UserLogin,
  AdminSignUp,
  AdminLogin,
  StoreSignUp,
  StoreLogin,
} = require("../controllers/users");
const {
  AdminAddProduct,
  StoreAddProduct,
  productList,
  AdminDeleteProduct,
  StoreDeleteProduct,
  GetStoreSelectedProduct,
  StoreUpdateProduct,
  GetAdminSelectedProduct,
  AdminUpdateProduct,
} = require("../controllers/products");
const {
  AdminAddCategory,
  StoreAddCategory,
  CategoryList,
  AdminDeleteCategory,
  StoreDeleteCategory,
  GetStoreSelectedCategory,
  GetAdminSelectedCategory,
  StoreUpdateCategory,
  AdminUpdateCategory,
} = require("../controllers/categories");
const routes = express.Router();

routes.post("/user-sign-up", UserSignUp);
routes.post("/user-login", UserLogin);
routes.post("/admin-sign-up", AdminSignUp);
routes.post("/admin-login", AdminLogin);
routes.post("/store-sign-up", StoreSignUp);
routes.post("/store-login", StoreLogin);

routes.post("/admin-add-product", AdminAddProduct);
routes.post("/store-add-product", StoreAddProduct);
routes.get("/products", productList);
routes.delete("/admin-delete-product/:id", AdminDeleteProduct);
routes.delete("/store-delete-product/:id", StoreDeleteProduct);
routes.get("/store-selected-product/:id", GetStoreSelectedProduct);
routes.get("/admin-selected-product/:id", GetAdminSelectedProduct);
routes.put("/store-update-product/:id", StoreUpdateProduct);
routes.put("/admin-update-product/:id", AdminUpdateProduct);

routes.post("/admin-add-category", AdminAddCategory);
routes.post("/store-add-category", StoreAddCategory);
routes.get("/categories", CategoryList);
routes.delete("/admin-delete-category/:id", AdminDeleteCategory);
routes.delete("/store-delete-category/:id", StoreDeleteCategory);
routes.get("/store-selected-category/:id", GetStoreSelectedCategory);
routes.get("/admin-selected-category/:id", GetAdminSelectedCategory);
routes.put("/store-update-category/:id", StoreUpdateCategory);
routes.put("/admin-update-category/:id", AdminUpdateCategory);

module.exports = routes;
