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

exports.getAllUsers = (req, res) => {

}

exports.getCurrentUser = (req, res) => {
  console.log(req);
  res.send(req);
}