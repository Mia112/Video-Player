import React, { Component } from 'react';
import youtube from './api/Youtube';
import { Grid } from '@material-ui/core';
import { SearchBar,  VideoDetail } from './components';

class App extends Component {
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
    params: {
      part: 'snippet',
      maxResults: 5,
      key: 'AIzaSyDg7arbjgsAKEij1dEAJONeKoNFX005rbs',
      q: searchTerm
    }
  });
    console.log(response.data.items);
  }
  render() {
    return (
    <Grid justify="center" container spacing={8}>
      <Grid item xs={12}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
           <SearchBar onFormSubmit={this.handleSubmit} />
          </Grid>
          <Grid item xs={8}>
          <VideoDetail />
          </Grid>
          <Grid item xs={4}>
           {/* VIDEO LIST */}
          </Grid>
          
        </Grid>
      </Grid>
    </Grid>
    );
  }
};
export default App;


