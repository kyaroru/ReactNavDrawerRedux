import { combineReducers } from 'redux';

import navigation from './navigation';
import user from './user';

export default combineReducers({
  NAVIGATION: navigation,
  USER: user,
});
