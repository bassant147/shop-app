import { FETCH_PRODUCTS, GET_CART, GET_WISHLIST, ADD_TO_CART, REMOVE_FROM_CART} from '../actions/types';

const productReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return action.payload.data;          
    case GET_CART:
      return { ...state, cart: action.payload};
    case GET_WISHLIST:
      return { ...state, wishlist: action.payload}
    case ADD_TO_CART:
      // in case payload is undefined return state
      return action.payload || state;
    case REMOVE_FROM_CART:
      return { ...state, cart: action.payload};
    default:
      return state;
  }
}

export default productReducer;