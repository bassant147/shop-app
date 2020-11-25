import { CREATE_USER, CHECK_USER, FAILED_USER_CREATION, FAILED_USER_LOGIN, SIGN_OUT} from '../actions/types';

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case CREATE_USER: 
      return { ...state, isSignedIn: true, userId: action.payload};          
    case FAILED_USER_CREATION:
      return { ...state, isSignedIn: false, error: action.payload};
    case CHECK_USER:
      return { ...state, isSignedIn: true, userId: action.payload};
    case FAILED_USER_LOGIN:
      return { ...state, isSignedIn: false, error: action.payload}
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null};
    default:
      return state
  }
}

export default userReducer;