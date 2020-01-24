const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
});

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;
