import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

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
            <Form inline>
            <FormControl onSubmit={this.handleSubmit} type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange} />
            <Button variant="outline-success">Search</Button>
          </Form>
        
        );
    }
};

export default SearchBar;