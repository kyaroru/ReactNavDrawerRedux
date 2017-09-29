import Actions from 'actions';

const home = (state = { data: [], isFetching: false, error: null }, action) => {
  switch (action.type) {
    case Actions.FETCH_HOME_DATA:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case Actions.FETCH_HOME_DATA_SUCCESS:
      return {
        data: action.data,
        isFetching: false,
        error: null,
      };
    case Actions.FETCH_HOME_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default home;
