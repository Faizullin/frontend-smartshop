import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authApi from '../../../api/authApi';
import Breadcrumbs, { BreadcrumbsLink } from '../../../components/layouts/Breadcrumbs ';
import Layout from '../../../components/layouts/Layout';
import { fetchRequest, logout } from '../../../redux/actions/authAction';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrdersTable from './OrdersTable';



const CustomTab = ({
    children,
    onClick,
    ...otherProps
  }) => (
    <Tab {...otherProps}>
        {
            (onClick) ? (
                <button className="nav-link" id="v-pills-downloads-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-downloads" type="button" role="tab"
                aria-controls="v-pills-downloads" aria-selected="false"
                    onClick={onClick}> 
                    <span> { children }</span>
                </button>
            ) : (
                <button className="nav-link" id="v-pills-downloads-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-downloads" type="button" role="tab"
                aria-controls="v-pills-downloads" aria-selected="false"> 
                    <span> { children }</span>
                </button>
            )
        }
    </Tab>
);
CustomTab.tabsRole = 'Tab'

function AuthDashboard() {
    const [user, setUser] = useState({
        name:'',
        email:'',
    })
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.authReducer)
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        dispatch(fetchRequest({loading:true}));
        authApi.get('/api/user').then(e => {
            dispatch(fetchRequest({
                loading: false
            }));
            setUser(e.data)
        })
    }, [dispatch])

    const handleLogout = () => {
        dispatch(logout())
    }
    const handleDashboardOpen = () => {
        if(user.canOpenDashboard){
            window.location = '/dashboard/'
        }
    }

    if(loading){
        return <div>Loading...</div>
    }
    

  return (
        <Layout>
            <main className="overflow-hidden ">
                <Breadcrumbs title="My Account">
                    <BreadcrumbsLink active={true}>
                        My Account
                    </BreadcrumbsLink>
                </Breadcrumbs>
                <section className="my-account-page pt-120 pb-120">
                    <Tabs orientation='vertical' className="row"
                        selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <div className="col-xl-3 col-lg-4"> 
                            <div className="d-flex align-items-start">
                                <TabList>
                                <div className="nav my-account-page__menu flex-column nav-pills" id="v-pills-tab"
                                    role="tablist" aria-orientation="vertical">                                                
                                    <CustomTab>Account Detail</CustomTab>
                                    <CustomTab>Orders</CustomTab>
                                    <CustomTab onClick={handleDashboardOpen}>
                                        Shop Owner Dashboard
                                    </CustomTab>
                                    <CustomTab onClick={handleLogout}>
                                        Logout
                                    </CustomTab>
                                </div>
                                </TabList>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="tab-content " id="v-pills-tabContent">
                                <TabPanel >
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
                                </TabPanel>
                                <TabPanel>
                                    <OrdersTable />
                                </TabPanel>
                                <TabPanel>
                                    <div className="tab-pane" id="v-pills-downloads" role="tabpanel"
                                        aria-labelledby="v-pills-downloads-tab">
                                        <div className="tabs-content__single">
                                            <h4><span>Hello Admin</span> (Not Admin? Logout)</h4>
                                            <h5>From your account dashboard you can view your <span>Recent Orders, manage your
                                                    shipping</span> and <span>billing addresses,</span> and edit your
                                                <span>Password and account details</span></h5>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel></TabPanel>
                            </div>
                        </div>
                    </Tabs>
                </section>
            </main>
        </Layout>
  );
}

export default AuthDashboard;