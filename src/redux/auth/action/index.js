import {call, put} from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';
import {CONFIG} from '../../../config/index';

export function* loginRequest (action) {
  try {
    console.log(action.payload);
    
    const response = yield call(fireAjax, 'POST', `${CONFIG.BASE_URL}${CONFIG.LOGIN}`, {
      'username': action.payload.username,
      'password': action.payload.password
    });
    console.log(response);
    
    if (response.data.error == 0) {
      yield put(actions.userLoginSuccess(response.data));
    } else if (response.data.error === 1) {
      yield put(actions.userLoginError(response.data.message));
    }
  } catch (e) {
    yield put(actions.userLoginError('Error Occurs !!'));
    console.warn('Some error found in "logingRequest" action\n', e);
  }
}

export function* signupRequest (action) {
  try {
    console.log(action.payload);
    
    const response = yield call(fireAjax, 'POST', `${CONFIG.BASE_URL}${CONFIG.SIGNUP}`, {
      'name': action.payload.name,
      'email': action.payload.email,
      'username': action.payload.username,
      'password': action.payload.password
    });
    console.log(response);
    
    if (response.data.error == 0) {
      yield put(actions.userSignupSuccess(response.data));
    } else if (response.data.error === 1) {
      yield put(actions.userSignupError(response.data.message));
    }
  } catch (e) {
    yield put(actions.userSignupError('Error Occurs !!'));
    console.warn('Some error found in "SignupRequest" action\n', e);
  }
}