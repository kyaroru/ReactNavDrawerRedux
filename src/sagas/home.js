import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import Actions from 'actions';
import * as api from '../api';

function* fetchHomeData() {
  const result = yield call(api.fetchHomeData);
  if (result) {
    yield put(Actions.fetchHomeDataSuccess(result.homeData));
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
