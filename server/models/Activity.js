const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const database = require('../database');

const Activity = database.define("activity", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    activity: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    votes: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = Activity;