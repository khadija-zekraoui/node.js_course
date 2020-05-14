/**
 * mongoose allow us to connect with the MongoDB
 *
 * it offers us  different methods to  communicate with our
 * database.
 */
const mongoose = require("mongoose");
//ES6 Promises
mongoose.Promise = global.Promise;
// Connect to mongodb
//we have to connect explicitly to the mongoDB
//connect to the db before tests run; tell  mocha to wait until the connection has been made

before((done) => {
    mongoose.connect("mongodb://localhost/test");

    /**
     * our application doesn't know when the connection with
     * mongoDB ies complete so we have to listen when this
     * event occurs (when connection is successfully made)
     */

    // listen to the event open once the connection is open fire this function
    // and also listen if there's an error; event 'error'
    mongoose.connection
        .once("open", function () {
            console.log("Connection has been made, now make fireworks...");
            done();
        })
        .on("error", function (error) {
            console.log("Connection error:", error);
        });
});

// delete/ drop the content of the collection before every single test
// we want to do this before every single test
beforeEach((done) => {
    //Drop the collection
    //mongoDB pluralize the name of collections
    mongoose.connection.collections.mariochars.drop(() => {
        done();
    });
});
