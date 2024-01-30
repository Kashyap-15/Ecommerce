import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BE_URL } from "../../../../DataForImages"
import { useSelector } from "react-redux"


export const fetchCart = createAsyncThunk("getCart",(action)=>{
    return axios({
        method:"get",
        url:`${BE_URL}/cart/getAll`,
        params:action,
        headers:{
            "Content-Type":"application/json",
            authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
    }).then((res) => {
        return res.data
    }).catch((err)=>{
        console.log(err.message);
    })
})

let initialState = {
    carts:[],
    cartId:"",
    pending:false,
    error:"",
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCart : (state,action)=>{}
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCart.fulfilled,(state,action)=>{
            state.carts = action?.payload?.data;
            state.cartId = action?.payload?.cartId;
            state.pending = false;
        })
        .addCase(fetchCart.pending,(state,action)=>{
            state.pending=true;
        })
        .addCase(fetchCart.rejected,(state,action)=>{
            state.error = action?.error?.message;
            state.pending = true;
        })
    }
})

export default cartSlice.reducer;
export const {addCart} = cartSlice.actions;