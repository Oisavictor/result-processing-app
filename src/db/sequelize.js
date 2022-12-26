const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('recompileDB', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    port: '5000'
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

module.exports = sequelize