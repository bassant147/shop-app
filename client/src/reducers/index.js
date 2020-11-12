import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import productReducer from './productReducer';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  product: productReducer
});