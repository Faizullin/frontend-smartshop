import { useEffect, useState } from "react"
import authApi from "../../../api/authApi"

export default function OrdersTable() {
    const [userPurchases,setUserPurchases] = useState([])
    const getUserPurchases = () => {
        authApi.get('/api/purchases').then((response) => {
            console.log(response.data)
            setUserPurchases(response.data)
        })
    }
    useEffect(() => {
        getUserPurchases()
    }, [])
    return (
        <div className="tab-pane" id="v-pills-orders" role="tabpanel"
            aria-labelledby="v-pills-orders-tab">
            <div className="tabs-content__single">
                <h4><span>Orders</span></h4>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Total price</th>
                            <th>Payment status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userPurchases.map((purchase,index) => (
                                <tr key={purchase.id}>
                                    <th>{ purchase.id }</th>
                                    <td>{ purchase.total_price }</td>
                                    <td>{ purchase.status }</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}