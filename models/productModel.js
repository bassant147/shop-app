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

const productAlreadyInCart = async (userId, productId) => {
  /* return new Promise ((resolve, reject) => {
    let sql = `SELECT * FROM shopdb.cart WHERE user_id = ${userId} AND product_id = ${productId};`
    db.query(sql, (err, results) => {
      if(err) reject(err);
      resolve(results.map(result => Object.assign({}, result)));
    })
  }); */
  const results = await new Promise ((resolve, reject) => {
    let sql = `SELECT saved_for_later FROM shopdb.cart WHERE user_id = ${userId} AND product_id = ${productId};`
    db.query(sql, (err, results) => {
      if(err) reject(err);
      resolve(results.map(result => Object.assign({}, result)));
    })
  });

  // if product already in cart, check saved_for_later (0: cart, 1: wishlist)
  if(results.length) {
    const isInWishlist = !!results[0].saved_for_later;
    // if isInWishlist, change flag in database to false [to remove it from wishlist and add it to cart]
    if(isInWishlist) {
      await new Promise ((resolve, reject) => {
        sql = `UPDATE shopdb.cart SET saved_for_later = 0 WHERE user_id = ${userId} AND product_id = ${productId};`;
        db.query(sql, (err, results) => {
          if(err) return reject(err);
          resolve(results);
        })
      })
    }
    return true;

  } else return false;
}

exports.addToCartDB = async ({ userId, productId }) => {
  const exists = await productAlreadyInCart(userId, productId)
  if(exists) return;
  
  return new Promise ((resolve, reject) => {
    let sql = 'INSERT INTO shopdb.cart SET ?'
    let values = {
      user_id: userId,
      product_id: productId
    }

    db.query(sql, values, (err, results) => {
      if(err) reject(err);
      resolve(results);
    })
  })
}

exports.removeFromCartDB = async (userId, productId ) => {
  return new Promise ((resolve, reject) => {
    let sql = `DELETE FROM shopdb.cart WHERE user_id = ${userId} AND product_id = ${productId};`;
    db.query(sql, (err, results) => {
      if(err) reject(err);
      resolve(results);
    })
  })
}