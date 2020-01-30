import axios from 'axios';

export default {
	getSavedVideos: function() {
		return axios.get('/api/videos');
	},
	deleteVideo: function(id) {
		return axios.delete('/' + id);
	}
};
