import React, { useState } from 'react'
import axios from 'axios'
import '/Login'

const Signup = () => {
    const [data,setData]=useState(null)


    let handleSubmit =async(e)=>{
          e.preventDefault()
    
            try{
            // let response =await axios.post('http://localhost/admin/register',data)
            // console.log(response);
            console.log(data,'data');
            // adminSignup(data)
    
            }catch(error){
                console.log(error);
    
            }
        }
        let handleChange =(e)=>{
            setData({...data,[e.target.name]:e.target.value})
          }
          console.log(data);
  return (
  
    <div className='container m-auto signup'>
   
    <form onSubmit={handleSubmit}>
        <input type="text" name='name' onChange={handleChange} placeholder='Admin Name' />
        <input type="email" name='email'onChange={handleChange} placeholder='Email' />
        <input type="Password" name='password'onChange={handleChange} placeholder='enter atleast 8letter  password' />
        <button  type='submit'>Register</button>

    </form>
    <p>already have an account ?</p>
    <button><a href="/login"></a></button>

    </div>


    
  )
}
export  default Signup