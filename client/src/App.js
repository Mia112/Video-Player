import React, { Component } from 'react';
import youtube from './API/Youtube';
import { Saved, SearchBar, AppNavbar, VideoDetail, VideoList } from './components';
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import { loadUser } from './actions/authActions';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



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
   const result = this.setState({videos: response.data.items, selectedVideo: response.data.items[0] });
  console.log(result);
  }

  render() {
    const {selectedVideo, videos } = this.state;
    return (
      <Router>
      <Provider store={store}>
      <AppNavbar />
      
      <div className='container-fluid' style={{marginTop: '1em'}}>
      <Switch>
      <Route
      exact
      path="/"
      render={props => (
        <>
      <SearchBar onFormSubmit={this.handleSubmit} />
      <div className='row'>
      <div className="video-detail col-md-8">
        
          <VideoDetail video={selectedVideo} />
         
         </div>
         <div className="col-md-4 list-group">
           <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
           </div>
           </div>
           </>
           )}
         />
           <Route exact path="/Saved" component={Saved} />
           
           </Switch>
           </div>
      </Provider>
    </Router>
  );
  }
};
export default App;


