import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialstate.js"


const companyReducer = createSlice({
    initialState,
    name:'companyReducer',
    reducers:{
        isCompanyCreation:(state,action)=>{
            console.log('action');
            console.log(action.payload,'reduxx');
        },
        isCompanySignup:()=>{

        },
        isCompanyLoggOut:()=>{

        },
        isCompanyProfile:()=>{

        },
        isCompanies:()=>{

        },
        isCompanyEdit:()=>{

        },
    }
})



export const { isCompanies,isCompanyCreation,isCompanyEdit,isCompanyProfile,isCompanySignup,isCompanyLoggOut } = companyReducer.actions

export default companyReducer.reducer;