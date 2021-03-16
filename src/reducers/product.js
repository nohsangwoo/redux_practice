import * as type from '../actions/types';

const initialState = {
  items: []
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case (type.SET_PRODUCT_ITEMS):
      return {
        ...state,
        items: action.items
      }
    case (type.MORE_PRODUCT_ITEMS): 
      return {
        ...state,
        items: state.items.concat(action.items)
      }
    default:
      return state
  }
};

export default product;
