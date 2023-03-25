import authApi from '../../api/authApi';
import { FETCH_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS, UPDATE_TOKENS_FAILURE, UPDATE_TOKENS_SUCCESS } from './types';
import jwtDecode from 'jwt-decode';
import axios from '../../api/axios';
//axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

export const setUser = (access) => {
  if (access) {
    return jwtDecode(access);
  }
  return null;
}

export const login = (data) => async (dispatch) => {
  try {
    const response = await authApi.post(`/api/token/`, data,{headers: 
        {'Content-Type': 'application/json','Access-Control-Allow-Credentials':true}});
    var { access, refresh } = response.data;
    localStorage.setItem('access', access);
    localStorage.setItem('refresh', refresh);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { access, refresh },
    });
    
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response.data,
    });
  }
};

export const register = (data) => async (dispatch) => {
  try {
    const response = await authApi.post(`/api/register/`, data,{headers: 
        {'Content-Type': 'application/json','Access-Control-Allow-Credentials':true}});
    const { token, user } = response.data;
    dispatch({
      type: REGISTER_SUCCESS,
      payload: { token, user },
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response.data,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT_SUCCESS,
    });
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  } catch (error) {
    console.log(error);
  }
};

export const updateTokens = (prevRequestError) => {
  return (dispatch, getState) => {
    axios.post('/api/token/refresh/', {
      refresh: getState().authReducer.refresh,
    }).then((response) => {
      const { access } = response.data;
      dispatch({
        type: UPDATE_TOKENS_SUCCESS,
        payload: { access, },
      });
      localStorage.setItem('access', access);
      return authApi(prevRequestError.config)
    }).catch((error) => {
      console.log("Token update error",error)
      if (error.response.status === 401) {
        dispatch({
          type: UPDATE_TOKENS_FAILURE,
          payload: error.response.data,
        });
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        //window.location = '/auth/login';
      }
    })
  }
}

export function fetchRequest(additional) {
    return { type: FETCH_REQUEST, payload: { ...additional } };
}