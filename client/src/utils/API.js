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
	//call to get video playlist
	async getSavedVideos() {
		return await axios.get('/api/Video');
	},

	async deleteVideo(id) {
		return await axios.delete('/' + id);
	},
	async saveVideo(data) {
		return await axios.post('/api/Video', data);
	},
	async getVideo(id) {
		return await axios.get('/api/videos', id);
	}
};

export default API;
