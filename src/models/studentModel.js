import { DataTypes } from 'sequelize';
import {sequelize} from '../db/sequelize.js';

export const StudentModel = sequelize.define('Student',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    studentID:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    level:{
        type: DataTypes.STRING,
        allowNull: false
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    },
    faculty: {
        type: DataTypes.STRING,
        allowNull: false
    },
    listOfCourses: {
        type: DataTypes.ARRAY(DataTypes.JSON)
    }

});