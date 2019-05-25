import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED} from './types';

export function requestLogin(payload) {
  return {
      type: LOGIN_REQUEST,
      payload,
  };
}

export function requestLoginSuccess(response) {
  return {
      type: LOGIN_SUCCESS,
      payload: response,
  };
}

export function requestLoginFailed(error) {
  return {
      type: LOGIN_FAILED,
      payload: error,
  };
}