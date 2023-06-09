import { Link } from "react-router-dom"
import Breadcrumbs, { BreadcrumbsLink } from "../../components/layouts/Breadcrumbs "
import Layout from "../../components/layouts/Layout"
import { useEffect, useState } from "react"
import $ from "jquery"
import { useDispatch, useSelector } from "react-redux"
import { purchaseProduct } from "../../redux/actions/productAction"

export default function CartIndex() {
    const [cartProducts, setCartProducts] = useState([])

    const getCartProducts = () => {
        const cartRaw = JSON.parse(localStorage.getItem('cart'))
        if(cartRaw){
            setCartProducts(JSON.parse(localStorage.getItem('cart')));
        }
    }
    const increaseQty = (product) => {
        product.qty++;
        if(product.qty < 1){
            product.qty = 1;
        }
        
        var tmpCartProducts = [...cartProducts]
        tmpCartProducts.forEach(el => {
            if(el.id == product.id){
                el.qty = product.qty
            }
        })
        setCartProducts(tmpCartProducts)
        updateCart();
    }
    const decreaseQty = (product) => {
        product.qty--;
        if(product.qty < 1){
            product.qty = 1;
        }
        var tmpCartProducts = [...cartProducts]
        tmpCartProducts.forEach(el => {
            if(el.id == product.id){
                el.qty = product.qty
            }
        })
        setCartProducts(tmpCartProducts)
        updateCart();
    }
    const removeProductFromCart = (product) => {
        var tmpCartProducts = cartProducts.filter(function(item){
            return item.id !== product.id;
        })
        setCartProducts(tmpCartProducts)
        updateCart(tmpCartProducts);
    }
    const updateCart = (tmpCartProducts = null) => {
        localStorage.setItem('cart',JSON.stringify(tmpCartProducts !== null ? tmpCartProducts : [...cartProducts]));
    }
    const dispatch = useDispatch()
    const { error } = useSelector(state => state.productReducer)
    const [formData, setFormData] = useState({ name: "", email: "",address: "", });
    const handleChange = (e) => setFormData(formData => ({...formData,[e.target.name]: e.target.value, }))

    const handleSubmitOrder = (e) => {
        e.preventDefault();
        dispatch(purchaseProduct({user:{...formData},products:[...cartProducts]}))
    }

    useEffect(() => {
        getCartProducts()
    }, [])
    

    
    const totalPrice = () => {
        var result = 0;
        cartProducts.forEach((product)=>{
            result += product.price * product.qty;
        });
        return result;
    } 

    return (
        <Layout>
            <main className="overflow-hidden ">
                <Breadcrumbs>
                    <BreadcrumbsLink active={true}>
                        Cart
                    </BreadcrumbsLink>
                </Breadcrumbs>
                <section className="cart-area pt-120 pb-120">
                    <div className="container">
                        <div className="row wow fadeInUp animated">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="cart-table-box">
                            <div className="table-outer">
                                <table className="cart-table">
                                    <thead className="cart-header">
                                        <tr>
                                            <th className>Product Name</th>
                                            <th className="price">Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                            <th className="hide-me" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartProducts.map((product, index) => (
                                                <tr key={product.id} data-product_id={product.id}>
                                                    <td>
                                                        <div className="thumb-box">
                                                            <Link to={`/product/${product.id}`} className="thumb">
                                                                <img src={ product.image || "" } alt=""/>
                                                            </Link> 
                                                            <Link to={`/product/${product.id}`} className="title">
                                                                <h5>{ product.name }</h5>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td>$ { Number(product.price).toFixed(2) }</td>
                                                    <td className="qty">
                                                        <div className="qtySelector text-center">
                                                            <span onClick={ () => decreaseQty(product) } className="decreaseQty">
                                                                <i className="flaticon-minus" />
                                                            </span> 
                                                            <input type="number" className="qtyValue" min={1} value={ product.qty} onChange={() => {}} />
                                                            <span onClick={ () => increaseQty(product) } className="increaseQty">
                                                                <i className="flaticon-plus" /> 
                                                            </span> 
                                                        </div>
                                                    </td>
                                                    <td className="sub-total">${ (product.qty * product.price).toFixed(2) }</td>
                                                    <td>
                                                        <div onClick={() => removeProductFromCart(product)} className="remove">
                                                            <i className="flaticon-cross" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="cart-button-box">
                                <div className="apply-coupon wow fadeInUp animated">
                                    <div className="apply-coupon-input-box mt-30 "> <input type="text" name="coupon-code" placeholder="Coupon Code" /> </div>
                                    <div className="apply-coupon-button mt-30"> <button className="btn--primary style2" type="submit">Apply Coupon</button> </div>
                                </div>
                                <div className="cart-button-box-right wow fadeInUp animated">
                                    <button className="btn--primary mt-30" type="submit">Continue Shopping
                                    </button>
                                    <button onClick={getCartProducts} className="btn--primary mt-30" type="submit">
                                    Update Cart
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <form onSubmit={handleSubmitOrder} className='col-12 col-sm-9 col-md-5'>
                                {/* { error && (<div className="invalid-feedback">
                                    <strong>{ error }</strong> 
                                </div>) } */}
                                <div className="form-group mb-2">
                                    <input type="text" placeholder="name" name="name"
                                        value={formData.name}  onChange={handleChange}/>
                                    {/* <div v-if="errors.name" className="invalid-feedback">
                                        <strong>{'{'}{'{'} errors.name[0] {'}'}{'}'}</strong>
                                    </div> */}
                                </div>
                                <div className="form-group mb-2">
                                    <input type="email" placeholder="email" name="email"
                                        value={formData.email} onChange={handleChange}/>
                                    {/* <div v-if="errors.email" className="invalid-feedback">
                                        <strong>{'{'}{'{'} errors.email[0] {'}'}{'}'}</strong>
                                    </div> */}
                                </div>
                                <div className="form-group mb-3">
                                    <input type="text" placeholder="address" name="address"
                                        value={formData.address} onChange={handleChange}/>
                                    {/* <div v-if="errors.address" className="invalid-feedback">
                                        <strong>{'{'}{'{'} errors.address[0] {'}'}{'}'}</strong>
                                    </div> */}
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button disabled={false} type="submit" className="btn btn--primary style2 col-10">Order</button>
                                </div>
                            </form>
                        </div>
                        <div className="row mt--30">
                        <div className="col-xl-6 col-lg-5 wow fadeInUp animated">
                            <div className="cart-check-out mt-30">
                            <h3>Check Out</h3>
                            <ul className="cart-check-out-list">
                                <li>
                                <div className="left">
                                    <p>Subtotal</p>
                                </div>
                                <div className="right">
                                    <p>${ totalPrice().toFixed(2) }</p>
                                </div>
                                </li>
                                <li>
                                <div className="left">
                                    <p>Shipping</p>
                                </div>
                                <div className="right">
                                    <p><span>Flat rate:</span> $0.00</p>
                                </div>
                                </li>
                                <li>
                                <div className="left">
                                    <p>Total Price:</p>
                                </div>
                                <div className="right">
                                    <p>${ totalPrice().toFixed(2) }</p>
                                </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}