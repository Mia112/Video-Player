import React, { Component } from "react";
import axios from "axios";
import VideoItem from './VideoItem'
class SavedVideos extends Component {
    state = {
      videos: []
    };
  
    componentDidMount() {
      this.getVideos();
    }
    getVideos = () => {
      axios
        .get("/api/videos")
        .then(videos => {
          
          this.setState({ videos: videos.data.data });
        })
        .catch(err => {
          console.log(err);
        });
    };
    render() {
      return (
        <div>
            <ul>
            { VideoItem }
            </ul>
        </div>
      );
    }
  }
  export default SavedVideos;