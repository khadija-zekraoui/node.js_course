var http = require("http");
var fs = require("fs");

// we can use pipe to send data to a client
//res es a writable stream that we can write data to it
var server = http.createServer(function (req, res) {
  console.log("request was made: ", req.url);
  res.writeHead(200, { "Content-type": "text/plain" });
  var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
  //it ends the response and sends the data down the write stream to the (claim)client
  myReadStream.pipe(res);
});

//we tell the server to listen on the defined PORT
server.listen(3000, "127.0.0.1");
console.log("server is listening");
