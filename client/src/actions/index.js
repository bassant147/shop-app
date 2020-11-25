import axios from 'axios';
import { SIGN_OUT, CREATE_USER, FAILED_USER_CREATION, CHECK_USER, FAILED_USER_LOGIN, FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, GET_CART, GET_WISHLIST, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, CHECKOUT, SHOW_RECEIPT, PURCHASE_HISTORY } from './types';

// User Action Creators
export const signOut = () => {
  axios.get('/auth/logout');
  return {
    type: SIGN_OUT
  }
}

/* export const fetchUser = () => async dispatch => {
    const response = await axios.get('/auth/current_user');
    dispatch({ type: FETCH_USER, payload: response.data});
} */

export const checkUser = (user) => async dispatch => {
  let userId = '';
  try {
    userId = await axios.post('/auth/login', user);
  } catch(err) {
    return dispatch({ type: FAILED_USER_LOGIN, payload: err.response.data })
  }
  dispatch({ type: CHECK_USER, payload: userId.data});    
} 

export const createUser = (user) => async dispatch => {
  let res = '';
  try {
    res = await axios.post('/auth/signup', user);
  } catch(err) {
    return dispatch({ type: FAILED_USER_CREATION, payload: err.response.data});
  }
  dispatch({ type: CREATE_USER, payload: res.data});  
} 

export const fetchAllProducts = () => async dispatch => {
  const products = await axios.get('/api/products/');
  dispatch({ type: FETCH_PRODUCTS, payload: products});
}

export const addToCart = (userId, productId) => async dispatch => {
  if(userId) {
    await axios.post('/api/products/cart/add', {userId, productId});
    dispatch({ type: ADD_TO_CART});
  } 
}

export const removeFromCart = (userId, productId) => async dispatch => {
  await axios.get(`/api/products/cart/remove/${userId}/${productId}`);
  const cart = await axios.get('/api/users/cart');
  dispatch({type: REMOVE_FROM_CART, payload: cart.data});
}

export const getCart = () => async dispatch => {  
  const cart = await axios.get('/api/users/cart');
  dispatch({ type: GET_CART, payload: cart.data});
}


export const getWishList = () => async dispatch => {
  const wishlist = await axios.get('/api/users/wishlist')
  dispatch({ type: GET_WISHLIST, payload: wishlist.data});
}

export const addToWishList = (userId, productId) => async dispatch => {
  if(userId) {
    await axios.post('/api/products/wishlist/add', {userId, productId});
    dispatch({ type: ADD_TO_WISHLIST});
  } 
}

export const removeFromWishList = (userId, productId) => async dispatch => {
  await axios.get(`/api/products/wishlist/remove/${userId}/${productId}`);
  const wishlist = await axios.get('/api/users/wishlist');
  dispatch({type: REMOVE_FROM_WISHLIST, payload: wishlist.data});
}

export const checkout = (userId) => async dispatch => {
  const orderId = await axios.post(`/api/users/order`, userId)
  dispatch({type: CHECKOUT, payload: orderId.data});
}

export const showReceipt = (orderId) => async dispatch => {
  const order = await axios.get(`/api/users/order/${orderId}`)
  dispatch({ type: SHOW_RECEIPT, payload: order.data})
}

export const getHistory = () => async dispatch => {
  const purchasedItems = await axios.get('/api/users/purchase-history')
  console.log('in getHistory action')
  console.log(purchasedItems.data)
  dispatch({ type: PURCHASE_HISTORY, payload: purchasedItems.data })
}