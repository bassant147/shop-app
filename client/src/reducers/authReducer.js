import { FETCH_USER} from "../actions/types";

const authReducer = (state = null, action) => {
  console.log(action);
  switch(action.type) {
    case FETCH_USER:
      // if the user is not logged in, it returns false instead of empty string
      return action.payload || false;
    default:
      return state;
  }
}

export default authReducer;