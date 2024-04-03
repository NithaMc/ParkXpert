import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { successToast } from '../components/Toast/toastify'

const Adminlogin = () => {
    const [data,setData]=useState(null)
    const navigate=useNavigate()


let handleSubmit =async(e)=>{
      e.preventDefault()

        try{
        let response =await axios.post('http://localhost:5001/api/admin/login',data)
        console.log(data,'data');
        console.log(response,'response');
        if(response.data){
            localStorage.setItem("adminToken",response.data.token)
            localStorage.setItem("admins ",JSON.stringify(response.data.data))
       
            successToast("Succefully Registered")
            navigate('/homeAdmin')
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
<div className='maindiiv'>
<div className="seconddiv">

    <form onSubmit={handleSubmit}>
        <input type="text" className='text-black' name='admin' onChange={handleChange} placeholder=' Name' />
        <input type="email" className='text-black' name='email'onChange={handleChange} placeholder='Email' />
        <input type="Password" className='text-black' name='password'onChange={handleChange} placeholder='enter atleast 8letter  password' />
    <button className='ml-2 p-4 rounded bg-gray-600'>Submit</button>
    </form>
</div>

</div>


  
  )
}
export default Adminlogin