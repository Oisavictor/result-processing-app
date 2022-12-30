import { GraphQLNonNull, GraphQLString } from 'graphql';
import {student} from '../classes/Student.js';
import { StudentType } from '../graphqlTypes.js';


const StudentMutationFields = {
    addStudent:{
        type: StudentType,
        args:{
            name:{type: new GraphQLNonNull(GraphQLString)},
            studentID: {type: new GraphQLNonNull(GraphQLString)},
            level: {type: new GraphQLNonNull(GraphQLString)},
            department: {type: new GraphQLNonNull(GraphQLString)},
            faculty: {type: new GraphQLNonNull(GraphQLString)}
        },
        resolve(parent, args){
            return student.addStudent(args);
        }
    }


}

export const addStudent = StudentMutationFields.addStudent;