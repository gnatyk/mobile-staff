
/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../../lib/createReducer';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED} from './types';

const initialState = {
  isLoggedIn: false,
  token: null,
  loading: false,
};

export const loginReducer = createReducer(initialState, {
  [LOGIN_REQUEST](state) {
    console.log('LOGIN_REQUEST');
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
  [LOGIN_FAILED](state) {
      return {
          ...state,
          loading: false
      };
  }
});
