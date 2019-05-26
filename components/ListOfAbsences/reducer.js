
/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../../lib/createReducer';
import { GET_ALL_ABSENCES_REQUEST, GET_ALL_ABSENCES_REQUEST_SUCCESS, GET_ALL_ABSENCES_REQUEST_FAILED } from './types';


const initialState = {
  allAbsences: [],
  loading: false,
  error: null,
};

export const absencesReducer = createReducer(initialState, {
  [GET_ALL_ABSENCES_REQUEST](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [GET_ALL_ABSENCES_REQUEST_SUCCESS](state, action) {
    return {
      ...state,
      allAbsences: action.payload,
      loading: false,
      error: null,
    };
  },
  [GET_ALL_ABSENCES_REQUEST_FAILED](state, action) {
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  }
});
