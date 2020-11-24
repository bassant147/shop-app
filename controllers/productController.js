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

exports.removeFromCart = async (req, res) => {
  await Product.removeFromCartDB(req.params.userId, req.params.productId);

  res.send();
}

exports.addToWishList = async (req, res) => {
  await Product.addToWishListDB(req.body);
  res.send();
}

exports.removeFromWishList = async (req, res) => {
  await Product.removeFromWishListDB(req.params.userId, req.params.productId);
  res.send();
}


exports.getProduct = async (req, res) => {
  
}

exports.createProduct = async (req, res) => {

}

