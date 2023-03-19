import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Router, Switch, useLocation, useNavigate } from 'react-router-dom';
import authApi from '../../../api/authApi';
import Breadcrumbs, { BreadcrumbsLink } from '../../../components/layouts/Breadcrumbs ';
import Layout from '../../../components/layouts/Layout';
import { fetchRequest } from '../../../redux/actions/authAction';
// import LoadingIndicator from '../LoadingIndicator';
import OrdersTable from './OrdersTable';
import Profile from './Profile';

function AuthDashboard() {
    const [user, setUser] = useState({
        name:'',
        email:'',
        
    })
    const location = useLocation()
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.authReducer)
    useEffect(() => {
        dispatch(fetchRequest({loading:true}));
        authApi.get('/api/user').then(e => {
            dispatch(fetchRequest({
                loading: false
            }));
            setUser(e.data)
        })
    }, [])

    if(loading){
        return <div>Loading...</div>
    }
//   const [profile, setProfile] = useState(null);
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const [profileData, ordersData] = await Promise.all([
//           getProfile(),
//           getOrders(),
//         ]);
//         setProfile(profileData);
//         setOrders(ordersData);
//       } catch (error) {
//         console.error(error);
//         logout();
//         history.push('/login');
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [history]);

    const tabs = [
        {
        title: 'Profile',
        path: '/dashboard/profile',
        component: <Profile user={user} />,
        },
        {
        title: 'Orders',
            path: '/dashboard/orders',
            component: <OrdersTable/>,
        },
    ];

  return (
          

        <Layout>
            <main className="overflow-hidden ">
                <Breadcrumbs title="My Account">
                    <BreadcrumbsLink active={true}>
                        My Account
                    </BreadcrumbsLink>
                </Breadcrumbs>
                <section className="my-account-page pt-120 pb-120">
                    <div className="container">
                        <div v-if="isAuthenticated"
                            className="row wow fadeInUp animated">
                            <div className="col-xl-3 col-lg-4">
                                <div className="d-flex align-items-start">
                                    <div className="nav my-account-page__menu flex-column nav-pills me-3" id="v-pills-tab"
                                        role="tablist" aria-orientation="vertical">
                                        { tabs.map((tab) => (
                                            <li key={tab.path} className="nav-item">
                                                <Link
                                                className={`nav-link ${location.pathname === tab.path ? 'active' : ''}`}
                                                to={tab.path}
                                                >
                                                {tab.title}
                                                </Link>
                                            </li>
                                        ))}
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
                                     <Router>
                                    {tabs.map((tab) => (
                                    <Route key={tab.path} path={tab.path}>
                                        {tab.component}
                                    </Route>
                                    ))}
                                    </Router>
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
        </Layout>
  );
}

export default AuthDashboard;