import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
	const handleVideoSelect = () => {
		onVideoSelect(video);
	};
	return (
		<li className='list-group-item' onClick={handleVideoSelect}>
			<div className='video-list media'>
				<div className='media-left'>
					<img className='media-object' alt='thumbnail' src={video.url} />
				</div>
			</div>
			<div className='media-body'>
				<div className='media-heading'>{video.title}</div>
			</div>
		</li>
	);
};

export default VideoItem;
