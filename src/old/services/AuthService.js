import router from '@/router'
import axios from 'axios'
import store from '@/store'

export const authClient = axios.create({
	baseURL: 'http://127.0.0.1:8000',
	withCredentials:true,
});
window.authClient = authClient//REMOVE 


authClient.interceptors.response.use((response)=>{
		return response;
	},(error)=>{
	if(error.response && error.response.status == 401 || error.response.status == 419){
		if(store.getters.isAuthenticated){
			store.dispatch('logout');
		}
		router.push({name:'auth.login'});
	}
	return Promise.reject(error);
});
export default {
	async login(payload){
		await authClient.get('/sanctum/csrf-cookie');
		return authClient.post('/api/auth/login',payload);
	},
	logout(){
		return authClient.post('/api/auth/logout');
	},
	getUser(){
		return authClient.get('/api/auth/user');
	},
	getUserProfile(){
		return authClient.get('/api/user/profile');
	},
	async register(payload){
		await authClient.get('/sanctum/csrf-cookie');
		return authClient.post('/api/auth/register',payload);
	},
	async forgotPassword(payload) {
		await authClient.get("/sanctum/csrf-cookie");
		return authClient.post("/api/auth/forgot-password", payload);
	},
	 async resetPassword(payload) {
	    await authClient.get("/sanctum/csrf-cookie");
	    return authClient.post("/api/auth/reset-password", payload);
	},
}