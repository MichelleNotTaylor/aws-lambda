const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    var params = {
        Bucket: 'bucket-of-michelle',
        Key: 'test.txt'
    }

    const data = await s3.getObject(params).promise();

    const response = {
        statusCode: 200,
        body: JSON.stringify(data)
    }

    var buf = data.Body;
    console.log(buf.toString());

    return buf.toString();
};
