const DRAWER = 'DRAWER';
export const UPDATE_DRAWER_ITEMS = `${DRAWER}/UPDATE_DRAWER_ITEMS`;

export const updateDrawerItems = items => ({
  type: UPDATE_DRAWER_ITEMS,
  items,
});
