import axios from 'axios';
import { SIGN_IN, SIGN_OUT,FETCH_USER, CREATE_USER, CHECK_USER, FETCH_PRODUCTS, ADD_TO_CART } from './types';

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

/* export const createUser = (user) => {
  console.log('from actions')
  console.log(user)
  axios.post('/auth/signup', user);
  return {
    type: CREATE_USER,
    payload: user
  }
} */

export const createUser = (user) => async dispatch => {
  await axios.post('/auth/signup', user);
  dispatch({ type: CREATE_USER, payload: user});
} 

export const fetchAllProducts = () => async dispatch => {
  const products = await axios.get('/api/products/');
  dispatch({ type: FETCH_PRODUCTS, payload: products});
}

export const addToCart = (userId, productId) => async dispatch => {
  const cart = await axios.post('/api/products', {userId, productId});
  dispatch({ type: ADD_TO_CART, payload: cart});
}