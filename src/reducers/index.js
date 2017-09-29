import { combineReducers } from 'redux';

import navigation from './navigation';
import user from './user';
import drawer from './drawer';

export default combineReducers({
  NAVIGATION: navigation,
  USER: user,
  DRAWER: drawer,
});
