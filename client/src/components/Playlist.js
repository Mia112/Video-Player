import React, { Component } from 'react';
import API from '../utils/API';
import Button from 'react-bootstrap/Button';

class Playlist extends Component {
	state = {
		videos: []
	};
	loadVideo = () => {
		API.getVideo()
			.then(res =>
				this.setState({
					videos: res.data
				})
			)
			.catch(err => console.log(err));
	};

	deleteVideo = event => {
		API.deleteVideo(event.target.id)
			.then(res => this.loadVideo())
			.catch(err => console.log(err));
	};
	componentDidMount() {
		this.loadVideo();
	}

	render() {
		return (
			<div className='container'>
				<div>Your Saved Videos</div>
				<Button
					videos={this.state.videos}
					buttonAction={this.deleteVideo}
					buttonType='btn btn-danger mt-2'
					buttonText='Delete Video'
				/>
			</div>
		);
	}
}

export default Playlist;
