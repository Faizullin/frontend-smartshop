import axios from "axios";
import { updateTokens } from "../redux/actions/authAction";
import store from "../redux/store";

var baseUrl = 'http://rfid-kassa.com'
if(window.baseApiUrl){ 
    baseUrl = window.baseApiUrl
}

const authApi = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    //transformRequest: [(data) => JSON.stringify(data.data)],
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
})


authApi.interceptors.request.use(
    config => {
      const token = localStorage.getItem('access');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error)
);

authApi.interceptors.response.use((response)=>{
		return response;
	},  function (error){
    const state = store.getState().authReducer
    if(error.response.status === 401){
      console.log("401 error",state.isAuthenticated)
      if(state.isAuthenticated) {
        store.dispatch(updateTokens( error))
      } else {
        window.location = '/auth/login';
        return;
      }
    }
    return Promise.reject(error);
});

export default authApi