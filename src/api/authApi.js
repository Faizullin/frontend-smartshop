import axios from "axios";
import { logout, updateTokens } from "../redux/actions/authAction";
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


let refresh = false;

authApi.interceptors.request.use(
    config => {
      const token = localStorage.getItem('access');
      if (token) {
        console.log("Set token",token)
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error)
);

authApi.interceptors.response.use((response)=>{
		return response;
	},  function (error){
    const originalRequest = error.config;
    const state = store.getState().authReducer
    // console.log("_retry" ,originalRequest._retry,originalRequest.url,(['/api/token/refresh','/api/token','/api/register'].includes(originalRequest.url)))
    if(error.response.status === 401){
      if(state.isAuthenticated) {
        console.log("Re attempt")
        store.dispatch(updateTokens(state.refresh))
      }
    }
    
    // if (error.response.status === 401 && !originalRequest._retry && !(['/api/token/refresh','/api/token','/api/register'].includes(originalRequest.url)) ) {
    //     originalRequest._retry = true;
    //     const [refreshError, res] = await authApi.post('/api/token/refresh', {
    //         refresh: store.getState().authReducer.refresh
    //     }).then(response => {
    //         const { access, refresh } = response.data;

    //         // store.dispatch(setAccessToken(access_token));
    //         // store.dispatch(setRefreshToken(refresh_token));
    //         // store.dispatch(setTokenExpiry(Date.now() + expires_in * 1000));
    //         localStorage.setItem('access', access);
    //         localStorage.setItem('refresh', refresh);

    //         originalRequest.headers.Authorization = `Bearer ${access}`;
    //         console.log("HEADER")
    //         return authApi(originalRequest);
    //     }).catch(error => {
    //         store.dispatch(logout());

    //         //window.location.location = '/auth/login';
    //         return Promise.reject(error);
    //     });
    //     return Promise.reject(error);
    //     if (refreshError) {
    //         return Promise.reject(refreshError);
    //     }
    //     return Promise.reject(error);
    // }
    return Promise.reject(error);
});

// const registerUser = async (userData) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/register`, userData);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const loginUser = async (userData) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/login`, userData);
//     return response.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// export const logout = async () => {
//   try {
//     await authClient.post(`/logout`);
//   } catch (error) {
//     throw new Error(error.response.data.message);
//   }
// };
export default authApi