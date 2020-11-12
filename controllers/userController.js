const User = require('./../models/userModel');


exports.getUser = async (req, res) => {
  const user = await User.getUserByIdDB(req.params.id);
  return res.send(user);
}

exports.getCurrentUser = (req, res) => {
  console.log(req);
  res.send(req);
}

exports.getCart = async (req, res) => {
  let cart = await User.getCartDB(req.session.userId)
  cart = cart.map(row => Object.assign({}, row));
  return res.send(cart);
}