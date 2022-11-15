// Note: Be sure to give the lambda permissions to invoke the target lambda
const AWS = require('aws-sdk');
const lambda = new AWS.Lambda({region: 'us-east-1'});

exports.handler = async (event) => {
    var data = lambda.invoke({
        FunctionName: 'TestLambda',
        Payload: JSON.stringify(event)
    }).promise();

    return data;
};
