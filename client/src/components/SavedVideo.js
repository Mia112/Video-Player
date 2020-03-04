import React from 'react';
import API from '../utils/API';

const SavedVideo = ({ video }) => {
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

						<button onClick={handleSave} className='btn btn-light'>
							Save Video
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SavedVideo;
