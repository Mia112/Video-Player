const express = require('express');
const router = express.Router();
const db = require('../models');

//ROUTE TO GET A SINGLE VIDEO FROM THE DATABASE
router.get('/Video', function(req, res) {
	db.Video.find({})
		.then(dbVideos => res.json(dbVideos))
		.catch(err => res.status(502).json(err));
});

router.post('/', function(req, res) {
	db.Video.create(req.body)
		.then(dbVideos => res.json(dbVideos))
		.catch(err => res.status(502).json(err));
});

router.delete('/:id', function(req, res) {
	db.Video.findByIdAndDelete(req.params.id)
		.then(dbVideo => res.json(dbVideo))
		.catch(err => res.status(502).json(err));
});

module.exports = router;
