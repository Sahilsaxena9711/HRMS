import {takeLatest} from 'redux-saga/effects';
import * as constants from './constants';

import { loginRequest, signupRequest } from './auth/action/';
import { swipeRequest, todayRequest, userMonthRequest } from './attendance/action/';

export function* watchActions () {
  yield takeLatest(constants.USER_LOGIN_REQUEST, loginRequest);
  yield takeLatest(constants.USER_SIGNUP_REQUEST, signupRequest);
  yield takeLatest(constants.SWIPE_REQUEST, swipeRequest);
  yield takeLatest(constants.TODAY_REQUEST, todayRequest);
  yield takeLatest(constants.USER_MONTH_REQUEST, userMonthRequest);
}

export default function* rootSaga () {
  yield [
    watchActions()
  ];
}
