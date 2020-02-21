import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
const VideoDetail = ({ text, handleAction, video }) => {
	if (!video) return <div>Loading video...</div>;
	const videoSrc = `https://www.youtube.com/embed/${video.videoId}`;

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
					<div>{video.title}</div>
					<div>{video.description}</div>

					<Button variant='outline-dark' onClick={handleAction}>
						{text}
					</Button>
				</div>
			</div>
		</div>
	);
};
VideoDetail.propTypes = {
	video: PropTypes.object.isRequired
};
export default VideoDetail;
