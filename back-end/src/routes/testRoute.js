
import getDbConnection from '../db'; //import db and save it to a var 

 let db = getDbConnection;

export const testRoute = {
    path: '/api/test',
    method: 'get',
    handler: (req, res) => {
        
        // clause to query the db 
        let sql = "SELECT * FROM Customer WHERE Name LIKE ='Evans%";

         db.query(sql, (err,result)=>{
           if(err) {
           console.log(err)
           }; 
        res.send(result)
        console.log(result)
        }); 
        
        

    }     
};


