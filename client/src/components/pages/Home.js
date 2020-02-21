import React, { Component } from 'react';
import API from '../../utils/API';
import { SearchBar, VideoDetail, VideoList } from '../index';

class Home extends Component {
	state = {
		videos: [],
		selectedVideo: ''
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
	handleSave = async video => {
		const result = await API.saveVideo(video);

		if (result) alert('Video is added to your Playlist');
	};

	render() {
		const { selectedVideo, videos } = this.state;
		return (
			<>
				<div className='container-fluid'>
					<div>
						<SearchBar onFormSubmit={this.handleSubmit} />
					</div>
					<div className='row' style={{ padding: '10px', marginTop: '3rem' }}>
						<div className='video-detail col-md-8'>
							<VideoDetail
								video={selectedVideo}
								handleAction={this.handleSave}
								text={'Save'}></VideoDetail>
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
