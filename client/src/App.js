import React, { Component } from 'react';
import youtube from './api/Youtube';
import { Grid } from '@material-ui/core';
import { SearchBar, AppNavbar, VideoDetail, VideoList } from './components';
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from './actions/authActions';

class App extends Component {
  state = {
    videos: [],
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
      
      <Provider store={store}>
      <Router>
      <AppNavbar />
    <Grid justify="center" container spacing={8}>
      <Grid item xs={10}>
        <Grid container spacing={8}>
         
          <Grid item xs={8}>
          <VideoDetail video={selectedVideo}/>
          </Grid>
          <Grid item xs={4}>
           <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
          </Grid>
          
        </Grid>
      </Grid>
    </Grid>
    </Router>
   </Provider>
    );
  }
};
export default App;


