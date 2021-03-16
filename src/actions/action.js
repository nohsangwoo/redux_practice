import * as type from './types';
import { fetchPayOrders, fetchReturnOrders } from '../services/dashboard';
import { makeChartOrderSumData } from './dashboardUtils';

export const loginAction = (userData) => ({
  type: type.LOGIN_USER,
  userData,
  isLoggedIn: true,
});

export const logoutAction = () => ({
  type: type.LOGOUT_USER,
  userData: {},
  isLoggedIn: false,
});

export const detailNoticeAction = (detailNoticeData) => ({
  type: type.DETAIL_NOTICE,
  detailNoticeData,
});

export const selectShopBasicDataAction = (selectShopBasicData) => ({
  type: type.SELECT_SHOP_BASIC_DATA,
  selectShopBasicData,
});

export const selectItemAllAction = (data) => ({
  type: type.SELECT_ITEMS_ALL,
  itemsId: data,
});

export const removeSelectItemAllAction = () => ({
  type: type.REMOVE_ITEMS_ALL,
  itemsId: [],
});

export const addSelectItemAction = (data) => ({
  type: type.ADD_SELECT_ITEMS,
  itemsId: [data],
});

export const removeSelectItemAction = (itemsId) => ({
  type: type.REMOVE_SELECT_ITEMS,
  itemsId,
});

export const addExhibitionOptionAction = (data) => ({
  type: type.ADD_EXHIBITION_OPTION,
  options: data,
});

export const deleteExhibitionOptionAction = (data) => ({
  type: type.DELETE_EXHIBITION_OPTION,
  options: data,
});

export const allDeleteExhibitionOptionAction = () => ({
  type: type.ALL_DELETE_CAFE24_MAIN_OPTION,
  options: [],
});

export const addSelectNoticeAction = (data) => ({
  type: type.ADD_SELECT_NOTICE,
  noticeId: [data],
});

export const removeSelectNoticeAction = (data) => ({
  type: type.REMOVE_SELECT_NOTICE,
  noticeId: data,
});

export const removeSelectNoticeAllAction = () => ({
  type: type.REMOVE_SELECT_NOTICE_ALL,
  noticeId: [],
});

export const selectPromotionShopIdAction = (shopId) => ({
  type: type.SELECT_PROMOTIOM_SHOP_ID,
  shopId,
});

export const selectPromotionDataAction = (promotionData) => ({
  type: type.SELECT_PROMOTION_DATA,
  promotionData,
});

export const addSelectCategoryAction = (categoryId) => ({
  type: type.SELECT_CATEGORY_ID,
  categoryId,
});

export const removeSelectCategoryAction = (categoryId) => ({
  type: type.REMOVE_SELECT_CATEGORY,
  categoryId,
});

export const removeSelectAllCategoryAction = () => ({
  type: type.REMOVE_CATEGORY_ALL,
  categoryIds: [],
});

export const addSelectCategoryItemAction = (itemId) => ({
  type: type.CATEGORY_SELECT_ITEM_ID,
  itemId,
});

export const removeSelelctCategoryItemAction = (itemId) => ({
  type: type.CATEGORY_REMOVE_SELECT_ITEM,
  itemId,
});

export const selectAllCategoryItemsAction = (itemIds) => ({
  type: type.CATEGORY_SELECT_ALL_ITEMS,
  itemIds,
});

export const removeSelectAllCategoryAllItemAction = () => ({
  type: type.CATEGORY_REMOVE_SELECT_ITEMS_ALL,
  itemIds: [],
});

export const addPromotionOptionAction = (data) => ({
  type: type.ADD_PROMOTION_OPTION,
  options: data,
});

export const deletePromotionOptionAction = (data) => ({
  type: type.DELETE_PROMOTION_OPTION,
  options: data,
});

export const allDeletePromotionOptionAction = () => ({
  type: type.ALL_DELETE_PROMOTION_OPTION,
  options: [],
});

export const headerAction = (result) => ({
  type: type.HEARDER,
  header: result,
});

export const selectExhibitionAction = (result) => ({
  type: type.SELECT_EXHIBITION,
  selectItem: result,
});

export const setDashboardOrdersStartDate = (date) => ({
  type: type.DASHBOARD_ORDERS_START_DATE,
  payload: date,
});

export const setDashboardOrdersEndDate = (date) => ({
  type: type.DASHBOARD_ORDERS_END_DATE,
  payload: date,
});

export const setDashboardPayOrders = (data) => ({
  type: type.DASHBOARD_PAY_ORDERS,
  payload: data,
});

export const setDashboardReturnOrders = (data) => ({
  type: type.DASHBOARD_RETURN_ORDERS,
  payload: data,
});

export const setDashboardOrdersPlatforms = (platform) => ({
  type: type.DASHBOARD_ORDERS_PLATFORMS,
  payload: platform,
});

export const setDashboardPayOrdersSumDatapoints = ({
  data,
  platforms,
  startDate,
  endDate,
}) => {
  const dataPoints = makeChartOrderSumData({
    data,
    startDate,
    endDate,
    dateType: 'order_date',
    platforms,
    column: 'payment_amount',
  });

  return {
    type: type.DASHBOARD_PAY_ORDERS_SUM_DATAPOINTS,
    payload: dataPoints,
  };
};

export const setDashboardPayOrdersCountDatapoints = ({
  data,
  platforms,
  startDate,
  endDate,
}) => {
  const dataPoints = makeChartOrderSumData({
    data,
    startDate,
    endDate,
    dateType: 'order_date',
    platforms,
  });

  return {
    type: type.DASHBOARD_PAY_ORDERS_COUNT_DATAPOINTS,
    payload: dataPoints,
  };
};

export const setDashboardReturnOrdersSumDatapoints = ({
  data,
  platforms,
  startDate,
  endDate,
}) => {
  const dataPoints = makeChartOrderSumData({
    data,
    startDate,
    endDate,
    dateType: 'return_confirmed_date',
    platforms,
    column: 'payment_amount',
  });

  return {
    type: type.DASHBOARD_RETURN_ORDERS_SUM_DATAPOINTS,
    payload: dataPoints,
  };
};

export const setDashboardReturnOrdersCountDatapoints = ({
  data,
  platforms,
  startDate,
  endDate,
}) => {
  const dataPoints = makeChartOrderSumData({
    data,
    startDate,
    endDate,
    dateType: 'return_confirmed_date',
    platforms,
  });

  return {
    type: type.DASHBOARD_RETURN_ORDERS_COUNT_DATAPOINTS,
    payload: dataPoints,
  };
};

export const loadDashboardPayOrders = ({ startDate, endDate }) => async (
  dispatch,
  getState,
) => {
  const data = await fetchPayOrders({ startDate, endDate });
  const {
    dashboard: { platforms },
  } = getState();

  dispatch(setDashboardPayOrders(data));
  dispatch(
    setDashboardPayOrdersSumDatapoints({
      data,
      platforms,
      startDate,
      endDate,
    }),
  );
  dispatch(
    setDashboardPayOrdersCountDatapoints({
      data,
      platforms,
      startDate,
      endDate,
    }),
  );
};

export const loadDashboardReturnOrders = ({ startDate, endDate }) => async (
  dispatch,
  getState,
) => {
  const data = await fetchReturnOrders({ startDate, endDate });
  const {
    dashboard: { platforms },
  } = getState();

  dispatch(setDashboardReturnOrders(data));
  dispatch(
    setDashboardReturnOrdersSumDatapoints({
      data,
      platforms,
      startDate,
      endDate,
    }),
  );
  dispatch(
    setDashboardReturnOrdersCountDatapoints({
      data,
      platforms,
      startDate,
      endDate,
    }),
  );
};

export const currentSearchOption = (params, pageList) => ({
  type: type.EXIHIBITION_LAST_SEARCH_DATA,
  payload: {
    params,
    pageList,
  },
});

export const itemDetailPageSelectTapAction = (selectTap) => ({
  type: type.ITEM_DETAIL_SELECTED_TAP,
  selectTap,
});

export const itemDetailPageDataAction = (data) => ({
  type: type.ITEM_DETAIL_DATA,
  data,
});

export const itemDetailUpdateAppDisplaySettingAction = (appDisplaySetting) => ({
  type: type.ITEM_UPDATE_APP_DISPLAY_SETTING,
  appDisplaySetting,
});

export const itemDetailUpdateItemPriorityAction = (itemPriority) => ({
  type: type.ITEM_UPDATE_ITEM_PRIORITY,
  itemPriority,
});

export const itemDetailUpdateFetchingItemNameAction = (fetchingItemName) => ({
  type: type.ITEM_UPDATE_FETCHING_ITEM_NAME,
  fetchingItemName,
});

export const itemDetailItemId = (itemId) => ({
  type: type.ITEM_DETAIL_ITEM_ID,
  itemId,
});
