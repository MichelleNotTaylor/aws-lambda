const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    const data = await s3.listObjectsV2({
        Bucket: 'bucket-of-michelle'
    }).promise();

    console.log(data);
    return data;
};
