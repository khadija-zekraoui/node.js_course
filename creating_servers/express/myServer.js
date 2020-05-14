//In our first line of code, we are using the require function to include the "express module."
const express = require("express");

//Before we can start using the express module, we need to make an object of it.
var app = express();
// we don't  need to specify the Content-type us Express identify it for us
/**
 * Here we are creating a callback function. This function will be called whenever
 * anybody browses/access to the root of our web application which is
 * http://localhost:3000 .
 */
app.get("/", function (req, res) {
    //The callback function will be used to send the string "this is the homepage" to the web page.
    res.send("this is the homepage");
});

/**
 * In the callback function, we are sending the string "this is the contact page" back to the client. The 'res'
 * parameter is used to send content back to the web page. This 'res' parameter is something that
 * is provided by the 'request' module to enable one to send content back to the web page.
 */
app.get("/contact", function (req, res) {
    res.send("this is the contact page");
});

app.get("/profile/:id", function (req, res) {
    res.send(`You requested to see a profile with the id of ${req.params.id}`);
});

//We are then using the listen to function to make our server application listen to client requests on port 3000.
//we can specify any available port over here.
app.listen(3000);
