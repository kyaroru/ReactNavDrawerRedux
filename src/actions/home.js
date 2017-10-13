const HOME = 'HOME';

export const FETCH_HOME_DATA = `${HOME}/FETCH_HOME_DATA`;
export const FETCH_HOME_DATA_SUCCESS = `${HOME}/FETCH_HOME_DATA_SUCCESS`;
export const FETCH_HOME_DATA_FAIL = `${HOME}/FETCH_HOME_DATA_FAIL`;
export const CLEAR_HOME_DATA = `${HOME}/CLEAR_HOME_DATA`;
export const ATTEMPT_POP_HOME_DATA = `${HOME}/ATTEMPT_POP_HOME_DATA`;
export const POP_HOME_DATA = `${HOME}/POP_HOME_DATA`;

export const isFetchingHomeData = store => store.HOME.isFetching;

export const getCurrentHomeData = (store) => {
  const data = store.HOME.data;
  const lastIndex = data.length - 1;
  return data[lastIndex];
};

export const getHomeDataLength = (store) => {
  const data = store.HOME.data;
  const length = data.length;
  return length;
};

export const fetchHomeData = screenName => ({
  type: FETCH_HOME_DATA,
  screenName,
});

export const fetchHomeDataSuccess = data => ({
  type: FETCH_HOME_DATA_SUCCESS,
  data,
});

export const fetchHomeDataFail = error => ({
  type: FETCH_HOME_DATA_FAIL,
  error,
});

export const clearHomeData = () => ({
  type: CLEAR_HOME_DATA,
});

export const attemptPopHomeData = () => ({
  type: ATTEMPT_POP_HOME_DATA,
});

export const popHomeData = () => ({
  type: POP_HOME_DATA,
});
