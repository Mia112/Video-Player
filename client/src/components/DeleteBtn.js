import React from 'react';

function DeleteBtn(props) {
	return (
		<span
			{...props}
			role='button'
			tabIndex='0'
			style={{ float: 'right', color: '#e74944' }}>
			Delet
		</span>
	);
}

export default DeleteBtn;
