import React, { Component } from 'react';
import youtube from './api/Youtube';
import { SearchBar, AppNavbar, VideoDetail, VideoList } from './components';
import "./App.css";
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
      <div>
      <Provider store={store}>
      <AppNavbar />
      
      <div>
      <SearchBar onFormSubmit={this.handleSubmit} />
      </div>
          <VideoDetail video={selectedVideo}/>
         
           <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
   </Provider>
   </div>
    );
  }
};
export default App;


