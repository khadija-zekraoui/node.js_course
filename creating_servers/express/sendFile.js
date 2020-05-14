var express = require("express");

var app = express();
// we don't  need to specify the Content-type us Express identify it for us
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/homePage.html");
});

app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/profile/:id", function (req, res) {
  res.send(`You requested to see a profile with the id of ${req.params.id}`);
});
app.listen(3000);
