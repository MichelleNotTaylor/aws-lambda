const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    var params = {
        Bucket: 'bucket-of-michelle',
        Delete: {
            Objects: [
                {
                    Key: 'IMG_9392.jpg'
                }
            ]
        }
    }

    const data = await s3.deleteObjects(params).promise();

    return data;
};
