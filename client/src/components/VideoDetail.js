import React from 'react';
import SaveVideoBtn from '../components/SaveVideoBtn';
import API from '../utils/API';
import { connect } from 'react-redux';
const VideoDetail = ({ video }) => {
	const handleSave = async () => {
		const result = await API.saveVideo(video);
		if (result) alert('Video is added to your Playlist');
	};

	if (!video) return <div>Loading video...</div>;
	const videoSrc = `https://www.youtube.com/embed/${video.videoId}`;

	const { isAuthenticated } = this.props.auth;
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

						<div>
							{isAuthenticated ? <SaveVideoBtn onClick={handleSave} /> : ''}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, null)(VideoDetail);
