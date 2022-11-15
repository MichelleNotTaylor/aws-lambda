const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});

exports.handler = async (event) => {

    var updateParams = {
        TableName: 'CourseTableOne',
        Key: { 'primary_key': 'newUser' },
        UpdateExpression: 'set favorite_color = :v',
        ExpressionAttributeValues: { ":v": "blue" }
    };

    const update = await ddb.update(updateParams).promise();
    return update;
};
