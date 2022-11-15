const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
const ec2 = new AWS.EC2();

exports.handler = (event) => {
    var params = {
        InstanceIds: ['i-08943179a6d01eaf7']
    };

    ec2.startInstances(params, function(err, data){
        console.log('Started');
        if(err) {
            console.log(err, err.stack);
            return err;
        } else {
            console.log(data);
            return data;
        }
    });
};
