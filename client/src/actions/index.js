import axios from 'axios';
import { FETCH_USER, CREATE_USER, CHECK_USER, LOGOUT } from './types';

// User Action Creators

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/auth/current_user');

    dispatch({ type: FETCH_USER, payload: res.data});
}

export const checkUser = (user) => {
  axios.post('/auth/login', user);
  return {
      type: CHECK_USER,
      payload: user
  }
}

export const createUser = (user) => {
  axios.post('/auth/signup', user);
  return {
    type: CREATE_USER,
    payload: user
  }
}
  
export const logout = (user) => {
  axios.get('/auth/logout');
  return {
    type: LOGOUT
  }
}