import { CREATE_USER, FETCH_USER, CHECK_USER, GET_CART, GET_WISHLIST } from '../actions/types';

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case CREATE_USER:
      return action.payload;      
    case FETCH_USER:
      // if the user is not logged in, it returns false instead of empty string
      return { ...state, isSignedIn: true, userId: action.payload};
    case CHECK_USER:
      return { ...state, isSignedIn: true, userId: action.payload};    
    case GET_CART:
      return { ...state, cart: action.payload};
    case GET_WISHLIST:
      return { ...state, wishlist: action.payload}
    default:
      return state
  }
}

export default userReducer;