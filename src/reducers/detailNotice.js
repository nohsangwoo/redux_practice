import * as type from '../actions/types';

const initialState = {
  detailNoticeData: {}
};

const detailNotice = (state=initialState, action) => {
  switch (action.type) {
    case (type.DETAIL_NOTICE):
      return {
        ...state,
        detailNoticeData: action.detailNoticeData
      }
    default:
      return state
  }
};

export default detailNotice;
