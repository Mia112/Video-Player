import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBFormInline } from "mdbreact";

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
        
            <MDBContainer>
            <MDBFormInline id="searchbar" className="md-form mr-auto mb-4">
            <form onSubmit={this.handleSubmit}>
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"  onChange={this.handleChange} />
                
                </form>
                <MDBBtn outline color="black" rounded size="sm" type="submit" className="mr-auto">
          Search
        </MDBBtn>
          
            </MDBFormInline>
            </MDBContainer>
          
        );
    }
};

export default SearchBar;