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
const { verifyToken } = require("../middleware/auth");
const routes = express.Router();

routes.post("/user-sign-up", UserSignUp);
routes.post("/user-login", UserLogin);
routes.post("/admin-sign-up", AdminSignUp);
routes.post("/admin-login", AdminLogin);
routes.post("/store-sign-up", StoreSignUp);
routes.post("/store-login", StoreLogin);

routes.post("/admin-add-product",verifyToken, AdminAddProduct);
routes.post("/store-add-product",verifyToken, StoreAddProduct);
routes.get("/products",verifyToken, productList);
routes.delete("/admin-delete-product/:id",verifyToken, AdminDeleteProduct);
routes.delete("/store-delete-product/:id",verifyToken, StoreDeleteProduct);
routes.get("/store-selected-product/:id",verifyToken, GetStoreSelectedProduct);
routes.get("/admin-selected-product/:id",verifyToken, GetAdminSelectedProduct);
routes.put("/store-update-product/:id",verifyToken, StoreUpdateProduct);
routes.put("/admin-update-product/:id",verifyToken, AdminUpdateProduct);

routes.post("/admin-add-category",verifyToken, AdminAddCategory);
routes.post("/store-add-category",verifyToken, StoreAddCategory);
routes.get("/categories",verifyToken, CategoryList);
routes.delete("/admin-delete-category/:id",verifyToken, AdminDeleteCategory);
routes.delete("/store-delete-category/:id",verifyToken, StoreDeleteCategory);
routes.get("/store-selected-category/:id",verifyToken, GetStoreSelectedCategory);
routes.get("/admin-selected-category/:id",verifyToken, GetAdminSelectedCategory);
routes.put("/store-update-category/:id",verifyToken, StoreUpdateCategory);
routes.put("/admin-update-category/:id",verifyToken, AdminUpdateCategory);
routes.put("/admin-update-category/:id",verifyToken, AdminUpdateCategory);


module.exports = routes;
