import React, { Component } from 'react';
import youtube from './api/Youtube';
import { Grid } from '@material-ui/core';
import { SearchBar,  VideoDetail, VideoList } from './components';
import './index.css';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  }
componentDidMount() {
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
    
    <Grid justify="center" container spacing={8}>
      <Grid item xs={12}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
           <SearchBar onFormSubmit={this.handleSubmit} />
          </Grid>
          <Grid item xs={8}>
          <VideoDetail video={selectedVideo}/>
          </Grid>
          <Grid item xs={4}>
           <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
          </Grid>
          
        </Grid>
      </Grid>
    </Grid>
    );
  }
};
export default App;


