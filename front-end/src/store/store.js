import { configureStore } from "@reduxjs/toolkit";
import { getAllProduct } from "./slices/productSlice";


export default configureStore({
    reducer:{
        products:getAllProduct
    }
})