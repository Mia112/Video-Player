import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Paper, TextField } from '@material-ui/core';

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
			<Paper elevation={10} style={{ padding: '50px', margin: '50px' }}>
				<form onSubmit={this.handleSubmit}>
					<TextField fullWidth label='Search' onChange={this.handleChange} />
					<Button variant='outline-dark' type='submit'>
						Search
					</Button>
				</form>
			</Paper>
		);
	}
}

export default SearchBar;
