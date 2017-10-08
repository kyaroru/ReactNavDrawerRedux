import Actions from 'actions';

const home = (state = { data: [], isFetching: false, error: null }, action) => {
  switch (action.type) {
    case Actions.FETCH_DASHBOARD_DATA:
      return {
        data: [],
        isFetching: true,
        error: null,
      };
    case Actions.FETCH_DASHBOARD_DATA_SUCCESS:
      return {
        data: action.data,
        isFetching: false,
        error: null,
      };
    case Actions.FETCH_DASHBOARD_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case Actions.CLEAR_DASHBOARD_DATA:
      return {
        data: [],
        isFetching: false,
        error: null,
      };
    default:
      return state;
  }
};

export default home;
