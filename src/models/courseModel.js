import { DataTypes } from 'sequelize';
import { sequelize } from '../db/sequelize.js';

export const CourseModel = sequelize.define('Course', {
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