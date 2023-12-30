import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchproduct = createAsyncThunk("getProduct", (actions) => {
    console.log("dcdfdv-----------------------", actions);
    return axios({
        method: "get",
        url: "http://localhost:9999/product/getAllPaginate",
        params: actions
    }).then((res) => {
        return res.data
    });
});

const initialState = {
    products: [],
    pending: false,
    count: "",
    error: "",
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addproduct: (state, action) => { }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchproduct.fulfilled, (state, action) => {
                state.products = action.payload.data;
                state.count=action.payload.count
                console.log("🚀 ~ file: Product.js:34 ~ .addCase ~ action.payload.count:", state.count)
                state.pending = false;
            })
            .addCase(fetchproduct.pending, (state, action) => {
                state.pending = true;
            })
            .addCase(fetchproduct.rejected, (state, action) => {
                state.error = action.error.code.message;
                state.pending = false
            })
    }
})

export default productSlice.reducer;
export const { addproduct } = productSlice.actions