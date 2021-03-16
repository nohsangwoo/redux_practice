import dashboard from '../dashboard';

describe('dashboard', () => {
  context('when type is DASHBOARD_ORDERS_START_DATE', () => {
    it('changes orders.date.start', () => {
      const { orders: { date: { start } } } = dashboard(
        { orders: { date: {} } },
        { type: 'DASHBOARD_ORDERS_START_DATE', payload: '2020-11-11' },
      );

      expect(start).toBe('2020-11-11');
    });
  });

  context('when type is DASHBOARD_ORDERS_END_DATE', () => {
    it('changes orders.date.end', () => {
      const { orders: { date: { end } } } = dashboard(
        { orders: { date: {} } },
        { type: 'DASHBOARD_ORDERS_END_DATE', payload: '2020-11-11' },
      );

      expect(end).toBe('2020-11-11');
    });
  });

  context('when type is DASHBOARD_PAY_ORDERS', () => {
    it('changes orders.pay', () => {
      const state = dashboard(
        { orders: { pay: [] } },
        { type: 'DASHBOARD_PAY_ORDERS', payload: ['sample pay order'] },
      );

      expect(state).toEqual({ orders: { pay: ['sample pay order'] } });
    });
  });

  context('when type is DASHBOARD_RETURN_ORDERS', () => {
    it('changes orders.pay', () => {
      const state = dashboard(
        { orders: { return: [] } },
        { type: 'DASHBOARD_RETURN_ORDERS', payload: ['sample return order'] },
      );

      expect(state).toEqual({ orders: { return: ['sample return order'] } });
    });
  });
});
