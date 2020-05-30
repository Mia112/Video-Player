import React, { useState } from 'react';

const SearchBar = (props) => {
	const [searchTerm, setSearchValue] = useState('');

	const handleSearchChange = (event) => {
		setSearchValue(event.target.value);
	};
	const resetInputField = () => {
		setSearchValue('');
	};

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		props.onFormSubmit(searchTerm);
		resetInputField();
	};
	return (
		<div className='wrap' fixed-top>
			<form onSubmit={handleSearchSubmit}>
				<input
					onChange={handleSearchChange}
					type='text'
					className='searchTerm'
					placeholder='Search Video'
				/>
				<button type='submit' className='searchButton'>
					<i className='fa fa-search'></i>
				</button>
			</form>
		</div>
	);
};
export default SearchBar;
