import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartFullDetails: [],

}

export const cartslice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cartDetails: (state, action) => {
            state.cartFullDetails = [...state.cartFullDetails, action.payload]
        },  
    }
})

export default cartslice.reducer;
export const { cartDetails } = cartslice.actions;
