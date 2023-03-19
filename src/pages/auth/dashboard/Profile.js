import Layout from "../../../components/layouts/Layout";

export default function Profile({user}) {
    if(!user){
        return <div>Loading...</div>
    }
    return (     
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