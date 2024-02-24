import React, { useEffect } from 'react'
import '../Company/company.css'
import { getAllUsers_API } from '../../../admin/apiServices'
import { useDispatch } from 'react-redux'


const Userrecord = () => {
  const dispatch=useDispatch()
  let data=(null)

  useEffect(()=>{
    const fetchUsersData =async ()=>{
      try{
        const response=await getAllUsers_API(data)
        console.log('data');
        // dispatch(isAllUsersProfile(response))
      }catch(error){
        console.log(error);
      }
    }
    fetchUsersData()
  },[dispatch])

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