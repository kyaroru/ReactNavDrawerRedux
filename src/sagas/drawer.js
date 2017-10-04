import { takeLatest, take, all, fork, call, put, cancelled, select, cancel } from 'redux-saga/effects';
import Actions from 'actions';
import { delay } from 'redux-saga';
import * as api from '../api';

function* fetchFromAPI() {
  try {
    const result = yield call(api.fetchDrawerItems);
    yield call(delay, 5000);
    if (result) {
      yield put(Actions.fetchDrawerItemsSuccess(result.drawerItems));
    }
  } finally {
    if (yield cancelled()) {
      yield put(Actions.fetchDrawerItemsFail('Fetch cancelled!'));
    }
  }
}

function* fetchDrawerItems() {
  const task = yield fork(fetchFromAPI);
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
