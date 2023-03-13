<template>
    <main class="overflow-hidden ">
        <!--Start Breadcrumb Style2-->
        <section class="breadcrumb-area" style="background-image: url(/assets/images/inner-pages/breadcum-bg.png);">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="breadcrumb-content text-center wow fadeInUp animated">
                            <h2>Login</h2>
                            <div class="breadcrumb-menu">
                                <ul>
                                    <li><router-link :to="{name:'home'}"><i class="flaticon-home pe-2"></i>Home</router-link></li>
                                    <li> <i class="flaticon-next"></i> </li>
                                    <li class="active">Login</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="login-page pt-120 pb-120 wow fadeInUp animated">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8 col-md-9">
                        <div class="login-register-form" style="background-image: url('/assets/images/inner-pages/login-bg.png');">
                            <div class="top-title text-center ">
                                <h2>Login</h2>
                                <p>Don't have an account yet? <router-link :to="{name:'auth.register'}">Sign up for free</router-link></p>
                            </div>
                            <form class="common-form">
                                <div v-if="message" class="invalid-feedback">
                                    <strong>{{ message }}</strong>
                                </div>
                                <div class="form-group">
                                    <input v-model='user.email'
                                        type="text" class="form-control" placeholder="Your User Name (Or) Email Address" autocomplete="email"> 
                                    <div v-if='errors.email' class="invalid-feedback">
                                        <strong>{{ errors.email[0] }}</strong>
                                    </div>
                                </div>
                                <div class="form-group eye">
                                    <div class="icon icon-1">
                                        <i class="flaticon-hidden"></i>
                                    </div>
                                    <input v-model='user.password'
                                        type="password" id="password-field" class="form-control" placeholder="Password" autocomplete="password">
                                    <div v-if='errors.password' class="invalid-feedback">
                                        <strong>{{ errors.password[0] }}</strong>
                                    </div>
                                    <div class="icon icon-2 "><i class="flaticon-visibility"></i> 
                                    </div>
                                </div>
                                <div class="checkk ">
                                    <div class="form-check p-0 m-0">
                                        <input type="checkbox" id="remember">
                                        <label class="p-0" for="remember"> Remember Me</label>
                                    </div>
                                    <router-link :to="{name:'auth.forgotPassword'}" 
                                        class="forgot"> Forgot Password?</router-link>
                                </div>
                                <button :disabled="isLoading" @click.prevent="login"
                                    type="submit" class="btn--primary style2">Login </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End Login Page-->
    </main>
</template>
<script>
    import AuthService from '@/services/AuthService'
    export default {
        name:"Login",
        mounted:function(){
            console.log("mount",this.$store.getters['user'],this.$store.getters['isAuthenticated']);
            $(document).trigger('changed');
        },
        data(){
            return {
                user:{
                    'email':null,
                    'name':null,
                    'password':null,
                },
                isLoading:false,
                error:null,
                errors:{},
            }
        },
        methods:{

            async login(){
                this.message=null;
                this.errors={};
                this.isLoading = true;
                await this.$store.dispatch('login',{...this.user}).then((response)=>{
                    this.$router.push({name:'auth.myAccount'});
                }).catch(error=>{
                    if(error.response && error.response.data && !error.response.data.status){
                        this.errors = error.response.data.errors || {};
                        this.message = error.response.data.message || null;
                    }
                }).finally(()=>{
                    this.isLoading = false;
                });
            },
        }
    }
</script>
<style scoped>
    .invalid-feedback{
        display: block;
    }
</style>
