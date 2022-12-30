import {GraphQLObjectType,GraphQLSchema} from "graphql";

import {getAllStudents,getStudentById} from '../utils/queries/studentQueries.js';
import {getCourseById} from '../utils/queries/courseQueries.js'
import {addStudent} from '../utils/mutations/studentMutations.js';
import {addCourses} from '../utils/mutations/courseMutations.js';


const RootQuery = new GraphQLObjectType({
        name: "RootQuery",
        fields: {
                //#region Course Queries
                getCourseById,
                //#endregion
                
                //#region  Student Queries
                getAllStudents,
                getStudentById
                //#endregion
        },
});


const Mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
                //#region Student Mutations
                addStudent,

                //#endregion

                //#region Courses Mutation
                addCourses,

                //#endregion
        }
})


export const schema = new GraphQLSchema({
        query: RootQuery,
        mutation: Mutation
});
