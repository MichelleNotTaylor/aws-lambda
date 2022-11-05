const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {

    var params = {
        Bucket: 'demo-michelle-bucket'
    }

    const data = await s3.deleteBucket(params).promise();

    return data;
};
