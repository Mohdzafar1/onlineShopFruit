import { createSlice } from "@reduxjs/toolkit";


const initialState={
    error:false,
    loading:false,
    productAll:[]

}


const productSlice=createSlice({
    name:"Product",
    initialState,
    reducers:{
         getAllProduct(state,action){
            state.productAll=action.payload
         }
    }
})

export const {getAllProduct}=productSlice.actions
export default productSlice.reducer
