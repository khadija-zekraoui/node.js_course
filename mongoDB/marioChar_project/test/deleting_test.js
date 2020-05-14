const assert = require("assert");
const MarioChar = require("../models/mariochar");

// Describe our tests
describe("Deleting records", function () {
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
    it("Deletes one record from the database", function (done) {
        MarioChar.findOneAndRemove({ name: "Mario" }).then(() => {
            MarioChar.findOne({ name: "Mario" }).then((result) => {
                assert(result === null);
                done();
            });
        });
    });
});
