
var express = require("express");
var router  = express.Router();

var TrailsDB = require("../models/trails");
var Trails = require("../middleware/trails");

const { addTrail, showTrails, ahowAllTrails } = Trails;

router.get("/showAllTrails", function(req, res) {
  TrailsDB.find({}, function(err, allTrails) {
    if(err) {
      console.log(err);
    } else {
      res.render("showAll", {trails: allTrails})
    }
  });
});

router.post("/", function(req, res){
  var trail = req.body.trail;
  var trailhead = req.body.trailhead;
  var difficulty = req.body.difficulty;
  var distance = req.body.distance;
  var approxTime = req.body.approxTime;
  var elevationGain = req.body.elevationGain;
  var bestTime = req.body.bestTime;
  var pets = req.body.pets;
  var kidFriendly = req.body.kidFriendly;
  var description = req.body.description;
  var facilities = req.body.facilities;
  var fees = req.body.fees;
  var directions = req.body.directions;
  var resources = req.body.resources;
  var image = req.body.image;

  var newTrail = { trail: trail, trailhead: trailhead, difficulty: difficulty, distance: distance, approxTime: approxTime, elevationGain: elevationGain, bestTime: bestTime,
    pets: pets, kidFriendly: kidFriendly, facilities: facilities, fees: fees, description: description, directions: directions, resources: resources, images: image
    } 

  TrailsDB.create(newTrail, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      console.log(newlyCreated);
      res.redirect("/");
    }
  });
 
});

router.get("/addtrail", addTrail, function (req, res) {
  res.render("addtrail");
});

router.get("/showtrails", showTrails, function (req, res) {
  res.render("trails");
});

module.exports = router;