import { ADD_TO_CART, FETCH_PRODUCTS } from '../actions/types';

const productReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return action.payload.data;
    case ADD_TO_CART:
      return action.payload;
    default:
      return state;
  }
}

export default productReducer;