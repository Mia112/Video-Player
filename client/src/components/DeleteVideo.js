import React from 'react';

const DeleteVideo = ({ video, handleAction }) => {
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

						<button onClick={handleAction} className='btn btn-danger'>
							Delete
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeleteVideo;
