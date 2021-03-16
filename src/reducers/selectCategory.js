import * as type from "../actions/types";

const initialState = {
  categoryIds: [],
  itemIds: [],
};

const selectCategory = (state = initialState, action) => {
  switch (action.type) {
    case type.SELECT_CATEGORY_ID:
      return {
        ...state,
        categoryIds: state.categoryIds.concat(action.categoryId),
      };
    case type.REMOVE_SELECT_CATEGORY:
      return {
        ...state,
        categoryIds: state.categoryIds.filter((el) => el !== action.categoryId),
      };
    case type.REMOVE_CATEGORY_ALL:
      return {
        ...state,
        categoryIds: action.categoryIds,
      };
    case type.CATEGORY_SELECT_ITEM_ID:
      return {
        ...state,
        itemIds: state.itemIds.concat(action.itemId),
      };
    case type.CATEGORY_REMOVE_SELECT_ITEM:
      return {
        ...state,
        itemIds: state.itemIds.filter((el) => el !== action.itemId),
      };
    case type.CATEGORY_SELECT_ALL_ITEMS:
      return {
        ...state,
        itemIds: action.itemIds,
      };
    case type.CATEGORY_REMOVE_SELECT_ITEMS_ALL:
      return {
        ...state,
        itemIds: action.itemIds,
      };
    default:
      return state;
  }
};

export default selectCategory;
