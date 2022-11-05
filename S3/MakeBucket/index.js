const AWS = require('aws-sdk');
const s3 = new AWS.S3({});

exports.handler = async (event) => {

    var params = {
        Bucket: "examplebucket12123123",
        CreateBucketConfiguration: {
            LocationConstraint: "us-east-2"
        },
        ACL: "private"
    };

    const data = s3.createBucket(params).promise();

    return data;
};
