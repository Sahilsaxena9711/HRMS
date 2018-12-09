import {takeLatest} from 'redux-saga/effects';
import * as constants from './constants';

import { loginRequest, signupRequest } from './auth/action/';

export function* watchActions () {
  yield takeLatest(constants.USER_LOGIN_REQUEST, loginRequest);
  yield takeLatest(constants.USER_SIGNUP_REQUEST, signupRequest);
}

export default function* rootSaga () {
  yield [
    watchActions()
  ];
}
