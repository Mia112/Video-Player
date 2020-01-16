
import React, {Component} from 'react';
import API from '../utils/API';
import { Button } from 'reactstrap';
// import VideoCard from '../components/VideoItem';


class Saved extends Component {
  state = {
    videos: []
    
  }
  loadVideo = () => {
    API.getVideo()
      .then(res => this.setState({videos: res.data}))
      .catch(err => console.log(err))
  };

  deleteVideo = event => {
    API.deleteVideo(event.target.id)
      .then(res => this.loadVideo())
      .catch(err => console.log(err))
  };

  // Lifecycle Method - once the Bookshelf Component mounts it runs the 'loadBookshelf' method.
  componentDidMount() {
    this.loadVideo()
  }

  render() {
    return (
  
      <div className="container">
        <div>
          title="Your Saved Videos"
       
          instructions="View your saved video on Youtube, or remove it from your List..."
          
          </div>
        <Button
          videos={this.state.videos}
          buttonAction={this.deleteVideo}
          buttonType="btn btn-danger mt-2"
          buttonText="Delete Video"
      
     
      />
      </div>
    )
  }
}

export default Saved;



