import API from '../../utils/API';
import { SearchBar, AppNavbar } from '../index';
import React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { loadUser } from '../../actions/authActions';

class Playlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: []
		};
	}

	componentDidMount() {
		store.dispatch(loadUser());
		this.getSavedVideos();
	}

	getSavedVideos = () => {
		API.getSavedVideos()
			.then(res => {
				this.setState({
					listOfVideos: res.data
				});
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<Provider store={store}>
				<AppNavbar />
				<SearchBar />
			</Provider>
		);
	}
}

export default Playlist;
