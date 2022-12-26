const studentModel = require('../models/studentModel');

class Student {

    async getAllStudents(){
       try {
        const allStudents = await studentModel.findAll();
        return allStudents;
       } catch (error) {
        return error;
       }
    }

    async getStudentById(Id){
        try {
            const student = await studentModel.findOne({
                where: {
                    studentID: Id
                }
        });
        return student;
        } catch (error) {
            return error;
        }
    }

    async addStudent(args){
        const {name, studentID, level, department, faculty} = args;
        try {
            const newStudent  = studentModel.build({name, studentID, level, department, faculty});
            await newStudent.save();
            return newStudent;
        } catch(error){
            return error;
        }
    }

}


const student = new Student();

module.exports = {
    student
}