import {client} from '../../db/prisma' 
import { AddStudent } from '../resolver/studentResolver';

class Student{

    async getAllStudents(){
       try {
        const allStudents = await client.students.findMany();
        return allStudents;
       } catch (error) {
        return error;
       }
    }

    async getStudentById(Id: string){
        try {
            const student = await client.students.findFirst({
                where: {
                    id: Id
                }
        });
        return student;
        } catch (error) {
            return error;
        }
    }

    async addStudent(args: AddStudent){
        try {
            const newStudent  = client.students.create({
                data:{
                    firstName: args.firstName,
                    middleName: args.middleName,
                    lastName: args.lastName,
                    email: args.email,
                    matricNumber: args.matricNumber,
                    faculty: args.faculty,
                }
            })
            return newStudent;
        } catch(error){
            return error;
        }
    }

}


export const student = new Student();

