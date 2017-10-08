import { combineReducers } from 'redux';

import navigation from './navigation';
import user from './user';
import drawer from './drawer';
import home from './home';
import dashboard from './dashboard';

export default combineReducers({
  NAVIGATION: navigation,
  USER: user,
  DRAWER: drawer,
  HOME: home,
  DASHBOARD: dashboard,
});
