import {call, put} from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';
import {CONFIG} from '../../../config/index';

export function* loginRequest (action) {
  try {
    const response = yield call(fireAjax, 'POST', `${CONFIG.BASE_URL}${CONFIG.LOGIN}`, {
      'username': action.payload.username,
      'password': action.payload.password
    });
    if (response.data.error == "0") {
      console.log(response.data.error);
      
      yield put(actions.userLoginSuccess(response.data));
      sessionStorage.setItem('username', response.data.data.username)
    } else if (response.data.error === "1") {
      yield put(actions.userLoginError(response.data));
    }
  } catch (e) {
    yield put(actions.userLoginError('Error Occurs !!'));
    console.warn('Some error found in "logingRequest" action\n', e);
  }
}

export function* signupRequest (action) {
  try {
    const response = yield call(fireAjax, 'POST', `${CONFIG.BASE_URL}${CONFIG.SIGNUP}`, {
      'name': action.payload.name,
      'email': action.payload.email,
      'username': action.payload.username,
      'password': action.payload.password
    });
    if (response.data.error == "0") {
      yield put(actions.userSignupSuccess(response.data));
    } else if (response.data.error === "1") {
      yield put(actions.userSignupError(response.data));
    }
  } catch (e) {
    yield put(actions.userSignupError('Error Occurs !!'));
    console.warn('Some error found in "SignupRequest" action\n', e);
  }
}