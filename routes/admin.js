const path = require("path");
const express = require("express");

//importing controllers from 'products.js' file.
const productsController = require("../controllers/products");
const router = express.Router();

//router to GET(render) on path "/add-product" using controller "getAddProduct" from "product.js"
router.get("/add-product", productsController.getAddProduct);

//router to POST(recieve) from path "/add-product" using controller "postAddProduct" from "product.js"
router.post("/add-product", productsController.postAddProduct);

// exports.routes = router;
// exports.products = products;

module.exports = router;
