//The fs module provides an API for interacting with the file system.
//Common use for the File System module: read, create, update,delete,rename files
//There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it

/**
 * All fs module's methods are asynchronous by default, but they can also work
 * synchronously by appending Sync.
 *
 * using asynchronous methods avoid blooking the programe while it is interacting
 * with the file system
 */
var fs = require("fs");

//The fs.readFileSync() method is used to read files on your computer.
// this is a synchronous method which is a blocking code
/**
 * when we are reading a file we're dealing with binary data which is just
 * zeros and ones, character encoding is going to determine what are
 * all those zeros and ones mean and convert them into the letters
 * that we understand
 */
var readMe = fs.readFileSync("readMe.txt", "utf8");
console.log("readMe", readMe);

//The easiest way to write to files in Node.js is to use the fs.writeFile() API.
//By default, this API will replace the contents of the file if it does already exist.
//You can modify the default by specifying a flag
//we write the readMe content to another file
fs.writeFileSync("writeMe.txt", readMe);
