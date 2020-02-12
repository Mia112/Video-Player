import React from 'react';
import Button from 'react-bootstrap/Button';
const SaveVideoBtn = props => {
	return (
		<Button
			{...props}
			variant='outline-dark'
			style={{ float: 'right', color: '#e74944' }}>
			Save Video
		</Button>
	);
};

export default SaveVideoBtn;
