import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialstate.js"


const userReducer = createSlice({
    initialState,
    name:'userReducer',
    reducers:{
        isUserLogin:()=>{

        },
        isUserSignup:()=>{

        },
        isUserLoggOut:()=>{

        },
        isUserProfile:()=>{

        },
        

    }
})



export const { isUserSignup,isUserLoggOut,isUserProfile,isUserLogin } = userReducer.actions

export default userReducer.reducer;