import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../../constants';

let initialState = {
  userLogin: {
    data:       {},
    isLoggedIn: false,
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
  userSignup: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  }
};

const userLoginRequest = (state, action) => update(state, {
  userLogin: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const userLoginSuccess = (state, action) => update(state, {
  userLogin: {
    data:       {$set: action.payload},
    isLoggedIn: {$set: true},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Login success'}
  }
});
const userLoginError = (state, action) => update(state, {
  userLogin: {
    data:       {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload.message}
  }
});

const userSignupRequest = (state, action) => update(state, {
  userSignup: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const userSignupSuccess = (state, action) => update(state, {
  userSignup: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Signup success'}
  }
});
const userSignupError = (state, action) => update(state, {
  userSignup: {
    data:       {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload.message}
  }
});

export default handleActions({
  [constants.USER_LOGIN_REQUEST]: userLoginRequest,
  [constants.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [constants.USER_LOGIN_ERROR]:   userLoginError,

  [constants.USER_SIGNUP_REQUEST]: userSignupRequest,
  [constants.USER_SIGNUP_SUCCESS]: userSignupSuccess,
  [constants.USER_SIGNUP_ERROR]:   userSignupError,
}, initialState);
