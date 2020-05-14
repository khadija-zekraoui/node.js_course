const assert = require("assert");
const MarioChar = require("../models/mariochar");

// Describe our tests
describe("Updating records", function () {
    var char;
    beforeEach((done) => {
        // char receive the id of the record created.
        char = new MarioChar({
            name: "Mario",
            weight: 60,
        });

        char.save().then(function () {
            done();
        });
    });

    // Create tests
    it("Updates one record from the database", function (done) {
        MarioChar.findOneAndUpdate({ name: "Mario" }, { name: "Luigi" }).then(() => {
            MarioChar.findById({ _id: char._id }).then((result) => {
                assert(result.name === "Luigi");
                done();
            });
        });
    });

    it("Increment the weight by 1", function (done) {
        //use update operator to increment the weight of all the records
        MarioChar.update({}, { $inc: { weight: 1 } }).then(() => {
            MarioChar.findById({ _id: char._id }).then((result) => {
                assert(result.weight === char.weight + 1);
                done();
            });
        });
    });
});
