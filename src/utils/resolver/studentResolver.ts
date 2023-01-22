import {  StudentType } from './../graphqlTypes';
import {student} from "../classes/Student"
import {Field, Resolver, Query, Arg, InputType, Mutation } from 'type-graphql';


@InputType()
export class AddStudent implements Partial<StudentType>{
    @Field()
    email!: string;

    @Field({ nullable: false })
    firstName!: string;

    @Field({nullable: true})
    middleName?: string;

    @Field()
    lastName!: string;

    @Field()
    admissionDate!: string;

    @Field()
    matricNumber!: string
    
    @Field()
    faculty!: string;

    @Field()
    department!: string;

    @Field()
    level!: string;

}


@Resolver()
export class StudentResolver {
    
    //#region Student Queries
    @Query(()=> [StudentType])
    async getAllStudents(){
        student.getAllStudents();    
    }

    @Query(()=> StudentType)
    async getStudentById(@Arg("id") id: string){
        student.getStudentById(id)
    }


    //#endregion

    //#region Student Mutations
    @Mutation(()=> StudentType)
    addStudent(@Arg("data") newStudentData: AddStudent){
        student.addStudent(newStudentData)
    }
}