//we are using the require function to include the "express module."
const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Set up default mongoose connection
var mongoDB = "mongodb://127.0.0.1/babysittergo";
mongoose.connect(mongoDB, { useNewUrlParser: true });
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//set up express app
const app = express();

//set body-parser as a middelware
app.use(bodyParser.json());

//say to the express server to use these routes.
app.use("/api", routes);
//listen for requests

//error handling middleware
app.use(function (err, req, res, next) {
    //console.log(err);
    res.status(422).send({ error: err.message });
});

app.listen(process.env.port || 4000, () => {
    console.log("Server listening for requests");
});
