const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create a babysitter Schema and model
const babysitterSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"],
    },
    stars: {
        type: Number,
    },
    available: {
        type: Boolean,
        default: false,
    },

    //add in geo location
});

const Babysitter = mongoose.model("babysitter", babysitterSchema);

module.exports = Babysitter;
