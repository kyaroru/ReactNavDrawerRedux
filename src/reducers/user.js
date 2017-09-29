import Actions from 'actions';

const currentUser = (state = {}, action) => {
  switch (action.type) {
    case Actions.UPDATE_CURRENT_USER:
      return action.user;
    default:
      return state;
  }
};

export default currentUser;
