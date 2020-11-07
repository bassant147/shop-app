const db = require('./db');

exports.createUserDB = () => {
}

exports.getUserDB = (id) => {
  let sql = `SELECT * FROM shopdb.users WHERE user_id = ${id}`
  return new Promise( (resolve, reject) =>
    db.query(sql, (err, user) => {
    if(err) reject(err);

    return resolve(user);
  }))
};

exports.getAllUsersDB = () => {
  
}
