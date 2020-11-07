const User = require('./../models/userModel');

exports.createUser = (req, res) => {
  //User.createUserDB();
}

exports.getUser = async (req, res) => {
  const user = await User.getUserDB(req.params.id);
  return res.send(user);
}

exports.getAllUsers = (req, res) => {

}

exports.getCurrentUser = (req, res) => {
  console.log(req);
  res.send(req);
}