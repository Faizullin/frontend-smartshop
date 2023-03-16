export default function FiltersSidebar({filters,applyFilters,currentFilters}){
    console.log(currentFilters.shops)
    return (
        <div className="col-xl-3 col-lg-4">
            <div className="shop-grid-sidebar"> <button className="remove-sidebar d-lg-none d-block"> <i
                        className="flaticon-cross"> </i> </button>
                <div className="sidebar-holder">
                    <form action="#0" className="footer-default__subscrib-form m-0 p-0 wow fadeInUp animated">
                        <div className="footer-input-box p-0 "> <input type="email" placeholder="Email address"
                                name="email"/> <button type="submit" className="subscribe_btn"> <i
                                    className="flaticon-magnifying-glass"></i> </button> </div>
                    </form>
                    <div className="single-sidebar-box mt-30 wow fadeInUp animated ">
                        <h4>Select Product Types</h4>
                        <div className="checkbox-item">
                            <form>
                                { filters.product_types.map((product_type, index) => (
                                    <div key={product_type.id} v-for="category in filterList.categories" className="form-group"> 
                                        <input id="`category-${category.id}`" v-model="categories" 
                                            value="category.id"
                                            type="checkbox"/> 
                                        <label htmlFor="`category-${category.id}`">
                                            { product_type.name }
                                        </label> 
                                    </div>
                                )) }
                                
                            </form>
                        </div>
                    </div>
                    <div className="single-sidebar-box mt-30 wow fadeInUp animated">
                        <h4>Filter By Price</h4>
                        <div className="slider-box">
                            <div id="price-range" className="slider">
                                
                            </div>
                            <div className="output-price">
                                <label htmlFor="priceRange">Price:</label> 
                                <input type="text" id="priceRange" readOnly/> 
                            </div> 
                            <button click="filterProducts"
                                className="filterbtn" type="submit"> Filter </button>
                        </div>
                    </div>
                    <div className="single-sidebar-box mt-30 wow fadeInUp animated pb-0 border-bottom-0">
                        <h4>Shops ({filters.shops.length})</h4>
                        <ul className="popular-tag">
                            { filters.shops.map((shop,index) => (
                                <li key={shop.id} id="`tag-${tag.id}`" className={`${ currentFilters.shops.some(el => {console.log(el,shop.id);return shop.id == el}) }`}>
                                    <a onClick={(e) => {e.preventDefault();applyFilters({shops:[shop.id]})}}>
                                        { shop.name }
                                    </a>
                                </li>
                            )) }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}