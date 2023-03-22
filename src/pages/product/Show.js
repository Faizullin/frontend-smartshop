import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumbs, { BreadcrumbsLink } from "../../components/layouts/Breadcrumbs ";
import { getProduct } from "../../redux/actions/productAction";
import Layout from "../../components/layouts/Layout";

export default function ProductShow() {
    const params = useParams();
    const { product, loading } = useSelector(state => state.productReducer);
    const [product_quantity, setProduct_quantity] = useState(1)
    const dispatch = useDispatch();

    const addToCart = () => {
        var cart = localStorage.getItem('cart');
        if(!cart){
            localStorage.setItem('cart',JSON.stringify({
                'id': params.id,
                'qty': product_quantity,
            }));
        }else{
            cart = JSON.stringify({
                'id': params.id,
                'qty': product_quantity,
            })
        }  
    }
    useEffect(() => {
        dispatch(getProduct(params.id));
    }, [dispatch]);
    return (
        <Layout>
            <main>
                <Breadcrumbs>
                    <BreadcrumbsLink active={true}>
                        Product Details
                    </BreadcrumbsLink>
                </Breadcrumbs>
                <section className="shop-details-top two ">
                    <div className="container">
                        <div className="row mt--30">
                            <div className="col-xl-6 col-lg-6 mt-30 wow fadeInUp animated">
                                <div className="single-product-box one">
                                    <div v-if="product" className="big-product single-product-one slider-for">
                                        <div v-for="productImage in product.product_images">
                                            <div className="single-item">
                                                <img src={product?.image ?? ""} alt=""/>
                                                <div className="ptag"> <span className="one">-20% </span> </div> <a href="#0"
                                                    className="love"> <i className="flaticon-like"></i> </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="navholder">
                                        <div v-if="product" className="product-slicknav single-product-one-nav slider-nav">
                                            <div v-for="productImage in product.product_images"> 
                                                <span className="single-item">
                                                    <img src={product?.image ?? ""} alt=""/>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 mt-30 wow fadeInUp animated">
                                <div className="shop-details-top-right ">
                                    <div v-if="product"  className="shop-details-top-right-content-box">
                                        <div className="shop-details-top-review-box">
                                            <div className="shop-details-top-review">
                                                <ul>
                                                    <li><i className="flaticon-star-1"></i></li>
                                                    <li><i className="flaticon-star-1"></i></li>
                                                    <li><i className="flaticon-star-1"></i></li>
                                                    <li><i className="flaticon-star-1"></i></li>
                                                    <li><i className="flaticon-star-1"></i></li>
                                                </ul>
                                                <p>(2 Reviews)</p>
                                            </div>
                                        </div>
                                        <div   className="shop-details-top-title">
                                            <h3>{ product?.name }</h3>
                                        </div>
                                        <ul className="shop-details-top-info">
                                            <li><span>Product Type:</span> { product?.type?.name || "~UD" } </li>
                                            <li>
                                                <span>Vendor:</span> 
                                                <span v-if="product.user"> { product?.user?.name || "~UD" }</span>
                                                <span v-else="" className="text-muted text-capitalize"> Unknown</span>
                                            </li>
                                        </ul>
                                        <div className="shop-details-top-price-box">
                                            <h3>${ Number(product.price).toFixed(2) } <del>$50.00</del></h3>
                                            <p>(+15% Vat Included)</p>
                                        </div>
                                        <p className="shop-details-top-product-sale"><span>20</span> Products sold in last 12 hours
                                        </p>
                                    {/* <div className="shop-details-top-color-sky-box">
                                            <h4>Color: ()</h4>
                                            <ul className="varients">
                                                <li> <a href="#0" className="shop-details-top-color-sky-img"
                                                        data-src="/assets/images/shop/products-img1.jpg"> <img
                                                            src="/assets/images/shop/shop-details-top-color-sky-img-1.jpg"
                                                            alt=""/> </a> </li>
                                                <li> <a href="#0" className="shop-details-top-color-sky-img"
                                                        data-src="/assets/images/shop/products-img2.jpg"> <img
                                                            src="/assets/images/shop/shop-details-top-color-sky-img-2.jpg"
                                                            alt=""/> </a> </li>
                                                <li> <a href="#0" className="shop-details-top-color-sky-img"
                                                        data-src="/assets/images/shop/products-img3.jpg"> <img
                                                            src="/assets/images/shop/shop-details-top-color-sky-img-3.jpg"
                                                            alt=""/> </a> </li>
                                                <li> <a href="#0" className="shop-details-top-color-sky-img"
                                                        data-src="/assets/images/shop/products-img4.jpg"> <img
                                                            src="/assets/images/shop/shop-details-top-color-sky-img-4.jpg"
                                                            alt=""/> </a> </li>
                                            </ul>
                                        </div> */}
                                        <ul className="shop-details-top-ask-question">
                                            <li> <a href="#0">
                                                    <div className="icon"> <i className="flaticon-left-and-right-arrows"></i> </div>
                                                    <div className="text">
                                                        <p>Add to Compare</p>
                                                    </div>
                                                </a> </li>
                                            <li> <a href="#0">
                                                    <div className="icon"> <i className="flaticon-chat-bubble"></i> </div>
                                                    <div className="text">
                                                        <p>Ask Question</p>
                                                    </div>
                                                </a> </li>
                                        </ul>
                                        <div className="timer-box">
                                            <h4>Running Offer</h4>
                                            {/* <div className="countdown-timer">
                                                <div className="default-coundown">
                                                    <div className="box">
                                                        <div className="countdown time-countdown-two"
                                                            data-countdown-time="2022/03/12"></div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                        <p className="shop-details-top-product-sale"><span>20</span> Persons looking for this
                                            product</p>
                                        <div className="product-quantity">
                                            <h4>Quantity</h4>
                                            <div className="product-quantity-box d-flex align-items-center flex-wrap">
                                                <div className="qty mr-2">
                                                    <div className="qtySelector text-center"> 
                                                        <span className="decreaseQty"><i
                                                            className="flaticon-minus"></i> </span> 
                                                        <input type="number" className="qtyValue" 
                                                            value={product_quantity} onChange={() => {}}/> 
                                                        <span className="increaseQty"> <i
                                                                className="flaticon-plus"></i> </span> 
                                                    </div>
                                                </div>
                                                <div v-if="product.isPublished" className="product-quantity-check"> 
                                                    <i className="flaticon-select"></i>
                                                    <p >In Stock</p>
                                                </div>
                                                <div v-else="" className="product-quantity-check"> 
                                                    <i className="flaticon-cross"></i>
                                                    <p>Out Of Stock</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shop-details-top-order-now"> <i className="flaticon-point"></i>
                                            <p>Order Now, Only { product.quantity } Left !</p>
                                        </div>
                                        <div className="shop-details-top-cart-box-btn"> 
                                            <button className="btn--primary style2 "
                                                type="submit"
                                                onClick={addToCart}>Add to Cart
                                            </button> 
                                            </div>
                                        <div className="shop-details-top-free-shipping"> <i className="flaticon-shipping"></i>
                                            <p>SPENT <span>$399.00</span> MORE FOR FREE SHIPPING</p>
                                        </div>
                                        <div className="shop-details-top-social-box">
                                            <p>Share:</p>
                                            <ul className="ps-1 social_link d-flex align-items-center">
                                                <li><a href="https://www.facebook.com/" className="active" target="_blank"><i
                                                            className="flaticon-facebook-app-symbol"></i></a> </li>
                                                <li> <a href="https://www.youtube.com/" target="_blank"><i
                                                            className="flaticon-youtube"></i></a> </li>
                                                <li> <a href="https://twitter.com/" target="_blank"><i
                                                            className="flaticon-twitter"></i></a> </li>
                                                <li> <a href="https://www.instagram.com/" target="_blank"><i
                                                            className="flaticon-instagram"></i></a> </li>
                                            </ul>
                                        </div>
                                        <div className="checked-box">
                                            <form>
                                                <div className="form-group"> <input type="checkbox" id="html"/> <label htmlFor="html">I
                                                        agree with all company terms & condition</label> </div>
                                            </form>
                                        </div>
                                        <div className="shop-details-top-buy-now-btn"> <a href="#" className="btn--primary">Buy It
                                                Now</a> </div>
                                        <div className="shop-details-top-safe-checkout">
                                            <h4>Guranteed Safe Checkout</h4>
                                            <ul className="shop-details-top-safe-checkout-list">
                                                <li>
                                                    <div className="shop-details-top-safe-checkout-img"> <a href="#0"><img
                                                                src="/assets/images/shop/shop-details-top-safe-checkout-img-1.jpg"
                                                                alt=""/></a> </div>
                                                </li>
                                                <li>
                                                    <div className="shop-details-top-safe-checkout-img"> <a href="#0"><img
                                                                src="/assets/images/shop/shop-details-top-safe-checkout-img-2.jpg"
                                                                alt=""/></a> </div>
                                                </li>
                                                <li>
                                                    <div className="shop-details-top-safe-checkout-img"> <a href="#0"><img
                                                                src="/assets/images/shop/shop-details-top-safe-checkout-img-3.jpg"
                                                                alt=""/></a> </div>
                                                </li>
                                                <li>
                                                    <div className="shop-details-top-safe-checkout-img"> <a href="#0"><img
                                                                src="/assets/images/shop/shop-details-top-safe-checkout-img-4.jpg"
                                                                alt=""/></a> </div>
                                                </li>
                                                <li>
                                                    <div className="shop-details-top-safe-checkout-img"> <a href="#0"><img
                                                                src="/assets/images/shop/shop-details-top-safe-checkout-img-5.jpg"
                                                                alt=""/></a> </div>
                                                </li>
                                                <li>
                                                    <div className="shop-details-top-safe-checkout-img"> <a href="#0"><img
                                                                src="/assets/images/shop/shop-details-top-safe-checkout-img-7.jpg"
                                                                alt=""/></a> </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="shop-details-top-product-delivery">This product estimated delivery between
                                            <span>Wednesday 27 October</span> <br/> <span>Tuesday 02 November</span></p>
                                        <ul className="shop-details-top-category-tags">
                                            <li>Category: <span>Gold Diamond</span></li>
                                            <li>Tags: <span>platinum watch, gold ring, women jewellary</span></li>
                                        </ul>
                                        <ul className="shop-details-top-feature">
                                            <li>
                                                <div className="icon"> <i className="flaticon-portfolio"></i> </div>
                                                <div className="text">
                                                    <p>Money back guarantee</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon"> <i className="flaticon-truck"></i> </div>
                                                <div className="text">
                                                    <p>Free Shipping & Return</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon"> <i className="flaticon-security"></i> </div>
                                                <div className="text">
                                                    <p>Comportable Support</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="product pt-60 pb-60 wow fadeInUp overflow-hidden ">
                    <div className="container">
                        <div className="row wow fadeInUp animated">
                            <div className="col-12">
                                <ul className="nav product-details-nav nav-one nav-pills justify-content-center" id="pills-tab-two"
                                    role="tablist">
                                    <li className="nav-item" role="presentation"> <button className="nav-link active"
                                            id="pills-description-tab" data-bs-toggle="pill" data-bs-target="#pills-description"
                                            type="button" role="tab" aria-controls="pills-description" aria-selected="true">
                                            Description </button> </li>
                                    <li className="nav-item" role="presentation"> <button className="nav-link" id="pills-additional-tab"
                                            data-bs-toggle="pill" data-bs-target="#pills-additional" type="button" role="tab"
                                            aria-controls="pills-additional" aria-selected="false"> Additional </button> </li>
                                    <li className="nav-item" role="presentation"> <button className="nav-link" id="pills-sizechart-tab"
                                            data-bs-toggle="pill" data-bs-target="#pills-sizechart" type="button" role="tab"
                                            aria-controls="pills-sizechart" aria-selected="false"> Size Chart </button> </li>
                                    <li className="nav-item" role="presentation"> <button className="nav-link" id="pills-review-tab"
                                            data-bs-toggle="pill" data-bs-target="#pills-review" type="button" role="tab"
                                            aria-controls="pills-review" aria-selected="false"> Review </button> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row wow fadeInUp animated">
                            <div v-if="product" className="tab-content" id="pills-tabContent-two">
                                <div className="tab-pane fade show active" id="pills-description" role="tabpanel"
                                    aria-labelledby="pills-description-tab">
                                    <div className="product-drescription">
                                        <h4> Product Details:</h4>
                                        <p> { product.description } </p>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 mt-30 ">
                                                <div className="thumb"> <img
                                                        src="/assets/images/shop/shop-details-tab-content-specification-img-1.jpg"
                                                        alt=""/> </div>
                                            </div>
                                            <div className="col-lg-8 mt-30">
                                                <h4>Specification:</h4>
                                                <ul className="drescription-list">
                                                    <li> 1. Adipiscing hac cubilia, fermentum ipsum auctor parturient tempus
                                                        lobortis fermentum. </li>
                                                    <li> 2. Euismod disagree soler imperdiet vehicula pede eros ipsum cras mi
                                                        feugiat. </li>
                                                    <li> 3. Rhoncus consequat phasellus donec suspendisse scelerisque facilisis
                                                        gravida porttitor turpis. </li>
                                                    <li> 4. Consequat phasellus donec suspendisse scelerisque facilisis gravida
                                                        porttitor turpis. </li>
                                                    <li> 5. Consequat phasellus donec suspendisse scelerisque facilisis gravida
                                                        porttitor </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-additional" role="tabpanel"
                                    aria-labelledby="pills-additional-tab">
                                    <div className="product-drescription">
                                        <p className="pt-0"> Assertively conceptualize parallel process improvements through user
                                            friendly colighue to action items. Interactively antidos cultivate interdependent
                                            customer service without clicks-and-mortar e-services. Proactively cultivate go
                                            forward testing procedures with accurate quality vectors. Globally aiembrace ethical
                                            functionalities via empowered scenarios. Phosfluorescently restore highly efficient
                                            opportunities and client-focused infomediaries. Enthusiastically transition
                                            multidisciplinary outside the box thinking without premium networks. Progressive
                                            supply clicks-and-mortar human capital through enterprise-wide web services.
                                            Objectivey bester provide access to extensible processes better than more
                                            qulification dumber there stoaling through 24/365 solutions. </p>
                                        <ul className="drescription-list">
                                            <li> 1. Adipiscing hac cubilia, fermentum ipsum auctor parturient tempus lobortis
                                                fermentum. </li>
                                            <li> 2. Euismod disagree soler imperdiet vehicula pede eros ipsum cras mi feugiat.
                                            </li>
                                            <li> 3. Rhoncus consequat phasellus donec suspendisse scelerisque facilisis gravida
                                                porttitor turpis. </li>
                                            <li> 4. Consequat phasellus donec suspendisse scelerisque facilisis gravida
                                                porttitor turpis. </li>
                                            <li> 5. Consequat phasellus donec suspendisse scelerisque facilisis gravida
                                                porttitor </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-sizechart" role="tabpanel"
                                    aria-labelledby="pills-sizechart-tab">
                                    <div className="product-drescription">
                                        <div className="size-chirt">
                                            <h4>Size Guide</h4>
                                            <p className="pt-0"> Assertively conceptualize parallel process improvements through
                                                user friendly colighue to action items. </p>
                                            <div className="size-tabble">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Size</th>
                                                            <th>XXS - XS</th>
                                                            <th>XS - S</th>
                                                            <th>S - M</th>
                                                            <th>M - L</th>
                                                            <th>L - XL</th>
                                                            <th>XL - XXL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>ARGENTINA</td>
                                                            <td>7</td>
                                                            <td>8</td>
                                                            <td>9</td>
                                                            <td>10</td>
                                                            <td>11</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>BOLIVIA</td>
                                                            <td>8</td>
                                                            <td>9</td>
                                                            <td>10</td>
                                                            <td>11</td>
                                                            <td>12</td>
                                                            <td>13</td>
                                                        </tr>
                                                        <tr>
                                                            <td>COLOMBIA</td>
                                                            <td>26</td>
                                                            <td>28</td>
                                                            <td>30</td>
                                                            <td>32</td>
                                                            <td>34</td>
                                                            <td>36</td>
                                                        </tr>
                                                        <tr>
                                                            <td>China</td>
                                                            <td>34</td>
                                                            <td>36</td>
                                                            <td>38</td>
                                                            <td>40</td>
                                                            <td>42</td>
                                                            <td>44</td>
                                                        </tr>
                                                        <tr>
                                                            <td>MEXICO</td>
                                                            <td>32</td>
                                                            <td>34</td>
                                                            <td>36</td>
                                                            <td>38</td>
                                                            <td>40</td>
                                                            <td>42</td>
                                                        </tr>
                                                        <tr>
                                                            <td>JAMAICA</td>
                                                            <td>40</td>
                                                            <td>42</td>
                                                            <td>44</td>
                                                            <td>46</td>
                                                            <td>48</td>
                                                            <td>50</td>
                                                        </tr>
                                                        <tr>
                                                            <td>MEXICO</td>
                                                            <td>32</td>
                                                            <td>34</td>
                                                            <td>36</td>
                                                            <td>38</td>
                                                            <td>40</td>
                                                            <td>42</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Australia</td>
                                                            <td>6</td>
                                                            <td>8</td>
                                                            <td>10</td>
                                                            <td>12</td>
                                                            <td>14</td>
                                                            <td>16</td>
                                                        </tr>
                                                        <tr>
                                                            <td>USA</td>
                                                            <td>33</td>
                                                            <td>44</td>
                                                            <td>55</td>
                                                            <td>66</td>
                                                            <td>77</td>
                                                            <td>88</td>
                                                        </tr>
                                                        <tr>
                                                            <td>UK</td>
                                                            <td>6</td>
                                                            <td>8</td>
                                                            <td>10</td>
                                                            <td>12</td>
                                                            <td>14</td>
                                                            <td>16</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Pant</strong></td>
                                                            <td>22-23 </td>
                                                            <td>24-25</td>
                                                            <td>26-27</td>
                                                            <td>28-29</td>
                                                            <td>30-31</td>
                                                            <td>32-33</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
                                    <div className="product-drescription">
                                        <div className="review-single pt-0 hed">
                                            <div className="ratting"> <i className="flaticon-star-1"></i> <i
                                                    className="flaticon-star-1"></i> <i className="flaticon-star-1"></i> <i
                                                    className="flaticon-star-1"></i> <i className="flaticon-star-1"></i> <span
                                                    className="ps-2">BASED ON 100 REVIEW</span> </div>
                                        </div>
                                        <div className="review-single">
                                            <div className="left">
                                                <div className="ratting"> <i className="flaticon-star-1"></i> <i
                                                        className="flaticon-star-1"></i> <i className="flaticon-star-1"></i> <i
                                                        className="flaticon-star-1"></i> <i className="flaticon-star-1"></i> </div>
                                                <h6>Vary Good quality Theme <span>Raul Bates on January 28, 2022</span> </h6>
                                                <p> Assertively conceptualize parallel process improvements through user
                                                    friendly colighue to action items. Interactively antidos cultivate
                                                    interdependent customer service without clicks-and-mortar e-services. </p>
                                            </div> <a href="#0" className="right-box"> Report this Comments </a>
                                        </div>
                                        <div className="review-single">
                                            <div className="left">
                                                <div className="ratting"> <i className="flaticon-star-1"></i> <i
                                                        className="flaticon-star-1"></i> <i className="flaticon-star-1"></i> <i
                                                        className="flaticon-star-1"></i> <i className="flaticon-star-1"></i> </div>
                                                <h6> Amazing Theme <span>Kurt Morgan on January 28, 2022</span> </h6>
                                                <p> Assertively conceptualize parallel process improvements through user
                                                    friendly colighue to action items. Interactively antidos cultivate
                                                    interdependent customer service without clicks-and-mortar e-services. </p>
                                            </div> <a href="#0" className="right-box">Report this Comments </a>
                                        </div>
                                        <div className="review-from-box mt-30">
                                            <h6>Write a Review</h6>
                                            <form action="#" className="review-from">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="ratting-box">
                                                            <p> RATING </p>
                                                            <div className="ratting"> <i className="flaticon-star-1"></i> <i
                                                                    className="flaticon-star-1"></i> <i className="flaticon-star-1"></i>
                                                                <i className="flaticon-star-1"></i> <i className="flaticon-star-1"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group"> <label htmlFor="name">NAME</label> <input
                                                                type="text" id="name" className="form-control"
                                                                placeholder="David Warner"/> </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group"> <label htmlFor="number">Number</label> <input
                                                                type="text" id="number" className="form-control"
                                                                placeholder="Phone Number"/> </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group"> <label htmlFor="email"> Email </label> <input
                                                                type="text" id="email" className="form-control"
                                                                placeholder="support@gmail.com"/> </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group"> <label htmlFor="namee"> REVIEW TITLE</label> <input
                                                                type="text" id="namee" className="form-control"
                                                                placeholder="Give your review title"/> </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group m-0"> <label htmlFor="email">BODY OF REVIEW (1500)
                                                            </label> <textarea
                                                                placeholder="Write Your Comments Here"></textarea> </div>
                                                    </div>
                                                </div> <button type="submit" className="btn--primary style2 ">Submit Review
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="recent-products pt-60 pb-120 overflow-hidden wow fadeInUp">
                    <div className="container ">
                        <div className="row">
                            <div className="col-12 wow fadeInUp animated">
                                <div className="section-head text-center">
                                    <h2>Recent Products </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-30 wow fadeInUp animated">
                            <div className="catagory-slider">
                                <div className="products-grid-one">
                                    <div className="products-grid-one__product-image">
                                        <div className="products-grid-one__badge-box"> <span className="bg_base badge new ">New</span>
                                        </div> <a href="shop-details-1.html" className="d-block products-grid__image_holder"> <img
                                                src="/assets/images/shop/products-img1.jpg" alt="Alt"/> </a>
                                        <div className="products-grid__usefull-links">
                                            <ul>
                                                <li><a href="wishlist.html"> <i className="flaticon-heart"> </i> <span>
                                                            wishlist</span> </a> </li>
                                                <li><a href="compare.html"> <i className="flaticon-left-and-right-arrows"></i>
                                                        <span> compare</span> </a> </li>
                                                <li><a href="#view-popup1" className="popup_link"> <i
                                                            className="flaticon-visibility"></i> <span> quick view</span> </a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="view-popup1" className="product-gird__quick-view-popup mfp-hide">
                                        <div className="container">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="quick-view__left-content">
                                                        <div className="tabs">
                                                            <div className="popup-product-thumb-box">
                                                                <ul>
                                                                    <li className="tab-nav popup-product-thumb"> <a href="#tab7">
                                                                            <img src="/assets/images/shop/products-img1.jpg"
                                                                                alt="img"/>{">"} </a> </li>
                                                                    <li className="tab-nav popup-product-thumb "> <a href="#tab8">
                                                                            <img src="/assets/images/shop/products-img2.jpg"
                                                                                alt="img"/>{">"} </a> </li>
                                                                    <li className="tab-nav popup-product-thumb "> <a href="#tab9">
                                                                            <img src="/assets/images/shop/products-img3.jpg"
                                                                                alt="img"/>{">"} </a> </li>
                                                                </ul>
                                                            </div>
                                                            <div className="popup-product-main-image-box">
                                                                <div id="tab7" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img1.jpg"
                                                                            alt="img"/>> </div>
                                                                </div>
                                                                <div id="tab8" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img2.jpg"
                                                                            alt="img"/>> </div>
                                                                </div>
                                                                <div id="tab9" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img3.jpg"
                                                                            alt="img"/>> </div>
                                                                </div> <button className="prev"> <i className="flaticon-back"></i>
                                                                </button> <button className="next"> <i className="flaticon-next"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="popup-right-content">
                                                        <h3>Blacked Neckles Set</h3>
                                                        <div className="ratting"> 
                                                            <i className="flaticon-star"></i> 
                                                        <i
                                                                className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                                className="flaticon-star"></i> <i className="flaticon-star"></i>
                                                            <span>(100)</span> </div>
                                                        <p className="text"> Hydrating Plumping Intense Shine Lip Colour </p>
                                                        <div className="price">
                                                            <h2> $45 USD <del> $50 USD</del></h2>
                                                            <h6> In stuck</h6>
                                                        </div>
                                                        <div className="color-varient"> <a href="#0" className="color-name pink">
                                                                <span>Pink</span> </a> <a href="#0" className="color-name red">
                                                                <span>Red</span> </a> <a href="#0"
                                                                className="color-name yellow"><span>Yellow</span> </a> <a href="#0"
                                                                className="color-name blue"> <span>Blue</span> </a> <a href="#0"
                                                                className="color-name black"> <span>Black</span> </a> </div>
                                                        <div className="add-product">
                                                            <h6>Qty:</h6>
                                                            <div className="button-group">
                                                                <div className="qtySelector text-center"> <span
                                                                        className="decreaseQty"><i className="flaticon-minus"></i>
                                                                    </span> <input type="number" className="qtyValue" value="1" />
                                                                    <span className="increaseQty"> <i className="flaticon-plus"></i>
                                                                    </span> </div> <button className="btn--primary "> Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="payment-method"> <a href="#0"> <img
                                                                    src="/assets/images/payment_method/method_1.png" alt=""/> </a>
                                                            <a href="#0"> <img src="/assets/images/payment_method/method_2.png"
                                                                    alt=""/> </a> <a href="#0"> <img
                                                                    src="/assets/images/payment_method/method_3.png" alt=""/> </a>
                                                            <a href="#0"> <img src="/assets/images/payment_method/method_4.png"
                                                                    alt=""/> </a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="products-grid__content"> <a href="cart.html"
                                            className="products-grid__cart-btn btn--primary"> <span className="one"> Add to Cart </span>
                                            <span className="two"> <i className="flaticon-shopping-cart"> </i> </span> </a>
                                        <div className="ratting"> <i className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                className="flaticon-star"></i> </div>
                                        <h5 className="product_name"><a href="shop-details-1.html">Diamond Bracelet </a></h5>
                                        <div className="price d-flex align-content-center justify-content-center">
                                            <p>$2909</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="products-grid-one">
                                    <div className="products-grid-one__product-image">
                                        <div className="products-grid-one__badge-box"> 
                                            <span className="bg_black badge discount">-20%</span>
                                        </div> 
                                        <a href="shop-details-1.html"
                                            className="d-block products-grid__image_holder"> 
                                            <img
                                                className="products-grid-one__mainimage products-grid-one__first-img"
                                                src="/assets/images/shop/products-img3.jpg" alt="Alt"/> 
                                            <img
                                                className="products-grid-one__hover-img" src="/assets/images/shop/products-img4.jpg"
                                                alt="Alt"/> 
                                        </a>
                                        <div className="products-grid__usefull-links">
                                            <ul>
                                                <li><a href="wishlist.html"> <i className="flaticon-heart"> </i> <span>
                                                            wishlist</span> </a> </li>
                                                <li><a href="compare.html"> <i className="flaticon-left-and-right-arrows"></i>
                                                        <span> compare</span> </a> </li>
                                                <li><a href="#view-popup2" className="popup_link"> <i
                                                            className="flaticon-visibility"></i> <span> quick view</span> </a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="view-popup2" className="product-gird__quick-view-popup mfp-hide">
                                        <div className="container">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="quick-view__left-content">
                                                        <div className="tabs">
                                                            <div className="popup-product-thumb-box">
                                                                <ul>
                                                                    <li className="tab-nav popup-product-thumb "> <a href="#tab777">
                                                                            <img src="/assets/images/shop/products-img3.jpg"
                                                                                alt="img"/>> </a> </li>
                                                                    <li className="tab-nav popup-product-thumb "> <a href="#tab888">
                                                                            <img src="/assets/images/shop/products-img4.jpg"
                                                                                alt="img"/>> </a> </li>
                                                                    <li className="tab-nav popup-product-thumb "> <a href="#tab999">
                                                                            <img src="/assets/images/shop/products-img5.jpg"
                                                                                alt="img"/>> </a> </li>
                                                                </ul>
                                                            </div>
                                                            <div className="popup-product-main-image-box">
                                                                <div id="tab777" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img3.jpg"
                                                                            alt="img"/>> </div>
                                                                </div>
                                                                <div id="tab888" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img5.jpg"
                                                                            alt="img"/>> </div>
                                                                </div>
                                                                <div id="tab999" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img6.jpg"
                                                                            alt="img"/>> </div>
                                                                </div> <button className="prev"> <i className="flaticon-back"></i>
                                                                </button> <button className="next"> <i className="flaticon-next"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="popup-right-content">
                                                        <h3>Girl Diamond Ring </h3>
                                                        <div className="ratting"> <i className="flaticon-star"></i> <i
                                                                className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                                className="flaticon-star"></i> <i className="flaticon-star"></i>
                                                            <span>(100)</span> </div>
                                                        <p className="text"> Hydrating Plumping Intense Shine Lip Colour </p>
                                                        <div className="price">
                                                            <h2> $45 USD <del> $50 USD</del></h2>
                                                            <h6> In stuck</h6>
                                                        </div>
                                                        <div className="color-varient"> <a href="#0" className="color-name pink">
                                                                <span>Pink</span> </a> <a href="#0" className="color-name red">
                                                                <span>Red</span> </a> <a href="#0"
                                                                className="color-name yellow"><span>Yellow</span> </a> <a href="#0"
                                                                className="color-name blue"> <span>Blue</span> </a> <a href="#0"
                                                                className="color-name black"> <span>Black</span> </a> </div>
                                                        <div className="add-product">
                                                            <h6>Qty:</h6>
                                                            <div className="button-group">
                                                                <div className="qtySelector text-center"> <span
                                                                        className="decreaseQty"><i className="flaticon-minus"></i>
                                                                    </span> <input type="number" className="qtyValue" value="1" />
                                                                    <span className="increaseQty"> <i className="flaticon-plus"></i>
                                                                    </span> </div> <button className="btn--primary "> Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="payment-method"> <a href="#0"> <img
                                                                    src="/assets/images/payment_method/method_1.png" alt=""/> </a>
                                                            <a href="#0"> <img src="/assets/images/payment_method/method_2.png"
                                                                    alt=""/> </a> <a href="#0"> <img
                                                                    src="/assets/images/payment_method/method_3.png" alt=""/> </a>
                                                            <a href="#0"> <img src="/assets/images/payment_method/method_4.png"
                                                                    alt=""/> </a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="products-grid__content"> <a href="cart.html"
                                            className="products-grid__cart-btn btn--primary"> <span className="one"> Add to Cart </span>
                                            <span className="two"> <i className="flaticon-shopping-cart"> </i> </span> </a>
                                        <div className="ratting"> <i className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                className="flaticon-star"></i> </div>
                                        <h5 className="product_name"><a href="shop-details-1.html"> Girl Diamond Ring </a></h5>
                                        <div className="price d-flex align-content-center justify-content-center">
                                            <p>$250</p>
                                        </div>
                                    </div>
                                    <div className="products-grid-one__thumb-box">
                                        <p className="products-grid-one__product-varient"> <span className="color"> Yellow </span> <img
                                                src="/assets/images/shop/products-img3.jpg" alt="Alt"/> </p>
                                        <p className="products-grid-one__product-varient"> <span className="color"> blue </span> <img
                                                src="/assets/images/shop/products-img4.jpg" alt="Alt"/> </p>
                                        <p className="products-grid-one__product-varient"> <span className="color"> Black </span> <img
                                                src="/assets/images/shop/products-img5.jpg" alt="Alt"/> </p>
                                    </div>
                                </div>
                                <div className="products-grid-one">
                                    <div className="products-grid-one__product-image">
                                        <div className="products-grid-one__badge-box"> <span className="bg_base badge new ">New</span>
                                            <span className="bg_black badge discount">-30%</span> </div> <a
                                            href="shop-details-1.html" className="d-block products-grid__image_holder"> <img
                                                className="products-grid-one__mainimage products-grid-one__first-img"
                                                src="/assets/images/shop/products-img4.jpg" alt="Alt"/> <img
                                                className="products-grid-one__hover-img" src="/assets/images/shop/products-img5.jpg"
                                                alt="Alt"/> </a>
                                        <div className="products-grid__usefull-links">
                                            <ul>
                                                <li><a href="wishlist.html"> <i className="flaticon-heart"> </i> <span>
                                                            wishlist</span> </a> </li>
                                                <li><a href="compare.html"> <i className="flaticon-left-and-right-arrows"></i>
                                                        <span> compare</span> </a> </li>
                                                <li><a href="#view-popup3" className="popup_link"> <i
                                                            className="flaticon-visibility"></i> <span> quick view</span> </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="view-popup3" className="product-gird__quick-view-popup mfp-hide">
                                        <div className="container">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="quick-view__left-content">
                                                        <div className="tabs">
                                                            <div className="popup-product-thumb-box">
                                                                <ul>
                                                                    <li className="tab-nav popup-product-thumb"> <a href="#tab7777">
                                                                            <img src="/assets/images/shop/products-img4.jpg"
                                                                                alt="img"/>> </a> </li>
                                                                    <li className="tab-nav popup-product-thumb "> <a
                                                                            href="#tab8888"> <img
                                                                                src="/assets/images/shop/products-img5.jpg"
                                                                                alt="img"/>> </a> </li>
                                                                    <li className="tab-nav popup-product-thumb "> <a
                                                                            href="#tab9999"> <img
                                                                                src="/assets/images/shop/products-img6.jpg"
                                                                                alt="img"/>> </a> </li>
                                                                </ul>
                                                            </div>
                                                            <div className="popup-product-main-image-box">
                                                                <div id="tab7777" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img4.jpg"
                                                                            alt="img"/>> </div>
                                                                </div>
                                                                <div id="tab8888" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img5.jpg"
                                                                            alt="img"/>> </div>
                                                                </div>
                                                                <div id="tab9999" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img6.jpg"
                                                                            alt="img"/>> </div>
                                                                </div> <button className="prev"> <i className="flaticon-back"></i>
                                                                </button> <button className="next"> <i className="flaticon-next"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="popup-right-content">
                                                        <h3>Women Earring Erl</h3>
                                                        <div className="ratting"> <i className="flaticon-star"></i> <i
                                                                className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                                className="flaticon-star"></i> <i className="flaticon-star"></i>
                                                            <span>(100)</span> </div>
                                                        <p className="text"> Hydrating Plumping Intense Shine Lip Colour </p>
                                                        <div className="price">
                                                            <h2> $45 USD <del> $50 USD</del></h2>
                                                            <h6> In stuck</h6>
                                                        </div>
                                                        <div className="color-varient"> <a href="#0" className="color-name pink">
                                                                <span>Pink</span> </a> <a href="#0" className="color-name red">
                                                                <span>Red</span> </a> <a href="#0"
                                                                className="color-name yellow"><span>Yellow</span> </a> <a href="#0"
                                                                className="color-name blue"> <span>Blue</span> </a> <a href="#0"
                                                                className="color-name black"> <span>Black</span> </a> </div>
                                                        <div className="add-product">
                                                            <h6>Qty:</h6>
                                                            <div className="button-group">
                                                                <div className="qtySelector text-center"> <span
                                                                        className="decreaseQty"><i className="flaticon-minus"></i>
                                                                    </span> <input type="number" className="qtyValue" value="1" />
                                                                    <span className="increaseQty"> <i className="flaticon-plus"></i>
                                                                    </span> </div> <button className="btn--primary "> Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="payment-method"> <a href="#0"> <img
                                                                    src="/assets/images/payment_method/method_1.png" alt=""/> </a>
                                                            <a href="#0"> <img src="/assets/images/payment_method/method_2.png"
                                                                    alt=""/> </a> <a href="#0"> <img
                                                                    src="/assets/images/payment_method/method_3.png" alt=""/> </a>
                                                            <a href="#0"> <img src="/assets/images/payment_method/method_4.png"
                                                                    alt=""/> </a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="products-grid__content"> <a href="cart.html"
                                            className="products-grid__cart-btn btn--primary"> <span className="one"> Add to Cart </span>
                                            <span className="two"> <i className="flaticon-shopping-cart"> </i> </span> </a>
                                        <div className="ratting"> <i className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                className="flaticon-star"></i> </div>
                                        <h5 className="product_name"><a href="shop-details-1.html"> Women Earring Erl </a></h5>
                                        <div className="price d-flex align-content-center justify-content-center"> <span
                                                className="pe-1"><del> $200.00</del></span>
                                            <p>$160</p>
                                        </div>
                                    </div>
                                    <div className="products-grid-one__thumb-box">
                                        <p className="products-grid-one__product-varient"> <span className="color"> Yellow </span> <img
                                                src="/assets/images/shop/products-img4.jpg" alt="Alt"/> </p>
                                        <p className="products-grid-one__product-varient"> <span className="color"> blue </span> <img
                                                src="/assets/images/shop/products-img5.jpg" alt="Alt"/> </p>
                                    </div>
                                </div>
                                <div className="products-grid-one">
                                    <div className="products-grid-one__product-image">
                                        <div className="products-grid-one__badge-box"> <span className="bg_base badge new ">New</span>
                                        </div> <a href="shop-details-1.html" className="d-block products-grid__image_holder"> <img
                                                className="products-grid-one__hover-img now-main"
                                                src="/assets/images/shop/products-img6.jpg" alt="Alt"/> </a>
                                        <div className="products-grid__usefull-links">
                                            <ul>
                                                <li><a href="wishlist.html"> <i className="flaticon-heart"> </i> <span>
                                                            wishlist</span> </a> </li>
                                                <li><a href="compare.html"> <i className="flaticon-left-and-right-arrows"></i>
                                                        <span> compare</span> </a> </li>
                                                <li><a href="#view-popup4" className="popup_link"> <i
                                                            className="flaticon-visibility"></i> <span> quick view</span> </a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="view-popup4" className="product-gird__quick-view-popup mfp-hide">
                                        <div className="container">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="quick-view__left-content">
                                                        <div className="tabs">
                                                            <div className="popup-product-thumb-box">
                                                                <ul>
                                                                    <li className="tab-nav popup-product-thumb"> <a
                                                                            href="#tab77777"> <img
                                                                                src="/assets/images/shop/products-img5.jpg"
                                                                                alt="img"/>> </a> </li>
                                                                    <li className="tab-nav popup-product-thumb "> <a
                                                                            href="#tab88888"> <img
                                                                                src="/assets/images/shop/products-img6.jpg"
                                                                                alt="img"/>> </a> </li>
                                                                    <li className="tab-nav popup-product-thumb "> <a
                                                                            href="#tab99999"> <img
                                                                                src="/assets/images/shop/products-img7.jpg"
                                                                                alt="img"/>> </a> </li>
                                                                </ul>
                                                            </div>
                                                            <div className="popup-product-main-image-box">
                                                                <div id="tab77777" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img5.jpg"
                                                                            alt="img"/>> </div>
                                                                </div>
                                                                <div id="tab88888" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img6.jpg"
                                                                            alt="img"/>> </div>
                                                                </div>
                                                                <div id="tab99999" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img7.jpg"
                                                                            alt="img"/>> </div>
                                                                </div> <button className="prev"> <i className="flaticon-back"></i>
                                                                </button> <button className="next"> <i className="flaticon-next"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="popup-right-content">
                                                        <h3>Wedding Ring Men</h3>
                                                        <div className="ratting"> <i className="flaticon-star"></i> <i
                                                                className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                                className="flaticon-star"></i> <i className="flaticon-star"></i>
                                                            <span>(100)</span> </div>
                                                        <p className="text"> Hydrating Plumping Intense Shine Lip Colour </p>
                                                        <div className="price">
                                                            <h2> $35 USD <del> $50 USD</del></h2>
                                                            <h6> In stuck</h6>
                                                        </div>
                                                        <div className="color-varient"> <a href="#0" className="color-name pink">
                                                                <span>Pink</span> </a> <a href="#0" className="color-name red">
                                                                <span>Red</span> </a> <a href="#0"
                                                                className="color-name yellow"><span>Yellow</span> </a> <a href="#0"
                                                                className="color-name blue"> <span>Blue</span> </a> <a href="#0"
                                                                className="color-name black"> <span>Black</span> </a> </div>
                                                        <div className="add-product">
                                                            <h6>Qty:</h6>
                                                            <div className="button-group">
                                                                <div className="qtySelector text-center"> <span
                                                                        className="decreaseQty"><i className="flaticon-minus"></i>
                                                                    </span> <input type="number" className="qtyValue" value="1" />
                                                                    <span className="increaseQty"> <i className="flaticon-plus"></i>
                                                                    </span> </div> <button className="btn--primary "> Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="payment-method"> <a href="#0"> <img
                                                                    src="/assets/images/payment_method/method_1.png" alt=""/> </a>
                                                            <a href="#0"> <img src="/assets/images/payment_method/method_2.png"
                                                                    alt=""/> </a> <a href="#0"> <img
                                                                    src="/assets/images/payment_method/method_3.png" alt=""/> </a>
                                                            <a href="#0"> <img src="/assets/images/payment_method/method_4.png"
                                                                    alt=""/> </a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="products-grid__content"> <a href="cart.html"
                                            className="products-grid__cart-btn btn--primary"> <span className="one"> Add to Cart </span>
                                            <span className="two"> <i className="flaticon-shopping-cart"> </i> </span> </a>
                                        <div className="ratting"> <i className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                className="flaticon-star"></i> </div>
                                        <h5 className="product_name"><a href="shop-details-1.html"> Wedding Ring Men </a></h5>
                                        <div className="price d-flex align-content-center justify-content-center">
                                            <p>$200</p>
                                        </div>
                                    </div>
                                    <div className="products-grid-one__thumb-box">
                                        <p className="products-grid-one__product-varient"> <span className="color"> blue </span> <img
                                                src="/assets/images/shop/products-img6.jpg" alt="Alt"/> </p>
                                        <p className="products-grid-one__product-varient"> <span className="color"> Yellow </span> <img
                                                src="/assets/images/shop/products-img5.jpg" alt="Alt"/> </p>
                                    </div>
                                </div>
                                <div className="products-grid-one">
                                    <div className="products-grid-one__product-image">
                                        <div className="products-grid-one__badge-box"> <span className="bg_base badge new ">New</span>
                                        </div> <a href="shop-details-1.html" className="d-block products-grid__image_holder"> <img
                                                className="products-grid-one__mainimage products-grid-one__first-img"
                                                src="/assets/images/shop/products-img6.jpg" alt="Alt"/> <img
                                                className="products-grid-one__hover-img" src="/assets/images/shop/products-img2.jpg"
                                                alt="Alt"/> </a>
                                        <div className="products-grid__usefull-links">
                                            <ul>
                                                <li><a href="wishlist.html"> <i className="flaticon-heart"> </i> <span>
                                                            wishlist</span> </a> </li>
                                                <li><a href="compare.html"> <i className="flaticon-left-and-right-arrows"></i>
                                                        <span> compare</span> </a> </li>
                                                <li><a href="#view-popup5" className="popup_link"> <i
                                                            className="flaticon-visibility"></i> <span> quick view</span></a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="view-popup5" className="product-gird__quick-view-popup mfp-hide">
                                        <div className="container">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="quick-view__left-content">
                                                        <div className="tabs">
                                                            <div className="popup-product-thumb-box">
                                                                <ul>
                                                                    <li className="tab-nav popup-product-thumb"> <a href="#stab1">
                                                                            <img src="/assets/images/shop/products-img1.jpg"
                                                                                alt="img"/>> </a> </li>
                                                                    <li className="tab-nav popup-product-thumb "> <a href="#stab2">
                                                                            <img src="/assets/images/shop/products-img2.jpg"
                                                                                alt="img"/>> </a> </li>
                                                                    <li className="tab-nav popup-product-thumb "> <a href="#stab3">
                                                                            <img src="/assets/images/shop/products-img3.jpg"
                                                                                alt="img"/>> </a> </li>
                                                                </ul>
                                                            </div>
                                                            <div className="popup-product-main-image-box">
                                                                <div id="stab1" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img1.jpg"
                                                                            alt="img"/>> </div>
                                                                </div>
                                                                <div id="stab2" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img2.jpg"
                                                                            alt="img"/>> </div>
                                                                </div>
                                                                <div id="stab3" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img3.jpg"
                                                                            alt="img"/>> </div>
                                                                </div> <button className="prev"> <i className="flaticon-back"></i>
                                                                </button> <button className="next"> <i className="flaticon-next"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="popup-right-content">
                                                        <h3>Titan Locket Women</h3>
                                                        <div className="ratting"> <i className="flaticon-star"></i> <i
                                                                className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                                className="flaticon-star"></i> <i className="flaticon-star"></i>
                                                            <span>(100)</span> </div>
                                                        <p className="text"> Hydrating Plumping Intense Shine Lip Colour </p>
                                                        <div className="price">
                                                            <h2> $55 USD <del> $50 USD</del></h2>
                                                            <h6> In stuck</h6>
                                                        </div>
                                                        <div className="color-varient"> <a href="#0" className="color-name pink">
                                                                <span>Pink</span> </a> <a href="#0" className="color-name red">
                                                                <span>Red</span> </a> <a href="#0"
                                                                className="color-name yellow"><span>Yellow</span> </a> <a href="#0"
                                                                className="color-name blue"> <span>Blue</span> </a> <a href="#0"
                                                                className="color-name black"> <span>Black</span> </a> </div>
                                                        <div className="add-product">
                                                            <h6>Qty:</h6>
                                                            <div className="button-group">
                                                                <div className="qtySelector text-center"> <span
                                                                        className="decreaseQty"><i className="flaticon-minus"></i>
                                                                    </span> <input type="number" className="qtyValue" value="1" />
                                                                    <span className="increaseQty"> <i className="flaticon-plus"></i>
                                                                    </span> </div> <button className="btn--primary "> Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="payment-method"> <a href="#0"> <img
                                                                    src="/assets/images/payment_method/method_1.png" alt=""/> </a>
                                                            <a href="#0"> <img src="/assets/images/payment_method/method_2.png"
                                                                    alt=""/> </a> <a href="#0"> <img
                                                                    src="/assets/images/payment_method/method_3.png" alt=""/> </a>
                                                            <a href="#0"> <img src="/assets/images/payment_method/method_4.png"
                                                                    alt=""/> </a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="products-grid__content"> <a href="cart.html"
                                            className="products-grid__cart-btn btn--primary"> <span className="one"> Add to Cart </span>
                                            <span className="two"> <i className="flaticon-shopping-cart"> </i> </span> </a>
                                        <div className="ratting"> <i className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                className="flaticon-star"></i> </div>
                                        <h5 className="product_name"><a href="shop-details-1.html"> Titan Locket Women </a></h5>
                                        <div className="price d-flex align-content-center justify-content-center">
                                            <p>$250</p>
                                        </div>
                                    </div>
                                    <div className="products-grid-one__thumb-box">
                                        <p className="products-grid-one__product-varient"> <span className="color"> Blue </span> <img
                                                src="/assets/images/shop/products-img6.jpg" alt="Alt"/> </p>
                                        <p className="products-grid-one__product-varient"> <span className="color"> Yellow </span> <img
                                                src="/assets/images/shop/products-img7.jpg" alt="Alt"/> </p>
                                        <p className="products-grid-one__product-varient"> <span className="color"> green </span> <img
                                                src="/assets/images/shop/products-img8.jpg" alt="Alt"/> </p>
                                    </div>
                                </div>
                                <div className="products-grid-one">
                                    <div className="products-grid-one__product-image"> <a href="shop-details-1.html"
                                            className="d-block products-grid__image_holder"> <img
                                                className="products-grid-one__mainimage products-grid-one__first-img"
                                                src="/assets/images/shop/products-img12.jpg" alt="Alt"/> <img
                                                className="products-grid-one__hover-img" src="/assets/images/shop/products-img11.jpg"
                                                alt="Alt"/> </a>
                                        <div className="products-grid__usefull-links">
                                            <ul>
                                                <li><a href="wishlist.html"> <i className="flaticon-heart"> </i> <span>
                                                            wishlist</span> </a> </li>
                                                <li><a href="compare.html"> <i className="flaticon-left-and-right-arrows"></i>
                                                        <span> compare</span> </a> </li>
                                                <li><a href="#view-popup6" className="popup_link"> <i
                                                            className="flaticon-visibility"></i><span> quick view</span> </a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="view-popup6" className="product-gird__quick-view-popup mfp-hide">
                                        <div className="container">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="quick-view__left-content">
                                                        <div className="tabs">
                                                            <div className="popup-product-thumb-box">
                                                                <ul>
                                                                    <li className="tab-nav popup-product-thumb"> <a href="#ttab111">
                                                                            <img src="/assets/images/shop/products-img9.jpg"
                                                                                alt="img"/>> </a> </li>
                                                                    <li className="tab-nav popup-product-thumb "> <a
                                                                            href="#ttab222"> <img
                                                                                src="/assets/images/shop/products-img10.jpg"
                                                                                alt="img"/>> </a> </li>
                                                                    <li className="tab-nav popup-product-thumb "> <a
                                                                            href="#ttab333"> <img
                                                                                src="/assets/images/shop/products-img11.jpg"
                                                                                alt="img"/>> </a> </li>
                                                                </ul>
                                                            </div>
                                                            <div className="popup-product-main-image-box">
                                                                <div id="ttab111" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img9.jpg"
                                                                            alt="img"/>> </div>
                                                                </div>
                                                                <div id="ttab222" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img10.jpg"
                                                                            alt="img"/>> </div>
                                                                </div>
                                                                <div id="ttab333" className="tab-item popup-product-image">
                                                                    <div className="popup-product-single-image"> <img
                                                                            src="/assets/images/shop/products-img11.jpg"
                                                                            alt="img"/>> </div>
                                                                </div> <button className="prev"> <i className="flaticon-back"></i>
                                                                </button> <button className="next"> <i className="flaticon-next"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="popup-right-content">
                                                        <h3>Gold Bracelet Girl </h3>
                                                        <div className="ratting"> <i className="flaticon-star"></i> <i
                                                                className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                                className="flaticon-star"></i> <i className="flaticon-star"></i>
                                                            <span>(100)</span> </div>
                                                        <p className="text"> Hydrating Plumping Intense Shine Lip Colour </p>
                                                        <div className="price">
                                                            <h2> $65 USD <del> $50 USD</del></h2>
                                                            <h6> In stuck</h6>
                                                        </div>
                                                        <div className="color-varient"> <a href="#0" className="color-name pink">
                                                                <span>Pink</span> </a> <a href="#0" className="color-name red">
                                                                <span>Red</span> </a> <a href="#0"
                                                                className="color-name yellow"><span>Yellow</span> </a> <a href="#0"
                                                                className="color-name blue"> <span>Blue</span> </a> <a href="#0"
                                                                className="color-name black"> <span>Black</span> </a> </div>
                                                        <div className="add-product">
                                                            <h6>Qty:</h6>
                                                            <div className="button-group">
                                                                <div className="qtySelector text-center"> <span
                                                                        className="decreaseQty"><i className="flaticon-minus"></i>
                                                                    </span> <input type="number" className="qtyValue" value="1" />
                                                                    <span className="increaseQty"> <i className="flaticon-plus"></i>
                                                                    </span> </div> <button className="btn--primary "> Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="payment-method"> <a href="#0"> <img
                                                                    src="/assets/images/payment_method/method_1.png" alt=""/> </a>
                                                            <a href="#0"> <img src="/assets/images/payment_method/method_2.png"
                                                                    alt=""/> </a> <a href="#0"> <img
                                                                    src="/assets/images/payment_method/method_3.png" alt=""/> </a>
                                                            <a href="#0"> <img src="/assets/images/payment_method/method_4.png"
                                                                    alt=""/> </a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="products-grid__content"> <a href="cart.html"
                                            className="products-grid__cart-btn btn--primary"> <span className="one"> Add to Cart </span>
                                            <span className="two"> <i className="flaticon-shopping-cart"> </i> </span> </a>
                                        <div className="ratting"> <i className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                className="flaticon-star"></i> <i className="flaticon-star"></i> <i
                                                className="flaticon-star"></i> </div>
                                        <h5 className="product_name"><a href="shop-details-1.html">Gold Bracelet Girl </a></h5>
                                        <div className="price d-flex align-content-center justify-content-center">
                                            <p>$150</p>
                                        </div>
                                    </div>
                                    <div className="products-grid-one__thumb-box">
                                        <p className="products-grid-one__product-varient"> <span className="color"> Blue </span> <img
                                                src="/assets/images/shop/products-img12.jpg" alt="Alt"/> </p>
                                        <p className="products-grid-one__product-varient"> <span className="color"> Green </span> <img
                                                src="/assets/images/shop/products-img11.jpg" alt="Alt"/> </p>
                                        <p className="products-grid-one__product-varient"> <span className="color"> Black </span> <img
                                                src="/assets/images/shop/products-img10.jpg" alt="Alt"/> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>
        </Layout>
    )
}