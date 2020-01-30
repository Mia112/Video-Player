import React, { Component } from 'react';

import API from '../../utils/API';
import AppNavbar from '../AppNavbar';
import SaveVideo from '../SaveVideo';

class Playlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: '',
			saveVideo: []
		};

		this.handleDelete = videoId => {
			API.deleteVideo(videoId).then(() => {
				this.getVideos();
			});
		};
	}

	componentDidMount() {
		this.getVideos();
	}

	getVideos = userId => {
		API.getSavedVideos(userId)
			.then(res => {
				this.setState({
					saveVideo: res.data
				});
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<div>
				<AppNavbar />
				<div className='container'>
					<SaveVideo
						videos={this.state.videos}
						handleDelete={this.handleDelete}
					/>
				</div>
			</div>
		);
	}
}

export default Playlist;
