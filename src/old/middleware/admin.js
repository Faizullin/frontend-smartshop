export default function admin({to,next,store}){
	if(!store.getters.isAuthenticated){
		store.dispatch('getUser').then(response=>{
			if(store.getters.isAuthenticated){
				if(store.getters.user.name==='admin'){
					authClient.get('/admin-panel').then((response)=>{
						window.location.href = window.authClient.defaults.baseURL+'/adminn'
						//next({path:window.authClient.defaults.baseURL+'/admin-panel'})
					})
					return
				}
			}
		});
	}
	next({name:'NotFound'});
}