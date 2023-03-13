<template>
    <main class="overflow-hidden ">
        <!--Start Breadcrumb Style2-->
        <section class="breadcrumb-area" style="background-image: url(/assets/images/inner-pages/breadcum-bg.png);">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="breadcrumb-content text-center wow fadeInUp animated">
                            <h2>Register</h2>
                            <div class="breadcrumb-menu">
                                <ul>
                                    <li><router-link :to="{name:'home'}"><i class="flaticon-home pe-2"></i>Home</router-link></li>
                                    <li> <i class="flaticon-next"></i> </li>
                                    <li class="active">Register</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="login-page pt-120 pb-120">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8 col-md-9 wow fadeInUp animated">
                        <div class="login-register-form"
                            style="background-image: url('/assets/images/inner-pages/login-bg.png');">
                            <div class="top-title text-center ">
                                <h2>Register</h2>
                                <p>Already have an account? <router-link :to="{name:'auth.login'}">Log in</router-link></p>
                            </div>
                            <form class="common-form">
                                <div v-if="message" class="invalid-feedback">
                                    <strong>{{ message }}</strong>
                                </div>
                                <div class="form-group">
                                    <input v-model="user.name" type="text" class="form-control" placeholder="Your Name">
                                    <div v-if='errors.name' class="invalid-feedback">
                                        <strong>{{ errors.name[0] }}</strong>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input v-model="user.surname" type="text" class="form-control" placeholder="Your Surname">
                                    <div v-if='errors.surnamee' class="invalid-feedback">
                                        <strong>{{ errors.surname[0] }}</strong>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input v-model="user.email" type="email" class="form-control" placeholder="Your Email">
                                    <div v-if='errors.email' class="invalid-feedback">
                                        <strong>{{ errors.email[0] }}</strong>
                                    </div>
                                </div>
                                <div class="form-group eye">
                                    <div class="icon icon-1"> <i class="flaticon-hidden"></i></div>
                                    <input v-model="user.password" type="password" id="password-field" class="form-control" placeholder="Password">
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
                                <div class="form-group">
                                    <input v-model="user.age" type="number" class="form-control" placeholder="Your Age">
                                    <div v-if='errors.age' class="invalid-feedback">
                                        <strong>{{ errors.age[0] }}</strong>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input v-model="user.address" type="text" class="form-control" placeholder="Your Address">
                                    <div v-if='errors.address' class="invalid-feedback">
                                        <strong>{{ errors.address[0] }}</strong>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <select id='user-gender'>
                                        <option disabled><span class="text-capitalize">gender</span></option>
                                        <option value="1"><span class="text-capitalize">male</span></option>
                                        <option value="2"><span class="text-capitalize">female</span></option>
                                    </select>
                                    <div v-if='errors.gender' class="invalid-feedback">
                                        <strong>{{ errors.gender[0] }}</strong>
                                    </div>
                                </div>
                                <div class="checkk ">
                                    <div class="form-check p-0 m-0"> <input type="checkbox" id="remember"> <label
                                            class="p-0" for="remember"> Accept the Terms and Privacy Policy </label>
                                    </div>
                                </div> 
                                <button @click.prevent="register"
                                    type="submit" class="btn--primary style2">Register </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End Login Page-->
    </main>
</template>
<script type="text/javascript">
    import AuthService from '@/services/AuthService'
    export default {
        name:"Register",
        mounted:function(){
            console.log("mount");
            $(document).trigger('changed');
            
            const self_user = this.user;
            $('#user-gender').on('change', function(event) {
                event.preventDefault();
                self_user.gender = $(this).siblings('.nice-select').find('ul.list .selected').data('value') || 0;
            });
        },
        data(){
            return {
                user:{
                    name:null,
                    email:null,
                    password:null,
                    password_confirmation:null,
                    surname:null,
                    age:null,
                    gender:null,
                    address:null,
                },
                message:null,
                errors:{},
            }
        },
        methods:{
            async register(){
                this.message=null;
                this.errors={};
                this.isLoading = true;
                await AuthService.register({...this.user}).then(response=>{
                    this.$router.push({name:"auth.login"})
                }).catch(error=>{
                    if(error.response && error.response.data && !error.response.data.status){
                        this.errors = error.response.data.errors || {};
                        this.message = error.response.data.message || null;
                    }
                }).finally(()=>{
                    this.isLoading = false;
                });
            }
        }
    }
</script>
<style scoped>
    .invalid-feedback{
        display: block;
    }
</style>