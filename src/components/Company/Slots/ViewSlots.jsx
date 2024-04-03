import React, { useEffect, useState } from 'react'

const AddSlots = () => {

const [companyData,setCompanyData]=useState()

  useEffect(()=>{

    const fetchCompanyData = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/company/`,{
          // params:{
          //   id: fetchCompanyId
          // }
        })
        setCompanyData(response.data.data);
      } catch (error) {
        errorToast(error.response.data.message || error.message)

      }
    };

    fetchCompanyData();
  }, [refresh]);

  
  return (
    <div>
    <div className='cmpnyname'>Companies</div>
    <div className="designdiv"></div>

    {companyData.length > 0 ? (
      companyData.map((item) => {
        return (
          <div key={item._id}>
            {item.companyName}
            {item.companyAddress}
          </div>
        );
      })
    ) : (
      <div>No companies found</div>
    )}
  </div>
);
};

export default AddSlots