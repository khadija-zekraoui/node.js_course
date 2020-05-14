/**
 * Post is a request method which ask the server to accept/store data
 * which is enclosed in the body of the request
 * often used when submitting forms
 * In these kind of requests, the data doesn’t appear in the URL, it
 * is hidden in the request body.
 * To parse the data coming from POST requests, we have to install
 * the body-parser package.
 */
var express = require("express");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
/**
 * Node.js body parsing middleware.
 * Parse incoming request bodies in a middleware before your handlers,
 * available under the req.body property.
 */
var app = express();
app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));
app.get("/", function (req, res) {
    res.render("index");
});

app.get("/contact", function (req, res) {
    //Express passe the data of the query string into req.query
    console.log(req.query);
    res.render("contact", { qs: req.query });
});

// the body-parser middleware we'll be fired whenever this post request is made.
app.post("/contact", urlencodedParser, function (req, res) {
    //We can access to the data from req.body; body-parser passes this data for us
    console.log(req.body);
    res.render("contact-success", { data: req.body });
});

app.get("/profile/:name", function (req, res) {
    var data = {
        age: 22,
        job: "developer",
        hobbies: ["eating", "dancing", "running"],
    };
    res.render("profile", { person: req.params.name, data: data });
});
app.listen(3000);
