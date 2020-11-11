import { CREATE_USER, FETCH_USER, CHECK_USER, GET_CART } from '../actions/types';

const createUser = (state = {}, action) => {
  switch(action.type) {
    case CREATE_USER:
      console.log('from user reducer')
      console.log(action.payload)
      return action.payload;      
    case FETCH_USER:
      // if the user is not logged in, it returns false instead of empty string
      return { ...state, isSignedIn: true, userId: action.payload};
    case CHECK_USER:
      return { ...state, isSignedIn: true, userId: action.payload};    
    case GET_CART:
      return { ...state, cart: action.payload};
    default:
      return state
  }
}

export default createUser;