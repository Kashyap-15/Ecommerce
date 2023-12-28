import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Feature/Auth/Auth"
import cartReducer from "../Feature/Cart/Cart"
import productReducer from "../Feature/Product/Product"


export const store =  configureStore({
    reducer:{ authReducer, cartReducer, productReducer}
})