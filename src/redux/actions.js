import {createAction} from 'redux-actions';
import * as constants from './constants';

export const userLoginRequest = createAction(constants.USER_LOGIN_REQUEST);
export const userLoginSuccess = createAction(constants.USER_LOGIN_SUCCESS);
export const userLoginError = createAction(constants.USER_LOGIN_ERROR);

export const userSignupRequest = createAction(constants.USER_SIGNUP_REQUEST);
export const userSignupSuccess = createAction(constants.USER_SIGNUP_SUCCESS);
export const userSignupError = createAction(constants.USER_SIGNUP_ERROR);
