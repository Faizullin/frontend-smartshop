import { FETCH_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS, UPDATE_TOKENS_FAILURE, UPDATE_TOKENS_SUCCESS } from "../actions/types";


const access = localStorage.getItem('access');
const refresh = localStorage.getItem('refresh');
console.log("Initial tokens",{access,refresh})
const initialState = {
    access: access,
    refresh: refresh,
    isAuthenticated: access ? true : false,
    error: null,
    user: null,
    loading: false,
  };
  
  
  
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        access: action.payload.access,
        refresh: action.payload.refresh,
        isAuthenticated: true,
        error: null,
        user: action.payload.user,
        loading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        error: action.payload,
        user: null,
        loading: false
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        error: null,
        user: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        access: action.payload.access,
        refresh: action.payload.refresh,
        isAuthenticated: true,
        error: null,
        user: action.payload.user,
        loading: false
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        error: action.payload,
        user: null,
        loading: false
      };
    case UPDATE_TOKENS_SUCCESS:
        return {
          ...state,
          access: action.payload.access,
          //refresh: action.payload.refresh,
          isAuthenticated: true,
          error: action.payload,
          user: null,
          loading: false
        };
    case UPDATE_TOKENS_FAILURE:
      return {
        ...state,
        access: null,
        refresh: null,
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