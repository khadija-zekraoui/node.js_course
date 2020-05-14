var http = require("http");
var fs = require("fs");

// createReadStream inherits from the EventEmitter, we can create a listener
var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");

/**
 * we listen to the event data which allows us to know when we receive any
 * kind of data or a chunk of data from the stream and we fire a function to
 * do something when this data is recieved.
 *
 * 1- we read the file.
 * 2- it's fills up the buffer until it's full and we have a chunk of data.
 * 3- the buffer passes that chunk.
 * 4- every time it passes a chunk of data on, we recognized it because we're
 *    listening for the 'data' event which fire the function.
 */

myReadStream.on("data", function (chunk) {
  console.log(
    "************************new chunk received************************:\n",
    chunk
  );
});
