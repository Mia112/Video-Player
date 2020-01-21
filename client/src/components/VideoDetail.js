import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) return <div>Loading video...</div>;
	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div className='flex-row'>
			<div className='video-detail'>
				<div className='embed-responsive embed-responsive-16by9'>
					<iframe
						className='embed-responsive-item'
						title='Video Details'
						src={videoSrc}></iframe>
				</div>
				<div className='details'>
					<div>{video.snippet.title}</div>
					<div>{video.snippet.description}</div>
				</div>
			</div>
		</div>
	);
};

export default VideoDetail;
