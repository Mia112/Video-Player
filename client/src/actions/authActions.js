import axios from 'axios';
import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL
} from './types';

export const loadUser = () => (dispatch, getState) => {
	dispatch({
		type: USER_LOADING
	});

	axios
		.get('/api/auth/User', tokenConfig(getState))
		.then(res =>
			dispatch({
				type: USER_LOADED,
				payload: res.data
			})
		)
		.catch(err => {
			console.log(err);
			dispatch({
				type: AUTH_ERROR
			});
		});
};

export const register = ({ name, email, password }) => dispatch => {
	// Headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({
		name,
		email,
		password
	});

	axios
		.post('/api/User', body, config)
		.then(res =>
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			})
		)
		.catch(err => {
			console.log(err);
			dispatch({
				type: REGISTER_FAIL
			});
		});
};

export const login = data => dispatch => {
	// debugger;
	axios
		.post('/api/auth', data)
		.then(res =>
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			})
		)
		.catch(err => {
			console.log(err);
			dispatch({
				type: LOGIN_FAIL
			});
		});
};

// Logout User
export const logout = () => {
	return {
		type: LOGOUT_SUCCESS
	};
};

export const tokenConfig = getState => {
	// Get token from localstorage
	const token = getState().auth.token;
	console.log(token);
	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	};
	if (token) {
		config.headers['x-auth-token'] = token;
	}
	return config;
};
