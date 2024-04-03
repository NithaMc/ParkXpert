import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SecuritySignin = () => {
 
  
        const [data,setData]=useState(null)
        const navigate=useNavigate()
    
    
    let handleSubmit =async(e)=>{
          e.preventDefault()
    
            try{
            let response =await axios.post('http://localhost:5001/api/security/login',data)
            console.log(data,'data');
            console.log(response.data,"responsedata");
            localStorage.setItem("securityToken",response.data.token)
            localStorage.setItem("security",JSON.stringify(response.data.security))

                navigate('/security')
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
            <input type="text" name='admin'  className="text-slate-950"onChange={handleChange} placeholder=' Name' />
            <input type="email" name='email'  className="text-slate-950"onChange={handleChange} placeholder='Email' />
            <input type="Password" name='password'  className="text-slate-950"onChange={handleChange} placeholder='enter atleast 8letter  password' />
    <button className='bg-sky-700 p-4 rounded-md'>submit</button>
        </form>
    </div>
    
    </div>
    
    
      
      )
    }
    
  
