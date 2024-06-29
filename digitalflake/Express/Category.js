const { INTEGER , STRING, ENUM} = require('sequelize');
const { Sequelize } = require('./Database');

const Category = Sequelize.define( 
    'category',
    {
        ID : {
            type : INTEGER,
            autoIncrement  :true,
        },
        NAME : {
            type : STRING ,
        },
        DESCRIPTION : {
            type : STRING ,
        },
        STATUS : {
            type : ENUM,
        }
    } , { timestamps:false, freezeTableName: true }
);

module.exports = { Category };