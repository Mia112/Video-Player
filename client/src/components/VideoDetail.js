import React from 'react';
import Button from 'react-bootstrap/Button';
import API from '../utils/API';

const VideoDetail = ({ video }) => {
	const handleSave = async () => {
		const result = await API.saveVideo(video);
		if (result) alert('Video is added to your Playlist');
	};

	if (!video) return <div>Loading video...</div>;
	const videoSrc = `https://www.youtube.com/embed/${video.videoId}`;

	return (
		<>
			<div className='flex-row'>
				<div className='video-detail'>
					<div className='embed-responsive embed-responsive-16by9'>
						<iframe
							className='embed-responsive-item'
							title='Video Details'
							src={videoSrc}></iframe>
					</div>
					<div className='details'>
						<div>{video.title}</div>
						<div>{video.description}</div>
						<Button variant='outline-dark' onClick={handleSave}>
							Save Video
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default VideoDetail;
