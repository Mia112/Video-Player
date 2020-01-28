import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const VideoDetail = ({ video }) => {
	const handleSave = async () => {
		// debugger;
		const result = await axios.post('http://localhost:8080/api/Video', video);
		console.log(result);
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
					</div>
				</div>
			</div>
			<Button variant='outline-dark' type='submit' onClick={handleSave}>
				Save Video
			</Button>
		</>
	);
};

export default VideoDetail;
