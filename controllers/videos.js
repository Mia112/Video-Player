const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../middleware/auth');

//Get all videos
router.get('/', auth, (req, res) => {
	let userId = req.userId;
	db.Video.find({ userId })
		.then(dbVideos => res.json(dbVideos))
		.catch(err => res.json(err));
});

//Create video
router.post('/', auth, (req, res) => {
	let userId = req.userId;
	const newVideo = { userId, ...req.body };
	db.Video.create(newVideo)
		.then(dbVideos => res.json(dbVideos))
		.catch(err => res.json(err));
});

router.delete('/:id', auth, (req, res) => {
	let userId = req.userId;
	// Make sure user delete only their own video
	if (dbVideos.userId.toString() !== userId)
		return res.status(401).json({ msg: 'Not authorized' });
	db.Video.findById({ _id: req.params.id })
		.then(dbVideo => res.json(dbVideo))
		.catch(err => res.status(422).json(err));
});

module.exports = router;
