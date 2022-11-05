const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    var params = {
        Bucket: 'bucket-of-michelle',
        Key: 'test.txt',
        Body: 'This is some text'
    };

    const data = await s3.putObject(params).promise();

    return data;
};
