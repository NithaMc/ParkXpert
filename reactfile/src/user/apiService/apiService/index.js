import axios from "axios"
import { baseURL } from "../../../api"


const userAPI = `${baseURL}/user/`


export const userLogin_API =async (data)=>{
    try {
        const response = await axios.post(`${userAPI}/login`,data)
        return response.data;
    } catch (error) {
       console.log(error.message);  
    }
}

export const userSignup_API =async (data)=>{
    try {
        const response = await axios.post(`${userAPI}/register`,data)
        return response.data;
        // if(response){
        //     alert('Registration Successfull')
        //     navigate('/signin')
        //   }
    } catch (error) {
       console.log(error.message);  
    }
}