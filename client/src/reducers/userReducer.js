import { CREATE_USER } from '../actions/types';

const createUser = (state = {}, action) => {
  switch(action.type) {
    case CREATE_USER:
      return action.payload;
    default:
      return state
  }
}

export default createUser;