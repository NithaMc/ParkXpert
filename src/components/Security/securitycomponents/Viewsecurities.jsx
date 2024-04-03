import React, { useEffect, useState } from 'react'
import { errorToast } from '../../Toast/toastify'
import axios from 'axios'

const Viewsecurities = () => {

    const [securityData,setSecurityData]=useState([])
    const [refresh,setRefresh]=useState(true)

    const token=localStorage.getItem("companyToken")
    

    useEffect(()=>{
        const fetchSecurityData=async()=>{
            try{
                const response=await axios.get(`http://localhost:5001/api/security/`,{
                    headers:{
                        Authorization: token
                    }
                })
                setSecurityData(response.data.data)
                    
            }catch(error){
                console.log(error,"error");
                errorToast(error.response.data.message||error.message)
            }
        };
        fetchSecurityData()
    },[refresh])


  let handleclick= async(securityId)=>{
    console.log(securityId,"id");
    try {
        const token = localStorage.getItem("companyToken");
        // const response = await axios.get(`http://localhost:5001/api/company/`, {
        //     headers: {
        //         Authorization: token
        //     }
        // });
        // console.log(response,"compnayrespone");
        // const companyId = response.data.data._id;
        const hired = await axios.post(`http://localhost:5001/api/company/companysecurity`,  {securityId},{headers:{
            'Authorization':token
        }} );
        console.log(hired,"hired security");
    } catch (error) {
        console.log(error);
        errorToast(error.response?.data?.message || error.message);
    }
  }

  return (
<> 
    <h3 className='text-orange'><strong>Select Security</strong></h3>
    <div className='m-auto'>
        {securityData.length >0 && securityData.map((item,index)=>(
            <>
            <div className='bg-black h-full flex justify-around  m-1'>
                <p className='text-white size-8'>{item.name}</p>
                <button onClick={()=>handleclick (item._id ) } className='bg-yellow-900 p-4 rounded-md'>CLICK</button>
                console.log();
            </div>
                <div className='w-full h-1 bg-slate-300'></div>
            </>
        ))}

    </div>
         </>
  )
}

export default Viewsecurities