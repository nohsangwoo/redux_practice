import * as type from '../actions/types';

const initialState = {
  options: [],
  selectItem: {},
  searchOption: {},
  pageList: [],
};

const exhibition = (state = initialState, action) => {
  switch (action.type) {
  case (type.ADD_EXHIBITION_OPTION):
    return {
      ...state,
      options: state.options.filter((el) => el.id !== action.options.id).concat([action.options]),
    };
  case (type.DELETE_EXHIBITION_OPTION):
    return {
      ...state,
      options: state.options.filter((el) => el.id !== action.options),
    };
  case (type.ALL_DELETE_CAFE24_MAIN_OPTION):
    return {
      ...state,
      options: action.options,
    };
  case (type.SELECT_EXHIBITION):
    return {
      ...state,
      selectItem: action.selectItem,
    };
  case (type.EXIHIBITION_LAST_SEARCH_DATA):
    return {
      ...state,
      searchOption: action.payload.params,
      pageList: action.payload.pageList,
    };
  default:
    return state;
  }
};

export default exhibition;
