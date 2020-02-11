const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
	videoId: {
		type: String,
		required: true
	},

	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;
