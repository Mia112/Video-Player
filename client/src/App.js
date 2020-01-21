import React, { Component } from 'react';
import youtube from './API/Youtube';

import './App.css';
import {
	SaveVideo,
	SearchBar,
	AppNavbar,
	VideoDetail,
	VideoList
} from './components';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PlayList from './components/Playlist';

class App extends Component {
	state = {
		videos: [],
		selectedVideo: null
	};

	componentDidMount(props) {
		store.dispatch(loadUser());
		this.handleSubmit('React tutorials');
	}

	onVideoSelect = video => {
		this.setState({
			selectedVideo: video
		});
	};

	handleSubmit = async searchTerm => {
		const response = await youtube.get('search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				key: 'AIzaSyDg7arbjgsAKEij1dEAJONeKoNFX005rbs',
				q: searchTerm
			}
		});
		console.log(response);
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};
	render() {
		const { selectedVideo, videos } = this.state;
		return (
			<Provider store={store}>
				<Router>
					<AppNavbar />
					<div
						className='container-fluid'
						style={{
							marginTop: '1em'
						}}>
						<SearchBar onFormSubmit={this.handleSubmit} />
						<div className='row'>
							<div className='video-detail col-md-8'>
								<VideoDetail video={selectedVideo} />
								<SaveVideo />
							</div>
							<div className='col-md-4 list-group'>
								<VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
							</div>
						</div>
					</div>
					<Switch>
						<Route path='/Playlist' component={PlayList} />
					</Switch>
				</Router>
			</Provider>
		);
	}
}
export default App;
