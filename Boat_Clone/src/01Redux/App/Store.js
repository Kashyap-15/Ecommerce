import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Feature/Auth/AuthSlice";
import productReducer from "../Feature/Product/ProductSlice";

export const store = configureStore({
    reducer:{authReducer,productReducer},
})