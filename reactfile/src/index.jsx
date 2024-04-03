import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import HomeAdmin from './components/HomeAdmin';
import Login from './components/Userpage/Login';
import Createcompany from './components/Adminpages/Company/Createcompany';
import Createagency from './components/Adminpages/Agency/Createagency';
import Viewagency from './components/Adminpages/Agency/Viewagency';
import About from './components/About';
import Userrecord from './components/Adminpages/user/Userrecord';
import Viewcompany from './components/Adminpages/Company/Viewcompany';
import Signup from './admin/Signup';
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

// import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <  Route path='/' element={<Home />} />
    <Route path='/admin/login' element={<Adminlogin/>} />
    <Route path='/admin/register' element={<Signup />} />
    <Route path='/login' element={<Login />} />
    <Route path='/compnylogin' element={<CompanyLogin />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/about' element={<About/>}/>
    <Route path='/parkingarea' element={<Companyparkarea/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/parkingspace/:id' element={<ParkingSpaces/>}/>
    <Route path='/workwithus' element={<Workwithus/>}/>

    
    <Route path='/homeadmin' element={<HomeAdmin />}>
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

    <Route path='/companylayout' element={<CompanyLayout/>}>
      <Route path='user/userdetails' element={<Userdetails/>} />
      <Route path="Slots/addslots" element={<AddSlots />} />
      <Route path="company/companyprofile/:companyId" element={<CompanyProfile />} />
      <Route path="company/viewcompany/:companyId" element={<Viewcompany />} />
     <Route path='Agency/agencyrequest' element={<AgencyRequest/>}/>
     <Route path='Agency/viewagency' element={<Viewagency/>}/>
    </Route>
    
  <Route path='/security' element={<Securitylayout/>}/>
    {/* <App/> */}
  </Routes>
  <Toaster
  position="top-center"
  reverseOrder={false}
/>
</BrowserRouter>

  </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
