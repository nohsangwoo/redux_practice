import { combineReducers } from "redux";
import user from "./user";
import detailNotice from "./detailNotice";
import selectShopData from "./selectShopData";
import selectItems from "./selectItems";
import exhibition from "./exhibition";
import selectNotice from "./selectNotice";
import selectCategory from "./selectCategory";
import promotion from "./promotion";
import dashboard from "./dashboard";
import itemDetailPage from "./itemDetailPage";
import TestReduxReducer from "./testReduxReducer";
import main from "./main";

export default combineReducers({
  user,
  detailNotice,
  selectShopData,
  selectItems,
  exhibition,
  selectNotice,
  selectCategory,
  promotion,
  dashboard,
  main,
  itemDetailPage,
  TestReduxReducer,
});
