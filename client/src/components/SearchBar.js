import React, { Component } from 'react';
// import { Form, FormControl, Button } from 'react-bootstrap';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends Component {
    state = {
        searchTerm: '',
    }
    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }
    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);
        
    event.preventDefault();
    }
    render() {
        return (
            <Paper elevation={10} style={{ padding: '50px',  margin: '50px'  }}>
                <form onSubmit={this.handleSubmit}>
                <TextField fullWidth label='Search' onChange={this.handleChange} />
                </form>
            </Paper>
           
        );
    }
};

export default SearchBar;


// <div>
// <Form inline>
// <FormControl onSubmit={this.handleSubmit} type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange} />
// <Button variant="outline-success">Search</Button>
// </Form>
// </div>
