import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: false
}

const authReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch(action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload};
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null};
    default:
      return state;
  }
}

export default authReducer;