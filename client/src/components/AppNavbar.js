import React, { Component, Fragment } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  NavItem
 
} from 'reactstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
import SearchBar from './SearchBar';


class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        collapse: false,
    };
    this.onClick = this.onClick.bind(this);
}

static propTypes = {
  auth: PropTypes.object.isRequired
};

onClick() {
  this.setState({
      collapse: !this.state.collapse,
    });
}

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const navColor = {backgroundColor: '#ffffff'}
    const authLinks = (
      <Fragment>
        <NavItem>
          <span className='navbar-text mr-3'>
            <strong>{user ? `Welcome ${user.username}` : ''}</strong>
          </span>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    );

    return (
      <div>
      <Router>
        <header>
          <MDBNavbar style={navColor} light expand="md" scrolling fixed="top">
            <MDBNavbarBrand href="/">
                <strong>Youtube Video App</strong>
            </MDBNavbarBrand>
            <MDBNavItem>
            <SearchBar onFormSubmit={this.handleSubmit} />
        </MDBNavItem>
            <MDBNavbarToggler onClick={ this.onClick } />
            <MDBCollapse isOpen = { this.state.collapse } navbar>
                  <MDBNavbarNav right>
                  <MDBNavLink to="#">Saved Video</MDBNavLink>
                  <MDBNavItem float-right>
                  {isAuthenticated ? authLinks : guestLinks}
                  </MDBNavItem>


                  </MDBNavbarNav>
                  </MDBCollapse>
                </MDBNavbar>
              </header>
            </Router>
            </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(AppNavbar);


