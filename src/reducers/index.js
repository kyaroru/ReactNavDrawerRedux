import { combineReducers } from 'redux';

import navigation from './navigation';
import drawer from './drawer';
import home from './home';

export default combineReducers({
  NAVIGATION: navigation,
  DRAWER: drawer,
  HOME: home,
});
