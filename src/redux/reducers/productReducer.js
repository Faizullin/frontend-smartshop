import { GET_PRODUCT, GET_PRODUCTS, GET_PRODUCT_FILTERS, PRODUCT_ERROR, SET_CURRENT_FILTERS } from "../actions/types";
  
const initialState = {
    products: [],
    product: null,
    filters: {
        product_types: [],
        shops: [],
    },
    currentFilters: {
        product_types: [],
        shops: [],
        search: '',
    },
    loading: true,
    error: {}
};
  
const productReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case GET_PRODUCTS:
            return { ...state, products: payload, loading: false,};
        case GET_PRODUCT:
            return { ...state, product: payload, loading: false };
        case PRODUCT_ERROR:
            console.log("Error in payload", payload)
            return { ...state, error: payload, loading: false };
        case GET_PRODUCT_FILTERS:
            return {
                ...state,
                filters: {
                    shops: payload.shops || [],
                    product_types: payload.product_types || [],
                },//[...state.products.filter(product => product.id !== payload)],
                loading: false
            };
        case SET_CURRENT_FILTERS:
            return {
                ...state,
                currentFilters: {...payload},
            };
        default:
            return state;
    }
}
export default productReducer;