const mysql = require('mysql');

const con = mysql.createConnection({
    host : '{rds.database.endpoint}',
    user : 'admin',
    password : 'adminpassword',
    port: 3306,
    database : 'myLambda'
});

exports.handler = (event) => {
    con.query("CREATE TABLE lambda1 (name VARCHAR(225))", function(error, result) {
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
