//This file is solely for graphQLType declaration

import { Field, ObjectType } from "type-graphql";
import { ID } from "type-graphql/dist/scalars";

@ObjectType("Student")
export class StudentType{

    @Field(() => ID)
    id!: string;

    @Field()
    email!: string;

    @Field()
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





