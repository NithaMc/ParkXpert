import React, { useState } from 'react'
import axios from 'axios'
import { errorToast, successToast } from '../components/Toast/toastify.jsx'
import {  useNavigate } from 'react-router-dom'
import "./signup.css"
import sideimg from '../image/uuser.jpg'


const UserSignup = () => {

  const navigate=useNavigate()
    const [datas,setDatas]=useState(null)


    let handleSubmit =async(e)=>{
          e.preventDefault()
    
            try{
            let response =await axios.post('http://localhost:5001/api/user/register',datas)
            if(response.status=== 200){
              successToast("successfully registered")
                navigate('/userlogin')

            }

            }catch(error){
                errorToast( error.response.data.message || error.message ||  'error')
    
            }
        }
        let handleChange =(e)=>{
            setDatas({...datas,[e.target.name]:e.target.value})
          }
          console.log(datas);
          let handler=()=>{
            navigate("/usecompanies")
          }
  return (
    <div className='maindiiv'>
  

<div className='seconddiv'>
<div>

  
  
    <form onSubmit={handleSubmit} className='form-container'>
    <input type="text" name='username' onChange={handleChange} placeholder=' userName' className='inputs'/> <br />

        <input type="text" name='name' onChange={handleChange} placeholder='full Name' className='inputs'/> <br />
        <input type="email" name='email'onChange={handleChange} placeholder='Email'  className='inputs'/> <br />
        <input type="Password" name='password'onChange={handleChange} placeholder='enter atleast 8letter  password' className='inputs' /> <br />
        <button  type='submit' className='regibutton'>Register</button>
    </form>
    <p>already have an account ?</p>
    <button classname="p-2 bg-gray-600 rounded"><a href="/userlogin">Login</a> </button> <br />
    
    <button onClick={handler} className='p-4 bg-orange-500 mt-24'>See Available Areas</button>

</div>

    <div className='img-container' >

    <img src={sideimg} alt='Side Image' />
    </div>
</div>
  

    </div>
  )
}
export  default UserSignup
