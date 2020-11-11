const db = require('./db');

exports.createUserDB = (user, password) => {
  let values = { first_name: user.fname, 
                last_name: user.lname,
                username: user.username,
                user_password: password,
                phone: user.phone,
                email: user.email}
  let sql = `INSERT INTO shopdb.users SET ?`;

  return new Promise( (resolve, reject) => {
    db.query(sql, values, (err, result, fields) => {
      if(err) reject(err);
      return resolve(result);
    })
  })
}

exports.getUserByIdDB = (id) => {
  let sql = `SELECT * FROM shopdb.users WHERE user_id = ${id}`
  return new Promise( (resolve, reject) =>
    db.query(sql, (err, user) => {
    if(err) reject(err);

    return resolve(user);
  }))
};

exports.getUserByEmailDB = (email) => {
  let sql = `SELECT * FROM shopdb.users WHERE email = ?`
  return new Promise( (resolve, reject) => {
    db.query(sql, email, (err, results) => {
      if(err) {
        console.log('Promise rejected in getUserByEmailDB')
        reject(err);
      }
      return resolve(results[0]);
    })
  })
}

exports.getCartDB = (userId) => {
  return new Promise ((resolve, reject) => {
    //let sql = `SELECT * FROM shopdb.cart WHERE user_id = ${userId};`
    let sql = `SELECT product_name, price, img_url FROM shopdb.products 
    WHERE product_id IN (
              SELECT product_id FROM shopdb.cart WHERE user_id = ${userId}
            );`
    db.query(sql, (err, results) => {
      if(err) reject(err);
      resolve(results);
    })
  });
}