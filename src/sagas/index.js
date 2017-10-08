import { all, fork } from 'redux-saga/effects';
import drawer from './drawer';
import home from './home';
import dashboard from './dashboard';

export default function* root() {
  yield all([
    fork(drawer),
    fork(home),
    fork(dashboard),
  ]);
}
