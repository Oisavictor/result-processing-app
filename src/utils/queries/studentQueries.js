import { GraphQLString, GraphQLList } from "graphql";


import { StudentType } from '../graphqlTypes.js';
import { student } from '../classes/Student.js';


const StudentQueryFields = {
    getStudentById: {
        type: StudentType,
        args: { studentID: { type: GraphQLString } },
        resolve(parent,args) {
            return student.getStudentById(args.studentID)
        }
    },
    getAllStudents:{
        type: new GraphQLList(StudentType),
        resolve(){
                return student.getAllStudents();
        }
    }

}

export const getStudentById = StudentQueryFields.getStudentById;
export const getAllStudents = StudentQueryFields.getAllStudents;