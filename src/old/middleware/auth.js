export default function auth({to,next,store}){
	if(!store.getters.isAuthenticated){
		store.dispatch('getUser').then(res=>{
			if(!store.getters.isAuthenticated){
				next({name:"auth.login",query:{redirect:to.full_path,}});
			}else{
				next();
			}
		});
	}else{
		next();
	}
}