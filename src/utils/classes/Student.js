import { StudentModel} from '../../models/studentModel.js';

class Student{

    async getAllStudents(){
       try {
        const allStudents = await StudentModel.findAll();
        return allStudents;
       } catch (error) {
        return error;
       }
    }

    async getStudentById(Id){
        try {
            const student = await StudentModel.findOne({
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
        let {name, studentID, level, department, faculty} = args;
        try {
            studentID = studentID.toLowerCase();
            faculty = faculty.toLowerCase();
            department = department.toLowerCase();
            const newStudent  = StudentModel.build({name, studentID, level, department, faculty});
            await newStudent.save();
            return newStudent;
        } catch(error){
            return error;
        }
    }

}


export const student = new Student();

