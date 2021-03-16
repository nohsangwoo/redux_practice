import {
  DASHBOARD_ORDERS_START_DATE,
  DASHBOARD_ORDERS_END_DATE,
  DASHBOARD_PAY_ORDERS,
  DASHBOARD_RETURN_ORDERS,
  DASHBOARD_PAY_ORDERS_SUM_DATAPOINTS,
  DASHBOARD_PAY_ORDERS_COUNT_DATAPOINTS,
  DASHBOARD_RETURN_ORDERS_SUM_DATAPOINTS,
  DASHBOARD_RETURN_ORDERS_COUNT_DATAPOINTS,
  DASHBOARD_ORDERS_PLATFORMS,
} from '../actions/types';

const initialState = {
  orders: {
    pay: [],
    return: [],
    date: {
      start: '',
      end: '',
    },
  },
  sum: {
    pay: [],
    return: [],
  },
  count: {
    pay: [],
    return: [],
  },
  platforms: ['PC쇼핑몰', '모바일웹', '네이버 페이', '스마트스토어'],
};

const dashboard = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
  case (DASHBOARD_ORDERS_START_DATE):
    return ({
      ...state,
      orders: {
        ...state.orders,
        date: {
          ...state.orders.date,
          start: payload,
        },
      },
    });
  case (DASHBOARD_ORDERS_END_DATE):
    return ({
      ...state,
      orders: {
        ...state.orders,
        date: {
          ...state.orders.date,
          end: payload,
        },
      },
    });
  case (DASHBOARD_PAY_ORDERS):
    return ({
      ...state,
      orders: {
        ...state.orders,
        pay: payload,
      },
    });
  case (DASHBOARD_RETURN_ORDERS):
    return ({
      ...state,
      orders: {
        ...state.orders,
        return: payload,
      },
    });
  case (DASHBOARD_ORDERS_PLATFORMS):
    if (new Set([...state.platforms]).has(payload)) {
      return ({
        ...state,
        platforms: [...new Set([...state.platforms]).delete(payload)],
      });
    }
    return ({
      ...state,
      platforms: [...state.platforms, payload],
    });

  case (DASHBOARD_PAY_ORDERS_SUM_DATAPOINTS):
    return ({
      ...state,
      sum: {
        ...state.sum,
        pay: payload,
      },
    });
  case (DASHBOARD_PAY_ORDERS_COUNT_DATAPOINTS):
    return ({
      ...state,
      count: {
        ...state.count,
        pay: payload,
      },
    });
  case (DASHBOARD_RETURN_ORDERS_SUM_DATAPOINTS):
    return ({
      ...state,
      sum: {
        ...state.sum,
        return: payload,
      },
    });
  case (DASHBOARD_RETURN_ORDERS_COUNT_DATAPOINTS):
    return ({
      ...state,
      count: {
        ...state.count,
        return: payload,
      },
    });
  default:
    return state;
  }
};

export default dashboard;
