import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialstate.js"


const adminReducer = createSlice({
    initialState,
    name:'adminReducer',
    reducers:{
        isUserLogin:()=>{

        },
        isUserSignup:()=>{

        },
        isUserLoggOut:()=>{

        },
        isUserProfile:()=>{

        },
        isAllUsersProfile:()=>{
            // console.log('action');
            // console.log(action.payload,'redux');
        },
        
    }
})



export const { isUserLoggOut,isUserLogin,isUserSignup,isUserProfile ,isAllUsersProfile} = adminReducer.actions

export default adminReducer.reducer;