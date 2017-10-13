import Actions from 'actions';

const popHomeData = (data) => {
  if (data.length > 1) {
    const newData = [
      ...data,
    ];
    newData.pop();
    return newData;
  }
  return data;
};

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
        data: [
          ...state.data,
          action.data,
        ],
        isFetching: false,
        error: null,
      };
    case Actions.FETCH_HOME_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case Actions.CLEAR_HOME_DATA:
      return {
        data: [],
        isFetching: false,
        error: null,
      };
    case Actions.POP_HOME_DATA:
      return {
        data: popHomeData(state.data),
        isFetching: false,
        error: null,
      };
    default:
      return state;
  }
};

export default home;
