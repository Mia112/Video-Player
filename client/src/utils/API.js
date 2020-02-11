import axios from 'axios';

axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');

const API = {
	async getYoutubeVideos(searchTerm) {
		const youtube = axios.create({
			baseURL: 'https://www.googleapis.com/youtube/v3/'
		});
		const data = {
			params: {
				part: 'snippet',

				maxResults: 5,
				key: 'AIzaSyDg7arbjgsAKEij1dEAJONeKoNFX005rbs',
				q: searchTerm
			}
		};
		return await youtube.get('search', data);
	},
	// Saves a video to the database
	async saveVideo(data) {
		return await axios.post('/api/Video', data);
	},
	//Gets all Videos
	async getSavedVideos() {
		return await axios.get('/api/Video');
	},
	// Deletes a video with the given id
	async deleteVideo(id) {
		return await axios.delete('/api/Video', +id);
	},
	// Get a single video with the given id
	async getVideo(id) {
		return await axios.get('/api/Video', +id);
	}
};

export default API;
