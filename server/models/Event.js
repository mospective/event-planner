const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const database = require('../database');

const Event = database.define("event", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    eventName: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = Event;