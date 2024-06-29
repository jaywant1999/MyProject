const sequelize = require('sequelize');

const DBNAME = 'digitalflake' ;
const USERNAME = 'root' ;
const PASSWORD = 'mysql' ;   

const HOST = '127.0.0.1' ;
const PORT = 3306 ;

const Sequelize = new sequelize( DBNAME, USERNAME, PASSWORD, {
    host: HOST,
    port: PORT,
    dialect: 'mysql',
});
module.exports = { Sequelize };