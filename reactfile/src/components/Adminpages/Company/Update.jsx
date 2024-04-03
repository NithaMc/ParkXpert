// import axios from 'axios'
// import React, { useState } from 'react'
// import { errorToast } from '../../Toast/toastify'

//  const Updatecompany = () => {
// const [data, setData]= useState({
//     companyName :"",
//     companyEmail:'',
//     companyHead:"",
//     companyAddresss:"",
//     companyBlock:"",
//     companySpace:"",

   
// })
// const fetchCompanyData =async()=>{
//     try{
//         let response=await axios.get(`http://localhost:5001/api/company/:id/${localStorage.getItem('companyId')}`)
//         console.log(response.data,'response');
//         setData({
//             companyName:response.data.companyName,
//             companyEmail:response.data.companyEmail,
//             companyHead:response.data.companyHead,
//             companyAddress:response.data.companyAddress,
//             companyBlock:response.data.companyBlock,
//             companySpace:response.data.companySpace,
            
//         })
   
//     }catch(error){
//         errorToast(error.message)
//     }
// }
// let id=localStorage.getItem('companyId')

// let handleChange =(e)=>{
//     setData({...data,[e.target.name]:e.target.value})

// }
// let handleSubmit=async(e)=>{
//     e.preventDefault()
//     try{
//         let response=await axios.put (`http://localhost:5001/api/company/:id/${id}`,data)
//         console.log(response,'updated');

//     }catch(error){
//         console.log(error.response);
//         alert(error.response)
//     }
// }
// fetchCompanyData()
//   return (
//     <div>

//    <h2>Update your Datas</h2>
// <div>
//             <form onSubmit={handleSubmit}>
//           <input value={data.companyName} type="text" placeholder='companyname' name='companyName'  onChange={handleChange}/> <br />
//           <input value={data.companyEmail} type="text" placeholder='companyEmail' name='companyEmail' onChange={handleChange}/> <br />
//           <input value={data.companyBlock} type="text" placeholder='companyBlock' name='companyBlock' onChange={handleChange}/> <br />
//           <input value={data.companySpace} type="text" placeholder='companySpace' name='companySpace' onChange={handleChange}/> <br />
//           <input value={data.companyHead} type="text" placeholder='companyHead' name='companyHead' onChange={handleChange}/> <br />
//           <input value={data.companyAddress} className='update' type="text" placeholder='companyAddress' name='companyAddress' onChange={handleChange}/> <br />
//         <button >Submit</button>
//                   </form>
//                   <button onClick={handles}>Create your blog<a href="/viecompany"></a></button>
//           </div>

//     </div>
//   )
// }


// export default Updatecompany