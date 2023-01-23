import "reflect-metadata";
import express, { json } from 'express';
import { expressjwt } from 'express-jwt';
import * as dotenv from 'dotenv';
dotenv.config();

import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';
import { StudentResolver } from './utils/resolver/studentResolver';

async function Main(){
  const app = express();

  app.use(json());

  const schema = await buildSchema({
    resolvers : [StudentResolver]
  })

  app.use('/recompile', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));

  const port = process.env.PORT;

  app.listen(port,()=>{
    console.log(`Server is live on port: ${port}`);
  })
}

Main();