import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('recompileDB', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT
  });
const SqlAuth = async ()=>{
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully.');
        } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

SqlAuth();

