const AWS = require('aws-sdk');
const fs = require('fs');

const kinesis = new AWS.Kinesis({
  region: 'ap-south-1' // Replace with your desired region
});


// Read the video stream data into a buffer:
const streamData = fs.readFileSync('/path/to/video.mp4');
const streamBuffer = Buffer.from(streamData);


//Use the putRecord method of the Kinesis client to push the data into the stream:
const params = {
  Data: streamBuffer,
  PartitionKey: 'partition-key',
  StreamName: 'my-stream'
};

kinesis.putRecord(params, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
