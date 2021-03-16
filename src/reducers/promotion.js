import * as type from '../actions/types';

const initialState = {
  options: []
};

const promotion = (state=initialState, action) => {
  switch (action.type) {
    case (type.ADD_PROMOTION_OPTION): 
      return {
        ...state,
        options:state.options.filter((el) => el.id !== action.options.id).concat([action.options])
      }
    case (type.DELETE_PROMOTION_OPTION):
      return {
        ...state,
        options: state.options.filter((el) => el.id !== action.options)
      }
    case (type.ALL_DELETE_PROMOTION_OPTION):
      return {
        ...state,
        options: action.options
      }
    default:
      return state
  }
};

export default promotion;
