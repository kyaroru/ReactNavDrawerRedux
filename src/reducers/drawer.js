import Actions from 'actions';

const drawer = (state = ['HomeScreen'], action) => {
  switch (action.type) {
    case Actions.UPDATE_DRAWER_ITEMS:
      return action.items;
    default:
      return state;
  }
};

export default drawer;
