import axios from '../../api/axios';
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS } from './types';

axios.defaults.withCredentials = true;
//axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';



export const login = (data) => async (dispatch) => {
  try {
    var bodyFormData = new FormData();
    const response = await axios.post(`/api/token/`, data,{headers: 
        {'Content-Type': 'application/json','Access-Control-Allow-Credentials':true}});
    const { accessToken, refreshToken } = response.data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { accessToken, refreshToken },
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
    const response = await axios.post(`/api/register/`, data,{headers: 
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
    await axios.post(`/logout`);
    dispatch({
      type: LOGOUT_SUCCESS,
    });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  } catch (error) {
    console.log(error);
  }
};

export const updateTokens = (refreshToken) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/token/refresh/', {
        refreshToken,
      });
      const accessToken = response.data.access;
      dispatch({
        type: UPDATE_TOKENS_SUCCESS,
        payload: { accessToken },
      });
    } catch (error) {
      dispatch({
        type: UPDATE_TOKENS_FAILURE,
        payload: error.response.data,
      });
    }
  };
};