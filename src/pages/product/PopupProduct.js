import { useEffect } from "react"
import $ from 'jquery'
import 'magnific-popup';

export default function PopupProduct({product}) {
    useEffect(()=>{
        console.log('change',product)
        // if(product) {
        //     console.log('h',$('#product-popup-el'))
        //     $('#product-popup-el').magnificPopup('open'); 
        // }
        //$(document).trigger("changed")
    },[product])
    return (
        <div id="product-popup-el" className="product-gird__quick-view-popup mfp-hide">
            { product && (
                <div className="container">
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
                                <h3>{ product.name }</h3>
                                <div className="ratting"> <i
                                        className="flaticon-star"></i> <i
                                        className="flaticon-star"></i> <i
                                        className="flaticon-star"></i>
                                    <i className="flaticon-star"></i> <i
                                        className="flaticon-star"></i>
                                    <span>(112)</span> </div>
                                <p className="text"> { product.description }
                                </p>
                                <div className="price">
                                    <h2> ${ product.price } USD <del> $65 USD</del></h2>
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
            ) }
            
        </div>
    )
}