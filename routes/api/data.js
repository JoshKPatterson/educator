const express = require("express");
const router = express.Router();
const config = require("config");
const auth = require("../../middleware/auth");

// User Model
const User = require("../../models/User");

// @route POST api/data
// @desc Updates Database With Activity Results
// @access Private
router.post("/", auth, (req, res) => {
  console.log(req.body)
  let {id, genre, score} = req.body;
  switch(genre){
    case "geography":
      User.findOneAndUpdate(
        {_id: id},
        {$inc : { "stats.sections.geography.activities_attempted" : 1}},
        (err, doc) => err ? console.log(err) : console.log(doc)
      )
      User.findOneAndUpdate(
        {_id: id},
        { $push : { "stats.sections.geography.average_grade" : score}},
        (err, doc) => err ? console.log(err) : console.log(doc)
      )
      break;
    case "math":
      User.findOneAndUpdate(
        {_id: id}, 
        {$inc : { "stats.sections.math.activities_attempted" : 1 }},
        (err, doc) => err ? console.log(err) : console.log(doc)
      )
      User.findOneAndUpdate(
        {_id: id},
        { $push : { "stats.sections.math.average_grade" : score}},
        (err, doc) => err ? console.log(err) : console.log(doc)
      )
      break;
    default:
      return null;
  }
  
}) 

module.exports = router;
