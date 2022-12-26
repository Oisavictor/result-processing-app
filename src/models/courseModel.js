const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Course = sequelize.define('Course', {
    courseID: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    courseTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    semester: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    session: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

module.exports = Course;