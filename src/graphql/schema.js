const {
        GraphQLObjectType,
        GraphQLString,
        GraphQLSchema,
        GraphQLList,
        GraphQLNonNull,
} = require("graphql");

const {student} = require('../utils/Student');



const CourseType = new GraphQLObjectType({
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

const StudentType = new GraphQLObjectType({
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
                                console.log(args.courseTitle);
                        },
                }
        })
});

const MainQuery = new GraphQLObjectType({
        name: "MainQuery",
        fields: {
                //#region Course Queries
                courses: {
                        type: CourseType,
                        args: { courseID: { type: GraphQLString } },
                        resolve(parent, args) {
                               
                        },
                },
                //#endregion

                //#region  Student Queries
                getStudentById: {
                        type: StudentType,
                        args: { studentID: { type: GraphQLString } },
                        resolve(args) {
                                return student.getStudentById(args.studentID)
                        }
                },
                getAllStudents:{
                        type: new GraphQLList(StudentType),
                        resolve(){
                                return student.getAllStudents();
                        }
                }
                //#endregion
        },
});


const Mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
                addStudent: {
                        type: StudentType,
                        args:{
                                name: {type: new GraphQLNonNull(GraphQLString)},
                                studentID: {type: new GraphQLNonNull(GraphQLString)},
                                level: {type: new GraphQLNonNull(GraphQLString)},
                                faculty: {type: new GraphQLNonNull(GraphQLString)},
                                department: {type: new GraphQLNonNull(GraphQLString)},
                        },
                        resolve(args){                                
                               return student.addStudent(args)
                        }
                },
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
                }
        }
})


module.exports = new GraphQLSchema({
        query: MainQuery,
        mutation: Mutation
});
