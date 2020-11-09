import { FETCH_USER, CHECK_USER, LOGOUT } from "../actions/types";

const authReducer = (state = null, action) => {
  console.log(action);
  switch(action.type) {
    case FETCH_USER:
      // if the user is not logged in, it returns false instead of empty string
      return action.payload || false;
    case CHECK_USER:
      return action.payload || false;
    case LOGOUT:
      return false;
    default:
      return state;
  }
}

export default authReducer;