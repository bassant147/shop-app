import { FETCH_PRODUCTS } from '../actions/types';

const productReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS:
      console.log('product reducer')
      console.log(action.payload.data)
      return action.payload.data;
    default:
      return state;
  }
}

export default productReducer;