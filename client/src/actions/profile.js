import axios from 'axios';
import { GET_PROFILE, PROFILE_ERROR } from './types';

export const getCurrentProfile = () => async dispatch => {
	try {
		const res = await axios.get('/api/profile/me');
		dispatch({ type: GET_PROFILE, payload: res.data });
	} catch (e) {
		dispatch({ type: PROFILE_ERROR, payload: { msg: e.response.statusText, status: e.response.status }});
	}
};
