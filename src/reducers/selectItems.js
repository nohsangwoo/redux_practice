import * as type from '../actions/types';

const initialState = {
  itemsId: [],
};

const selectItems = (state = initialState, action) => {
  switch (action.type) {
  case (type.SELECT_ITEMS_ALL):
    return {
      ...state,
      itemsId: action.itemsId,
    };
  case (type.REMOVE_ITEMS_ALL):
    return {
      ...state,
      itemsId: action.itemsId,
    };
  case (type.ADD_SELECT_ITEMS):
    return {
      ...state,
      itemsId: state.itemsId.concat(action.itemsId),
    };
  case (type.REMOVE_SELECT_ITEMS):
    return {
      ...state,
      itemsId: state.itemsId.filter((el) => el !== action.itemsId),
    };
  default:
    return state;
  }
};

export default selectItems;
