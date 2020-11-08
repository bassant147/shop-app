const User = require('./../models/userModel');
const crypto = require('crypto');
const util = require('util');

const passwordHashing = async (password) => {

  const scrypt = util.promisify(crypto.scrypt);

  const salt = crypto.randomBytes(8).toString('hex');

  const hashed = await scrypt(password, salt, 64);

  return `${hashed.toString('hex')}.${salt}`
}

exports.signup = async (req, res) => {
  const user = req.body;
  const existingUser = await User.getUserByEmailDB(user.email);
  if(existingUser === null) {
    console.log('email already exists');
  } else {
    if(user.password !== user.passwordConfirm) {
      console.log('Passwords must match!');
    } else {
      passwordHashing(user.password).then(password => {
        User.createUserDB(user, password).then(result => {
          req.session.userId = result.insertId;
          res.send((req.session.userId).toString());
        });
      })
    }
  }
  
}