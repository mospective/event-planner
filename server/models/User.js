const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const database = require('../database');

const User = database.define("user", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = User;