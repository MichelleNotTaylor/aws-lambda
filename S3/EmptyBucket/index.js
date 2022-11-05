const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    var listItemParams = {
        Bucket: 'bucket-of-michelle'
    }

    const data = await s3.listObjectsV2(listItemParams).promise();

    var keys = [];

    data.Contents.forEach(item => keys.push(item.Key));

    for(var i = 0; i < keys.length; i++) {
        var params = {
            Bucket: 'bucket-of-michelle',
            Key: keys[i]
        };

        await s3.deleteObject(params).promise();
    }

    return keys;
};
