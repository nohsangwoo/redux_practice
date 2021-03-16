import * as type from "../actions/types";

const initialState = {
  noticeId: [],
};

const selectNotices = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_SELECT_NOTICE:
      return {
        ...state,
        noticeId: state.noticeId.concat(action.noticeId),
      };
    case type.REMOVE_SELECT_NOTICE:
      return {
        ...state,
        noticeId: state.noticeId.filter((el) => el !== action.noticeId),
      };
    case type.REMOVE_SELECT_NOTICE_ALL:
      return {
        ...state,
        noticeId: action.noticeId,
      };
    default:
      return state;
  }
};

export default selectNotices;
