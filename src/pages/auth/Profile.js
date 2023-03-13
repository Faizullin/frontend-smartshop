import { useState } from "react";
import BreadCumBgImage from "../../base/assets/images/inner-pages/breadcum-bg.png"
import LoginBgImage from '../../base/assets/images/inner-pages/login-bg.png'
import { Link, useNavigate } from "react-router-dom";

export default function AuthProfile() {
    return (
    <main className="overflow-hidden ">
        <section className="breadcrumb-area" style={{backgroundImage: `url(${BreadCumBgImage})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="breadcrumb-content text-center wow fadeInUp animated">
                            <h2>My Account </h2>
                            <div className="breadcrumb-menu">
                                <ul>
                                    <li>
                                        <Link to="/"><i className="flaticon-home pe-2"></i>Home</Link>
                                    </li>
                                    <li> <i className="flaticon-next"></i> </li>
                                    <li className="active">My Account</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="my-account-page pt-120 pb-120">
            <div className="container">
                <div v-if="isAuthenticated"
                    className="row wow fadeInUp animated">
                    <div className="col-xl-3 col-lg-4">
                        <div className="d-flex align-items-start">
                            <div className="nav my-account-page__menu flex-column nav-pills me-3" id="v-pills-tab"
                                role="tablist" aria-orientation="vertical">
                                <button className="nav-link active" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard" type="button" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">
                                    <span> Dashboard</span>
                                </button>
                                <button className="nav-link" id="v-pills-orders-tab" data-bs-toggle="pill" data-bs-target="#v-pills-orders" type="button" role="tab"
                                    aria-controls="v-pills-orders" aria-selected="false"> <span> Orders</span> </button>
                                <button className="nav-link" id="v-pills-downloads-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-downloads" type="button" role="tab"
                                    aria-controls="v-pills-downloads" aria-selected="false"> <span> Downloads</span>
                                </button> <button className="nav-link" id="v-pills-address-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-address" type="button" role="tab"
                                    aria-controls="v-pills-address" aria-selected="false"> <span> Address</span>
                                </button> <button className="nav-link" id="v-pills-account-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-account" type="button" role="tab"
                                    aria-controls="v-pills-account" aria-selected="false"> <span> Account Details</span>
                                </button>
                                <button className="nav-link" onClick={()=>{}}>
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="tab-content " id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel"
                                aria-labelledby="v-pills-dashboard-tab">
                                <div className="tabs-content__single">
                                    <h4>
                                        <span>Hello { user.name }</span>
                                    </h4>
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th>ID</th>
                                                <td>{ user.id }</td>
                                            </tr>
                                            <tr>
                                                <th>Name</th>
                                                <td>{ user.name }</td>
                                            </tr>
                                            <tr>
                                                <th>Address</th>
                                                <td>Nursultan, StrFake, 010000</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td>{ user.email }</td>
                                            </tr>
                                            <tr>
                                                <th>Age</th>
                                                <td>{ user.age }</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-orders" role="tabpanel"
                                aria-labelledby="v-pills-orders-tab">
                                <div className="tabs-content__single">
                                    <h4><span>Orders</span></h4>
                                    <template v-if="user.orders.length>0">
                                        <table className="table table-bordered">
                                            <thead>
                                                <th>ID</th>
                                                <th>Total price</th>
                                                <th>Payment status</th>
                                            </thead>
                                            <tbody>
                                                {/* <tr v-for="userOrder in user.orders">
                                                    <th>{{ userOrder.id }}</th>
                                                    <td>{{ userOrder.total_price }}</td>
                                                    <td>{{ userOrder.payment_status }}</td>
                                                </tr> */}
                                            </tbody>
                                        </table>
                                    </template>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-downloads" role="tabpanel"
                                aria-labelledby="v-pills-downloads-tab">
                                <div className="tabs-content__single">
                                    <h4><span>Hello Admin</span> (Not Admin? Logout)</h4>
                                    <h5>From your account dashboard you can view your <span>Recent Orders, manage your
                                            shipping</span> and <span>billing addresses,</span> and edit your
                                        <span>Password and account details</span></h5>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-address" role="tabpanel"
                                aria-labelledby="v-pills-address-tab">
                                <div className="tabs-content__single">
                                    <h4><span>Address</span></h4>
                                    <h5>{ user.address }</h5>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-account" role="tabpanel"
                                aria-labelledby="v-pills-account-tab">
                                <div className="tabs-content__single">
                                    <h4><span>Hello Admin</span> (Not Admin? Logout)</h4>
                                    <h5>From your account dashboard you can view your <span>Recent Orders, manage your
                                            shipping</span> and <span>billing addresses,</span> and edit your
                                        <span>Password and account details</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
    )
}
{/* <script>
    import AuthService from '@/services/AuthService'

    export default {
        name: "MyAccount",
        mounted(){
            this.getUserData();
        },
        data() {
            return {
                user:{

                },
                isLoading:false,
                isAuthenticated:false,
            };
        },
        methods: {
            getUserData() {
                this.isLoading = true;
                AuthService.getUserProfile().then((response)=>{
                    if(this.$store.getters.isAuthenticated){
                        this.user = response.data.user;
                        this.isAuthenticated = true;
                    }
                }).catch((error)=>{
                    this.$router.push({name:'auth.login',query:{redirect:window.location()}});
                }).finally(()=>{
                    this.isLoading = false;
                    $(document).trigger('changed');
                });
            },
            logout(){
                this.$store.dispatch('logout');
            },
        },
    };
</script> */}