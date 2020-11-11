 const User = require('./../models/userModel');

/* exports.createUser = async (req, res) => {
  const user = req.body;
  const existingUser = await User.getUserByEmailDB(user.email);
  if(existingUser === null) {
    console.log('email already exists');
  } else {
    if(user.password !== user.passwordConfirm) {
      console.log('Passwords must match!');
    } else {
      User.createUserDB(user).then(result => {
        req.session.userId = result.insertId;
      });
      
    }
  }
} */

exports.getUser = async (req, res) => {
  const user = await User.getUserByIdDB(req.params.id);
  return res.send(user);
}

exports.getCurrentUser = (req, res) => {
  console.log(req);
  res.send(req);
}

exports.getCart = async (req, res) => {
  console.log('getcart: req.session.userId')
  console.log(req.session.userId)
  let cart = await User.getCartDB(req.session.userId)
  cart = cart.map(row => Object.assign({}, row));
  console.log('cart' );
  console.log(cart)
  return res.send(cart);
}