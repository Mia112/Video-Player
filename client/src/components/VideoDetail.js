import React from "react";
import { Paper, Typography } from '@material-ui/core';
const VideoDetail = ({video}) => {
  if(!video) return <div>Loading...</div>
  
  console.log(video.id.video);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
   <>
   <Paper elevation={6} style={{ height: '70%'}}>
    <iframe frameBorder="0" height="80%" width="100%" title="Video Player" src={videoSrc}/>
   
   </Paper>
   <Paper elevatvion={6} style={{ height: '15%'}}>
    <Typography variant="h5">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
    <Typography variant="subtitle2">{video.snippet.channelTitle}</Typography>
    <Typography variant="subtitle2">{video.snippet.description}</Typography>

   
   </Paper>

   </>
    
    ) 
    
  }

export default VideoDetail;
