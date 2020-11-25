const mysql = require('mysql');

// shopdb schema
/* 
  --tables
    -- products      (product_id PK, category_id, product_name, img_url, price, in_stock)
    -- categories    (category_id PK, category_name)
    -- users         (user_id PK, first_name, last_name, username, user_password, phone, email, is_admin)
    -- cart          (user_id, PK, product_id PK, saved_for_later)
    -- orders        (order_id PK, user_id, purchase_date, amount)
    -- order_items   (order_id PK, product_id PK, price)

 */

// ----Local mysql db connection----
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '1234',
  database : 'shopdb'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected...')
});

module.exports = connection;