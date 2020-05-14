const assert = require("assert");
const MarioChar = require("../models/mariochar");

// Describe our tests
describe("Saving records", function () {
    // Create tests

    //it describe one single test
    it("Saves a record to the database", function (done) {
        var char = new MarioChar({
            name: "Mario",
        });

        //we use then because save is an asynchronous method
        // first we wait for the app to save the new record
        char.save().then(function () {
            //check o assert if it has successfully been saved
            //isNew --> ture when we've created this record locally but no yet saved in the mongoDB
            //      --> false when we've already saved the recored in the mongoDB
            assert(!char.isNew);

            //mocha doesn't automatically know when the test is completed.
            //so we explicity set it
            done();
        });
    });
});
//npm install mocha
