const User = require('./../models/userModel');

exports.getCart = async (req, res) => {
  let cart = await User.getCartDB(req.session.userId)
  cart = cart.map(row => Object.assign({}, row));
  return res.send(cart);
}

exports.getWishList = async (req, res) => {
  let wishlist = await User.getWishListDB(req.session.userId)
  wishlist = wishlist.map(row => Object.assign({}, row));
  return res.send(wishlist)
}

exports.placeOrder = async (req, res) => {
  const orderId = await User.placeOrderDB(req.session.userId);
  res.send(orderId.toString());
}

exports.getOrderItemsAndPurchaseDate = async (req, res) => {
  let purchasedItems = await User.getOrderItemsAndPurchaseDateDB(req.params.orderId);
  purchasedItems = purchasedItems.map(row => Object.assign({}, row));
  res.send(purchasedItems);
}

exports.getPurchaseHistory = async (req, res) => {
  let purchasedItems = await User.getPurchaseHistoryDB(req.session.userId);
  res.send(purchasedItems);
}