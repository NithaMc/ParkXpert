import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import HomeAdmin from './components/HomeAdmin';
import Createcompany from './components/Adminpages/Company/Createcompany';
import Createagency from './components/Adminpages/Agency/Createagency';
import Viewagency from './components/Adminpages/Agency/Viewagency';
import About from './components/About';
import Userrecord from './components/Adminpages/user/Userrecord';
import Viewslote from './components/Adminpages/Company/Viewcompany';
import Viewcompany from './components/Adminpages/Company/Viewcompany';
import UserSignup from './admin/UserSignup.jsx';
import Adminlogin from './admin/Adminlogin';
import {Provider} from 'react-redux';
import { store } from './redux/store';
import Services from './components/Userpage/Services';
import AgencyLayout from './components/Agency/AgencyLayout'
import Contact from './components/Userpage/Contact';
import Profile from './components/Adminpages/Settings/Profile';
import { Toaster } from 'react-hot-toast';
import Updatecompany from './components/Adminpages/Company/Update.jsx';
import CompanyLayout from './components/Company/CompanyLayout.jsx';
import Userdetails from './components/Company/user/Userdetails.jsx';
import AgencyRequest from './components/Company/Agency/AgencyRequest.jsx';
import AddSlots from './components/Company/Slots/AddSlots.jsx';
import Companyparkarea from './components/Userpage/Parkarea/Companyparkarea.jsx';
import CompanyLogin from './components/Company/components/CompanyLogin.jsx'
import CompanyProfile from './components/Company/CompanyProfile.jsx';
import ParkingSpaces from './components/Userpage/Parkarea/ParkingSpaces.jsx';
import { Workwithus } from './components/Company/components/Workwithus.jsx';
import { Securitylayout } from './components/Security/Securitylayout.jsx';
import SecuritySignup from './components/Security/securitycomponents/SecuritySignup.jsx';
import { SecuritySignin } from './components/Security/securitycomponents/SecuritySignin.jsx';
import Viewsecurities from './components/Security/securitycomponents/Viewsecurities.jsx';
import SecurityProfile from './components/Security/SecurityProfile.jsx';
import UserLogin from './admin/UserLogin.jsx';
import AdminSignup from './admin/AdminSignup.jsx';
import Usecompanies from './components/Userpage/Usecompanies.jsx';
import PaymentOrder from './Payment/CreateBooking.jsx';
import RenderRazorpay from './Payment/RenderRazorpay.jsx';
import CreateBooking from './Payment/CreateBooking.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/user/register' element={<UserSignup />} />
    <Route path='/userlogin' element={<UserLogin />} />

    <Route path='/adminregister' element={<AdminSignup/>} />
    <Route path='/admin/login' element={<Adminlogin/>} />











    <Route path='/about' element={<About/>}/>
    <Route path='/parkingarea' element={<Companyparkarea/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/parkingspace/:id' element={<ParkingSpaces/>}/>
    <Route path='/workwithus' element={<Workwithus/>}/>

    
    <Route path='/homeAdmin' element={<HomeAdmin />}>
      <Route path='user/userrecord' element={<Userrecord/>} />
      <Route path="company/createcompany" element={<Createcompany />} />
      <Route path="company/viewcompany/:companyId" element={<Viewcompany />} />
      <Route path='company/update' element={<Updatecompany/>}/>
     <Route path='Agency/createagency' element={<Createagency/>}/>
     <Route path='Agency/viewagency' element={<Viewagency/>}/>
     <Route path='settings/profile'  element={<Profile/>}/>

    </Route>

    <Route path='/agencylayout' element={<AgencyLayout/>}>
      <Route path='user/userrecord' element={<Userrecord/>} />
      <Route path="company/createcompany" element={<Createcompany />} />
      <Route path="company/viewcompany/:companyId" element={<Viewcompany />} />
     <Route path='Agency/createagency' element={<Createagency/>}/>
     <Route path='Agency/viewagency' element={<Viewagency/>}/>
    </Route>


{/* companyROUTES============== */}
    <Route path='/companylogin' element={<CompanyLogin />} />
    <Route path='/companylayout' element={<CompanyLayout/>}>
      <Route path='user/userdetails' element={<Userdetails/>} />
      <Route path="Slots/addslots" element={<AddSlots />} />
      <Route path="company/companyprofile/:companyId" element={<CompanyProfile />} />
      <Route path="company/viewslot" element={<Viewslote />} />
    </Route>
{/* companyROUTES============== */}




    
   <Route path="/securitysignup" element={<SecuritySignup/>}/>
   <Route path="/securitysignin" element={<SecuritySignin/>}/>
  <Route path='/security' element={<Securitylayout/>}/>
  <Route path='/viewsecurities' element={<Viewsecurities/>}/>
  <Route path='/securityprofile' element={<SecurityProfile/>}/>
    {/* <App/> */}
  <Route path='/usercompanies' element={<Usecompanies/>}/>




  <Route path="/createbooking" element={<CreateBooking/>}/>
  <Route path="/renderrazorpay" element={<RenderRazorpay/>}/>

  </Routes>

  <Toaster
  position="top-center"
  reverseOrder={false}
/>
</BrowserRouter>

  </Provider>
 
);

