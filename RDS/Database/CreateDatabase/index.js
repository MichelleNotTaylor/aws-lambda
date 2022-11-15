const mysql = require('mysql');

// Note: ensure inbound access RDS server is setup.
// Go to: Your Amazon RDS Database > Connectivity & Security > Click on the VPC security group > click the security group id again >
// Select the 'Actions' dropdown, select 'Edit inbound rules' > Change 'Type' to 'All TCP', and add '0.0.0.0/0' as a Source.
const con = mysql.createConnection({
    host : '${rds.database.endpoint}',
    user : 'admin',
    password : 'adminpassword',
    port: 3306
});

exports.handler = (event) => {
    con.query("CREATE DATABASE myNewDatabase", function(error, result) {
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
