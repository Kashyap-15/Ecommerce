import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Feature/Auth/AuthSlice";
import productReducer from "../Feature/Product/ProductSlice";
import cartReducer from "../Feature/Cart/CartSlice";

export const store = configureStore({
    reducer:{authReducer,productReducer,cartReducer},
})
