import React from 'react';
import Button from 'react-bootstrap/Button';
const SaveVideoBtn = props => {
	return (
		<Button {...props} variant='outline-dark'>
			Save Video
		</Button>
	);
};

export default SaveVideoBtn;
