import React from 'react';
import { Component } from 'react';
import API from '../utils/API';
import { Container } from '@material-ui/core';

class SavedVideoList extends Component {
	state = {
		list: []
	};

	getSavedVideos = () => {
		API.getSavedVideos()
			.then(res => {
				this.setState({
					list: res.data
				});
			})
			.catch(err => console.log(err));
	};
	render() {
		return (
			<div className={Container}>
				<h1> Saved Video Goes Here !</h1>
			</div>
		);
	}
}

export default SavedVideoList;
