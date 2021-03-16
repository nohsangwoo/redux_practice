import * as type from '../actions/types';

const initialState = {
  selectShopBasicData: {},
  selectShopSaleInfoData: {},
  selectShopPromotionShopId: {},
  selectPromotionData: {}
};

const selectShopData = (state = initialState, action) => {
  switch (action.type) {
    case (type.SELECT_SHOP_BASIC_DATA):
      return {
        ...state,
        selectShopBasicData: action.selectShopBasicData
      }
    case (type.SELECT_PROMOTIOM_SHOP_ID):
      return {
        ...state,
        selectShopPromotionShopId: action.shopId
      }
    case (type.SELECT_PROMOTION_DATA):
      return {
        ...state,
        selectPromotionData: action.promotionData
      }
    default:
      return state
  }
};

export default selectShopData;
