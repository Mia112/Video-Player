import React from 'react';
import { Component } from 'react';
import API from '../../utils/API';
import { AppNavbar, VideoList } from '../index';
import { Jumbotron, Container } from 'react-bootstrap';

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

	handleGetVideos = userId => {
		API.getSavedVideos(userId)
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
					<Container>
						<div className='container-fluid'>
							<VideoList videos={this.state.videos} />
						</div>
					</Container>
				</Jumbotron>
			</>
		);
	}
}
export default Playlist;
