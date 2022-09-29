const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const database = require('../database');

const Response = database.define("response", {
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
    activityDate: {
        type: DataTypes.STRING
    },
    activity: {
        type: DataTypes.STRING
    },
    activityId: {
        type: DataTypes.INTEGER
    },
    event: {
        type: DataTypes.STRING
    },
    eventId: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});

module.exports = Response;