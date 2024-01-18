import { createSlice } from "@reduxjs/toolkit";

let user = localStorage.getItem("user") ;
let token = localStorage.getItem("token") ;

const initialState = {
    user: user ? JSON.parse(user) : {},
    token: token ? JSON.parse(token) : "",
}
export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action) => {
            localStorage.setItem("user",JSON.stringify(action.payload.data))
            localStorage.setItem("token",JSON.stringify(action.payload.token))
            state.user=action.payload.data;
            state.token=action.payload.token;
        },
        logout:(state,action)=>{
            localStorage.clear();
            state.user={};
            state.token="";
        }   
    }
})

export default authSlice.reducer;
export const {login,logout} = authSlice.actions;