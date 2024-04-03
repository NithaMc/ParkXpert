import React from 'react'
import  { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../Company/company.css'
import { errorToast, successToast } from '../../Toast/toastify';


 const Createagency = () => {

  const [data,setdata]= useState(null)
  const navigate= useNavigate()
  const [selectedOption, setSelectedOption] = useState('option1');
  
 



  // const handleSelectChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };


  let handleSubmit= async (e)=>{
    e.preventDefault()
    
    try{

  
    
    
    
    let response = await axios.post('http://localhost:5001/api/agency/', data);
  console.log(response ,' agency response');
     successToast('Agency created  successfully');
      // navigate('/login')



    }catch(error){
      errorToast(error.message)
      console.log(error);
}
  }

let handleChange =(e)=>{
  setdata({...data,[e.target.name]:e.target.value})
}
console.log(data);

  return (
    <div className="maindiv m-auto ">
      <h2 className="head text-center">Link with Agency</h2>
<div  className="secdiv flex justify-center">

{ /* <ToastContainer/> */}
<form onSubmit={handleSubmit }>
{/* <select className="input "   value={selectedOption} onChange={handleSelectChange}>
        <option   >Select Agency </option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
  */}
    <input type="text" onChange={ handleChange } className="input " name="agencyName" placeholder="Agency Name"/> <br />  
    <input type="text" onChange={ handleChange } className="input" name="agencyDetails" placeholder="Enter User name"/> <br />  
    <input type="email" onChange={ handleChange } className="input" name="agencyEmail" placeholder="Your email"/> <br /> 
    <input type="password" onChange={ handleChange } className="input" name="agencyPassword" placeholder="password"/> <br />
    <input type="text" onChange={handleChange} className="input" name="agencyManager"  placeholder="Enter Country"/> <br />
    <label className="" for="">
      I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
    </label> <br />
  
    <button type="submit" className="input"   >
       Register</button>

  <p classNamess=""> already have an account? <a href="">
      <u>Login here</u></a></p>

</form>

</div>
</div>
  )
}

export default Createagency;
