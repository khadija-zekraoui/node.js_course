/**
 * All fs module's methods are asynchronous by default, but they can also work
 * synchronously by appending Sync.
 *
 * using asynchronous methods avoid blooking the programe while it is interacting
 * with the file system
 */
var fs = require("fs");

/**
 * because is as asynchronous function we need a callback function
 * to fire(invock) when the process is complete
 */
//we are not blocking the code by using asynchronous method
fs.readFile("readMe.txt", "utf8", function (err, data) {
  console.log(data);
  fs.writeFile("writeMe.txt", data, function () {
    if (err) throw err;
    console.log("File is saved!");
  });
});

console.log(
  "I don't waiting  the readFile method to finish reading the file!! :)"
);

//create a file to delete
fs.writeFile("fileToDelete.txt", "Hello world", (err) => {
  if (err) {
    console.log("Error:", err);
  }
  fs.unlink("fileToDelete.txt", (err) => {
    if (err) {
      console.log("Error:", err);
    }
  });
});

//fs.writeFileSync("writeMe.txt", readMe);
