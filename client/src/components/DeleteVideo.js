import React from 'react';
import API from '../utils/API';
const DeleteVideo = ({ video, selectedVideo, onVideoDelete }) => {
	const handleDelete = async selectedVideo => {
		try {
			await API.deleteVideo(selectedVideo._id);
			// console.log();
			alert('Video has been removed');
			this.handleGetVideos();
		} catch (err) {
			console.log(err);
			alert('Failed to create: ' + err.message);
		}
	};
	if (!video)
		return (
			<div>
				<h1>No Saved Video to display</h1>
			</div>
		);
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

						<button onClick={handleDelete} className='btn btn-danger'>
							Delete
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeleteVideo;
