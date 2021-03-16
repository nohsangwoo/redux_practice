import * as type from "../actions/types";

const initialState = {
  selectTap: [],
  data: {},
  appDisplaySetting: "",
  itemPriority: "",
  fetchingItemName: "",
  itemId: "",
};

const itemDetailPage = (state = initialState, action) => {
  switch (action.type) {
    case type.ITEM_DETAIL_SELECTED_TAP:
      return {
        ...state,
        selectTap: action.selectTap,
      };
    case type.ITEM_DETAIL_DATA:
      return {
        ...state,
        data: action.data,
      };

    case type.ITEM_UPDATE_APP_DISPLAY_SETTING:
      return {
        ...state,
        appDisplaySetting: action.appDisplaySetting,
      };

    case type.ITEM_UPDATE_ITEM_PRIORITY:
      return {
        ...state,
        itemPriority: action.itemPriority,
      };

    case type.ITEM_UPDATE_FETCHING_ITEM_NAME:
      return {
        ...state,
        fetchingItemName: action.fetchingItemName,
      };

    case type.ITEM_DETAIL_ITEM_ID:
      console.log("아이템 디테일 작동");
      return {
        ...state,
        itemId: action.itemId,
      };

    default:
      return state;
  }
};

export default itemDetailPage;
