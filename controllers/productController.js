const Product = require('./../models/productModel');

exports.getAllProducts = async (req, res) => {
  let products = await Product.getAllProductsDB();
  products = products.map(product => Object.assign({}, product));
  console.log(products);
  res.send(products);
}

exports.getProduct = (req, res) => {
  
}

exports.createProduct = (req, res) => {

}

