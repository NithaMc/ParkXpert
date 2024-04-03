import React, { useState } from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
import "./Scrtysignup.css"
import { errorToast, successToast } from '../../Toast/toastify'

const SecuritySignup = () => {

    
 
    
      const navigate=useNavigate()
   
        const [datas,setDatas]=useState(null)
    
    
        let handleSubmit =async(e)=>{
              e.preventDefault()
        console.log(datas,"dtaata");
                try{
                let response =await axios.post('http://localhost:5001/api/security/',datas)
                 successToast(response.data.message)
                 console.log(response.data,'response');
                 console.log(response,'mg');
    
                  navigate('/security')
    
                }catch(error){
                    errorToast( error.response.data.message || error.message ||  'error')
        
                }
            }
            let handleChange =(e)=>{
                setDatas({...datas,[e.target.name]:e.target.value})
              }
              console.log(datas);
              // let handler=()=>{
              //   navigate("/securitylayout")
              // }
      return (
        <div className='maindiiv'>
      
    
    <div className='seconddiv'>
    <div>
    
      
        < form onSubmit={handleSubmit} className='form-container'>
    
            <input type="text" name='name' onChange={handleChange} placeholder='Security Name' className='inputs'/> <br />
            <input type="text" name='address' onChange={handleChange} placeholder='Security Address' className='inputs'/> <br />
            <input type="email" name='email'onChange={handleChange} placeholder='Email'  className='inputs'/> <br />
            <input type="Password" name='password'onChange={handleChange} placeholder='enter atleast 8letter  password' className='inputs' /> <br />
            <button  type='submit' className='regibutton bg-orange-500 p-4 rounded-e-md'>Register</button>
        </form>
        <p>already have an account ?</p>
        <button className='p-4 bg-orange-500 rounded-md'><a href="/securitysignin" >Login</a> </button> <br />
        
        {/* <button onClick={handler} className='p-4 bg-orange-500 mt-24'>See Available Areas</button> */}
    
    </div>
    
        {/* <div className='img-container' >
    
        <img src={sideimg} alt='Side Image' />
        </div> */}
    </div>
      
    
        </div>
     
  )
}

export default SecuritySignup