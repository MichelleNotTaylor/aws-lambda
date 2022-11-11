const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = async (event) => {

    var statusCode;
    var responseBody;

    const now = new Date().toString();

    var params = {
        TableName: 'CourseTableOne',
        Item: {
            'primary_key': now,
            'favorite_color': 'Blue'
        }
    };

    try {
        const putData = await ddb.put(params).promise();
        console.log(putData);
        statusCode = 200;
        responseBody = "Entry saved in table"
    } catch(err) {
        console.log(err);
        statusCode = 200;
        responseBody = "Entry was not saved in the table: " + err
    }

    const response = {
        statusCode: statusCode,
        responseBody: responseBody
    };

    return response;

};
