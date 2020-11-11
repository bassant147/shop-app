const db = require('./db');

exports.getAllProductsDB = () => {
  return new Promise( (resolve, reject) => {
    let sql = 'SELECT * FROM shopdb.products;';
    db.query(sql, (err, results) => {
      if(err) {
        reject(err);
      }
      return resolve(results);
    })
  })
}

exports.addToCartDB = () => {
  return new Promise ((resolve, reject) => {
    //let sql = 
  })
}