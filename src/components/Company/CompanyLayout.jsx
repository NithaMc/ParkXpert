import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import company from "../../image/companies.avif";
import "./company.css";
import CompanyLogin from "./components/CompanyLogin.jsx";

function CompanyLayout() {
   const [status, setStatus] = useState(localStorage.getItem("companyToken"));
   const navigate=useNavigate()

  // const handleStatusChange = (newStatus) => {
  //     setStatus(newStatus);
  // };


  // const handleLogin = () => {
  //   // You need to implement a function to set isLoggedIn to true upon successful login
  //   setIsLoggedIn(true);
  // };
  useEffect(()=>{
    console.log(status);
    if (!status){
      navigate("/compnylogin")
    }
  },[navigate,status])

  return (
    <div>
      {/* {status ? ( */}
        <>
          <img src={company} alt="" className="company" />
          <div style={{ display: "flex"  }}>
            <Sidebar />
            <div className="w-[90%] h-[800px] rounded-xl outlet gap-0">
              <Outlet />
            </div>
          </div>
        </>
 {/* ) :  */}
       {/* (
        <CompanyLogin status={status} setStatus={setStatus} />
      ) */}
      {/* } */}
    </div>
  );
}

export default CompanyLayout;
