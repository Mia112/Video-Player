import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class SaveVideo extends Component {
	state = {
		selectedVideo: '',
		title: '',
		description: '',
		saveVideo: ''
	};

	onVideoSave = selectedVideo => {
		this.setState({
			saveVideo: selectedVideo
		});
	};
	addVideo = async saveVideo => {
		saveVideo.preventDefault();

		const result = await axios('http://localhost:8080/api/Video', {
			method: 'post',
			mode: 'no-cors',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
		console.log(result);

		this.setState({
			videos: result.saveVideo,
			selectedVideo: result.saveVideo
		});
	};

	render() {
		return (
			<Button variant='outline-dark' type='submit' onClick={this.addVideo}>
				Save Video
			</Button>
		);
	}
}
export default SaveVideo;
