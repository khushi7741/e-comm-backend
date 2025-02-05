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

module.exports = routes;
