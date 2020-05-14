var http = require("http");
var fs = require("fs");

// createReadStream inherits from the EventEmitter, we can create a listener
var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");
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
  //every time we receive a chunk we write it in the writeMe.txt
  console.log("*******new chunk received*******:\n");

  myWriteStream.write(chunk);
});

/**
 * The difference between the traductional methods of; read-write files
 * and use streams and buffers is that we're splitting up this
 * file into chunks of data and read/write it more quickly
 * instead of r/w the whole file.
 * for exemple to write a file traditionally we have to wait until all data has
 * been loaded into memory and then write the file which can be a waste of time.
 **/
