const db = require('./db');

exports.getAllProductsDB = () => {
  let sql = 'SELECT * FROM shopdb.products;';
  db.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results);
  })
}