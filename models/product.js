const fs = require("fs");
const path = require("path");

//Class to creat an object of data entered
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  //saving data on a new product being added by the user.
  save() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent); //json to javascript array/object
      }
      products.push(this);
      //javascript object/array to json
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  //fetching data
  static fetchAll(cb) {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  }
};
