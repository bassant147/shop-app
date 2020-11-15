const User = require('./../models/userModel');
const crypto = require('crypto');
const util = require('util');

const passwordHashing = async (password) => {

  const scrypt = util.promisify(crypto.scrypt);

  const salt = crypto.randomBytes(8).toString('hex');

  const hashed = await scrypt(password, salt, 64);

  return `${hashed.toString('hex')}.${salt}`
}

const comparePasswords = async (saved, supplied) => {
  // saved password in database looks like this: hashed.salt
  const [hashed, salt] = saved.split('.');
  const scrypt = util.promisify(crypto.scrypt);
  const suppliedHashedBuf = await scrypt(supplied, salt, 64);

  return hashed === suppliedHashedBuf.toString('hex');
}

exports.signup = async (req, res) => {
  const user = req.body;
  const existingUser = await User.getUserByEmailDB(user.email);
  if(existingUser) {
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

exports.login = async (req, res) => {
  const user = req.body;
  const result = await User.getUserByEmailDB(user.email);
  const existingUser = JSON.parse(JSON.stringify(result));
  if(existingUser === null) {
    console.log('email not found');
    return res.send('email not found');
  } 
  const savedPassword = existingUser.user_password;
  const suppliedPassword = user.password;
  const validPassword = comparePasswords(savedPassword, suppliedPassword);
  if(!validPassword) {
    console.log('Invalid Password');
    return res.send('Invalid Password');
  } 
  req.session.userId = existingUser.user_id;

  return res.send((req.session.userId).toString());
}