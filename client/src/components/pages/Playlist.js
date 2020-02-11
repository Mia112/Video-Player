import React from 'react';
import { Component } from 'react';
import API from '../../utils/API';
import { AppNavbar, VideoList } from '../index';
import { Jumbotron } from 'react-bootstrap';

class Playlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: []
		};
	}
	componentDidMount() {
		this.handleGetVideos();
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
	render() {
		return (
			<>
				<AppNavbar />
				<Jumbotron fluid style={{ marginTop: '3rem' }}>
					<div className='card-group' style={{ display: 'flex' }}>
						<div className='card'>
							<VideoList videos={this.state.videos} />
						</div>
					</div>
				</Jumbotron>
			</>
		);
	}
}
export default Playlist;
