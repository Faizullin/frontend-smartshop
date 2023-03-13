import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../api/auth";
import BreadCrumbIMage from "../../base/assets/images/inner-pages/breadcum-bg.png"
import LoginBgImage from '../../base/assets/images/inner-pages/login-bg.png'

export default function AuthRegister(){
    const [message,setMessage] = useState('');
    const [errors,setErrors] = useState({
        'email': [],
        'password':[],
        'password_confirmation': [],
    });
    const [isLoading,setIsLoading] = useState(false);
    const [data,setData] = useState({
        'email': '',
        'password': '',
        'password_confirmation': '',
    })

    const handleChange = (e) => {

        setData(data => ({
            ...data,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('')
        setErrors({})
        setIsLoading(true)
        
        registerUser({
            ...data
        }).then((response)=>{
            console.log("Response",response)
        }).catch(error=>{
            console.log("Error",error)

            if(error.response && error.response.data && !error.response.data.status){
                this.errors = error.response.data.errors || {};
                this.message = error.response.data.message || null;
                setErrors(errors => ({
                    ...error.response.data.errors,
                }))
                setMessage(message => error.response.data.message)
            }
        }).finally(()=>{
            setIsLoading(false)
        });
    }


    return (
        <main className="overflow-hidden ">
            <section className="breadcrumb-area" style={{backgroundImage: BreadCrumbIMage}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb-content text-center wow fadeInUp animated">
                                <h2>Register</h2>
                                <div className="breadcrumb-menu">
                                    <ul>
                                        <li><router-link to="{name'home'}"><i className="flaticon-home pe-2"></i>Home</router-link></li>
                                        <li> <i className="flaticon-next"></i> </li>
                                        <li className="active">Register</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="login-page pt-120 pb-120 wow fadeInUp animated">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-9">
                            <div className="login-register-form" style={{backgroundImage: `url(${LoginBgImage})`}}>
                                <div className="top-title text-center ">
                                    <h2>Register</h2>
                                    <p>Already have an account? <Link to="/auth/login">Log in</Link></p>
                                </div>
                                <form className="common-form" onSubmit={handleSubmit}>
                                    <div v-if="message" className="invalid-feedback">
                                        <strong>{ message }</strong>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your User Name (Or) Email Address" autoComplete="email"
                                            name="email" value={ data['email'] } onChange={handleChange}/> 
                                        <div v-if='errors.email' className="invalid-feedback">
                                            <strong>{ errors.email[0] }</strong>
                                        </div>
                                    </div>
                                    <div className="form-group eye">
                                        <div className="icon icon-1">
                                            <i className="flaticon-hidden"></i>
                                        </div>
                                        <input type="password" id="password-field" className="form-control" placeholder="Password" autoComplete="password"
                                            name="password" value={ data['password'] } onChange={handleChange}/>
                                        <div v-if='errors.password' className="invalid-feedback">
                                            <strong>{ errors.password[0] }</strong>
                                        </div>
                                        <div className="icon icon-2 "><i className="flaticon-visibility"></i> 
                                        </div>
                                    </div>
                                    <div className="form-group eye">
                                        <div className="icon icon-1">
                                            <i className="flaticon-hidden"></i>
                                        </div>
                                        <input type="password" id="password_confirmation-field" className="form-control" placeholder="Password confirm"
                                            name="password_confirmation" value={ data['password_confirmation'] } onChange={handleChange}/>
                                        <div className="icon icon-2 ">
                                            <i className="flaticon-visibility"></i>
                                        </div>
                                    </div>
                                    <div className="checkk ">
                                        <div className="form-check p-0 m-0">
                                            <input type="checkbox" id="remember"/>
                                            <label className="p-0" htmlFor="remember"> Remember Me</label>
                                        </div>
                                        <router-link to="{name'auth.forgotPassword'}" 
                                            className="forgot"> Forgot Password?</router-link>
                                    </div>
                                    <button disabled={isLoading} type="submit" className="btn--primary style2">Register </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
{/* <script>
    import AuthService from '@/services/AuthService'
    export default {
        name"Login",
        mountedfunction(){
            console.log("mount",this.$store.getters['user'],this.$store.getters['isAuthenticated']);
            $(document).trigger('changed');
        },
        data(){
            return {
                user{
                    'email'null,
                    'name'null,
                    'password'null,
                },
                isLoadingfalse,
                errornull,
                errors{},
            }
        },

    }
</script> */}
{/* <style scoped>
    .invalid-feedback{
        display block;
    }
</style> */}

}