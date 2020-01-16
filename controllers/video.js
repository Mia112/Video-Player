const express = require("express");
const router = express.Router();
const db = require('../models');

  router.get("/save", function(req, res) {
    db.Video.find({})
      .then(allVideos => {
        console.log(allVideos);
        res.json({
          message: "Requested all Drinks",
          error: false,
          data: allVideos
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          message: err.message,
          error: true
        });
      });
router.post("/new", function(req, res) {
  console.log("You hit the api new route");
  console.log(req.body);
  db.Video.create(req.body)
    .then(newVideo => {
      console.log("New Video: ", newVideo);
      res.json({
        message: "Successfully created",
        error: false,
        data: newVideo
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        message: err.message,
        error: true
      });
    });
});


  router.delete("/save/video/:id", function(req, res) {
    db.Video.deleteOne({ _id: req.params.id })
      .then(response => {
        // console.log(response);
        res.json({
          message: `Deleted video with id: ${req.params.id}`,
          error: false,
          data: response
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          message: err.message,
          error: true
        });
      });
  });
});
  module.exports = router;