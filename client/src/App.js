import React, { Component } from 'react';
import youtube from './api/Youtube';
import { Saved, SaveBtn, SearchBar, AppNavbar, VideoDetail, VideoList } from './components';
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";
import { loadUser } from './actions/authActions';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {
  
  state = {
    videos: [],
    currentSave: [],
    selectedVideo: null,
  }
  componentDidMount() {
  store.dispatch(loadUser());
  this.handleSubmit('React tutorials')
  
  }
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });

  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
    params: {
      part: 'snippet',
      maxResults: 5,
      key: 'AIzaSyDg7arbjgsAKEij1dEAJONeKoNFX005rbs',
      q: searchTerm
    }
  });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0] });

  }

  render() {
    const {selectedVideo, videos } = this.state;
    return (
      <Router>
      <Provider store={store}>
      <AppNavbar />
      
      <div className='container-fluid' style={{marginTop: '1em'}}>
     
      <SearchBar onFormSubmit={this.handleSubmit} />
      <div className='row'>
      <div className="video-detail col-md-8">
        
          <VideoDetail video={selectedVideo} />
          <SaveBtn  handleFormSubmit={this.handleSubmit} />
         </div>
         <div className="col-md-4 list-group">
           <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
           </div>
           </div>
           <Switch>
           <Route exact path="/Saved" component={Saved} />
           </Switch>
           </div>
   </Provider>
   </Router>
    );
  }
};
export default App;


