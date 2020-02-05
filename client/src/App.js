import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Playlist from './components/pages/Playlist';
import './App.css';
const App = () => (
	<Router>
		<div>
			<Route exact path='/' component={Home} />
			<Route exact path='/Playlist' component={Playlist} />
		</div>
	</Router>
);
export default App;
