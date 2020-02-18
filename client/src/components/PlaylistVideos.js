import React from 'react';

import DeleteBtn from './DeleteBtn';

export const PlaylistItem = ({ video, deleteVideo }) => {
	return (
		<li className='list-group-item'>
			<div className='video-list media'>
				<div className='media-left'>
					<img className='media-object' alt='thumbnail' src={video.url} />
				</div>
			</div>
			<div className='media-body'>
				<div className='media-heading'>{video.title}</div>
			</div>
			<DeleteBtn onClick={deleteVideo} />
		</li>
	);
};

const PlaylistVideos = ({ videos }) => {
	if (!videos) {
		return <div>Loading...</div>;
	}
	const playlistItems = videos.map((video, i) => {
		return <PlaylistItem key={i} video={video} />;
	});

	return <ul>{playlistItems}</ul>;
};

export default PlaylistVideos;
