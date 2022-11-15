const mysql = require('mysql');

const con = mysql.createConnection({
    host : '{rds.database.endpoint}',
    user : 'admin',
    password : 'adminpassword',
    port: 3306,
    database : 'myLambda'
});

exports.handler = (event) => {
    con.query("UPDATE lambda1 SET name = 'Cynthia' WHERE name = 'Michelle'", function(error, result) {
        if(error) {
            con.destroy();
            return error;
        } else {
            console.log(result);
            con.end();
            return result;
        }
    })
};
