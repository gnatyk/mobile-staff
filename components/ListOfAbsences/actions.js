import { GET_ALL_ABSENCES_REQUEST, GET_ALL_ABSENCES_REQUEST_SUCCESS, GET_ALL_ABSENCES_REQUEST_FAILED } from './types';

export function requestGetAllAbsences(payload) {
  return {
    type: GET_ALL_ABSENCES_REQUEST,
    payload,
  };
}

export function requestGetAllAbsencesSuccess(response) {
  return {
    type: GET_ALL_ABSENCES_REQUEST_SUCCESS,
    payload: response,
  };
}

export function requestGetAllAbsencesFailed(error) {
  return {
    type: GET_ALL_ABSENCES_REQUEST_FAILED,
    payload: error,
  };
}