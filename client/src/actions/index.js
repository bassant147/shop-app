import axios from 'axios';
import { FETCH_USER, CREATE_USER } from './types';

// User Action Creators

export const fetchUser = () => async dispatch => {
    //const res = await axios.get('/api/users/current_user');

    //dispatch({ type: FETCH_USER, payload: res.data});
}

export const createUser = (user) => {
  axios.post('/api/users', user);
  return {
    type: CREATE_USER,
    payload: user
  }
}
  
