import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import Actions from 'actions';
import { delay } from 'redux-saga';
import * as api from '../api';

function* fetchDashboardData() {
  const result = yield call(api.fetchScreenData, 'DashboardScreen');
  yield call(delay, 1000);
  if (result) {
    yield put(Actions.fetchDashboardDataSuccess(result));
  }
}

function* watchFetchDashboardData() {
  yield takeLatest(Actions.FETCH_DASHBOARD_DATA, fetchDashboardData);
}

export default function* dashboard() {
  yield all([
    fork(watchFetchDashboardData),
  ]);
}
