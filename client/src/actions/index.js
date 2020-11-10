import axios from 'axios';
import { SIGN_IN, SIGN_OUT,FETCH_USER, CREATE_USER, CHECK_USER, FETCH_PRODUCTS } from './types';

// User Action Creators
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  axios.get('/auth/logout');
  return {
    type: SIGN_OUT
  }
}

export const fetchUser = () => async dispatch => {
    const userId = await axios.get('/auth/current_user');

    dispatch({ type: FETCH_USER, payload: userId});
}

export const checkUser = (user) => async dispatch => {
  const userId = await axios.post('/auth/login', user);
  dispatch({ type: CHECK_USER, payload: userId.data});    
} 

export const createUser = (user) => {
  axios.post('/auth/signup', user);
  return {
    type: CREATE_USER,
    payload: user
  }
}

export const fetchAllProducts = () => async dispatch => {
  const products = await axios.get('/api/products/');
  dispatch({ type: FETCH_PRODUCTS, payload: products});
}