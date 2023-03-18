import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs, { BreadcrumbsLink } from "../../components/layouts/Breadcrumbs ";
import LoginBgImage from '../../base/assets/images/inner-pages/login-bg.png'
import Layout from "../../components/layouts/Layout";
import { register } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import ValidationErrorMessage from "../../components/auth/ValidationError";

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


    const dispatch = useDispatch();

    const {error, loading} = useSelector(state => state.authReducer)

    const handleChange = (e) => setData(data => ({...data, [e.target.name]: e.target.value, }))

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register({...data}));
    }
    useEffect(() => {
        console.log("EEOR to",error,error && (<div className="invalid-feedback"><strong><p>{ error.message }</p></strong></div>))
        if(error){
            setMessage(error.message)
        }
    }, [error])



    return (
        <Layout>
            <main className="overflow-hidden ">
                <Breadcrumbs title="Register">
                    <BreadcrumbsLink active={true}>Register</BreadcrumbsLink>
                </Breadcrumbs>
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
                                        <ValidationErrorMessage error={error} />
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Email Address" autoComplete="email"
                                                name="email" value={ data['email'] } onChange={handleChange}/> 
                                            <div v-if='errors.email' className="invalid-feedback ">
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
                                            <Link to="#" 
                                                className="forgot"> Forgot Password?</Link>
                                        </div>
                                        <button disabled={isLoading} type="submit" className="btn--primary style2">Register </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
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