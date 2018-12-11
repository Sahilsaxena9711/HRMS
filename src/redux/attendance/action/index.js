import {call, put} from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';
import {CONFIG} from '../../../config/index';

export function* swipeRequest (action) {
  try {
    let time = action.payload.time;
    const response = yield call(fireAjax, 'POST', `${CONFIG.BASE_URL}${CONFIG.ATTENDANCE}/add/${time}`, {
      'username': sessionStorage.getItem('username'),
      'date': action.payload.date,
      'month': action.payload.month
    });
    if (response.data.error == "0") {
      yield put(actions.swipeSuccess(response.data));
    } else if (response.data.error === "1") {
      yield put(actions.swipeError(response.data));
    }
  } catch (e) {
    yield put(actions.swipeError('Error Occurs !!'));
    console.warn('Some error found in "swipeRequest" action\n', e);
  }
}

export function* todayRequest (action) {
  try {
    let username = sessionStorage.getItem('username');
    let date = action.payload
    const response = yield call(fireAjax, 'GET', `${CONFIG.BASE_URL}${CONFIG.ATTENDANCE}/get?username=${username}&date=${date}`, {
    });
    if (response.data.error == "0") {
      yield put(actions.todaySuccess(response.data));
    } else if (response.data.error === "1") {
      yield put(actions.todayError(response.data));
    }
  } catch (e) {
    yield put(actions.todayError('Error Occurs !!'));
    console.warn('Some error found in "todayRequest" action\n', e);
  }
}

export function* userMonthRequest (action) {
  try {
    let username = sessionStorage.getItem('username');
    let month = action.payload;
    const response = yield call(fireAjax, 'GET', `${CONFIG.BASE_URL}${CONFIG.ATTENDANCE}/get/monthly?username=${username}&month=${month}`, {
    });
    if (response.data.error == "0") {
      yield put(actions.userMonthSuccess(response.data));
    } else if (response.data.error === "1") {
      yield put(actions.userMonthError(response.data));
    }
  } catch (e) {
    yield put(actions.userMonthError('Error Occurs !!'));
    console.warn('Some error found in "userMonthRequest" action\n', e);
  }
}