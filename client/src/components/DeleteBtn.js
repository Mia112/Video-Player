import React from 'react';
import Button from 'react-bootstrap/Button';
const DeleteBtn = props => {
	return (
		<Button
			{...props}
			variant='outline-dark'
			style={{ float: 'right', color: '#e74944' }}>
			Delete
		</Button>
	);
};

export default DeleteBtn;
