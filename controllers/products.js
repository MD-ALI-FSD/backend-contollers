//Controller for product

//Importing "Product" Class to save and retrive data
const Product = require("../models/product");

//Exporting middleware to be used in "admin.js" to render(get) on path "/add-product"
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

//Exporting middleware to be used in "admin.js" to POST DATA from path "/add-product"
exports.postAddProduct = (req, res, next) => {
  //creating a new object of data entered
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

//Exporting middleware to be used in "shop.js" to render(get) on path "/"
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
