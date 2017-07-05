/**
* @providesModule login/actions
*/

import { bindActionCreators } from 'redux';
import { store } from 'src/store';
import {
  loginRequest,
} from './loginActions';

const actions = {
  loginRequest,
};

export default bindActionCreators(actions, store.dispatch);
