
import { takeEvery, all, call, put, select } from 'redux-saga/effects';
import request from '../../utils/request';
import { GET_ALL_ABSENCES_REQUEST } from './types';
import { requestGetAllAbsencesSuccess, requestGetAllAbsencesFailed } from './actions';

// Our worker Saga that logins the user
function* allAbsencesSaga(...args) {
   try {
    const url =`/api/v1/absences/`;
    const response = yield call(request, url);
    yield put(requestGetAllAbsencesSuccess(response.results));

   } catch (err) {
    yield put(requestGetAllAbsencesFailed(err.msg));
   }
}

export default [takeEvery(GET_ALL_ABSENCES_REQUEST, allAbsencesSaga)]
