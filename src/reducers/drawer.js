import Actions from 'actions';

const drawer = (state = { title: 'Drawer Items', link: 'video-11-complain', items: [], isFetching: false, error: null }, action) => {
  switch (action.type) {
    case Actions.FETCH_DRAWER_ITEMS:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case Actions.FETCH_DRAWER_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.items,
        title: action.title,
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
    case Actions.SET_DRAWER_LINK:
      return {
        ...state,
        link: action.link,
      };
    default:
      return state;
  }
};

export default drawer;
