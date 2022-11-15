// Note: ensure the lambda function has premission to perform ec2 actions

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
const ec2 = new AWS.EC2();

exports.handler = (event) => {
    var params = {
        InstanceIds: ['i-08943179a6d01eaf7']
    };

    ec2.stopInstances(params, function(err, data){
        console.log('Stopped');
        if(err) {
            console.log(err, err.stack);
            return err;
        } else {
            console.log(data);
            return data;
        }
    });
};

