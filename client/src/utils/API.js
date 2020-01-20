import axios from 'axios';

export default {
	// saveVideo: function(videoData) {
	// 	return axios.post('/api/videos', videoData);
	// },

	getVideo: function() {
		return axios.get('/api/videos');
	},

	deleteVideo: function(id) {
		return axios.delete(`/api/videos/${id}`);
	}
};
