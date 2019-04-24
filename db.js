var mysql = require('mysql');
var config = require('./config/config.js')

var connection = mysql.createConnection({
    host: config.database.db_host_name,
    user: config.database.db_master_user,
    password: config.database.db_master_password,
    port: config.database.port,
    database: config.database.db_name
});

module.exports = connection;