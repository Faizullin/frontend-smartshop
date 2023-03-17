import axios from '../../api/axios';
import { GET_POPUP_PRODUCT, GET_PRODUCT, GET_PRODUCTS, GET_PRODUCT_FILTERS, PRODUCT_ERROR, PURCHASE_ERROR, PURCHASE_PRODUCT, SET_CURRENT_FILTERS } from "./types";
//import { setAlert } from "./alert";

export const getProducts = (filters = {}) => async dispatch => {
  try {
    const res = await axios.get("/api/products",{ params: filters });
    dispatch({ type: GET_PRODUCTS, payload: res.data });
    console.log("api filters got",res.data.shop,res.data.type,res.data)
    dispatch({ type: SET_CURRENT_FILTERS, payload: {
      shops: [res.data.shop],
      product_types: [res.data.type],
    } });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getProduct = postId => async dispatch => {
  try {
    const res = await axios.get(`/api/products/${postId}`);

    dispatch({ type: GET_PRODUCT, payload: res.data });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getPopupProduct = postId => async dispatch => {
  try {
    const res = await axios.get(`/api/products/${postId}`);

    dispatch({ type: GET_POPUP_PRODUCT, payload: res.data });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getFilters = postId => async dispatch => {
  try {
    const res = await axios.get(`/api/filters`);
    dispatch({ type: GET_PRODUCT_FILTERS, payload: res.data });

  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const purchaseProduct = formData => async dispatch => {
  const config = {
    headers: { "Content-Type": "application/json" }
  };
  try {
    const res = await axios.post("/api/purchase", formData, config);

    dispatch({ type: PURCHASE_PRODUCT, payload: res.data });
    //dispatch(setAlert("Post Added", "success"));
  } catch (err) {
    dispatch({
      type: PURCHASE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};



// export const deleteComment = (postId, commentId) => async dispatch => {
//   try {
//     await axios.delete(`/api/posts/comments/${commentId}`);

//     dispatch({ type: REMOVE_COMMENT, payload: commentId });
//     dispatch(setAlert("Comment Removed", "success"));
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };