import React, { useState } from 'react'
import axios from 'axios'
import { successToast } from '../components/Toast/toastify'
import { useNavigate } from 'react-router-dom'
import {IoPersonCircleOutline} from "react-icons/io5"

const UserLogin = () => {
    const [data,setData]=useState(null)
    const navigate=useNavigate()



    let handleSubmit =async(e)=>{
          e.preventDefault()
    
            try{
            let response =await axios.post('http://localhost:5001/api/user/login',data)
            console.log(response);
            console.log(data,'data');
            if(response.data){
              localStorage.setItem("userToken",response.data.token)
              localStorage.setItem("users ",JSON.stringify(response.data.data))
              localStorage.setItem("userId ",response.data.data._id)
            
              console.log(response.data.token,'usertoken');
              successToast("Succefully Loggedin")
              navigate('/usercompanies')
            }
    
            }catch(error){
                console.log(error);
    
            }
        }
        let handleChange =(e)=>{
            setData({...data,[e.target.name]:e.target.value})
          }
          console.log(data);
  return (
  
    <div className='usercontainer m-auto p-10 '>
   
    <form onSubmit={handleSubmit} className='formdiv'>
      <div className='input-container'> 

        <span className=' p-2 ml-[100px]'><IoPersonCircleOutline className='icon'/></span> <br />
      </div>
        <input type="text"className='classinput'  name='name' onChange={handleChange} placeholder='Your Name '  />  
        <br />
        <input type="email" className='classinput' name='email'onChange={handleChange} placeholder='Email' /> <br />
        <input type="Password" className='classinput' name='password'onChange={handleChange} placeholder='enter atleast 8letter  password' />
        <br />
        <button className='login-btn' type='submit'>Login</button>

    </form>

    </div>


    
  )
}
export  default UserLogin