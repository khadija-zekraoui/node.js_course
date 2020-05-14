const fs = require("fs");
/**
 * To create a directory We require() the fs module and then
 * pass the path of the new directory as an argument
 * to the fs.mkdir() function
 * A callback function is also passed as an argument to function.
 * If no error occurs, the directory is successfully created.
 */

fs.mkdir("myDir", (err) => {
  if (err) console.log("Error:", err);

  fs.readFile("readMe.txt", "utf8", (err, data) => {
    if (err) console.log("Error:", err);
    fs.writeFile("./myDir/fileDir.txt", data, (err) => {
      if (err) console.log("Error:", err);
    });
  });
});

//create directory to remove
// we can not remove a directory which has content(files, other directories)
fs.mkdir("dirToRemove", (err) => {
  if (err) console.log("Error:", err);
  fs.rmdir("dirToRemove", (err) => {
    if (err) console.log("Error:", err);
  });
});
