const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../middleware/auth');

//Get all videos
router.get('/', auth, (req, res) => {
	db.Video.find({ user: req.user })
		.then(dbVideos => res.json(dbVideos))
		.catch(err => res.json(err));
});

//Create video
router.post('/', auth, (req, res) => {
	const newVideo = { user: req.user, ...req.body };
	db.Video.create(newVideo)
		.then(dbVideos => res.json(dbVideos))
		.catch(err => res.json(err));
});
router.delete('/:id', auth, (req, res) => {
	// Make sure user delete only their own video
	if (dbVideos.user.toString() !== req.user)
		return res.status(401).json({ msg: 'Not authorized' });
	db.Video.findByIdAndDelete(req.params.id)
		.then(dbVideo => res.json(dbVideo))
		.catch(err => res.json(err));
});

module.exports = router;
