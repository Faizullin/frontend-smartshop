<template>
    <main class="overflow-hidden ">
        <section class="pt-120 pb-120 wow fadeInUp animated">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8 col-md-9">
                        <div class="login-register-form" style="background-image: url('/assets/images/inner-pages/login-bg.png');">
                            <h2 class="mb-4 text-xl font-bold text-center">New Password</h2>
                            <form @submit.prevent="resetPassword" class="common-form">
                                <div v-if='message' class="invalid-feedback">
                                    <strong>{{ message }}</strong>
                                </div>
                                <div class="form-group">
                                    <input v-model="user.email"  :class="{'form-control':errors.password}" class="form-control"
                                    type="email" placeholder="Your Email" autocomplete="email">
                                    <div v-if='errors.email' class="invalid-feedback">
                                        <strong>{{ errors.email[0] }}</strong>
                                    </div>
                                </div>
                                <div class="form-group eye">
                                    <div class="icon icon-1"> <i class="flaticon-hidden"></i></div>
                                    <input v-model="user.password" :class="{'form-control':errors.password}" class="form-control"
                                        type="password" id="password-field" placeholder="Password" autocomplete="password">
                                    <div class="icon icon-2 "><i class="flaticon-visibility"></i> </div>
                                    <div v-if='errors.password' class="invalid-feedback">
                                        <strong>{{ errors.password[0] }}</strong>
                                    </div>
                                </div>
                                <div class="form-group eye">
                                    <div class="icon icon-1">
                                        <i class="flaticon-hidden"></i>
                                    </div>
                                    <input v-model="user.password_confirmation" type="password" id="password_confirmation-field" class="form-control" placeholder="Password confirm">
                                    <div class="icon icon-2 ">
                                        <i class="flaticon-visibility"></i>
                                    </div>
                                </div>
                                <button :disabled="isLoading"
                                    type="submit" class="btn--primary style2">Send</button>                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
	import AuthService from '@/services/AuthService'
	export default {
        name:"ResetPasswordByToken",
        mounted:function(){
            console.log("mount");
            $(document).trigger('changed');
        },
        data(){
            return {
                user:{
                    'email':null,
                    'name':null,
                    'password':null,
                    'password_confirmation':null,
                    'token':null,
                },
                isLoading:false,
                message:null,
                errors:{},
                isForgotPasswordFormShow:false,
            }
        },
        methods:{
        	async resetPassword(){
        		const payload = {
        			...this.user,
        			token:this.$route.params.token,
        		};
        		this.message=null;
                this.errors={};
        		await AuthService.resetPassword(payload).then((response)=>{
        			if(this.$store.getters.isAuthenticated){
        				this.$store.dispatch('logout');
        			}
        			this.$router.push({name:'auth.login'});
        		}).catch((error)=>{
        			this.isLoading = true;
					if(error.response && error.response.data && !error.response.data.status){
					   this.message = error.response.data.message || null;
					   this.errors = error.response.data.errors || {};
					}
				}).finally(()=>{
				    this.isLoading = false;
				});
        	},
        },
	}
</script>
<style scoped>
	.invalid-feedback{
		display: block !important;
	}
</style>