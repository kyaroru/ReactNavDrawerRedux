const HOME = 'HOME';

export const FETCH_HOME_DATA = `${HOME}/FETCH_HOME_DATA`;
export const FETCH_HOME_DATA_SUCCESS = `${HOME}/FETCH_HOME_DATA_SUCCESS`;
export const FETCH_HOME_DATA_FAIL = `${HOME}/FETCH_HOME_DATA_FAIL`;

export const fetchHomeData = () => ({
  type: FETCH_HOME_DATA,
});

export const fetchHomeDataSuccess = data => ({
  type: FETCH_HOME_DATA_SUCCESS,
  data,
});

export const fetchHomeDataFail = error => ({
  type: FETCH_HOME_DATA_FAIL,
  error,
});
