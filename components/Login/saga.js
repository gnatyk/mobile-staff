/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */

// import loginUser from 'app/api/methods/loginUser';
import { takeEvery, all, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { LOGIN_REQUEST } from './types';
import { requestLoginSuccess, requestLoginFailed } from './actions';
// Our worker Saga that logins the user
function* loginSaga(...args) {
   try {
    const url = '/api/v1/token/obtain/';
    const password = args[0].payload.pass;
    const email = args[0].payload.user;
    const response = yield call(request, url, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    yield put(requestLoginSuccess(response.token));
    //await AsyncStorage.getItem('USER_TOKEN')
     // call request


   } catch (err) {
     console.log(err,' err')
    yield put(requestLoginFailed(err.msg));
   }
}


export default function* watch() {
  yield all([takeEvery(LOGIN_REQUEST, loginSaga)]);
}