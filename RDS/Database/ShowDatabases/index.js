const mysql = require('mysql');

const con = mysql.createConnection({
    host : '{rds.database.endpoint}',
    user : 'admin',
    password : 'adminpassword',
    port: 3306
});

exports.handler = (event) => {
    con.query("SHOW DATABASES", function(error, result) {
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
