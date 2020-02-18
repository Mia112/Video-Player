import React from 'react';
import { Component } from 'react';
import API from '../../utils/API';
import { AppNavbar } from '../index';
import PlaylistVideos from '../PlaylistVideos';
import { Jumbotron } from 'react-bootstrap';

class Playlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: []
		};
	}

	handleGetVideos = () => {
		API.getSavedVideos()
			.then(res => {
				this.setState({
					videos: res.data
				});
				console.log(res.data);
			})
			.catch(err => console.log(err));
	};

	deleteVideo = event => {
		API.deleteVideo(event.target.id)
			.then(res => this.handleGetVideos())
			.catch(err => console.log(err));
	};

	componentDidMount() {
		this.handleGetVideos();
	}

	render() {
		return (
			<>
				<AppNavbar />
				<Jumbotron fluid style={{ marginTop: '3rem' }}>
					<div className='card-group' style={{ display: 'flex' }}>
						<div className='card'>
							<PlaylistVideos
								videos={this.state.videos}
								deleteVideo={this.deleteVideo}
							/>
						</div>
					</div>
				</Jumbotron>
			</>
		);
	}
}
export default Playlist;
