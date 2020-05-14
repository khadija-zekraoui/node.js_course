/**
 * Routing determine the way in which an application responds to a
 * client request to a particular endpoint.
 *
 * Based on the URL which is accessed, a different functionality
 * on the webserver will be invoked, and accordingly, the response
 * will be sent to the client. This is the concept of routing.
 */
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

/**
 * Each route can have one or more handler (callback) functions, which are
 * executed when the route is matched.
 */
/**
 * This is the default route which is chosen when one browses to the route
 * of the application – http://localhost:3000.
 */
app.get("/", function (req, res) {
    res.render("firstIndex");
});

/**
 * the parameteres we will be using in the handler function is the 'res'
 * parameter, which can be used to send information back to the client
 * and 'req' parameter has information about the request being made.
 * Sometimes additional parameters could be sent as part of the
 * request being made.
 */
app.get("/contact", function (req, res) {
    res.render("firstContact", { name: req.query.name, dept: req.query.dept });
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
