const http = require("http");
var fs = require("fs");
var server = http.createServer(function (req, res) {
  console.log("request was made: ", req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    fs.createReadStream(__dirname + "/homePage.html").pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-type": "text/html" });
    fs.createReadStream(__dirname + "/contact.html").pipe(res);
  } else if (req.url === "/shops") {
    var shop1 = {
      name: "healthy live",
      type: "fruit shop",
      list: ["banana", "kiwi", "apple"],
    };
    var shop2 = {
      name: "healthy live",
      type: "fruit shop",
      list: ["banana", "kiwi", "apple"],
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ shop1, shop2 }));
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    fs.createReadStream(__dirname + "/404.html").pipe(res);
  }
});

server.listen(3000, "127.0.0.1");
console.log("server is listening");
