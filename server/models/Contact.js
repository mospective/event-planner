const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const database = require('../database');

const Contact = database.define("contact", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING
    },
    position: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phone:  {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = Contact;