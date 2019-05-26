
import { takeEvery, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { LOGIN_REQUEST } from './types';
import { requestLoginSuccess, requestLoginFailed } from './actions';
import {
  AsyncStorage,
} from 'react-native';

// Our worker Saga that logins the user
function* loginSaga(...args) {
   try {
    const url = '/api/v1/token/obtain/';
    const password = args[0].payload.pass;
    const email = args[0].payload.user;
    const navigation = args[0].payload.navigation;
    const response = yield call(request, url, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    const base64Url = response.token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const objectToken = JSON.parse(window.atob(base64));
    const id = objectToken.user_id;
    yield put(requestLoginSuccess({ token: response.token, userId: id }));
    yield call([AsyncStorage, 'setItem'], '@USER_TOKEN', response.token)
    navigation.navigate('AuthLoading');

   } catch (err) {
    yield put(requestLoginFailed(err.msg));
   }
}


export default [takeEvery(LOGIN_REQUEST, loginSaga)]