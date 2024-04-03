import React, { useEffect, useState } from 'react'
import '../Company/company.css'
import axios from 'axios'


const Userrecord = () => {
  const [userdata,setUserdata]=useState([])
  const [refresh,setRefresh]=useState(true)  

  useEffect(()=>{
    const fetchUsersData =async ()=>{
      try{
        const response=await axios.get(`http://localhost:5001/api/user/`,{
        
      })
      setUserdata(response.data.data)
        console.log('data');
       
      }catch(error){
        console.log(error);
      }
    }
    fetchUsersData()
  },[refresh])

  return (
    <div className= ' record'>
   <h2 className="head text-center">User Activity</h2>
<div  className="secdiv flex justify-center">

{/* <ToastContainer/> */}
<form>
<select className="input ">
        <option   >Select Agency </option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
 
<table className='container-fluid w-96 bg-slate-400 opacity-1'>
  <tr>
    <th>Users</th>
    <th> Date Joined</th>
    <th>Reserved slot</th>
  </tr>
 
</table>

 

</form>

</div>
    </div>
  )
}
export default Userrecord;