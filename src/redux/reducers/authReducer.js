// import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from "../actions/types";

// const initialState = {
//     isAuthenticated: false,
//     token: localStorage.getItem('token'),
//     user: null,
//     error: null,
//   };

//   const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case LOGIN_SUCCESS:
//         localStorage.setItem('token', action.payload.token);
//         return {
//           ...state,
//           isAuthenticated: true,
//           token: action.payload.token,
//           user: action.payload.user,
//           error: null,
//         };
//       case LOGIN_FAILURE:
//         localStorage.removeItem('token');
//         return {
//           ...state,
//           isAuthenticated: false,
//           token: null,
//           user: null,
//           error: action.payload,
//         };
//       case LOGOUT_SUCCESS:
//         localStorage.removeItem('token');
//         return {
//           ...state,
//           isAuthenticated: false,
//           token: null,
//           user: null,
//           error: null,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default authReducer;
const initialState = {
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
    error: null,
  };
  
  export const authActionTypes = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  };
  
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case authActionTypes.LOGIN_SUCCESS:
        return {
          ...state,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
          isAuthenticated: true,
          error: null,
        };
      case authActionTypes.LOGIN_FAILURE:
        return {
          ...state,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
          error: action.payload.error,
        };
      case authActionTypes.LOGOUT_SUCCESS:
        return {
          ...state,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;