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

const productAlreadyInCart = (userId, productId) => {
  return new Promise ((resolve, reject) => {
    let sql = `SELECT * FROM shopdb.cart WHERE user_id = ${userId} AND product_id = ${productId};`
    db.query(sql, (err, results) => {
      if(err) reject(err);
      resolve(results);
    })
  });
}



exports.addToCartDB = async ({ userId, productId }) => {
  const exists = await productAlreadyInCart(userId, productId)
  console.log('addToCartDB: exists')
  console.log(exists.length)
  if(exists.length) return;
  
  await new Promise ((resolve, reject) => {
    let sql = 'INSERT INTO shopdb.cart SET ?'
    let values = {
      user_id: userId,
      product_id: productId
    }

    db.query(sql, values, (err, results) => {
      if(err) reject(err);
      resolve(results);
    })
  }).then(results => {
    console.log('addToCartDB: results from insert');
    console.log(results)
  })
  //return getCart(userId);
  
}