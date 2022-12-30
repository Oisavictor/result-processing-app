import { GraphQLString } from "graphql";


import { CourseType } from '../graphqlTypes.js';


const CourseQueryFields = {
    getCourseById: {
        type: CourseType,
        args: { courseID: { type: GraphQLString } },
        resolve(parent, args) {
               
        }
    },


}


export const getCourseById = CourseQueryFields.getCourseById;