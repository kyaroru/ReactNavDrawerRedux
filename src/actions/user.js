const AUTH = 'AUTH';
export const UPDATE_CURRENT_USER = `${AUTH}/UPDATE_CURRENT_USER`;

export const updateCurrentUser = user => ({
  type: UPDATE_CURRENT_USER,
  user,
});
