/**
 * All things that the .pipe() method does is simply piping (passing or connecting)
 * the readable stream to the writable one. In this way, you can e.g. transfer
 * the data from one file to another with ease!
 *
 * we receive chunks from the readStream, but instead of manually listening
 * to for the date event and fire the function, the pipe just automatically
 * does that for us then it pipes it to the write stream.
 */

var http = require("http");
var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

// readStream -> writeStream
myReadStream.pipe(myWriteStream);

/** work exactlly the same as
 
myReadStream.on("data", function (chunk) {
  //every time we receive a chunk we write it in the writeMe.txt
  console.log("*******new chunk received*******:\n");

  myWriteStream.write(chunk);
});

*/
