

var mongoose = require("mongoose");

//Schema Setup for AzHiking database
var trailsSchema = new mongoose.Schema({
    trail: String,
    trailhead: String,
    difficulty: String,
    distance: String,
    approxTime: String,
    elevationGain: String,
    bestTime: String,
    pets: String,
    kidFriendly: String,
    facilities: String,
    fees: String,
    description: String,
    directions: Sting,
    resources: String,
    images: Array
});

module.exports = mongoose.model("Trails", trailsSchema);
