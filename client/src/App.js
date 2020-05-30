import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadUser } from './actions/authActions';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './components/pages/Home';
import Playlist from './components/pages/Playlist';
import './App.css';
const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	});

	return (
		<Provider store={store}>
			<AppNavbar />
			<Router>
				<div>
					<Route exact path='/' component={Home} />
					<Route exact path='/Playlist' component={Playlist} />
				</div>
			</Router>
		</Provider>
	);
};

export default App;
