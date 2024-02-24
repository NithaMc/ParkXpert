import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialstate.js"


const adminReducer = createSlice({
    initialState,
    name:'adminReducer',
    reducers:{
        isAdminLogin:(state,action)=>{
            // console.log('action');
            // console.log(action.payload,'reduxx');
        },
        isAdminSignup:(state,action)=>{
            console.log('action');
            console.log(action.payload,'reduxx');
        },
        isAdminLoggOut:()=>{

        },
        isAdminProfile:()=>{

        },
    }
})



export const { isAdminLoggOut,isAdminLogin,isAdminSignup,isAdminProfile } = adminReducer.actions

export default adminReducer.reducer;