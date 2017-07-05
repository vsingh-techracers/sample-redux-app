/**
* @providesModule login/loginReducer
*/

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/loginActions';

const initialState = {
  isLoading: false,
  loginResponse: [],
  isLoginSuccess: false,
};

function loginReducer(state = initialState, action) {
  if (action.type === 'undefined') {
    return state;
  }

  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLoginSuccess: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loginResponse: action.data,
        isLoginSuccess: true,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        loginResponse: action.data,
        isLoginSuccess: false,
      };

    default:
      return state;
  }
}

export default loginReducer;
