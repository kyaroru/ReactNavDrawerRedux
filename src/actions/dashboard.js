const DASHBOARD = 'DASHBOARD';

export const FETCH_DASHBOARD_DATA = `${DASHBOARD}/FETCH_DASHBOARD_DATA`;
export const FETCH_DASHBOARD_DATA_SUCCESS = `${DASHBOARD}/FETCH_DASHBOARD_DATA_SUCCESS`;
export const FETCH_DASHBOARD_DATA_FAIL = `${DASHBOARD}/FETCH_DASHBOARD_DATA_FAIL`;
export const CLEAR_DASHBOARD_DATA = `${DASHBOARD}/CLEAR_DASHBOARD_DATA`;

export const fetchDashboardData = () => ({
  type: FETCH_DASHBOARD_DATA,
});

export const fetchDashboardDataSuccess = data => ({
  type: FETCH_DASHBOARD_DATA_SUCCESS,
  data,
});

export const fetchDashboardDataFail = error => ({
  type: FETCH_DASHBOARD_DATA_FAIL,
  error,
});

export const clearDashboardData = () => ({
  type: CLEAR_DASHBOARD_DATA,
});
