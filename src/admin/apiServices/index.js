import axios from "axios"
import { baseURL } from "../../api"


const adminAPI = `${baseURL}/admin`


export const adminLogin_API =async (data)=>{
    try {
        const response = await axios.post(`${adminAPI}/login`,data)
        return response.data;
    } catch (error) {
       console.log(error.message);  
    }
}

export const adminSignup_API =async (data)=>{
    try {
        const response = await axios.post(`${adminAPI}/register`,data)
        return response.data;
    } catch (error) {
       console.log(error);  
        
    }
}
export const  agencyCreation_API = async (agencydata)=>{
    try{
    let response = await axios.post(`${adminAPI}/agencycreaction`, agencydata);
    return response.agencydata 

    }catch(error){
        console.log(error);
    }
}
export const companyCreation_API = async (companydata)=>{
    try{
        let response= await axios.post(`${adminAPI}/companycreation`,companydata)
        return response.companydata
    }catch(error){
        console.log(error);
    }
}
export const getAllCompany_API =async (data) =>{
    try{
        let response= await axios.get(`${adminAPI}/companydetails`,data)
        return response.data
    }catch(error){
        console.log(error);
    }
}

export const getAllAgency_API =async (data)=>{
    try{
        let response=await axios.get(`${adminAPI}/companies`,data)
        return response.data

    }catch(error){
        console.log(error);
    }
}

export const getAllUsers_API =async (data)=>{
    try{
        let response = await axios .get(`${adminAPI}/usersdetails`,data)
        return response.data
    }catch(error){
        console.log(error);
    }
}