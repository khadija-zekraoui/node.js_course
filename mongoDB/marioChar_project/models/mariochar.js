const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Schema and a Model
//create a schema - this is like a blueprint that help MongoDB to know what kind of data is going to expect
const MarioCharSchema = new Schema({
    name: String,
    weight: Number,
});

/**
 * create a model to be stored as a collection in MongoDB
 * this model is based on the todoSchema schema
 * 'marioChar' is the collection name
 */
const MarioChar = mongoose.model("mariochar", MarioCharSchema);

module.exports = MarioChar;
