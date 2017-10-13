import { takeLatest, all, fork, call, put, take, cancelled, cancel, select } from 'redux-saga/effects';
import Actions from 'actions';
import { delay } from 'redux-saga';
import * as api from '../api';
import { appAlert } from '../utils/alert';

function* fetchFromAPI(screenName) {
  try {
    const result = yield call(api.fetchScreenData, screenName);
    yield call(delay, 3000);
    if (result) {
      yield put(Actions.fetchHomeDataSuccess(result));
    }
  } catch (error) {
    yield call(delay, 3000);
    yield put(Actions.fetchHomeDataFail(error));
    if (error && error.message) {
      yield call(appAlert, error.message);
    }
  } finally {
    if (yield cancelled()) {
      yield put(Actions.fetchHomeDataFail({ message: 'Fetch cancelled!' }));
    }
  }
}

function* fetchHomeData({ screenName }) {
  const task = yield fork(fetchFromAPI, screenName);
  const isFetchingHomeData = yield select(Actions.isFetchingHomeData);
  const result = yield take([Actions.ATTEMPT_POP_HOME_DATA, Actions.FETCH_HOME_DATA_SUCCESS]);
  if (result.type === Actions.ATTEMPT_POP_HOME_DATA) {
    if (isFetchingHomeData) {
      yield cancel(task);
    } else {
      yield put(Actions.popHomeData());
    }
  }
}

function* attemptPopHomeData() {
  const isFetchingHomeData = yield select(Actions.isFetchingHomeData);
  if (!isFetchingHomeData) {
    yield put(Actions.popHomeData());
  }
}

function* watchFetchHomeData() {
  yield takeLatest(Actions.FETCH_HOME_DATA, fetchHomeData);
}

function* watchAttemptPopHomeData() {
  yield takeLatest(Actions.ATTEMPT_POP_HOME_DATA, attemptPopHomeData);
}

export default function* home() {
  yield all([
    fork(watchFetchHomeData),
    fork(watchAttemptPopHomeData),
  ]);
}
