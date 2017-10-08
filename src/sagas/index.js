import { all, fork } from 'redux-saga/effects';
import drawer from './drawer';
import home from './home';

export default function* root() {
  yield all([
    fork(drawer),
    fork(home),
  ]);
}
