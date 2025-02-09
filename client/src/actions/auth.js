import axios from 'axios';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
	CLEAR_PROFILE,
} from './types';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
	try {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
		const res = await axios.get('/api/auth');
		dispatch({ type: USER_LOADED, payload: res.data });
	} catch (e) {
		dispatch({ type: AUTH_ERROR });
	}
};

// Register User
export const register = ({ name, email, password }) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const body = JSON.stringify({ name, email, password });

	try {
		const res = await axios.post('/api/users', body, config);

		dispatch({ type: REGISTER_SUCCESS, payload: res.data });
		dispatch(loadUser());
	} catch (e) {
		const errors = e.response.data.errors;
		if (errors)
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
		dispatch({ type: REGISTER_FAIL });
	}
};

// Login User
export const login = (email, password) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const body = JSON.stringify({ email, password });

	try {
		const res = await axios.post('/api/auth', body, config);

		dispatch({ type: LOGIN_SUCCESS, payload: res.data });
		dispatch(loadUser());
	} catch (e) {
		const errors = e.response.data.errors;
		if (errors)
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
		dispatch({ type: LOGIN_FAIL });
	}
};

// Logout and clear profile
export const logout = () => dispatch => {
	dispatch({ type: CLEAR_PROFILE });
	dispatch({ type: LOGOUT });
};
