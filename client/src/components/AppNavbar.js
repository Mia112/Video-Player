import React, { Component, Fragment } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

class AppNavbar extends Component {
	state = {
		isOpen: false
	};

	static propTypes = {
		auth: PropTypes.object.isRequired
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render() {
		const { isAuthenticated, user } = this.props.auth;
		const authLinks = (
			<Fragment>
				<NavItem>
					<NavLink onClick={this.toggle} href='/Playlist'>
						View Saved Video
					</NavLink>
				</NavItem>
				<span className='navbar-text mr-1'>
					<strong>{user ? `Welcome ${user.name}` : ''}</strong>
				</span>
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
				<NavItem></NavItem>
				<NavItem>
					<LoginModal />
				</NavItem>
			</Fragment>
		);

		return (
			<div>
				<Navbar
					id='topnav'
					expand='lg'
					className='navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar'>
					<NavbarBrand href='/'>
						<h3>Youtube Video App</h3>
					</NavbarBrand>

					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className='ml-auto' navbar>
							{isAuthenticated ? authLinks : guestLinks}
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavbar);
