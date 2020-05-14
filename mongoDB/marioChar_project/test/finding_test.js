const assert = require("assert");
const MarioChar = require("../models/mariochar");

// Describe our tests
describe("Finding records", function () {
    var char;
    beforeEach((done) => {
        // char receive the id of the record created.
        char = new MarioChar({
            name: "Mario",
        });

        char.save().then(function () {
            done();
        });
    });

    // Create tests
    it("Finding one record from the database", function (done) {
        MarioChar.findOne({ name: "Mario" }).then((result) => {
            assert(result.name === "Mario");
            done();
        });
    });

    it("Finding one record by ID from the database", function (done) {
        MarioChar.findOne({ _id: char._id }).then((result) => {
            //._id is an object
            assert(result._id.toString() === char._id.toString());
            done();
        });
    });
});
