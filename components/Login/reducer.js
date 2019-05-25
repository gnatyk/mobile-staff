
/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../../lib/createReducer';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED} from './types';

const initialState = {
  isLoggedIn: false,
  token: null,
  loading: false,
  error: null,
};

export const loginReducer = createReducer(initialState, {
  [LOGIN_REQUEST](state) {
      return {
          ...state,
          loading: true,
      };
  },
  [LOGIN_SUCCESS](state, action) {
      return {
          ...state,
          token: action.payload,
          loading: false
      };
  },
  [LOGIN_FAILED](state, action) {
      return {
          ...state,
          loading: false,
          error: action.payload
      };
  }
});
