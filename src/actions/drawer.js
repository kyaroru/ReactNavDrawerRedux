const DRAWER = 'DRAWER';

export const FETCH_DRAWER_ITEMS = `${DRAWER}/FETCH_DRAWER_ITEMS`;
export const FETCH_DRAWER_ITEMS_SUCCESS = `${DRAWER}/FETCH_DRAWER_ITEMS_SUCCESS`;
export const FETCH_DRAWER_ITEMS_FAIL = `${DRAWER}/FETCH_DRAWER_ITEMS_FAIL`;

export const UPDATE_DRAWER_ITEMS = `${DRAWER}/UPDATE_DRAWER_ITEMS`;
export const SET_DRAWER_LINK = `${DRAWER}/SET_DRAWER_LINK`;

export const isFetchingDrawerItems = store => store[DRAWER].isFetching;
export const getDrawerLink = store => store[DRAWER].link;

export const setDrawerLink = link => ({
  type: SET_DRAWER_LINK,
  link,
});

export const fetchDrawerItems = () => ({
  type: FETCH_DRAWER_ITEMS,
});

export const fetchDrawerItemsSuccess = (title, items) => ({
  type: FETCH_DRAWER_ITEMS_SUCCESS,
  title,
  items,
});

export const fetchDrawerItemsFail = error => ({
  type: FETCH_DRAWER_ITEMS_FAIL,
  error,
});

export const updateDrawerItems = items => ({
  type: UPDATE_DRAWER_ITEMS,
  items,
});
