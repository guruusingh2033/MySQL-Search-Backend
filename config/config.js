var config = {};

config.database = {};
config.database.db_host_name = 'errorlogdevv1.cluster-cgijfoaf8ahw.us-east-2.rds.amazonaws.com';
config.database.db_master_user = 'root';
config.database.db_master_password = 'pass5word';
config.database.db_name = 'Errorlog_Template_DB';
config.database.port = 9909;

//routing
config.routing = {};
config.routing.common_route = '/api';

module.exports = config;
