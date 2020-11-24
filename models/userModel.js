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
        reject(err);
      }
      return resolve(results[0]);
    })
  })
}

exports.getCartDB = (userId) => {
  return new Promise ((resolve, reject) => {
    let sql = `SELECT product_id, product_name, price, img_url FROM shopdb.products 
    WHERE product_id IN (
      SELECT product_id FROM shopdb.cart WHERE user_id = ${userId} AND saved_for_later = 0
    );`
    db.query(sql, (err, results) => {
      if(err) reject(err);
      resolve(results);
    })
  });
}

exports.getWishListDB = (userId) => {
  return new Promise ((resolve, reject) => {
    let sql = `SELECT product_id, product_name, price, img_url FROM shopdb.products 
    WHERE product_id IN (
      SELECT product_id FROM shopdb.cart WHERE user_id = ${userId} AND saved_for_later = 1
    );`
    db.query(sql, (err, results) => {
      if(err) reject(err);
      resolve(results);
    })
  })   
}

const calcAmountToBePaid = (userId) => {
  return new Promise ((resolve, reject) => {
    let sql = `SELECT SUM(price) AS sum FROM shopdb.products WHERE product_id IN (
      SELECT product_id FROM shopdb.cart WHERE user_id = ${userId} AND saved_for_later = 0
    );`
    db.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    })
  }).then(result => {
    results = Object.assign({}, result)
    return results[0].sum
  })

}

const clearCart = async (userId) => {
  await new Promise ((resolve, reject) => {
    let sql = `DELETE FROM shopdb.cart WHERE user_id = ${userId}`
    db.query(sql, (err, result) => {
      if(err) reject(err);
      resolve(result);
    })
  })
  return;
}

exports.placeOrderDB = async (userId) => {
  const sum = await calcAmountToBePaid(userId);
  const orderId = await new Promise ((resolve, reject) => {
    let sql = `INSERT INTO shopdb.orders SET ?`;
    let values = { 
      user_id: userId,
      amount: sum
    }
    db.query(sql, values, (err, result) => {
      if(err) reject(err);
      resolve(result.insertId);
    })
  })
  // add each order item in the order table to the order_items table
  await new Promise((resolve, reject) => {
    let sql = `INSERT INTO shopdb.order_items (order_id, product_id, price)
    SELECT ${orderId}, shopdb.cart.product_id, shopdb.products.price FROM shopdb.cart
    INNER JOIN shopdb.products
    ON cart.product_id = products.product_id
    WHERE cart.saved_for_later = 0;`
    
    db.query(sql, (err, results) => {
      if (err) reject(err);
      resolve(results);
    })
  })
  clearCart(userId);
  return orderId;
}

exports.getOrderItemsAndPurchaseDateDB = async (orderId) => {
  const amount = await new Promise ((resolve, reject) => {
    let sql = `SELECT amount FROM shopdb.orders WHERE order_id = ${orderId}`;
    db.query(sql, (err, result) =>{
      if(err) reject(err);
      resolve(result); 
    })
  }).then(result => {
    results = Object.assign({}, result)
    return results[0].amount
  })

  return new Promise((resolve, reject) => {
    let sql = `SELECT ${orderId} AS orderId, ${amount} AS amount, product_name, price
    FROM shopdb.products WHERE product_id IN (SELECT product_id FROM shopdb.order_items WHERE order_id = ${orderId});`
    db.query(sql, (err, results) =>{
      if(err) reject(err);
      resolve(results); 
    });
  })
}

exports.getPurchaseHistoryDB = async (userId) => {
  console.log('getPurchaseHistoryDB')
  const results = new Promise ((resolve, reject) => {
    let sql = `SELECT order_items.order_id, order_items.price, products.product_name 
    FROM shopdb.order_items
    INNER JOIN shopdb.products
    ON order_items.product_id = products.product_id
    WHERE order_id IN (SELECT order_id FROM shopdb.orders WHERE user_id = ${userId})`;

    db.query(sql, (err, results) => {
      if(err) reject(err);
      resolve(results)
    })
  })

  return results.then(results => {
    results = results.map(row => Object.assign({}, row));
    results = results.filter( (result, index, self) => 
                              index === self.findIndex(el => el.product_name === result.product_name ))
    console.log(results)
    return results;
  })

  
}