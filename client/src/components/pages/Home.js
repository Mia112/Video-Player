import React, { Component } from 'react';
import API from '../../utils/API';
import { SearchBar, VideoList, SavedVideo } from '../index';
class Home extends Component {
	state = {
		videos: [],
		selectedVideo: null
	};

	onVideoSelect = video => {
		this.setState({
			selectedVideo: video
		});
	};
	componentDidMount() {
		this.handleSubmit('React tutorials');
	}

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
			<>
				<div className='container-fluid'>
					<div className='row' style={{ padding: '5px', marginTop: '5rem' }}>
						<SearchBar onFormSubmit={this.handleSubmit} />
					</div>
					<div className='row' style={{ padding: '5px', marginTop: '2rem' }}>
						<div className='video-detail col-md-8'>
							<SavedVideo video={selectedVideo} />
						</div>
						<div className='col-md-4 list-group'>
							<VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Home;
