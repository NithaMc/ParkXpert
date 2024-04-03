// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const AddSlots = () => {
// const[companyId,setCompanyId]=useState()
// const[refresh,setRefresh]=useState()


// useEffect(()=>{
//   const fetchCompanyId=async()=>{

//     try{

//       const response =await axios.get(`http://localhost:5001/api/company/:id`)
//       console.log(response);
//       setCompanyId(response.data)
      
//     }catch(error){
//       console.log(error);
//     }
//   }
//   fetchCompanyId()
// },[refresh])
//   return (
//     <div>
// <div className='cmpnyname'>
//   {companyId.map((item)=>{
// {item.companyName}
//   })}
//   </div>
// <div className="designdiv"></div>


//     </div>
    
//   )
// }

// export default AddSlots