import * as type from "../actions/types";

const initialState = {
  text: { text: "text" },
  isLoggedIn: false,
};

const testReduxReducer = (state = initialState, action) => {
  console.log("리듀서 건듬");
  switch (action.type) {
    case type.TEST_REDUX_TEXT:
      console.log("테스트 리덕스 작동", action);
    // return {
    //   ...state,
    //   user: action.userData,
    //   isLoggedIn: action.isLoggedIn,
    // };
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

export default testReduxReducer;
