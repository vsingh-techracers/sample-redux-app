/**
* @providesModule src/rootReducers
*/

import { combineReducers } from 'redux';
import loginReducer from 'login/loginReducer';

const reducers = {
  loginReducer,
};

export default combineReducers(reducers);
