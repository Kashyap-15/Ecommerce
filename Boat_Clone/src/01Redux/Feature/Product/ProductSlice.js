import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BE_URL } from "../../../../DataForImages"

export const fetchProduct = createAsyncThunk("getProduct",(action)=>{
    return axios({
        method:"get",
        url:`${BE_URL}/product/getAllPaginate`,
        params:action,
    }).then((res) => {
        return res.data;
    }).catch((err)=>{
        console.log(err.message)
    })
})

let initialState = {
  products:[],
  pending:false,
  error:"",
  count:0
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        addProduct:(state,action)=>{}
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProduct.fulfilled,(state,action) => {

                state.products = action?.payload?.data;
            	state.count = action?.payload?.count;
            	state.pending=false;
        })
        .addCase(fetchProduct.pending,(state,action)=>{
            state.pending=true;
        })
        .addCase(fetchProduct.rejected,(state,action)=>{
            state.error=action.error.code.message;
            state.pending=true;
        })
    }
})

export default productSlice.reducer
export const {addProduct} = productSlice.actions