const { Sequelize } = require('sequelize');

const database = new Sequelize('test-db', 'testusermo', '1Qazxdr5', {
    dialect: 'sqlite',
    host: './server/dev.sqlite'
});

module.exports = database;