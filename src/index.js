const express = require('express');
require('dotenv').config();
const{ graphqlHTTP }= require('express-graphql');
require('./db/sequelize');
const schema = require('./graphql/schema')
const app = express();

app.use(express.json());


app.use('/recompile', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));

const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Server is live on port: ${port}`);
})