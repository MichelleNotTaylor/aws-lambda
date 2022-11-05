const https = require('https');
const mysql = require('mysql');
const crypto = require('crypto');
const fs = require('fs');

exports.handler = async (event) => {
    fs.writeFile('/tmp/test.txt', 'Hello, world!', function(err){
        if(err) console.log('Write error', err);
    });

    const data = await new Promise ((resolve, reject) => {
        fs.readFile('/tmp/test.txt', 'utf8', function(err, data){
            if(err){
                console.log(err);
            }
            console.log(data);
        });
    });

    return 0;
};
