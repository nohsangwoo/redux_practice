import * as type from '../actions/types';

const initialState = {
  header: true
};

const main = (state=initialState, actions) => {
  switch (actions.type) {
    case (type.HEARDER):
      return {
        ...state,
        header: actions.header
      }
    default:
      return state
  }
};

export default main;
