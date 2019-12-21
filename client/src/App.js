import React, { Component} from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router} from "react-router-dom";

import axios from "axios";

export class App extends Component {
  state = {
    videos: [],
  };

  videoSearch = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBMZ252IILNsA0F0h50rbZAIoorxw6cJBQ=0&maxResults=10`
    );
    this.setState({ videos: res.data.items});
  };

  render() {
    const {videos} = this.state;
    return (
      <Router>
        <div>
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;