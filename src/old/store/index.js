import Vuex from 'vuex'
import router from '@/router'
import AuthService from '@/services/AuthService'


export default new Vuex.Store({
	state: {
		auth:{
			user:null,
			isAuthenticated:false,
		}
	},
	getters: {
		isAuthenticated: state => state.auth.isAuthenticated,
		user: state => state.auth.user,
		vreified: state=> (state.user) ? state.user.email_verified_at : null,
	},
	mutations:{
		setUser(state,payload){
			state.auth.user = payload;
			state.auth.isAuthenticated = true;
		},
		clearUser(state){
			state.auth.user = {};
			state.auth.isAuthenticated = false;
		},
	},
	actions:{
		setToken({commit} ,token=null ){
			console.log("SETTOKEN",token)
			if(token===null){
				token = localStorage.getItem('access_token');
			}else{
				localStorage.setItem('access_token',token);
			}
			if(token){
				authClient.defaults.headers.common['Authorization']=`Bearer ${token}`;
			}
		},
		clearToken(){
			localStorage.removeItem('access_token');
		},
		logout({commit,dispatch,getters}){
			console.log("LOG OUT")
			return AuthService.logout().then((response)=>{
				commit('clearUser');
				dispatch('setToken','');
				if(router.currentRoute.name !== 'auth.login'){
					router.push({name:'auth.login'})
				}
			}).catch(error=>{
				commit('clearUser');
			});
		},
		async login({dispatch},payload){
			return await AuthService.login(payload).then((response)=>{
				if(response.data.status){
					dispatch('setToken',response.data.access_token)
				}
			});
			
		},
		async getUser({commit}){
			const response = await AuthService.getUser();
			if(response.data.user){
				commit('setUser',response.data.user);
				return response.data.user;
			}
			commit('clearUser');
		},
	},

});