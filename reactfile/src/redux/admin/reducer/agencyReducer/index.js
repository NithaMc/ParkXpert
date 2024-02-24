import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialstate.js"


const agencyReducer = createSlice({
    initialState,
    name:'agencyReducer',
    reducers:{
        isAgencyCreation:()=>{

        },
        isAgencySignup:()=>{

        },
        isAgencyLoggOut:()=>{

        },
        isAgencyProfile:()=>{

        },
        isAgencies:()=>{

        },
        isAgencyEdit:()=>{

        },
    }
})



export const { isAgencies,isAgencySignup,isAgencyLoggOut,isAgencyProfile,isAgencyEdit,isAgencyCreation } = agencyReducer.actions

export default agencyReducer.reducer;