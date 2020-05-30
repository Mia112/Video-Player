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

//Delete video
router.delete('/Playlist/:id', auth, (req, res) => {
	let userId = req.userId;
	db.Video.deleteOne({ _id: req.params.id })
		.then(dbVideo => {
			res.json({
				message: `Deleted video with id: ${req.params.id}`,
				error: false,
				data: res
			});
			if (res.userId !== userId)
				return res.status(401).json({ msg: 'Not authorized' });
		})
		.catch(err => {
			console.log(err);
			res.json({
				message: err.message,
				error: true
			});
		});
});

module.exports = router;
