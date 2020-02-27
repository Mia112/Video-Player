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

	// onVideoDelete = selectedVideo => {
	// 	this.setState({
	// 		deletedVideo: selectedVideo
	// 	});
	// };

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

	// handleDelete = async selectedVideo => {
	// 	try {
	// 		await API.deleteVideo(selectedVideo);
	// 		// console.log();
	// 		alert('Video has been removed');
	// 		this.handleGetVideos();
	// 	} catch (err) {
	// 		console.log(err);
	// 		alert('Failed to create: ' + err.message);
	// 	}
	// };
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
								onClick={this.handleDelete}
								onVideoDelete={this.onVideoDelete}></DeleteVideo>
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
