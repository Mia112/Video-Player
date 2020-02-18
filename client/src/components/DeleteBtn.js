import React from 'react';
import Button from 'react-bootstrap/Button';
const DeleteBtn = props => {
	return (
		<Button {...props} variant='outline-dark'>
			Delete
		</Button>
	);
};

export default DeleteBtn;
