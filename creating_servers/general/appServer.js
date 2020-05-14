/**
 * http is one of the built-in modules that comes with Node.js.
 * It provides low-level features for making requests as a
 * client, as well as running a server to accept requests
 * and return responses.
 */
const http = require("http");

//The createServer method allows Node.js to act as a web server and receive requests
//req, res map to http.IncomingMessage and http.ServerResponse respectively.
var server = http.createServer(function (req, res) {
  console.log("request was made: ", req.url);
  res.writeHead(200, { "Content-type": "application/json" });
  var shop = {
    name: "healthy live",
    type: "fruit shop",
    list: ["banana", "kiwi", "apple"],
  };
  //res.write() writes the body to the response before ending the response
  // it's expect string or buffer like a argument that's why we serialize the object as a string of a JSON object format
  res.write(JSON.stringify(shop));
});

//we tell the server to listen on the defined PORT
server.listen(3000, "127.0.0.1");
console.log("server is listening");
