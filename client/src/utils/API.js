import axios from 'axios';

export default {
	getVideo: function() {
		return axios.get('/api/videos');
	},

	deleteVideo: function(id) {
		return axios.delete(`/api/videos/${id}`);
	}
};
