const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    var params = {
        Bucket: 'bucket-of-michelle',
        Key: 'test.txt'
    };

    const data = await s3.getObject(params).promise();

    var buf = data.Body;

    var buildParams = {
        Bucket: 'bucket-of-michelle',
        Key: 'testTwo.txt',
        Body: buf
    }

    const newData = await s3.putObject(buildParams).promise();

    return newData;
};
