const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    const data = s3.listBuckets().promise();

    return data;
};
