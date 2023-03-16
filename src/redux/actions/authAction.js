import axios from '../../api/axios';
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './types';

axios.defaults.withCredentials = true;
//axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';



export const login = (email, password) => async (dispatch) => {
  try {
    var bodyFormData = new FormData();
    const response = await axios.post(`/api/login/`, {email,password},{headers: 
        {'Content-Type': 'application/json',withCredentials: true}}).catch(e => {
          console.log("Error",e)
        });
    const { token, user } = response.data;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token, user },
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
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
  } catch (error) {
    console.log(error);
  }
};
