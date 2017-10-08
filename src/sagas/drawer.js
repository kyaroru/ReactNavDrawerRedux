import { takeLatest, take, all, fork, call, put, cancelled, select, cancel } from 'redux-saga/effects';
import Actions from 'actions';
import { delay } from 'redux-saga';
import * as api from '../api';

function* fetchFromAPI(screenName) {
  try {
    const result = yield call(api.fetchDrawerItems, screenName);
    yield call(delay, 2000);
    if (result) {
      yield put(Actions.fetchDrawerItemsSuccess(result.title, result.items));
    }
  } finally {
    if (yield cancelled()) {
      yield put(Actions.fetchDrawerItemsFail('Fetch cancelled!'));
    }
  }
}

function* fetchDrawerItems({ screenName }) {
  const task = yield fork(fetchFromAPI, screenName);
  const { routeName } = yield take(Actions.GO_TO);
  const isFetchingDrawerItems = yield select(Actions.isFetchingDrawerItems);
  if (routeName === 'DrawerClose' && isFetchingDrawerItems) {
    yield cancel(task);
  }
}

function* watchFetchDrawerItems() {
  yield takeLatest(Actions.FETCH_DRAWER_ITEMS, fetchDrawerItems);
}

export default function* drawer() {
  yield all([
    fork(watchFetchDrawerItems),
  ]);
}
