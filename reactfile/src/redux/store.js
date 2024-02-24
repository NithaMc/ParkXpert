import { configureStore } from "@reduxjs/toolkit";
import {
    adminAuthReducer,
    adminCompanyReducer,
    adminAgencyReducer,
    adminUserReducer,  } from "./admin/reducer";
import {userAuthReducer} from "./user/reducer/";

export const store =configureStore({
    reducer:{
       adminAuthReducer,
       adminAgencyReducer,
       adminCompanyReducer,
       adminUserReducer,
       userAuthReducer,

    }
})
export default store;