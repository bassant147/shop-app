const mysql = require('mysql');

// Local mysql db connection
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