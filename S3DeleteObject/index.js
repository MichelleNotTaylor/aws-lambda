const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {

    var params = {
        Bucket: 'bucket-of-michelle',
        Key: 'test.txt'
    }

    const data = await s3.deleteObject(params).promise();

    return data;
};
