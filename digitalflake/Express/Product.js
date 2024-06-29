
const { Sequelize } = require('./Database');
const { INTEGER, STRING, BLOB, ENUM } = require('sequelize');

const Product = Sequelize.define(
    'Products',
    {
        ID : {
            type: INTEGER(100),
            primaryKey: true,
            autoIncrement: true
        },
        Name : {
            type: STRING(100),
             
        },
        PackSize : {
            type: STRING(100),
            
        },
        Category : {
            type: STRING(100),
       
        },
        MRP : {
            type: INTEGER(100),
             
        },
        Image : {
            type: BLOB,
            
        },
        Status : {
            type: ENUM('active','inactive'),
            
        }
    } , { timestamps: false, freezeTableName: true }
);

module.exports = { Product };