import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import Actions from 'actions';
import { delay } from 'redux-saga';
import * as api from '../api';

function* fetchHomeData() {
  const result = yield call(api.fetchScreenData, 'HomeScreen');
  yield call(delay, 1000);
  if (result) {
    yield put(Actions.fetchHomeDataSuccess(result));
  }
}

function* watchfetchHomeData() {
  yield takeLatest(Actions.FETCH_HOME_DATA, fetchHomeData);
}

export default function* home() {
  yield all([
    fork(watchfetchHomeData),
  ]);
}
