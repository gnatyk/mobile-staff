
import { all } from 'redux-saga/effects';
import loginSaga from '../components/Login/saga';
import absencesSaga from '../components/ListOfAbsences/saga';


export default function* watch() {
  yield all([
    ...loginSaga,
    ...absencesSaga
  ])
}