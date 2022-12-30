import {GraphQLNonNull, GraphQLString} from 'graphql'
import {CourseType} from '../graphqlTypes.js'




const CourseMutationFields = {
    addCourses: {
        type: CourseType,
        args: {
                courseID: {type: new GraphQLNonNull(GraphQLString)},
                courseTitle: {type: new GraphQLNonNull(GraphQLString)},
                semester: {type: new GraphQLNonNull(GraphQLString)},
                session: {type: new GraphQLNonNull(GraphQLString)}
            },
        resolve(parent, args){

        }
    },






}

export const addCourses = CourseMutationFields.addCourses;