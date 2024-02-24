
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { errorToast } from '../Toast/toastify';
import { useParams } from 'react-router-dom';

const CompanyProfile = (id) => {
  const { companyId } = useParams();

const [refresh,setRefresh]=useState()
const [companyData,setCompanyData]=useState("")


  useEffect(()=>{

    const fetchCompanyData = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/company/${id}`)
        setCompanyData(response.data.data);
      } catch (error) {
        errorToast(error.response.data.message || error.message)

      }
    };

    fetchCompanyData();
  }, [id,refresh]);

  
  return (
    <div>
    <div className='cmpnyname'>Companies</div>
    <div className="designdiv"></div>

    {companyData && companyData.length > 0 ? (
      companyData.map((item) => {
        return (
          <div key={item._id}>
            {item.companyName}
            {item.companyAddress}
            {item.companyEmail}
            {item.CompanyHead}
            {item.companyBlock}
            {item.companySpace}
          </div>
        );
      })
    ) : (
      <div> This company not found</div>
    )}
  </div>
);
};


export default CompanyProfile