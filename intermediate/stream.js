var fs = require("fs");
var data = '';
const path = require('path');

// Create a readable stream
const filePath = path.join(__dirname, '../interview/questions.txt')
// console.log(filePath);
var readerStream = fs.createReadStream('../interview/questions.txt'); // for chunk size { highWaterMark: 16 }

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function (chunk) {
    console.log(chunk);
    data += chunk;
});

readerStream.on('end', () => {
    console.log("File Ended..............")
})
