const Product = require('./../models/productModel');

exports.getAllProducts = async (req, res) => {
  let products = await Product.getAllProductsDB();
  products = products.map(product => Object.assign({}, product));
  res.send(products);
}

exports.addToCart = async (req, res) => {

  await Product.addToCartDB(req.body);
  res.send();
}



exports.getProduct = (req, res) => {
  
}

exports.createProduct = (req, res) => {

}

