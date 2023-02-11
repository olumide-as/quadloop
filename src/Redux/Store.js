import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./Slice/AuthSlice";
import productReducer from "./Slice/ProductSlice";


const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,

});

const store = configureStore({
  reducer: rootReducer

});

export default store;