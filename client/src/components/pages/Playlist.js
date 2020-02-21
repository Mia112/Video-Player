import React, { Component } from 'react';
import API from '../../utils/API';
import { VideoDetail, VideoList, AppNavbar } from '../index';

class Playlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: ''
		};
	}
	onVideoSelect = video => {
		this.setState({
			selectedVideo: video
		});
	};

	handleGetVideos = () => {
		API.getSavedVideos()
			.then(res => {
				this.setState({
					videos: res.data,
					selectedVideo: res.data[0]
				});
				console.log(res.data);
			})
			.catch(err => console.log(err));
	};

	deleteVideo = (event, id) => {
		event.preventDefault();
		API.deleteVideo(id)
			.then(res => this.handleGetVideos())
			.catch(err => console.log(err));
	};

	componentDidMount() {
		this.handleGetVideos();
	}
	render() {
		const { selectedVideo, videos } = this.state;
		return (
			<>
				<AppNavbar />
				<div className='container-fluid'>
					<div className='row' style={{ padding: '10px', marginTop: '3rem' }}>
						<div className='video-detail col-md-8'>
							<VideoDetail
								video={selectedVideo}
								handleAction={this.deleteVideo}
								text='Delete'></VideoDetail>
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
