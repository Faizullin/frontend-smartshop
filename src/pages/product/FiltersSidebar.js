import { useEffect, useRef, useState } from "react";
import $ from 'jquery'
import 'jquery-ui/ui/widgets/slider';

export default function FiltersSidebar({filters,applyFilters,currentFilters}){
    const [searchData,setSearchData] = useState('')
    const [priceRangeValues, setPriceRangeValues] = useState([0, 2000]);
    const sliderRef = useRef(null);

    useEffect(() => {
        const sliderEl = $(sliderRef.current);
        sliderEl.slider({
            range: true,
            min: 0,
            max: 2000,
            values: priceRangeValues,
            slide: (event, ui) => {
                setPriceRangeValues(ui.values);
                //$("#priceRange").val("$" + ui.values[0] + " - $" + ui.values[1]);
            },
        });
        //$("#priceRange").val("$" + $("#price-range").slider("values", 0) + " - $" + $("#price-range").slider("values", 1));
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        applyFilters({
            ...currentFilters,
            search: searchData,
        })
    }
    const handleFilterChange = (e,data) => {
        e.preventDefault();
        Object.keys(data).forEach((key) => {
            if(currentFilters[key] == data[key]){
                currentFilters[key] = null
                data[key] = null
            }
        })
        applyFilters({
            ...currentFilters,
            ...data,
        })
    }
    useEffect(() => {
        setSearchData(currentFilters.search)
    },[])
    return (
        <div className="col-xl-3 col-lg-4">
            <div className="shop-grid-sidebar"> <button className="remove-sidebar d-lg-none d-block"> <i
                        className="flaticon-cross"> </i> </button>
                <div className="sidebar-holder">
                    <form action="#0" className="footer-default__subscrib-form m-0 p-0 wow fadeInUp animated" onSubmit={handleSearchSubmit}>
                        <div className="footer-input-box p-0 "> 
                        <input type="text" placeholder="Search" name="search"
                            value={searchData} onChange={(e) =>  setSearchData(e.target.value)}/> <button type="submit" className="subscribe_btn"> <i
                                    className="flaticon-magnifying-glass"></i> </button> </div>
                    </form>
                    <div className="single-sidebar-box mt-30 wow fadeInUp animated ">
                        <h4>Select Product Types</h4>
                        <div className="checkbox-item">
                            <form>
                                { filters.product_types.map((product_type, index) => (
                                    <div key={product_type.id} className="form-group"> 
                                        <input id={`product_type-${product_type.id}`}
                                            value={product_type.id}
                                            type="checkbox" onChange={(e) => {handleFilterChange(e,{type:product_type.id})}}
                                            checked={product_type.id == currentFilters.type}/> 
                                        <label htmlFor={`product_type-${product_type.id}`}>
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
                            <div id="price-range" className="slider" ref={sliderRef}>
                                
                            </div>
                            <div className="output-price">
                                <label htmlFor="priceRange">Price:</label> 
                                <input type="text" id="priceRange" readOnly={true}
                                    value={"$" + priceRangeValues[0] + " - $" + priceRangeValues[1]}/> 
                            </div> 
                            <button onClick={(e) => {handleFilterChange(e,{prices: priceRangeValues})}}
                                className="filterbtn" type="submit"> Filter </button>
                        </div>
                    </div>
                    <div className="single-sidebar-box mt-30 wow fadeInUp animated pb-0 border-bottom-0">
                        <h4>Shops ({filters.shops.length})</h4>
                        <ul className="popular-tag">
                            { filters.shops.map((shop,index) => (
                                <li key={shop.id} id="`tag-${tag.id}`">
                                    <a onClick={(e) => {handleFilterChange(e,{shop:shop.id})}} className={`${ currentFilters.shop == shop.id ? 'active' : '' }`}>
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