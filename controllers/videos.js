const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function(req, res) {
	const userId = '5e1e6c078bd03303a274ba33';
	db.Video.find({ userId })
		.then(dbVideos => res.json(dbVideos))
		.catch(err => res.json(err));
});

router.post('/', (req, res) => {
	const userId = '5e1e6c078bd03303a274ba33';
	const newVideo = { userId, ...req.body };
	db.Video.create(newVideo)
		.then(dbVideos => res.json(dbVideos))
		.catch(err => res.json(err));
});

router.delete('/:id', function(req, res) {
	const userId = '5e1e6c078bd03303a274ba33';
	db.Video.findByIdAndDelete(req.params.id)
		.then(dbVideo => res.json(dbVideo))
		.catch(err => res.json(err));
});

module.exports = router;
