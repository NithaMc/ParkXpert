import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Adminlogin = () => {
    const [data,setData]=useState(null)
    const navigate=useNavigate()


let handleSubmit =async(e)=>{
      e.preventDefault()

        try{
        let response =await axios.post('http://localhost:5000/api/user/login',data)
        console.log(data,'data');
        // console.log(response);
    
            navigate('/homeadmin')
console.log(response,'response');
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
        <input type="text" name='admin' onChange={handleChange} placeholder=' Name' />
        <input type="email" name='email'onChange={handleChange} placeholder='Email' />
        <input type="Password" name='password'onChange={handleChange} placeholder='enter atleast 8letter  password' />

    </form>
</div>

</div>


  
  )
}
export default Adminlogin