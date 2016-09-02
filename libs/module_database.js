var mysql = require('mysql');
var config = require('../config');
var connection = mysql.createConnection({
  host     : config.get('bd_host'),
  user     : config.get('bd_user'),
  password : config.get('bd_pass'),
  database : config.get('bd_name')
});


module.exports = connection;
