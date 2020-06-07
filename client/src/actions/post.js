import axios from 'axios';
import { setAlert } from './alert';
import {
	GET_POSTS,
	POST_ERROR,
	UPDATE_LIKES,
	DELETE_POST,
	ADD_POST,
	GET_POST,
	REMOVE_COMMENT,
	ADD_COMMENT,
} from './types';

// Get posts
export const getPosts = () => async dispatch => {
	try {
		const res = await axios.get('/api/posts');
		dispatch({ type: GET_POSTS, payload: res.data });
	} catch (e) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: e.response.statusText, status: e.response.status },
		});
	}
};

// Add like
export const addLike = id => async dispatch => {
	try {
		const res = await axios.put(`/api/posts/like/${id}`);
		dispatch({
			type: UPDATE_LIKES,
			payload: { id, likes: res.data },
		});
	} catch (e) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: e.response.statusText, status: e.response.status },
		});
	}
};

// Remove like
export const removeLike = id => async dispatch => {
	try {
		const res = await axios.put(`/api/posts/unlike/${id}`);
		dispatch({
			type: UPDATE_LIKES,
			payload: { id, likes: res.data },
		});
	} catch (e) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: e.response.statusText, status: e.response.status },
		});
	}
};

// Delete Post
export const deletePost = id => async dispatch => {
	try {
		await axios.delete(`/api/posts/${id}`);
		dispatch({
			type: DELETE_POST,
			payload: id,
		});
		dispatch(setAlert('Post Removed', 'success'));
	} catch (e) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: e.response.statusText, status: e.response.status },
		});
	}
};

// Add Post
export const addPost = formData => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	try {
		const res = await axios.post('/api/posts', formData, config);
		dispatch({
			type: ADD_POST,
			payload: res.data,
		});
		dispatch(setAlert('Post Created', 'success'));
	} catch (e) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: e.response.statusText, status: e.response.status },
		});
	}
};

// Get a post
export const getPost = id => async dispatch => {
	try {
		const res = await axios.get(`/api/posts/${id}`);
		dispatch({ type: GET_POST, payload: res.data });
	} catch (e) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: e.response.statusText, status: e.response.status },
		});
	}
};

// Add Comment
export const addComment = (postId, formData) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	try {
		const res = await axios.post(
			`/api/posts/comment/${postId}`,
			formData,
			config
		);
		dispatch({
			type: ADD_COMMENT,
			payload: res.data,
		});
		dispatch(setAlert('Comment Added', 'success'));
	} catch (e) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: e.response.statusText, status: e.response.status },
		});
	}
};

// Delete Comment
export const deleteComment = (postId, commentId) => async dispatch => {
	try {
		await axios.delete(`/api/posts/comment/${postId}/${commentId}`);
		dispatch({
			type: REMOVE_COMMENT,
			payload: commentId,
		});
		dispatch(setAlert('Comment Removed', 'success'));
	} catch (e) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: e.response.statusText, status: e.response.status },
		});
	}
};
