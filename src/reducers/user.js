import * as type from "../actions/types";

const initialState = {
  user: {},
  isLoggedIn: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN_USER:
      return {
        ...state,
        user: action.userData,
        isLoggedIn: action.isLoggedIn,
      };
    case type.LOGOUT_USER:
      return {
        ...state,
        user: action.userData,
        isLoggedIn: action.isLoggedIn,
      };
    default:
      return state;
  }
};

export default user;
