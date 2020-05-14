var express = require("express");
var app = express();

/**
 * Template engine helps us to create an HTML template with minimal
 * code. Also, it can inject data into HTML template at client
 * side and produce the final HTML.
 */

//Tell express that we want to use ejs us a template engine
app.set("view engine", "ejs");

// static is a middleware to serve up static files
// assets is the folder where the files statics are saved
// "/assets" is the path that the  client use to access to static files
app.use("/assets", express.static("assets"));

// we don't  need to specify the Content-type us Express identify it for us
// by default when we request a view or template it's going to look in the views folder
app.get("/", function (req, res) {
    //The render function is used to render a web page.
    //we are rendering the template (index.ejs) which was created earlier.
    res.render("firstIndex");
});

app.get("/contact", function (req, res) {
    res.render("firstContact", { name: req.query.name, dept: req.query.dept });
});

app.get("/profile/:name", function (req, res) {
    /**
     * we don't need to specify the path of the file because by
     * default it'll look for it in the views folder
     */
    var data = {
        age: 22,
        job: "developer",
        hobbies: ["eating", "dancing", "running"],
    };
    res.render("profile", { person: req.params.name, data: data });
});
app.listen(3000);
