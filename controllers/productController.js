const Product = require('./../models/productModel');

exports.getAllProducts = (req, res) => {
  Product.getAllProductsDB();
  res.send('products...');
}

exports.getProduct = (req, res) => {

}

exports.createProduct = (req, res) => {

}

