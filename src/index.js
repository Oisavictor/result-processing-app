import express, { json } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

import { graphqlHTTP } from 'express-graphql';

import * as sequelizeDB from './db/sequelize.js'
sequelizeDB.default;

import {schema} from './graphql/schema.js';

const app = express();

app.use(json());


app.use('/recompile', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));

const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is live on port: ${port}`);
})