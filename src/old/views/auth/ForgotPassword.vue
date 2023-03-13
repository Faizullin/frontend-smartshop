<template>
   <main class="overflow-hidden ">
        <section class="pt-120 pb-120 wow fadeInUp animated">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8 col-md-9">
                        <div class="login-register-form" style="background-image: url('/assets/images/inner-pages/login-bg.png');">
                            <h2 class="mb-4 text-xl font-bold text-center">Forgot Password</h2>
                            <form @submit.prevent="forgotPassword" class="common-form">
                                <div v-if='message' class="invalid-feedback">
                                    <strong>{{ message }}</strong>
                                </div>
                                <div class="form-group">
                                    <input v-model="user.email" :class="{'is-invalid':error,}" class="form-control"
                                      type="email" name="email" placeholder="Your Email" autocomplete="email">
                                    <div v-if='errors.email' class="invalid-feedback">
                                      <strong>{{ errors.email[0] }}</strong>
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
import AuthService from "@/services/AuthService";
export default {
  name: "ForgotPassword",
  data() {
    return {
      user:{
        email: null,
      },
      message: null,
      errors:{},
      message:null,
      isLoading:false,
    };
  },
  methods: {
    async forgotPassword() {
      this.message = null;
      this.errors = {};
      this.isLoading=true;
      await AuthService.forgotPassword({...this.user}).then(() => {
        this.message = "Reset password email sent."
        alert(this.message);
      }).catch((error) => {
        console.log(error.response.data)
        if(error.response && error.response.data && !error.response.data.status){
          this.message = error.response.data.message || null;
          this.errors = error.response.data.errors || {};
        }
      }).finally(()=>{
        this.isLoading=false;
      });
    },
  },
};
</script>
<style scoped>
  .invalid-feedback{
    display: block !important;
  }
</style>


