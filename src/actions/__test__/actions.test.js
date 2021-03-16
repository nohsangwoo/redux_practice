import { useDispatch } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import {
  setDashboardOrdersStartDate,
  setDashboardOrdersEndDate,
  setDashboardPayOrders,
  setDashboardReturnOrders,
  loadDashboardPayOrders,
  loadDashboardReturnOrders,
} from '../action';

jest.mock('../../services/dashboard');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('react-redux');

let store;

describe('action', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    store = mockStore({});

    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  describe('setDashboardOrdersStartDate', () => {
    it('type must be DASHBOARD_ORDERS_START_DATE', () => {
      dispatch(setDashboardOrdersStartDate('2020-11-11'));

      expect(dispatch).toBeCalledWith({
        type: 'DASHBOARD_ORDERS_START_DATE',
        payload: '2020-11-11',
      });
    });
  });

  describe('setDashboardOrdersEndDate', () => {
    it('type must be DASHBOARD_ORDERS_END_DATE', () => {
      dispatch(setDashboardOrdersEndDate('2020-11-11'));

      expect(dispatch).toBeCalledWith({
        type: 'DASHBOARD_ORDERS_END_DATE',
        payload: '2020-11-11',
      });
    });
  });

  describe('setDashboardPayOrders', () => {
    it('type must be DASHBOARD_PAY_ORDERS', () => {
      dispatch(setDashboardPayOrders(['sample pay orders']));

      expect(dispatch).toBeCalledWith({
        type: 'DASHBOARD_PAY_ORDERS',
        payload: ['sample pay orders'],
      });
    });
  });

  describe('setDashboardReturnOrders', () => {
    it('type must be DASHBOARD_RETURN_ORDERS', () => {
      dispatch(setDashboardReturnOrders(['sample return orders']));

      expect(dispatch).toBeCalledWith({
        type: 'DASHBOARD_RETURN_ORDERS',
        payload: ['sample return orders'],
      });
    });
  });

  describe('loadDashboardPayOrders', () => {
    it('it loads pay orders and set pay orders', async () => {
      await store.dispatch(loadDashboardPayOrders({ startDate: '2020-11-11', endDate: '2020-11-11' }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setDashboardPayOrders([]));
    });
  });

  describe('loadDashboardReturnOrders', () => {
    it('it loads return orders and set return orders', async () => {
      await store.dispatch(loadDashboardReturnOrders({ startDate: '2020-11-11', endDate: '2020-11-11' }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setDashboardReturnOrders([]));
    });
  });
});
