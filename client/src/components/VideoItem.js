import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
 
    return (
       <li className='list-group-item' onClick={() => onVideoSelect(video)}>
       <div className="video-list media">
       <div className="media-left">
        <img className="media-object" alt='thumbnail' src={video.snippet.thumbnails.medium.url}/>
        </div>
        </div>
        <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
        </div>
       
      </li>
    );
}

export default VideoItem;