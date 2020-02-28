import React, { Component } from 'react';
import API from '../../utils/API';
import { DeleteVideo, VideoList, AppNavbar } from '../index';

class Playlist extends Component {
	state = {
		videos: [],
		selectedVideo: ''
	};

	componentDidMount() {
		this.handleGetVideos();
	}
	onVideoSelect = video => {
		this.setState({
			selectedVideo: video
		});
	};

	handleGetVideos = async () => {
		try {
			const res = await API.getSavedVideos();
			this.setState({
				videos: res.data,
				selectedVideo: res.data[0]
			});
		} catch (error) {
			alert('Could not get videos');
		}
	};

	handleGetVideos = async () => {
		try {
			const res = await API.getSavedVideos();
			this.setState({
				videos: res.data,
				selectedVideo: res.data[0]
			});
		} catch (error) {
			alert('Could not get videos');
		}
	};

	removeVideo = async event => {
		event.preventDefault();
		const id = event.target.id;
		const videoToRemove = this.state.videos[0]._id;
		try {
			const response = await API.deleteVideo(videoToRemove);

			console.log(response);
			alert('Video has been removed');
			this.handleGetVideos();
		} catch (err) {
			console.log(err);
			alert('Failed to create: ' + err.message);
		}
		let newVideoList = Array.from(this.state.videos);
		if (id !== -1) {
			newVideoList.splice(id, 0);
			this.setState({ videos: newVideoList });
		}
	};
	render() {
		const { selectedVideo, videos } = this.state;

		return (
			<>
				<AppNavbar />
				<div className='container-fluid'>
					<div className='row' style={{ padding: '10px', marginTop: '3rem' }}>
						<div className='video-detail col-md-8'>
							<DeleteVideo
								video={selectedVideo}
								handleAction={this.removeVideo}></DeleteVideo>
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

export default Playlist;
