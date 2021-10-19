import mysql from 'mysql';



const getDbConnection =  mysql.createConnection({
        host     : 'localhost',
        user     : process.env.USER,
        password : process.env.PASSWORD,
        database : process.env.DATABASE,
        port:3306
      });


export default getDbConnection