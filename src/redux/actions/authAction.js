import axios from 'axios';
import jQuery from 'jquery';

export const authActionTypes = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
};
axios.defaults.withCredentials = true;
//axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
const myApi = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 10000,
  withCredentials: true,
  transformRequest: [(data) => JSON.stringify(data.data)],
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = jQuery.trim(cookies[i]);
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
fetch('http://localhost:8000/api/login',{
  method:"POST",
  credentials: "same-origin",
  headers: {
    "X-CSRFToken": getCookie("csrftoken"),
    "Accept": "application/json",
    'Content-Type': 'application/json'
  },
})

export const login = (email, password) => async (dispatch) => {
  try {
    var bodyFormData = new FormData();
    const response = await myApi.post(`/api/login/`, {email,password},{headers: 
        {'Content-Type': 'application/json',withCredentials: true}}).catch(e => {
          console.log("Error",e)
        });
    const { token, user } = response.data;
    dispatch({
      type: authActionTypes.LOGIN_SUCCESS,
      payload: { token, user },
    });
  } catch (error) {
    dispatch({
      type: authActionTypes.LOGIN_FAILURE,
      payload: error.response.data,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.post(`/logout`);
    dispatch({
      type: authActionTypes.LOGOUT_SUCCESS,
    });
  } catch (error) {
    console.log(error);
  }
};
