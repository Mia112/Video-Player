import React from 'react';

const DeleteBtn = ({ onDelete }) => {
	onDelete = id => {
		this.setState(state => {
			const { videos } = state;
			const filteredItems = videos.filter(video => video.id !== id);
			return { videos: filteredItems };
		});
	};
	return (
		<div>
			<button onClick={onDelete}>X</button>
		</div>
	);
};

export default DeleteBtn;
