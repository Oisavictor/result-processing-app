//This file is solely for graphQLType declaration

import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";


export const StudentType = new GraphQLObjectType({
    name: "Student",
    fields: () => ({
        name: { type: GraphQLString},
        studentID: { type: GraphQLString },
        level: { type: GraphQLString },
        faculty: { type: GraphQLString },
        department: { type: GraphQLString },
        listOfCourses: {
                type: new GraphQLList(CourseType),
                resolve(parent, args) {
                            
                }
        }
    })
});


export const CourseType = new GraphQLObjectType({
    name: "Course",
    fields: () => ({
        id: { type: GraphQLString },
        courseTitle: { type: GraphQLString },
        semester: { type: GraphQLString },
        session: { type: GraphQLString },
        students: {
                type : new GraphQLList(StudentType),
                resolve(parent, args){

                }
                            
        }
    }),
});