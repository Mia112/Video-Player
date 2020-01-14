const express = require("express");
const router = express.Router();

router.post("/saved", function(req, res) {
    db.Video.create(req.body)
      .then(newVideo => {
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

router.get("/saved", function(req, res) {
    db.Video.find({})
      .then(allVideos => {
        
        res.json({
          message: "Requested all Videos",
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
  });