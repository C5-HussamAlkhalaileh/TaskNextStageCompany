const mysql= require("mysql2");

const connection=mysql.createConnection({
    
host:"" ,
user:"",
password:"",
database:"",
});

connection.connect((err)=>{

    if(err){

        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
})

module.exports=connection