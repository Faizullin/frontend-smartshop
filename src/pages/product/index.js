import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import BreadCumBgImage from "../../base/assets/images/inner-pages/breadcum-bg.png"
import ProductHoverImage from "../../base/assets/images/inner-pages/product-hover-2.jpg"
import { getFilters, getProducts } from "../../redux/actions/productAction";
import FiltersSidebar from "./FiltersSidebar";


export default function ProductIndex(){
    const { products, loading, filters, currentFilters } = useSelector(state => {
        console.log("Store",state)
        return state.productReducer
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getFilters());
    }, [dispatch]);
    const applyFilters = (filters = null) => {
        console.log(filters,currentFilters)
        dispatch(getProducts(filters ?? {}));
    }


    const [popupProduct,setPopupProduct] = useState({
        title: '',
        description: '',
        price: null
    })



    return (
        <main className="overflow-hidden ">
        <section className="breadcrumb-area" style={{backgroundImage: `url(${BreadCumBgImage})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="breadcrumb-content pb-60 text-center wow fadeInUp animated">
                            <h2>Shop Grid</h2>
                            <div className="breadcrumb-menu">
                                <ul>
                                    <li>
                                        <Link to="/"><i className="flaticon-home pe-2"></i>Home</Link>
                                    </li>
                                    <li> <i className="flaticon-next"></i> </li>
                                    <li className="active">Shop Grid</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="product-categories-one pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 wow fadeInUp animated">
                        <div className="product-categories-one__inner">
                            <ul>
                                {
                                    (filters.product_types.length > 5) ? (
                                        filters.product_types.map((product_type,index) => (
                                            (index < 6 ) && (<li key={product_type.id}> 
                                                    <a href="#0" className="img-box">
                                                        <div className="inner"> <img src="/assets/images/shop/product-categories-v1-img2.png"
                                                                alt="" /> </div>
                                                    </a>
                                                    <div className="title"> <a href="#0">
                                                            <h6>{ product_type.name }</h6>
                                                        </a> </div>
                                                </li>
                                            )
                                        ))
                                    ) : (
                                        filters.product_types.map((product_type) => (
                                            <li key={product_type.id}> 
                                                <a href="#0" className="img-box">
                                                    <div className="inner"> <img src="/assets/images/shop/product-categories-v1-img2.png"
                                                            alt="" /> </div>
                                                </a>
                                                <div className="title"> <a href="#0">
                                                        <h6>{ product_type.name }</h6>
                                                    </a> </div>
                                            </li>
                                        ))
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="product-grid pt-60 pb-120">
            <div className="container">
                <div className="row gx-4">
                    <div className="col-xl-9 col-lg-8">
                        <div className="row">
                            <div className="col-xl-12">
                                <div
                                    className="shop-grid-page-top-info p-0 justify-content-md-between justify-content-center">
                                    <div className="left-box wow fadeInUp animated">
                                        <p>Showing 1–12 of 72 Results</p>
                                    </div>
                                    <div
                                        className="right-box justify-content-md-between justify-content-center wow fadeInUp animated">
                                        <div className="short-by">
                                            <div className="select-box"> <select className="wide">
                                                    <option data-display="Short by latest">Featured </option>
                                                    <option defaultValue={1}>Best selling </option>
                                                    <option value="2">Alphabetically, A-Z</option>
                                                    <option value="3">Alphabetically, Z-A</option>
                                                    <option value="3">Price, low to high</option>
                                                    <option value="3">Price, high to low</option>
                                                    <option value="3">Date, old to new</option>
                                                </select> </div>
                                        </div>
                                        <div
                                            className="product-view-style d-flex justify-content-md-between justify-content-center">
                                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                                <li className="nav-item" role="presentation"> <button
                                                        className="nav-link active" id="pills-grid-tab"
                                                        data-bs-toggle="pill" data-bs-target="#pills-grid" type="button"
                                                        role="tab" aria-controls="pills-grid" aria-selected="true"> <i
                                                            className="flaticon-grid"></i> </button> </li>
                                                <li className="nav-item" role="presentation"> <button className="nav-link "
                                                        id="pills-list-tab" data-bs-toggle="pill"
                                                        data-bs-target="#pills-list" type="button" role="tab"
                                                        aria-controls="pills-list" aria-selected="false"> <i
                                                            className="flaticon-list"></i> </button> </li>
                                            </ul> <button className="slidebarfilter d-lg-none d-flex"><i
                                                    className="flaticon-edit"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-grid" role="tabpanel"
                                        aria-labelledby="pills-grid-tab">
                                        <div className="row">
                                            { products.map((product,index) => (
                                                <div key={product.id} className="col-xl-4 col-lg-6 col-6 ">
                                                    <div className="products-three-single w-100 mt-30">
                                                        <div className="products-three-single-img" style={{ height: '300px' }}> <a
                                                            href="shop-details-3.html" className="d-block"> 
                                                                <img
                                                                    src={product.image ?? ""}
                                                                    className="first-img" alt="" /> <img
                                                                    src={ProductHoverImage}
                                                                    alt="" className="hover-img" />
                                                            </a>
                                                            <div className="products-grid-one__badge-box"> <span
                                                                    className="bg_base badge new ">New</span>
                                                            </div> <a onClick={(e) => {e.preventDefault()}} className="addcart btn--primary style2">
                                                                Add To Cart </a>
                                                            <div className="products-grid__usefull-links">
                                                                <ul>
                                                                    <li><a href="wishlist.html"> <i className="flaticon-heart">
                                                                            </i> <span>
                                                                                wishlist</span> </a> </li>
                                                                    <li><a href="compare.html"> <i
                                                                                className="flaticon-left-and-right-arrows"></i>
                                                                            <span>
                                                                                compare</span> </a> </li>
                                                                    <li>
                                                                        <a href="`#popup${product.id}`" 
                                                                            click="getProduct(product.id)"
                                                                            className="popup_link">
                                                                            <i className="flaticon-visibility"></i>
                                                                            <span> quick view</span>
                                                                        </a> 
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div id="`popup${product.id}`" className="product-gird__quick-view-popup mfp-hide">
                                                            <div v-if="popupProduct" className="container">
                                                                <div className="row justify-content-between align-items-center">
                                                                    <div className="col-lg-6">
                                                                        <div className="quick-view__left-content">
                                                                            <div className="tabs">
                                                                                <div className="popup-product-thumb-box">
                                                                                    <ul>
                                                                                        <li v-for="popupProductImage in popupProduct.product_images"
                                                                                            className="tab-nav popup-product-thumb">
                                                                                            <a href="`#tabb${popupProductImage.id}`">
                                                                                                <img src="popupProductImage.url"
                                                                                                    alt="" />
                                                                                            </a> 
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="popup-product-main-image-box">
                                                                                    <div v-for="popupProductImage in popupProduct.product_images"
                                                                                        id="`tabb${popupProductImage.id}`"
                                                                                        className="tab-item popup-product-image">
                                                                                        <div
                                                                                            className="popup-product-single-image">
                                                                                            <img src="popupProductImage.url"
                                                                                                alt="" /> </div>
                                                                                    </div>
                                                                                    <button className="prev"> <i
                                                                                            className="flaticon-back"></i>
                                                                                    </button> <button className="next"> <i
                                                                                            className="flaticon-next"></i>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="popup-right-content">
                                                                            <h3>{ popupProduct.title }</h3>
                                                                            <div className="ratting"> <i
                                                                                    className="flaticon-star"></i> <i
                                                                                    className="flaticon-star"></i> <i
                                                                                    className="flaticon-star"></i>
                                                                                <i className="flaticon-star"></i> <i
                                                                                    className="flaticon-star"></i>
                                                                                <span>(112)</span> </div>
                                                                            <p className="text"> { popupProduct.description }
                                                                            </p>
                                                                            <div className="price">
                                                                                <h2> ${ popupProduct.price } USD <del> $65 USD</del></h2>
                                                                                <h6> In stuck</h6>
                                                                            </div>
                                                                            <div className="color-varient"> 
                                                                                <template v-for="groupProduct in popupProduct.group_products">
                                                                                    <a v-for="groupProductColor in groupProduct.colors" 
                                                                                        click = "getProduct(groupProduct.id)"
                                                                                        href="" 
                                                                                        // style="`background: ${groupProductColor.title};`" 
                                                                                        className="color-name {{ groupProductColor.title }}">
                                                                                        {/* <span className="">{ groupProductColor.title }</span>  */}
                                                                                    </a>
                                                                                </template>
                                                                            </div> 
                                                                            <div className="add-product">
                                                                                <h6>Qty:</h6>
                                                                                <div className="button-group">
                                                                                    <div className="qtySelector text-center">
                                                                                        <span className="decreaseQty"><i
                                                                                                className="flaticon-minus"></i>
                                                                                        </span> 
                                                                                        <input type="number"
                                                                                            className="qtyValue" defaultValue={1}/>
                                                                                        <span className="increaseQty"> <i
                                                                                                className="flaticon-plus"></i>
                                                                                        </span> </div>
                                                                                    <button click="addToCart(product)" className="btn--primary "> Add to
                                                                                        Cart </button>
                                                                                </div>
                                                                            </div>
                                                                            <div className="payment-method"> <a href="#0"> <img
                                                                                        src="/assets/images/payment_method/method_1.png"
                                                                                        alt=""/> </a>
                                                                                <a href="#0"> <img
                                                                                        src="/assets/images/payment_method/method_2.png"
                                                                                        alt=""/> </a> <a href="#0"> <img
                                                                                        src="/assets/images/payment_method/method_3.png"
                                                                                        alt=""/> </a>
                                                                                <a href="#0"> <img
                                                                                        src="/assets/images/payment_method/method_4.png"
                                                                                        alt=""/> </a> 
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="products-three-single-content text-center"> <span>{ product.category?.title || "UD"}</span>
                                                            <h5>
                                                                <router-link to="{name:'products.show',params:{id:product.id}}">{ product.name }</router-link >
                                                            </h5>
                                                            <p><del>$200.00</del> ${ product.price }</p>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            )) }
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-list" role="tabpanel"
                                        aria-labelledby="pills-list-tab">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="product-grid-two list mt-30 ">
                                                    <div className="product-grid-two__img" >
                                                        <a href="shop-details-2.html" className="d-block"> <img
                                                                src="/assets/images/home-three/products-1.jpg"
                                                                className="first-img" alt="" /> <img
                                                                src="/assets/images/home-three/products-hover-1.png"
                                                                alt="" className="hover-img" /> </a>
                                                        <div className="products-grid-one__badge-box"> <span
                                                                className="badge discount">Best</span> </div>
                                                    </div>
                                                    <div id="popupb" className="product-gird__quick-view-popup mfp-hide">
                                                        <div  className="container">
                                                            <div className="row justify-content-between align-items-center">
                                                                <div className="col-lg-6">
                                                                    <div className="quick-view__left-content">
                                                                        <div className="tabs">
                                                                            <div className="popup-product-thumb-box">
                                                                                <ul>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb">
                                                                                        <a href="#tab7111111b"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img1.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tab8111111b"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img2.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tab9111111b"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img3.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="popup-product-main-image-box">
                                                                                <div id="tab7111111b"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img1.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tab8111111b"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img2.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tab9111111b"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img3.jpg"
                                                                                            alt="" /> </div>
                                                                                </div> <button className="prev"> <i
                                                                                        className="flaticon-back"></i>
                                                                                </button> <button className="next"> <i
                                                                                        className="flaticon-next"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="popup-right-content">
                                                                        <h3>Round Small Table </h3>
                                                                        <div className="ratting"> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i>
                                                                            <span>(123)</span> </div>
                                                                        <p className="text"> Wooden Tables to Brighten Your
                                                                            Dining Room </p>
                                                                        <div className="price">
                                                                            <h2> $50 USD <del> $105 USD</del></h2>
                                                                            <h6> In stuck</h6>
                                                                        </div>
                                                                        <div className="color-varient"> <a href="#0"
                                                                                className="color-name pink">
                                                                                <span>Pink</span> </a> <a href="#0"
                                                                                className="color-name red"> <span>Red</span>
                                                                            </a> <a href="#0"
                                                                                className="color-name yellow"><span>Yellow</span>
                                                                            </a> <a href="#0" className="color-name blue">
                                                                                <span>Blue</span> </a> <a href="#0"
                                                                                className="color-name black">
                                                                                <span>Black</span> </a> </div>
                                                                        <div className="add-product">
                                                                            <h6>Qty:</h6>
                                                                            <div className="button-group">
                                                                                <div className="qtySelector text-center">
                                                                                    <span className="decreaseQty"><i
                                                                                            className="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                        className="qtyValue" defaultValue={1} />
                                                                                    <span className="increaseQty"> <i
                                                                                            className="flaticon-plus"></i>
                                                                                    </span> </div> <button
                                                                                    className="btn--primary "> Add to Cart
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-method"> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_1.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_2.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_3.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_4.png"
                                                                                    alt=""/> </a> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-grid-two-content text-center">
                                                        <span>Modern</span>
                                                        <h5><a href="shop-details-2.html">Trendy stylish shoes </a></h5>
                                                        <p><del>$200</del> $159.00</p>
                                                        <p className="text"> Typi non habent claritatem insitam usus
                                                            legentis qui facit eorum claritatem Investigationes
                                                            demonstraverunt lectores legere mele lius quod legunt
                                                            saepius Claritas est etiam processus a capitalize on low
                                                            hanging </p>
                                                        <div className="product-grid-two__overlay-box">
                                                            <div className="title">
                                                                <h6><a href="cart.html">Add To Cart</a></h6>
                                                            </div>
                                                            <div className="icon">
                                                                <ul>
                                                                    <li><a href="#popupb" className="popup_link"><i
                                                                                className="flaticon-eye"></i></a> </li>
                                                                    <li><a href="wishlist.html"><i
                                                                                className="flaticon-heart"></i></a> </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="product-grid-two list mt-30">
                                                    <div className="product-grid-two__img">
                                                        <a href="shop-details-2.html" className="d-block">
                                                            <img src="/assets/images/home-three/products-2.jpg" alt="" />
                                                        </a> </div>
                                                    <div id="popup2z" className="product-gird__quick-view-popup mfp-hide">
                                                        <div className="container">
                                                            <div className="row justify-content-between align-items-center">
                                                                <div className="col-lg-6">
                                                                    <div className="quick-view__left-content">
                                                                        <div className="tabs">
                                                                            <div className="popup-product-thumb-box">
                                                                                <ul>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb">
                                                                                        <a href="#tab1z"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img2.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tab2z"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img3.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tab3z"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img4.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="popup-product-main-image-box">
                                                                                <div id="tab1z"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img2.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tab2z"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img3.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tab3z"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img4.jpg"
                                                                                            alt="" /> </div>
                                                                                </div> <button className="prev"> <i
                                                                                        className="flaticon-back"></i>
                                                                                </button> <button className="next"> <i
                                                                                        className="flaticon-next"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="popup-right-content">
                                                                        <h3>Diamond Ring Coyo</h3>
                                                                        <div className="ratting"> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i>
                                                                            <span>(123)</span> </div>
                                                                        <p className="text"> Wooden Tables to Brighten Your
                                                                            Dining Room </p>
                                                                        <div className="price">
                                                                            <h2> $50 USD <del> $105 USD</del></h2>
                                                                            <h6> In stuck</h6>
                                                                        </div>
                                                                        <div className="color-varient"> <a href="#0"
                                                                                className="color-name pink">
                                                                                <span>Pink</span> </a> <a href="#0"
                                                                                className="color-name red"> <span>Red</span>
                                                                            </a> <a href="#0"
                                                                                className="color-name yellow"><span>Yellow</span>
                                                                            </a> <a href="#0" className="color-name blue">
                                                                                <span>Blue</span> </a> <a href="#0"
                                                                                className="color-name black">
                                                                                <span>Black</span> </a> </div>
                                                                        <div className="add-product">
                                                                            <h6>Qty:</h6>
                                                                            <div className="button-group">
                                                                                <div className="qtySelector text-center">
                                                                                    <span className="decreaseQty"><i
                                                                                            className="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                        className="qtyValue" defaultValue={1} />
                                                                                    <span className="increaseQty"> <i
                                                                                            className="flaticon-plus"></i>
                                                                                    </span> </div> <button
                                                                                    className="btn--primary "> Add to Cart
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-method"> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_1.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_2.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_3.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_4.png"
                                                                                    alt=""/> </a> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-grid-two-content text-center">
                                                        <span>Modern</span>
                                                        <h5><a href="shop-details-2.html">Exclusive Sneakers </a></h5>
                                                        <p>$159.00</p>
                                                        <p className="text"> Typi non habent claritatem insitam usus
                                                            legentis qui facit eorum claritatem Investigationes
                                                            demonstraverunt lectores legere mele lius quod legunt
                                                            saepius Claritas est etiam processus a capitalize on low
                                                            hanging </p>
                                                        <div className="product-grid-two__overlay-box">
                                                            <div className="title">
                                                                <h6><a href="cart.html">Add To Cart</a></h6>
                                                            </div>
                                                            <div className="icon">
                                                                <ul>
                                                                    <li><a href="#popup2z" className="popup_link"><i
                                                                                className="flaticon-eye"></i></a> </li>
                                                                    <li><a href="wishlist.html"><i
                                                                                className="flaticon-heart"></i></a> </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="product-grid-two list mt-30">
                                                    <div className="product-grid-two__img">
                                                        <a href="shop-details-2.html" className="d-block"> <img
                                                                src="/assets/images/home-three/products-3.jpg" alt="" />
                                                        </a>
                                                        <div className="products-grid-one__badge-box"> <span
                                                                className="bg_base badge new ">New</span> </div>
                                                    </div>
                                                    <div id="popup3zz" className="product-gird__quick-view-popup mfp-hide">
                                                        <div className="container">
                                                            <div className="row justify-content-between align-items-center">
                                                                <div className="col-lg-6">
                                                                    <div className="quick-view__left-content">
                                                                        <div className="tabs">
                                                                            <div className="popup-product-thumb-box">
                                                                                <ul>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb">
                                                                                        <a href="#tab4zz"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img3.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tab5zz"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img4.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tab6zz"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img5.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="popup-product-main-image-box">
                                                                                <div id="tab4zz"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img3.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tab5zz"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img4.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tab6zz"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img5.jpg"
                                                                                            alt="" /> </div>
                                                                                </div> <button className="prev"> <i
                                                                                        className="flaticon-back"></i>
                                                                                </button> <button className="next"> <i
                                                                                        className="flaticon-next"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="popup-right-content">
                                                                        <h3>Leather Brown Shoe</h3>
                                                                        <div className="ratting"> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i>
                                                                            <span>(123)</span> </div>
                                                                        <p className="text"> Wooden Tables to Brighten Your
                                                                            Dining Room </p>
                                                                        <div className="price">
                                                                            <h2> $50 USD <del> $105 USD</del></h2>
                                                                            <h6> In stuck</h6>
                                                                        </div>
                                                                        <div className="color-varient"> <a href="#0"
                                                                                className="color-name pink">
                                                                                <span>Pink</span> </a> <a href="#0"
                                                                                className="color-name red"> <span>Red</span>
                                                                            </a> <a href="#0"
                                                                                className="color-name yellow"><span>Yellow</span>
                                                                            </a> <a href="#0" className="color-name blue">
                                                                                <span>Blue</span> </a> <a href="#0"
                                                                                className="color-name black">
                                                                                <span>Black</span> </a> </div>
                                                                        <div className="add-product">
                                                                            <h6>Qty:</h6>
                                                                            <div className="button-group">
                                                                                <div className="qtySelector text-center">
                                                                                    <span className="decreaseQty"><i
                                                                                            className="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                        className="qtyValue" defaultValue={1} />
                                                                                    <span className="increaseQty"> <i
                                                                                            className="flaticon-plus"></i>
                                                                                    </span> </div> <button
                                                                                    className="btn--primary "> Add to Cart
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-method"> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_1.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_2.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_3.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_4.png"
                                                                                    alt=""/> </a> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-grid-two-content text-center">
                                                        <span>Modern</span>
                                                        <h5><a href="shop-details-2.html">Fashionable Sneakers </a></h5>
                                                        <p><del>$200</del> $159.00</p>
                                                        <p className="text"> Typi non habent claritatem insitam usus
                                                            legentis qui facit eorum claritatem Investigationes
                                                            demonstraverunt lectores legere mele lius quod legunt
                                                            saepius Claritas est etiam processus a capitalize on low
                                                            hanging </p>
                                                        <div className="product-grid-two__overlay-box">
                                                            <div className="title">
                                                                <h6><a href="cart.html">Add To Cart</a></h6>
                                                            </div>
                                                            <div className="icon">
                                                                <ul>
                                                                    <li><a href="#popup3zz" className="popup_link"><i
                                                                                className="flaticon-eye"></i></a> </li>
                                                                    <li><a href="wishlist.html"><i
                                                                                className="flaticon-heart"></i></a> </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="product-grid-two list mt-30">
                                                    <div className="product-grid-two__img"> <a href="shop-details-2.html"
                                                            className="d-block">
                                                            <img src="/assets/images/home-three/products-4.jpg" alt="" />
                                                        </a>
                                                        <div className="products-grid-one__badge-box"> <span
                                                                className="badge discount">-30%</span> </div>
                                                    </div>
                                                    <div id="popup4cc" className="product-gird__quick-view-popup mfp-hide">
                                                        <div className="container">
                                                            <div className="row justify-content-between align-items-center">
                                                                <div className="col-lg-6">
                                                                    <div className="quick-view__left-content">
                                                                        <div className="tabs">
                                                                            <div className="popup-product-thumb-box">
                                                                                <ul>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb">
                                                                                        <a href="#tab44cc"> <img
                                                                                                src="/assets/images/home-two/products-v5-img4.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tab55cc"> <img
                                                                                                src="/assets/images/home-two/products-v5-img5.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tab66cc"> <img
                                                                                                src="/assets/images/home-two/products-v5-img6.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="popup-product-main-image-box">
                                                                                <div id="tab44cc"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/home-two/products-v5-img4.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tab55cc"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/home-two/products-v5-img5.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tab66cc"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/home-two/products-v5-img6.jpg"
                                                                                            alt="" /> </div>
                                                                                </div> <button className="prev"> <i
                                                                                        className="flaticon-back"></i>
                                                                                </button> <button className="next"> <i
                                                                                        className="flaticon-next"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="popup-right-content">
                                                                        <h3>Comfort Cool Sofa </h3>
                                                                        <div className="ratting"> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i>
                                                                            <span>(123)</span> </div>
                                                                        <p className="text"> Wooden Tables to Brighten Your
                                                                            Dining Room </p>
                                                                        <div className="price">
                                                                            <h2> $50 USD <del> $105 USD</del></h2>
                                                                            <h6> In stuck</h6>
                                                                        </div>
                                                                        <div className="color-varient"> <a href="#0"
                                                                                className="color-name pink">
                                                                                <span>Pink</span> </a> <a href="#0"
                                                                                className="color-name red"> <span>Red</span>
                                                                            </a> <a href="#0"
                                                                                className="color-name yellow"><span>Yellow</span>
                                                                            </a> <a href="#0" className="color-name blue">
                                                                                <span>Blue</span> </a> <a href="#0"
                                                                                className="color-name black">
                                                                                <span>Black</span> </a> </div>
                                                                        <div className="add-product">
                                                                            <h6>Qty:</h6>
                                                                            <div className="button-group">
                                                                                <div className="qtySelector text-center">
                                                                                    <span className="decreaseQty"><i
                                                                                            className="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                        className="qtyValue" defaultValue={1} />
                                                                                    <span className="increaseQty"> <i
                                                                                            className="flaticon-plus"></i>
                                                                                    </span> </div> <button
                                                                                    className="btn--primary "> Add to Cart
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-method"> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_1.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_2.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_3.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_4.png"
                                                                                    alt=""/> </a> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-grid-two-content text-center">
                                                        <span>Modern</span>
                                                        <h5><a href="shop-details-2.html">Summer Shoes </a></h5>
                                                        <p><del>$200</del> $159.00</p>
                                                        <p className="text"> Typi non habent claritatem insitam usus
                                                            legentis qui facit eorum claritatem Investigationes
                                                            demonstraverunt lectores legere mele lius quod legunt
                                                            saepius Claritas est etiam processus a capitalize on low
                                                            hanging </p>
                                                        <div className="product-grid-two__overlay-box">
                                                            <div className="title">
                                                                <h6><a href="cart.html">Add To Cart</a></h6>
                                                            </div>
                                                            <div className="icon">
                                                                <ul>
                                                                    <li><a href="#popup4cc" className="popup_link"><i
                                                                                className="flaticon-eye"></i></a> </li>
                                                                    <li><a href="wishlist.html"><i
                                                                                className="flaticon-heart"></i></a> </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="product-grid-two list mt-30">
                                                    <div className="product-grid-two__img"> <a href="shop-details-2.html"
                                                            className="d-block"> <img
                                                                src="/assets/images/home-three/products-5.png" alt="" />
                                                        </a>
                                                        <div className="products-grid-one__badge-box"> <span
                                                                className="badge bg_base new">Hot</span> </div>
                                                    </div>
                                                    <div id="popup5vv" className="product-gird__quick-view-popup mfp-hide">
                                                        <div className="container">
                                                            <div className="row justify-content-between align-items-center">
                                                                <div className="col-lg-6">
                                                                    <div className="quick-view__left-content">
                                                                        <div className="tabs">
                                                                            <div className="popup-product-thumb-box">
                                                                                <ul>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb">
                                                                                        <a href="#tab444vv"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img5.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tab555vv"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img6.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tab666vv"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img7.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="popup-product-main-image-box">
                                                                                <div id="tab444vv"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img5.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tab555vv"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img6.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tab666vv"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img7.jpg"
                                                                                            alt="" /> </div>
                                                                                </div> <button className="prev"> <i
                                                                                        className="flaticon-back"></i>
                                                                                </button> <button className="next"> <i
                                                                                        className="flaticon-next"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="popup-right-content">
                                                                        <h3>Gold Hand Ring </h3>
                                                                        <div className="ratting"> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i>
                                                                            <span>(123)</span> </div>
                                                                        <p className="text"> Wooden Tables to Brighten Your
                                                                            Dining Room </p>
                                                                        <div className="price">
                                                                            <h2> $40 USD <del> $99 USD</del></h2>
                                                                            <h6> In stuck</h6>
                                                                        </div>
                                                                        <div className="color-varient"> <a href="#0"
                                                                                className="color-name pink">
                                                                                <span>Pink</span> </a> <a href="#0"
                                                                                className="color-name red"> <span>Red</span>
                                                                            </a> <a href="#0"
                                                                                className="color-name yellow"><span>Yellow</span>
                                                                            </a> <a href="#0" className="color-name blue">
                                                                                <span>Blue</span> </a> <a href="#0"
                                                                                className="color-name black">
                                                                                <span>Black</span> </a> </div>
                                                                        <div className="add-product">
                                                                            <h6>Qty:</h6>
                                                                            <div className="button-group">
                                                                                <div className="qtySelector text-center">
                                                                                    <span className="decreaseQty"><i
                                                                                            className="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                        className="qtyValue" defaultValue={1} />
                                                                                    <span className="increaseQty"> <i
                                                                                            className="flaticon-plus"></i>
                                                                                    </span> </div> <button
                                                                                    className="btn--primary "> Add to Cart
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-method"> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_1.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_2.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_3.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_4.png"
                                                                                    alt=""/> </a> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-grid-two-content text-center">
                                                        <span>Modern</span>
                                                        <h5><a href="shop-details-2.html">Outdoor Sports Shoes</a></h5>
                                                        <p><del>$200</del> $159.00</p>
                                                        <p className="text"> Typi non habent claritatem insitam usus
                                                            legentis qui facit eorum claritatem Investigationes
                                                            demonstraverunt lectores legere mele lius quod legunt
                                                            saepius Claritas est etiam processus a capitalize on low
                                                            hanging </p>
                                                        <div className="product-grid-two__overlay-box">
                                                            <div className="title">
                                                                <h6><a href="cart.html">Add To Cart</a></h6>
                                                            </div>
                                                            <div className="icon">
                                                                <ul>
                                                                    <li><a href="#popup5vv" className="popup_link"><i
                                                                                className="flaticon-eye"></i></a> </li>
                                                                    <li><a href="wishlist.html"><i
                                                                                className="flaticon-heart"></i></a> </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="product-grid-two list mt-30">
                                                    <div className="product-grid-two__img"> <a href="shop-details-2.html"
                                                            className="d-block"> <img
                                                                src="/assets/images/home-three/products-6.png" alt="" />
                                                        </a> </div>
                                                    <div id="popup6bb" className="product-gird__quick-view-popup mfp-hide">
                                                        <div className="container">
                                                            <div className="row justify-content-between align-items-center">
                                                                <div className="col-lg-6">
                                                                    <div className="quick-view__left-content">
                                                                        <div className="tabs">
                                                                            <div className="popup-product-thumb-box">
                                                                                <ul>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb">
                                                                                        <a href="#tab12bb"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img6.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tab13bb"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img7.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tab14bb"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img8.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="popup-product-main-image-box">
                                                                                <div id="tab12bb"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img6.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tab13bb"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img7.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tab14bb"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img8.jpg"
                                                                                            alt="" /> </div>
                                                                                </div> <button className="prev"> <i
                                                                                        className="flaticon-back"></i>
                                                                                </button> <button className="next"> <i
                                                                                        className="flaticon-next"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="popup-right-content">
                                                                        <h3>New Cotton Sofa </h3>
                                                                        <div className="ratting"> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i>
                                                                            <span>(123)</span> </div>
                                                                        <p className="text"> Wooden Tables to Brighten Your
                                                                            Dining Room </p>
                                                                        <div className="price">
                                                                            <h2> $40 USD <del> $99 USD</del></h2>
                                                                            <h6> In stuck</h6>
                                                                        </div>
                                                                        <div className="color-varient"> <a href="#0"
                                                                                className="color-name pink">
                                                                                <span>Pink</span> </a> <a href="#0"
                                                                                className="color-name red"> <span>Red</span>
                                                                            </a> <a href="#0"
                                                                                className="color-name yellow"><span>Yellow</span>
                                                                            </a> <a href="#0" className="color-name blue">
                                                                                <span>Blue</span> </a> <a href="#0"
                                                                                className="color-name black">
                                                                                <span>Black</span> </a> </div>
                                                                        <div className="add-product">
                                                                            <h6>Qty:</h6>
                                                                            <div className="button-group">
                                                                                <div className="qtySelector text-center">
                                                                                    <span className="decreaseQty"><i
                                                                                            className="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                        className="qtyValue" defaultValue={1} />
                                                                                    <span className="increaseQty"> <i
                                                                                            className="flaticon-plus"></i>
                                                                                    </span> </div> <button
                                                                                    className="btn--primary "> Add to Cart
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-method"> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_1.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_2.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_3.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_4.png"
                                                                                    alt=""/> </a> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-grid-two-content text-center">
                                                        <span>Modern</span>
                                                        <h5><a href="shop-details-2.html">Sport Sneakers</a></h5>
                                                        <p><del>$200</del> $159.00</p>
                                                        <p className="text"> Typi non habent claritatem insitam usus
                                                            legentis qui facit eorum claritatem Investigationes
                                                            demonstraverunt lectores legere mele lius quod legunt
                                                            saepius Claritas est etiam processus a capitalize on low
                                                            hanging </p>
                                                        <div className="product-grid-two__overlay-box">
                                                            <div className="title">
                                                                <h6><a href="cart.html">Add To Cart</a></h6>
                                                            </div>
                                                            <div className="icon">
                                                                <ul>
                                                                    <li><a href="#popup6bb" className="popup_link"><i
                                                                                className="flaticon-eye"></i></a> </li>
                                                                    <li><a href="wishlist.html"><i
                                                                                className="flaticon-heart"></i></a> </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="product-grid-two list mt-30">
                                                    <div className="product-grid-two__img"> <a href="shop-details-2.html"
                                                            className="d-block"> <img
                                                                src="/assets/images/home-three/productss2-1.jpg"
                                                                className="first-img" alt="" /> <img
                                                                src="/assets/images/home-three/productss2-hover-1.png"
                                                                alt="" className="hover-img" /> </a>
                                                        <div className="products-grid-one__badge-box"> <span
                                                                className="badge discount">-50%</span> </div>
                                                    </div>
                                                    <div id="popup8nn" className="product-gird__quick-view-popup mfp-hide">
                                                        <div className="container">
                                                            <div className="row justify-content-between align-items-center">
                                                                <div className="col-lg-6">
                                                                    <div className="quick-view__left-content">
                                                                        <div className="tabs">
                                                                            <div className="popup-product-thumb-box">
                                                                                <ul>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb">
                                                                                        <a href="#tab15nn"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img7.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tab16nn"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img8.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tab17nn"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img9.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="popup-product-main-image-box">
                                                                                <div id="tab15nn"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img7.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tab16nn"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img8.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tab17nn"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img9.jpg"
                                                                                            alt="" /> </div>
                                                                                </div> <button className="prev"> <i
                                                                                        className="flaticon-back"></i>
                                                                                </button> <button className="next"> <i
                                                                                        className="flaticon-next"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="popup-right-content">
                                                                        <h3>Pure Gold Earring </h3>
                                                                        <div className="ratting"> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i>
                                                                            <span>(123)</span> </div>
                                                                        <p className="text"> Wooden Tables to Brighten Your
                                                                            Dining Room </p>
                                                                        <div className="price">
                                                                            <h2> $40 USD <del> $99 USD</del></h2>
                                                                            <h6> In stuck</h6>
                                                                        </div>
                                                                        <div className="color-varient"> <a href="#0"
                                                                                className="color-name pink">
                                                                                <span>Pink</span> </a> <a href="#0"
                                                                                className="color-name red"> <span>Red</span>
                                                                            </a> <a href="#0"
                                                                                className="color-name yellow"><span>Yellow</span>
                                                                            </a> <a href="#0" className="color-name blue">
                                                                                <span>Blue</span> </a> <a href="#0"
                                                                                className="color-name black">
                                                                                <span>Black</span> </a> </div>
                                                                        <div className="add-product">
                                                                            <h6>Qty:</h6>
                                                                            <div className="button-group">
                                                                                <div className="qtySelector text-center">
                                                                                    <span className="decreaseQty"><i
                                                                                            className="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                        className="qtyValue" defaultValue={1} />
                                                                                    <span className="increaseQty"> <i
                                                                                            className="flaticon-plus"></i>
                                                                                    </span> </div> <button
                                                                                    className="btn--primary "> Add to Cart
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-method"> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_1.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_2.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_3.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_4.png"
                                                                                    alt=""/> </a> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-grid-two-content text-center">
                                                        <span>Modern</span>
                                                        <h5><a href="shop-details-2.html">Apex Sneakers</a></h5>
                                                        <p><del>$200</del> $159.00</p>
                                                        <p className="text"> Typi non habent claritatem insitam usus
                                                            legentis qui facit eorum claritatem Investigationes
                                                            demonstraverunt lectores legere mele lius quod legunt
                                                            saepius Claritas est etiam processus a capitalize on low
                                                            hanging </p>
                                                        <div className="product-grid-two__overlay-box">
                                                            <div className="title">
                                                                <h6><a href="cart.html">Add To Cart</a></h6>
                                                            </div>
                                                            <div className="icon">
                                                                <ul>
                                                                    <li><a href="#popup8nn" className="popup_link"><i
                                                                                className="flaticon-eye"></i></a> </li>
                                                                    <li><a href="wishlist.html"><i
                                                                                className="flaticon-heart"></i></a> </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="product-grid-two list mt-30">
                                                    <div className="product-grid-two__img"> <a href="shop-details-2.html"
                                                            className="d-block"> <img
                                                                src="/assets/images/home-three/productss2-2.jpg"
                                                                className="first-img" alt="" /> <img
                                                                src="/assets/images/home-three/productss2-hover-2.png"
                                                                alt="" className="hover-img" /> </a> </div>
                                                    <div id="popup9mm" className="product-gird__quick-view-popup mfp-hide">
                                                        <div className="container">
                                                            <div className="row justify-content-between align-items-center">
                                                                <div className="col-lg-6">
                                                                    <div className="quick-view__left-content">
                                                                        <div className="tabs">
                                                                            <div className="popup-product-thumb-box">
                                                                                <ul>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb">
                                                                                        <a href="#tabk1mm"> <img
                                                                                                src="/assets/images/home-two/products-v5-img8.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tabk2mm"> <img
                                                                                                src="/assets/images/home-two/products-v5-img4.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tabk3mm"> <img
                                                                                                src="/assets/images/home-two/products-v5-img1.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="popup-product-main-image-box">
                                                                                <div id="tabk1mm"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/home-two/products-v5-img8.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tabk2mm"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/home-two/products-v5-img4.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tabk3mm"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/home-two/products-v5-img1.jpg"
                                                                                            alt="" /> </div>
                                                                                </div> <button className="prev"> <i
                                                                                        className="flaticon-back"></i>
                                                                                </button> <button className="next"> <i
                                                                                        className="flaticon-next"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="popup-right-content">
                                                                        <h3>Wooden TV Table </h3>
                                                                        <div className="ratting"> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i>
                                                                            <span>(123)</span> </div>
                                                                        <p className="text"> Wooden Tables to Brighten Your
                                                                            Dining Room </p>
                                                                        <div className="price">
                                                                            <h2> $40 USD <del> $99 USD</del></h2>
                                                                            <h6> In stuck</h6>
                                                                        </div>
                                                                        <div className="color-varient"> <a href="#0"
                                                                                className="color-name pink">
                                                                                <span>Pink</span> </a> <a href="#0"
                                                                                className="color-name red"> <span>Red</span>
                                                                            </a> <a href="#0"
                                                                                className="color-name yellow"><span>Yellow</span>
                                                                            </a> <a href="#0" className="color-name blue">
                                                                                <span>Blue</span> </a> <a href="#0"
                                                                                className="color-name black">
                                                                                <span>Black</span> </a> </div>
                                                                        <div className="add-product">
                                                                            <h6>Qty:</h6>
                                                                            <div className="button-group">
                                                                                <div className="qtySelector text-center">
                                                                                    <span className="decreaseQty"><i
                                                                                            className="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                        className="qtyValue" defaultValue={1} />
                                                                                    <span className="increaseQty"> <i
                                                                                            className="flaticon-plus"></i>
                                                                                    </span> </div> <button
                                                                                    className="btn--primary"> Add to Cart
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-method"> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_1.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_2.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_3.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_4.png"
                                                                                    alt=""/> </a> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-grid-two-content text-center">
                                                        <span>Modern</span>
                                                        <h5><a href="shop-details-2.html">Fashionable Sneakers</a></h5>
                                                        <p>$159.00</p>
                                                        <p className="text"> Typi non habent claritatem insitam usus
                                                            legentis qui facit eorum claritatem Investigationes
                                                            demonstraverunt lectores legere mele lius quod legunt
                                                            saepius Claritas est etiam processus a capitalize on low
                                                            hanging </p>
                                                        <div className="product-grid-two__overlay-box">
                                                            <div className="title">
                                                                <h6><a href="cart.html">Add To Cart</a></h6>
                                                            </div>
                                                            <div className="icon">
                                                                <ul>
                                                                    <li><a href="#popup9mm" className="popup_link"><i
                                                                                className="flaticon-eye"></i></a> </li>
                                                                    <li><a href="wishlist.html"><i
                                                                                className="flaticon-heart"></i></a> </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="product-grid-two list mt-30">
                                                    <div className="product-grid-two__img">
                                                        <a href="shop-details-2.html" className="d-block">
                                                            <img src="/assets/images/home-three/productss2-3.jpg"
                                                                alt="" /> </a>
                                                    </div>
                                                    <div id="popupr1jj" className="product-gird__quick-view-popup mfp-hide">
                                                        <div className="container">
                                                            <div className="row justify-content-between align-items-center">
                                                                <div className="col-lg-6">
                                                                    <div className="quick-view__left-content">
                                                                        <div className="tabs">
                                                                            <div className="popup-product-thumb-box">
                                                                                <ul>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb">
                                                                                        <a href="#tabr1jj"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img9.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tabr2jj"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img10.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tabr3jj"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img11.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="popup-product-main-image-box">
                                                                                <div id="tabr1jj"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img9.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tabr2jj"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img10.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tabr3jj"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img11.jpg"
                                                                                            alt="" /> </div>
                                                                                </div> <button className="prev"> <i
                                                                                        className="flaticon-back"></i>
                                                                                </button> <button className="next"> <i
                                                                                        className="flaticon-next"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="popup-right-content">
                                                                        <h3>Brown Lather Chair </h3>
                                                                        <div className="ratting"> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i>
                                                                            <span>(123)</span> </div>
                                                                        <p className="text"> Wooden Tables to Brighten Your
                                                                            Dining Room </p>
                                                                        <div className="price">
                                                                            <h2> $40 USD <del> $99 USD</del></h2>
                                                                            <h6> In stuck</h6>
                                                                        </div>
                                                                        <div className="color-varient"> <a href="#0"
                                                                                className="color-name pink">
                                                                                <span>Pink</span> </a> <a href="#0"
                                                                                className="color-name red"> <span>Red</span>
                                                                            </a> <a href="#0"
                                                                                className="color-name yellow"><span>Yellow</span>
                                                                            </a> <a href="#0" className="color-name blue">
                                                                                <span>Blue</span> </a> <a href="#0"
                                                                                className="color-name black">
                                                                                <span>Black</span> </a> </div>
                                                                        <div className="add-product">
                                                                            <h6>Qty:</h6>
                                                                            <div className="button-group">
                                                                                <div className="qtySelector text-center">
                                                                                    <span className="decreaseQty"><i
                                                                                            className="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                        className="qtyValue" defaultValue={1} />
                                                                                    <span className="increaseQty"> <i
                                                                                            className="flaticon-plus"></i>
                                                                                    </span> </div> <button
                                                                                    className="btn--primary "> Add to Cart
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-method"> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_1.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_2.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_3.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_4.png"
                                                                                    alt=""/> </a> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-grid-two-content text-center">
                                                        <span>Modern</span>
                                                        <h5><a href="shop-details-2.html">Summer Shoes </a></h5>
                                                        <p>$159.00</p>
                                                        <p className="text"> Typi non habent claritatem insitam usus
                                                            legentis qui facit eorum claritatem Investigationes
                                                            demonstraverunt lectores legere mele lius quod legunt
                                                            saepius Claritas est etiam processus a capitalize on low
                                                            hanging </p>
                                                        <div className="product-grid-two__overlay-box">
                                                            <div className="title">
                                                                <h6><a href="cart.html">Add To Cart</a></h6>
                                                            </div>
                                                            <div className="icon">
                                                                <ul>
                                                                    <li><a href="#popupr1jj" className="popup_link"><i
                                                                                className="flaticon-eye"></i></a> </li>
                                                                    <li><a href="wishlist.html"><i
                                                                                className="flaticon-heart"></i></a> </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="product-grid-two list mt-30">
                                                    <div className="product-grid-two__img"> <a href="shop-details-2.html"
                                                            className="d-block">
                                                            <img src="/assets/images/home-three/productss2-4.jpg"
                                                                alt="" /> </a> </div>
                                                    <div id="popupr11hh"
                                                        className="product-gird__quick-view-popup mfp-hide">
                                                        <div className="container">
                                                            <div className="row justify-content-between align-items-center">
                                                                <div className="col-lg-6">
                                                                    <div className="quick-view__left-content">
                                                                        <div className="tabs">
                                                                            <div className="popup-product-thumb-box">
                                                                                <ul>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb">
                                                                                        <a href="#tabr11hh"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img10.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tabr22hh"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img11.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tabr33hh"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img9.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="popup-product-main-image-box">
                                                                                <div id="tabr11hh"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img10.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tabr22hh"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img11.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tabr33hh"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img9.jpg"
                                                                                            alt="" /> </div>
                                                                                </div> <button className="prev"> <i
                                                                                        className="flaticon-back"></i>
                                                                                </button> <button className="next"> <i
                                                                                        className="flaticon-next"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="popup-right-content">
                                                                        <h3>Blacked Necklace Set </h3>
                                                                        <div className="ratting"> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i>
                                                                            <span>(123)</span> </div>
                                                                        <p className="text"> Wooden Tables to Brighten Your
                                                                            Dining Room </p>
                                                                        <div className="price">
                                                                            <h2> $40 USD <del> $99 USD</del></h2>
                                                                            <h6> In stuck</h6>
                                                                        </div>
                                                                        <div className="color-varient"> <a href="#0"
                                                                                className="color-name pink">
                                                                                <span>Pink</span> </a> <a href="#0"
                                                                                className="color-name red"> <span>Red</span>
                                                                            </a> <a href="#0"
                                                                                className="color-name yellow"><span>Yellow</span>
                                                                            </a> <a href="#0" className="color-name blue">
                                                                                <span>Blue</span> </a> <a href="#0"
                                                                                className="color-name black">
                                                                                <span>Black</span> </a> </div>
                                                                        <div className="add-product">
                                                                            <h6>Qty:</h6>
                                                                            <div className="button-group">
                                                                                <div className="qtySelector text-center">
                                                                                    <span className="decreaseQty"><i
                                                                                            className="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                        className="qtyValue" defaultValue={1} />
                                                                                    <span className="increaseQty"> <i
                                                                                            className="flaticon-plus"></i>
                                                                                    </span> </div> <button
                                                                                    className="btn--primary "> Add to Cart
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-method"> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_1.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_2.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_3.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_4.png"
                                                                                    alt=""/> </a> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-grid-two-content text-center">
                                                        <span>Modern</span>
                                                        <h5><a href="shop-details-2.html">High Quality Sneakers</a></h5>
                                                        <p>$159.00</p>
                                                        <p className="text"> Typi non habent claritatem insitam usus
                                                            legentis qui facit eorum claritatem Investigationes
                                                            demonstraverunt lectores legere mele lius quod legunt
                                                            saepius Claritas est etiam processus a capitalize on low
                                                            hanging </p>
                                                        <div className="product-grid-two__overlay-box">
                                                            <div className="title">
                                                                <h6><a href="cart.html">Add To Cart</a></h6>
                                                            </div>
                                                            <div className="icon">
                                                                <ul>
                                                                    <li><a href="#popupr11hh" className="popup_link"><i
                                                                                className="flaticon-eye"></i></a> </li>
                                                                    <li><a href="wishlist.html"><i
                                                                                className="flaticon-heart"></i></a> </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="product-grid-two list mt-30">
                                                    <div className="product-grid-two__img"> <a href="shop-details-2.html"
                                                            className="d-block"> <img
                                                                src="/assets/images/home-three/productss3-1.jpg"
                                                                alt="" /> </a> </div>
                                                    <div id="popupr111g"
                                                        className="product-gird__quick-view-popup mfp-hide">
                                                        <div className="container">
                                                            <div className="row justify-content-between align-items-center">
                                                                <div className="col-lg-6">
                                                                    <div className="quick-view__left-content">
                                                                        <div className="tabs">
                                                                            <div className="popup-product-thumb-box">
                                                                                <ul>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb">
                                                                                        <a href="#tabr111g"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img11.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tabr222g"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img10.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tabr333g"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img9.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="popup-product-main-image-box">
                                                                                <div id="tabr111g"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img11.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tabr222g"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img9.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tabr333g"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img10.jpg"
                                                                                            alt="" /> </div>
                                                                                </div> <button className="prev"> <i
                                                                                        className="flaticon-back"></i>
                                                                                </button> <button className="next"> <i
                                                                                        className="flaticon-next"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="popup-right-content">
                                                                        <h3>Diamond Bracelet </h3>
                                                                        <div className="ratting"> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i>
                                                                            <span>(123)</span> </div>
                                                                        <p className="text"> Wooden Tables to Brighten Your
                                                                            Dining Room </p>
                                                                        <div className="price">
                                                                            <h2> $40 USD <del> $99 USD</del></h2>
                                                                            <h6> In stuck</h6>
                                                                        </div>
                                                                        <div className="color-varient"> <a href="#0"
                                                                                className="color-name pink">
                                                                                <span>Pink</span> </a> <a href="#0"
                                                                                className="color-name red"> <span>Red</span>
                                                                            </a> <a href="#0"
                                                                                className="color-name yellow"><span>Yellow</span>
                                                                            </a> <a href="#0" className="color-name blue">
                                                                                <span>Blue</span> </a> <a href="#0"
                                                                                className="color-name black">
                                                                                <span>Black</span> </a> </div>
                                                                        <div className="add-product">
                                                                            <h6>Qty:</h6>
                                                                            <div className="button-group">
                                                                                <div className="qtySelector text-center">
                                                                                    <span className="decreaseQty"><i
                                                                                            className="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                        className="qtyValue" defaultValue={1} />
                                                                                    <span className="increaseQty"> <i
                                                                                            className="flaticon-plus"></i>
                                                                                    </span> </div> <button
                                                                                    className="btn--primary "> Add to Cart
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-method"> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_1.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_2.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_3.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_4.png"
                                                                                    alt=""/> </a> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-grid-two-content text-center">
                                                        <span>Modern</span>
                                                        <h5><a href="shop-details-2.html">Outdoor Sports Shoes </a></h5>
                                                        <p>$159.00</p>
                                                        <p className="text"> Typi non habent claritatem insitam usus
                                                            legentis qui facit eorum claritatem Investigationes
                                                            demonstraverunt lectores legere mele lius quod legunt
                                                            saepius Claritas est etiam processus a capitalize on low
                                                            hanging </p>
                                                        <div className="product-grid-two__overlay-box">
                                                            <div className="title">
                                                                <h6><a href="cart.html">Add To Cart</a></h6>
                                                            </div>
                                                            <div className="icon">
                                                                <ul>
                                                                    <li><a href="#popupr111g" className="popup_link"><i
                                                                                className="flaticon-eye"></i></a> </li>
                                                                    <li><a href="wishlist.html"><i
                                                                                className="flaticon-heart"></i></a> </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="product-grid-two list mt-30">
                                                    <div className="product-grid-two__img"> <a href="shop-details-2.html"
                                                            className="d-block"> <img
                                                                src="/assets/images/home-three/productss3-2.jpg"
                                                                alt="" /> </a> </div>
                                                    <div id="popupr1111gg"
                                                        className="product-gird__quick-view-popup mfp-hide">
                                                        <div className="container">
                                                            <div className="row justify-content-between align-items-center">
                                                                <div className="col-lg-6">
                                                                    <div className="quick-view__left-content">
                                                                        <div className="tabs">
                                                                            <div className="popup-product-thumb-box">
                                                                                <ul>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb">
                                                                                        <a href="#tabr1111gg"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img9.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tabr2222gg"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img8.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                    <li
                                                                                        className="tab-nav popup-product-thumb ">
                                                                                        <a href="#tabr3333gg"> <img
                                                                                                src="/assets/images/shop/shop-grid-page-img8.jpg"
                                                                                                alt="" /> </a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="popup-product-main-image-box">
                                                                                <div id="tabr1111"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img9.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tabr2222"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img8.jpg"
                                                                                            alt="" /> </div>
                                                                                </div>
                                                                                <div id="tabr3333"
                                                                                    className="tab-item popup-product-image">
                                                                                    <div
                                                                                        className="popup-product-single-image">
                                                                                        <img src="/assets/images/shop/shop-grid-page-img7.jpg"
                                                                                            alt="" /> </div>
                                                                                </div> <button className="prev"> <i
                                                                                        className="flaticon-back"></i>
                                                                                </button> <button className="next"> <i
                                                                                        className="flaticon-next"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="popup-right-content">
                                                                        <h3>Comfort Office Chair </h3>
                                                                        <div className="ratting"> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i> <i
                                                                                className="flaticon-star"></i>
                                                                            <span>(123)</span> </div>
                                                                        <p className="text"> Wooden Tables to Brighten Your
                                                                            Dining Room </p>
                                                                        <div className="price">
                                                                            <h2> $40 USD <del> $99 USD</del></h2>
                                                                            <h6> In stuck</h6>
                                                                        </div>
                                                                        <div className="color-varient"> <a href="#0"
                                                                                className="color-name pink">
                                                                                <span>Pink</span> </a> <a href="#0"
                                                                                className="color-name red"> <span>Red</span>
                                                                            </a> <a href="#0"
                                                                                className="color-name yellow"><span>Yellow</span>
                                                                            </a> <a href="#0" className="color-name blue">
                                                                                <span>Blue</span> </a> <a href="#0"
                                                                                className="color-name black">
                                                                                <span>Black</span> </a> </div>
                                                                        <div className="add-product">
                                                                            <h6>Qty:</h6>
                                                                            <div className="button-group">
                                                                                <div className="qtySelector text-center">
                                                                                    <span className="decreaseQty"><i
                                                                                            className="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                        className="qtyValue" defaultValue={1} />
                                                                                    <span className="increaseQty"> <i
                                                                                            className="flaticon-plus"></i>
                                                                                    </span> </div> <button
                                                                                    className="btn--primary "> Add to Cart
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-method"> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_1.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_2.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_3.png"
                                                                                    alt=""/> </a> <a href="#0"> <img
                                                                                    src="/assets/images/payment_method/method_4.png"
                                                                                    alt=""/> </a> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-grid-two-content text-center">
                                                        <span>Modern</span>
                                                        <h5><a href="shop-details-2.html"> High Quality Sneakers </a>
                                                        </h5>
                                                        <p>$159.00</p>
                                                        <p className="text"> Typi non habent claritatem insitam usus
                                                            legentis qui facit eorum claritatem Investigationes
                                                            demonstraverunt lectores legere mele lius quod legunt
                                                            saepius Claritas est etiam processus a capitalize on low
                                                            hanging </p>
                                                        <div className="product-grid-two__overlay-box">
                                                            <div className="title">
                                                                <h6><a href="cart.html">Add To Cart</a></h6>
                                                            </div>
                                                            <div className="icon">
                                                                <ul>
                                                                    <li><a href="#popupr1111gg" className="popup_link"><i
                                                                                className="flaticon-eye"></i></a> </li>
                                                                    <li><a href="wishlist.html"><i
                                                                                className="flaticon-heart"></i></a> </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="pagination.last_page>1" className="row">
                            <div className="col-12 d-flex justify-content-center wow fadeInUp animated">
                                <ul className="pagination text-center">
                                    <li v-if="pagination.current_page!==1"
                                    	className="next">
                                    	<a click="getProducts(pagination.current_page-1)"
                                    		href="#0">
                                    		<i className="flaticon-left-arrows" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li v-for="link in pagination.links">
                                    	<template v-if="(link.label === 1) || (link.label === pagination.last_page) || (pagination.current_page-link.label <2 && pagination.current_page-link.label > - 2)">
                                    		<a className="pagination.current_page === link.label ? 'active':''"
	                                    		click="getProducts(link.label)"
	                                    		href="#0" >1
                                                {/* { link.label } */}
	                                    	</a>
                                    	</template>
                                    	<template v-if="pagination.current_page!==pagination.last_page-2 && pagination.current_page!==3 && ((pagination.current_page-link.label === 2) || (pagination.current_page-link.label === -2))">
                                    		<a>...</a>
                                    	</template>
                                    </li>
                                    <li v-if="pagination.current_page!==pagination.last_page"
                                    	className="next">
                                    	<a click="getProducts(pagination.current_page+1)"
                                    		href="#0">
                                    		<i className="flaticon-next-1" aria-hidden="true"></i> 
                                    	</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <FiltersSidebar filters={filters} currentFilters={currentFilters} applyFilters={applyFilters}/>
                </div>
            </div>
        </div>
    </main>
    )
}