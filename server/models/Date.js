const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const database = require('../database');

const Date = database.define("dates", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING
    },
    votes: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = Date;