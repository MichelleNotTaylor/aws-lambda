const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = async (event) => {
    var queryParams = {
        TableName: 'CourseTableOne',
        Key: {
            'primary_key': 'Michelle'
        }
    };

    const data = await ddb.get(queryParams).promise();

    return data;

};