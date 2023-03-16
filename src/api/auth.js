import axios from 'axios';

// export const authClient = axios.create({
// 	baseURL: 'http://127.0.0.1:8000',
// 	withCredentials:true,
// });
// window.authClient = authClient//REMOVE 


// authClient.interceptors.response.use((response)=>{
// 		return response;
// 	},(error)=>{
// 	if(error.response && error.response.status == 401 || error.response.status == 419){
// 		if(store.getters.isAuthenticated){
// 			//store.dispatch('logout');
// 		}
// 		//router.push({name:'auth.login'});
// 	}
// 	return Promise.reject(error);
// });

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