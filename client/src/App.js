import React, { Component } from 'react';
import API from './utils/API';

import './App.css';
import { SearchBar, AppNavbar, VideoDetail, VideoList } from './components';
// import Playlist from './components/pages/Playlist';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
	state = {
		videos: [],
		selectedVideo: null
	};

	componentDidMount() {
		store.dispatch(loadUser());
		this.handleSubmit('React tutorials');
	}

	onVideoSelect = video => {
		this.setState({
			selectedVideo: video
		});
	};

	handleSubmit = async searchTerm => {
		const search = searchTerm || 'React';
		const response = await API.getYoutubeVideos(search);

		const videoItems = response.data.items.map(i => {
			const { thumbnails, title, description } = i.snippet;
			const video = {
				videoId: i.id.videoId,
				url: thumbnails.medium.url,
				title,
				description
			};
			return video;
		});
		this.setState({
			videos: videoItems,
			selectedVideo: videoItems[0]
		});
	};

	render() {
		const { selectedVideo, videos } = this.state;
		return (
			<Provider store={store}>
				<Router>
					<AppNavbar />
				</Router>
				<div className='container-fluid'>
					<div>
						<SearchBar onFormSubmit={this.handleSubmit} />
					</div>
					<div className='row'>
						<div className='video-detail col-md-8'>
							<VideoDetail video={selectedVideo} />
						</div>
						<div className='col-md-4 list-group'>
							<VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
						</div>
					</div>
				</div>
			</Provider>
		);
	}
}
export default App;
