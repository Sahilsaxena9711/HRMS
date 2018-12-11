import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../../constants';

let initialState = {
  swipe: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
  today: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
  userMonth: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
};

const swipeRequest = (state, action) => update(state, {
  swipe: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const swipeSuccess = (state, action) => update(state, {
  swipe: {
    data:       {$set: action.payload},
    isLoggedIn: {$set: true},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'swipe success'}
  }
});
const swipeError = (state, action) => update(state, {
  swipe: {
    data:       {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload.message}
  }
});


const todayRequest = (state, action) => update(state, {
  today: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const todaySuccess = (state, action) => update(state, {
  today: {
    data:       {$set: action.payload},
    isLoggedIn: {$set: true},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'today success'}
  }
});
const todayError = (state, action) => update(state, {
  today: {
    data:       {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload.message}
  }
});

const userMonthRequest = (state, action) => update(state, {
  userMonth: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const userMonthSuccess = (state, action) => update(state, {
  userMonth: {
    data:       {$set: action.payload},
    isLoggedIn: {$set: true},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'userMonth success'}
  }
});
const userMonthError = (state, action) => update(state, {
  userMonth: {
    data:       {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload.message}
  }
});

export default handleActions({
  [constants.SWIPE_REQUEST]: swipeRequest,
  [constants.SWIPE_SUCCESS]: swipeSuccess,
  [constants.SWIPE_ERROR]:   swipeError,

  [constants.TODAY_REQUEST]: todayRequest,
  [constants.TODAY_SUCCESS]: todaySuccess,
  [constants.TODAY_ERROR]:   todayError,

  [constants.USER_MONTH_REQUEST]: userMonthRequest,
  [constants.USER_MONTH_SUCCESS]: userMonthSuccess,
  [constants.USER_MONTH_ERROR]:   userMonthError,
}, initialState);
