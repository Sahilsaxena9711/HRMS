import {createAction} from 'redux-actions';
import * as constants from './constants';

export const userLoginRequest = createAction(constants.USER_LOGIN_REQUEST);
export const userLoginSuccess = createAction(constants.USER_LOGIN_SUCCESS);
export const userLoginError = createAction(constants.USER_LOGIN_ERROR);

export const userSignupRequest = createAction(constants.USER_SIGNUP_REQUEST);
export const userSignupSuccess = createAction(constants.USER_SIGNUP_SUCCESS);
export const userSignupError = createAction(constants.USER_SIGNUP_ERROR);

export const swipeRequest = createAction(constants.SWIPE_REQUEST);
export const swipeSuccess = createAction(constants.SWIPE_SUCCESS);
export const swipeError = createAction(constants.SWIPE_ERROR);

export const todayRequest = createAction(constants.TODAY_REQUEST);
export const todaySuccess = createAction(constants.TODAY_SUCCESS);
export const todayError = createAction(constants.TODAY_ERROR);

export const userMonthRequest = createAction(constants.USER_MONTH_REQUEST);
export const userMonthSuccess = createAction(constants.USER_MONTH_SUCCESS);
export const userMonthError = createAction(constants.USER_MONTH_ERROR);
