const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create geolocation Schema, structure from GeoJSON
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point",
    },
    coordinates: {
        type: [Number],
        index: "2dsphere",
    },
});
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
    geometry: GeoSchema,
});

const Babysitter = mongoose.model("babysitter", babysitterSchema);

module.exports = Babysitter;
