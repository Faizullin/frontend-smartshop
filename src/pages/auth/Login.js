import { useEffect, useState } from "react";
import BreadCumBgImage from "../../base/assets/images/inner-pages/breadcum-bg.png"
import LoginBgImage from '../../base/assets/images/inner-pages/login-bg.png'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";
import { authActions } from "../../redux/reducers/authReducer";




export default function AuthLogin(){
    const [message,setMessage] = useState('');
    const [errors,setErrors] = useState({
        'email': [],
        'password':[],
    });
    const [isLoading,setIsLoading] = useState(false);
    const [data,setData] = useState({
        'email': '',
        'password': '',
    })

    const dispatch = useDispatch();




    const handleChange = (e) => {
        setData(data => ({
            ...data,
            [e.target.name]: e.target.value,
        }))
    }
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const error = useSelector(state => state.auth.error);

    useEffect(() => {
        if (isAuthenticated) {
            console.log("Redirect to dashboard")
        } else {
            console.log("Not auth")
        }
    }, [isAuthenticated]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(data['email'], data['password']));
    };

    return (
        <main className="overflow-hidden ">
            <section className="breadcrumb-area" style={{backgroundImage: `url(${BreadCumBgImage})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb-content text-center wow fadeInUp animated">
                                <h2>Login</h2>
                                <div className="breadcrumb-menu">
                                    <ul>
                                        <li><router-link to="{name'home'}"><i className="flaticon-home pe-2"></i>Home</router-link></li>
                                        <li> <i className="flaticon-next"></i> </li>
                                        <li className="active">Login</li>
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
                                    <h2>Login</h2>
                                    <p>Don't have an account yet? <Link to={`/auth/register`}>Sign up for free</Link></p>
                                </div>
                                <form className="common-form" onSubmit={handleSubmit}>
                                    {error && (<div className="invalid-feedback"><strong><p>{error}</p></strong></div>) }
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
                                            name="password" value={data['password']} onChange={handleChange}/>
                                        <div v-if='errors.password' className="invalid-feedback">
                                            <strong>{ errors.password[0] }</strong>
                                        </div>
                                        <div className="icon icon-2 "><i className="flaticon-visibility"></i> 
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
                                    <button disabled={isLoading}
                                        type="submit" className="btn--primary style2">Login </button>
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