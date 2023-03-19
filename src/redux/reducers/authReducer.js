// import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from "../actions/types";

import { FETCH_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS, UPDATE_TOKENS_FAILURE, UPDATE_TOKENS_SUCCESS } from "../actions/types";

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


const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');
console.log("Initial tokens",{accessToken,refreshToken})
const initialState = {
    accessToken: accessToken,
    refreshToken: refreshToken,
    isAuthenticated: accessToken ? true : false,
    error: null,
    user: null,
    loading: false,
  };
  
  
  
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isAuthenticated: true,
        error: null,
        user: action.payload.user,
        loading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        error: action.payload,
        user: null,
        loading: false
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        error: null,
        user: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isAuthenticated: true,
        error: null,
        user: action.payload.user,
        loading: false
      }
    case UPDATE_TOKENS_SUCCESS:
        return {
          ...state,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
          isAuthenticated: true,
          error: action.payload,
          user: null,
          loading: false
        };
    case UPDATE_TOKENS_FAILURE:
      return {
        ...state,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        error: action.payload,
        user: null,
        loading: false
      };
    case FETCH_REQUEST:
      return { ...state, loading: action.payload.loading , error: null };
    default:
      return state;
  }
};

  export default authReducer;