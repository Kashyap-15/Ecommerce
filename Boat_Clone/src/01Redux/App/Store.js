import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Feature/Auth/AuthSlice";

export const store = configureStore({
    reducer:{authReducer},
})