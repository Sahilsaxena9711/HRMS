import {combineReducers} from 'redux';

import auth from './auth/reducer/index';
import attendance from './attendance/reducer/index';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    auth: auth,
    attendance: attendance,
    ...asyncReducers,
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
