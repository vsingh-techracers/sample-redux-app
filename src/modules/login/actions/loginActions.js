import { postApiAction } from 'src/api/apiActions';
import { loginUrl } from 'src/api/urls';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = (email, password) => {
  const body = { email: `${email}`, password: `${password}` };
  return postApiAction({
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
    url: loginUrl,
    body: JSON.stringify(body),
  });
};

