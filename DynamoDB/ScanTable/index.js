const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = async (event) => {
    var scanParams = {
        TableName: 'CourseTableOne'
    };

    const data = await ddb.scan(scanParams).promise();

    const response = {
        statusCode: 200,
        body: data
    }

    return response;
};
