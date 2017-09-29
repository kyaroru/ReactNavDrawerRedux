import Actions from 'actions';

const drawer = (state = { items: ['HomeScreen'], isFetching: false, error: null }, action) => {
  switch (action.type) {
    case Actions.FETCH_DRAWER_ITEMS:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case Actions.FETCH_DRAWER_ITEMS_SUCCESS:
      return {
        items: action.items,
        isFetching: false,
        error: null,
      };
    case Actions.FETCH_DRAWER_ITEMS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case Actions.UPDATE_DRAWER_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  }
};

export default drawer;
