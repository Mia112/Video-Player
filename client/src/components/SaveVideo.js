import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class SaveVideo extends Component {
	state = {
		selectedVideo: '',
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
			videos: result.data.items,
			selectedVideo: result.data.items[0]
		});
	};

	render() {
		const { saveVideo } = this.state;
		return (
			<Button
				variant='outline-dark'
				name='Save Video'
				type='submit'
				value={saveVideo}
				onClick={this.addVideo}>
				Save Video
			</Button>
		);
	}
}
export default SaveVideo;
