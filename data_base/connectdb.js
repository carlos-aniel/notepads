const Sequelize = require('sequelize');
const connect = new Sequelize(
    'notepads',
    'carloskauan',
    '15971597ck',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = connect;