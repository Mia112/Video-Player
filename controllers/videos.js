const express = require('express');
const router = express.Router();
const db = require('../models');

//ROUTE TO GET A SINGLE VIDEO FROM THE DATABASE
router.get('/Video', function(req, res) {
	db.Video.find({})
		.then(dbVideos => res.json(dbVideos))
		.catch(err => res.json(err));
});

router.post('/', (req, res) => {
	db.Video.create(req.body)
		.then(dbVideos => res.json(dbVideos))
		.catch(err => res.json(err));
});

router.delete('/:id', function(req, res) {
	db.Video.findByIdAndDelete(req.params.id)
		.then(dbVideo => res.json(dbVideo))
		.catch(err => res.json(err));
});

module.exports = router;
