const db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.Video
      .find({})
      .sort({date: -1})
      .then(dbVideos => res.json(dbVideos))
      .catch(err => res.status(502).json(err))
  },

  create: function (req, res) {
    db.Video
      .create(req.body)
      .then(dbVideo => res.json(dbVideo))
      .catch(err => res.status(502).json(err))
  },

  delete: function (req, res) {
    db.Video
      .findByIdAndDelete(req.params.id)
      .then(dbVideo => res.json(dbVideo))
      .catch(err => res.status(502).json(err))
  }
};