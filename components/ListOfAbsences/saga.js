
import { takeEvery, all, call, put, select } from 'redux-saga/effects';
import request from '../../utils/request';
import { GET_ALL_ABSENCES_REQUEST } from './types';
import { requestGetAllAbsencesSuccess, requestGetAllAbsencesFailed } from './actions';


// Our worker Saga that logins the user
function* allAbsencesSaga(...args) {
   try {
    const currentPage = args[0].payload;
    const limit = 8;
    const filter = `?limit=${limit}&offset=${currentPage}`;
    const url =`/api/v1/absences/${filter}`;
    const response = yield call(request, url);
    console.log(response, 'response')
    const count = Math.ceil(response.count / limit);
    const newCurrentPage = currentPage + 1;
    yield put(requestGetAllAbsencesSuccess({ data: response.results, count, page: newCurrentPage }));
   } catch (err) {
     console.log(err, 'err')
    yield put(requestGetAllAbsencesFailed(err.msg));
   }
}

export default [takeEvery(GET_ALL_ABSENCES_REQUEST, allAbsencesSaga)]
