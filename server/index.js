// server/index.js
// type "node server" to run
'use strict';

const app = require('./app');

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
/*
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'kittyfanclub',
  password : 'RightMeow10',
  database : 'Tuncake'
});

connection.connect()

connection.query('SELECT * FROM Tunacake.users', function (err, rows, fields) {
  if (err) throw err

  console.log('The first user is: ', rows[0])
})

connection.end()*/