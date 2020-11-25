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
    res.status(409).send({ email: 'Email Already Exists!'})
  } else {
    if(user.password !== user.passwordConfirm) {
      res.status(403).send({ password: 'Passwords Must Match!'});
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
  if(!result) {
    return res.status(404).send({ email: 'Email doesn not exist'});
  } 
  const existingUser = JSON.parse(JSON.stringify(result));
  const savedPassword = existingUser.user_password;
  const suppliedPassword = user.password;
  const validPassword = await comparePasswords(savedPassword, suppliedPassword);
  if(!validPassword) {
    res.status(401).send({ password: 'Invalid Password'});
  } 
  req.session.userId = existingUser.user_id;

  return res.send((req.session.userId).toString());
}