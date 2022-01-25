const sequelize = require('sequelize');
const connection = new sequelize(
    'notepads',
    'carloskauan',
    '15971597ck',
    {
        host: 'localhost',
        dialect: 'mysql'
    });


module.exports = connection;