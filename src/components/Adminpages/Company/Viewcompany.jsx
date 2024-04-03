import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { errorToast, successToast } from '../../Toast/toastify';
import Updatecompany from './Update.jsx';


const Viewcompany = () => {
  const [companyData, setCompanyData] = useState({});
  const [editingId ,setEditingId]=useState({status:false,id:null})
  const [updatedData,setUpdatedData]=useState({companyName:null,companyAddress:null,companyHead:null,companyBlock:null,companySpace:null})
  const [refresh,setRefresh]=useState(true)
  // const companyId =localStorage.getItem('companyId')


  useEffect(() => {
// const fetchCompanyId =companyId

    const fetchCompanyData = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/company/profile/${JSON.parse(localStorage.getItem("companyDetails"))._id}`,{
          // params:{
          //   id: fetchCompanyId
          // }
        })
        console.log(response,"response");
        setCompanyData(response.data.user);
      } catch (error) {
        errorToast(error.message)

      }
    };


    fetchCompanyData();
  }, [refresh]);

  // const handleDelete =async(id)=>{
  //   console.log(id);
  //   // alert(id) 
  //   try{
  //   let response= await axios.delete(`http://localhost:5001/api/company/${id}`)
    
  //   console.log(response,'response');
  //   successToast('Company deleted successfully');
  //   setRefresh(!refresh)
  // } catch (error) {
  //     errorToast(error.response.data.message || error.message);
  // }
  // }

  // const handleEdit=(item)=>{
  //   setEditingId({status:true,id:item._id});
  //   setUpdatedData({companyName:item.companyName,companyAddress:item.companyAddress,companyHead:item.companyHead,companyBlock:item.companyBlock,companySpace:item.companySpace})
  // }
  // const handleChange=(e,field)=>{
  //   setUpdatedData({...updatedData,[field]:e.target.value})

  // }

  // const handleSave=async(id)=>{
  //   // console.log(id);
  //   try{
  //    const response= await axios.put(`http://localhost:5001/api/company/${id}`,updatedData)
  //     console.log(response , 'response');
  //     console.log(updatedData,'updtdatafront');
  //     setEditingId("");
  //     setUpdatedData({})
  //     console.log(setUpdatedData,'datra');
  //     setRefresh(!refresh)
  //     // successToast(message:'Updated Succeccfully')
  //   }catch(error){
  //     errorToast( error.message)
  //   }
  // }

  console.log(companyData,'ssss')
  
  return (
    <div className='view p-10'>
      <h2 className='text-center font-bold ' >Company Details</h2>
{/* --------------------- */}
     {/* <table key={companyData?._id} className='table text-white'>
      <tr>
        <td>{companyData?.block}</td>
      </tr>
     </table> */}

{/* ----------------------------- */}

{companyData ? (
        <table className='table text-white'>
          <thead>
            <tr>
              <th>Block</th>
            </tr>
          </thead>
          <tbody>
            {companyData.blocks && companyData.blocks.length > 0 ? (
              companyData.blocks.map((block, index) => (
                <tr key={index}>
                  <td>{block}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No blocks found</td>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        <p>Loading company data...</p>
      )}



      {/* {companyData.length > 0 ? (

        companyData.map((item) => {
          return (
            <div className="mapdetails flex gap-4 box-border ">
             <h2 className='heading '> companyname

              {editingId.id === item._id ? (
              <input className='bg-black w-fit'
                type='text'
                value={updatedData.companyName }
                onChange={(e) => handleChange(e, 'companyName')}
              />
            ) : (
              <p className='para'>{item.companyName}</p>
            )}
              </h2>
              <h2 className='heading '> Address 
              {editingId.id === item._id ? (
              <input className='bg-black w-fit'
                type='text'
                value={updatedData.companyAddress}
                onChange={(e) => handleChange(e, 'companyAddress')}
              />
            ) : (
              <p className='para'>{item.companyAddress}</p>
            )}
            </h2>  
               
              <h2 className='heading '>Head
              {editingId.id === item._id ? (
              <input className='bg-black w-fit'
                type='text'
                value={updatedData.companyHead }
                onChange={(e) => handleChange(e, 'companyHead')}
              />
            ) : (
              <p className='para'>{item.companyHead}</p>
            )}
             </h2>
              <h2 className='heading '>
             

                  <div className="">
                    {
                      item.companyBlock.map((spaces)=>{
                        {console.log(spaces);}
                        return(
                          <div>
                            <p>Block {spaces.block}</p>
                            <p>space {spaces.space}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                  </h2> 
            
              <div className='buttons flex'>

             { editingId.id === item._id ?
              <button className='text-red dltbtn' onClick={()=>setEditingId({id:null,status:false})}>cancel</button> 
             :
             <>
              <button className='text-red dltbtn' onClick={()=> handleDelete(item._id)}>delete</button> <br />
             </>
              }
              
              {editingId.id === item._id ? (
                <button className='dltbtn' onClick={() => handleSave(item._id)}>Save</button>
              ) : (
                <button className='dltbtn' onClick={() => handleEdit(item)}>Edit</button>
              )}
              </div>

            </div>
          )
        })



      ) : (
        <p>Loading company data...</p>
      )} */}
    </div>
  );
};


export default Viewcompany;