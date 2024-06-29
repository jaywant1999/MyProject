const { STRING } = require('sequelize');
const { sequelize } = require('./Database');

const Login = sequelize.define( 
    'login',
    {
        USERNAME : {
            type : STRING,
        },
        PASSWORD : {
            type : STRING ,
        }
    } , { timestamps:false, freezeTableName: true }
);

module.exports = { Login };