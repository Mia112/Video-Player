import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class SaveVideo extends Component {
	state = {
		selectedVideo: '',
		savedVideo: null
	};

	addVideo(selectedVideo) {
		let data = this.setState({
			savedVideo: selectedVideo
		});
		axios('http://localhost:8080/api/Video', {
			method: 'post',
			mode: 'no-cors',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(result => {
				result.json().then(res => {
					console.log(res);
				});
			})
			.catch(err => {
				console.log(err);
			});
	}
	render() {
		return (
			<div>
				<Button onClick={() => this.addVideo()}> Save Video </Button>
			</div>
		);
	}
}
export default SaveVideo;
