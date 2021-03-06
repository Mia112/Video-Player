import React from 'react';
import VideoItem from './VideoItem';
const VideoList = ({ videos, onVideoSelect }) => {
	if (!videos) {
		return <div>Loading...</div>;
	}
	const videoItems = videos.map((video, i) => {
		return <VideoItem onVideoSelect={onVideoSelect} key={i} video={video} />;
	});

	return <ul>{videoItems}</ul>;
};

export default VideoList;
