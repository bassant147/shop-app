import axios from 'axios';
import { SIGN_IN, SIGN_OUT,FETCH_USER, CREATE_USER, CHECK_USER, FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, GET_CART, GET_WISHLIST } from './types';

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
    const response = await axios.get('/auth/current_user');
    dispatch({ type: FETCH_USER, payload: response.data});
}

export const checkUser = (user) => async dispatch => {
  const userId = await axios.post('/auth/login', user);
  dispatch({ type: CHECK_USER, payload: userId.data});    
} 

export const createUser = (user) => async dispatch => {
  await axios.post('/auth/signup', user);
  dispatch({ type: CREATE_USER, payload: user});
} 

export const fetchAllProducts = () => async dispatch => {
  const products = await axios.get('/api/products/');
  dispatch({ type: FETCH_PRODUCTS, payload: products});
}

export const addToCart = (userId, productId) => async dispatch => {
  if(userId) {
    await axios.post('/api/products', {userId, productId});
    dispatch({ type: ADD_TO_CART});
  } 
}

export const removeFromCart = (userId, productId) => async dispatch => {
  await axios.get(`/api/products/cart/${userId}/${productId}`);
  const cart = await axios.get('/api/users/cart');
  console.log('cart: ')
  dispatch({type: REMOVE_FROM_CART, payload: cart.data});
  // handle the cart coming back from removeFromCart() in cart component
}

export const getCart = () => async dispatch => {  
  const cart = await axios.get('/api/users/cart');
  dispatch({ type: GET_CART, payload: cart.data});
}


export const getWishList = () => async dispatch => {
  const wishlist = await axios.get('/api/users/wishlist')
  dispatch({ type: GET_WISHLIST, payload: wishlist.data});
}