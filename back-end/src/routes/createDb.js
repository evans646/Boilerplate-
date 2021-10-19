
import getDbConnection from '../db';



let db = getDbConnection;

export const createDb = {
    path: '/api/createdb',
    method: 'get',
    handler: (req, res) => {

        let sql = 'CREATE DATABASE DemoDb'

        db.query(sql, (err,result)=>{
            if(err) {
            console.log(err)
            } 
        res.send('Database created!')
        console.log(result)
        }); 

    }     
};


