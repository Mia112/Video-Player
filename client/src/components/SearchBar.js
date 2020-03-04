import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
// import { Paper, TextField } from '@material-ui/core';

class SearchBar extends Component {
	state = {
		searchTerm: ''
	};
	handleChange = event => {
		this.setState({ searchTerm: event.target.value });
	};
	handleSubmit = event => {
		const { searchTerm } = this.state;
		const { onFormSubmit } = this.props;

		onFormSubmit(searchTerm);

		event.preventDefault();
	};
	render() {
		return (
			<div className='wrap' fixed-top>
				<form onSubmit={this.handleSubmit}>
					<input
						onChange={this.handleChange}
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
	}
}

export default SearchBar;
