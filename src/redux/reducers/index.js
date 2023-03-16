import { combineReducers } from "redux";
//import alert from "./alert";
import authReducer from "./authReducer";
//import profile from "./product";
import productReducer from "./productReducer";

export default combineReducers({ authReducer, productReducer,});