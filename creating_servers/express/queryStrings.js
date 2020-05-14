/**
 * Example of queryString
 * sends data in the Get URL
 * http://127.0.0.1:3000/contact?dept=marketing&name=jana
 */
var express = require("express");
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

app.get("/profile/:name", function (req, res) {
    var data = {
        age: 22,
        job: "developer",
        hobbies: ["eating", "dancing", "running"],
    };
    res.render("profile", { person: req.params.name, data: data });
});
app.listen(3000);
