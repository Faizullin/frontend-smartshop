import { Link } from "react-router-dom";
import ProductHoverImage from "../../base/assets/images/inner-pages/product-hover-2.jpg"

export default  function ProductItem({product, addToCart, openPopupPrroduct}) {
    return (
        <div className="col-xl-4 col-lg-6 col-6 ">
            <div className="products-three-single w-100 mt-30">
                <div className="products-three-single-img" style={{ height: '400px' }}> 
                    <Link to={`/product/${product.id}`} className="d-block">
                        <img
                            src={product.image ?? ""}
                            className="first-img" alt="" /> <img
                            src={ProductHoverImage}
                            alt="" className="hover-img" />
                    </Link>
                    <div className="products-grid-one__badge-box"> <span
                            className="bg_base badge new ">New</span>
                    </div> 
                        <a onClick={(e) => {e.preventDefault();addToCart(product,1)}} 
                            className="addcart btn--primary style2">
                            Add To Cart 
                        </a>
                    <div className="products-grid__usefull-links">
                        <ul>
                            <li><a href="#"> <i className="flaticon-heart">
                                    </i> <span>
                                        wishlist</span> </a> </li>
                            <li><a href="#"> <i
                                        className="flaticon-left-and-right-arrows"></i>
                                    <span>
                                        compare</span> </a> </li>
                            <li>
                                <a href="#" 
                                    onClick={(e) => {e.preventDefault(); openPopupPrroduct(product);}}
                                    className="popup_link">
                                    <i className="flaticon-visibility"></i>
                                    <span> quick view</span>
                                </a> 
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="products-three-single-content text-center"> <span>{ product.type?.name || "Type ~ UD"}</span>
                    <h5>
                        <Link to={`/product/${product.id}`}>{ product.name }</Link>
                    </h5>
                    <p><del>$200.00</del> ${ product.price }</p>
                </div>
            </div>
        </div>
    )
}