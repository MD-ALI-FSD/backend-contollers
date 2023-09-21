const path = require("path");

//importing controller from 'products.js' file.
const productsController = require("../controllers/products");
const express = require("express");

const router = express.Router();

//router to GET(render) on path "/" using controller "getProducts" from "product.js"
router.get("/", productsController.getProducts);

module.exports = router;
