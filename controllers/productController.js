const Product = require('./../models/productModel');

exports.getAllProducts = async (req, res) => {
  let products = await Product.getAllProductsDB();
  products = products.map(product => Object.assign({}, product));
  res.send(products);
}

exports.addToCart = async (req, res) => {
  console.log('add to cart')
  console.log(req.body)
  //let cart = await Product.addToCartDB();
}

exports.getProduct = (req, res) => {
  
}

exports.createProduct = (req, res) => {

}

