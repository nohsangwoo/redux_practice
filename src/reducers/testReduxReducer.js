import { useSelector } from "react-redux";
import * as type from "../actions/types";

const initialState = {
  text: "",
  isLoggedIn: false,
};

const TestReduxReducer = (state = initialState, action) => {
  // const item = useSelector((state) => state.dashboard);
  console.log("건드림");
  switch (action.type) {
    case type.TEST_REDUX_TEXT:
      console.log("테스트 리덕스 작동", action);
      return {
        ...state,
        text: action.text,
        isLoggedIn: action.isLoggedIn,
      };
    default:
      return state;
  }
};

export default TestReduxReducer;
