/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */

// import loginUser from 'app/api/methods/loginUser';
import { takeEvery, all } from 'redux-saga/effects';
import { LOGIN_REQUEST } from './types';

// Our worker Saga that logins the user
function* loginSaga(...args) {
   console.log(args, 'loginAsync')
}


export default function* watch() {
  yield all([takeEvery(LOGIN_REQUEST, loginSaga)]);
}