import React from 'react'
import './Home.css'
import car from '../image/carparking.png'
import global from '../image/global.png'
import { Link, useNavigate } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Companyparkarea from './Userpage/Parkarea/Companyparkarea';


 const Home = () => {
const navigate=useNavigate()

let handle=()=>{
  navigate("/user/register")
}

  return (
<div>
{/* CARIMAGE  */}
    <div className='fullcontain'>
      
      <div className="firstnsv">


       <div class="nav">
        
      <h1 className='text-black parkhead'>Park <span  className='text-orange-700'>X</span>pert</h1>
      <div className='navbar'> 
      <div className='linksignup'>
        <Link to='/user/register ' className='signtxt'>SIGNUP</Link> <span className='caret-orange-700'>|</span> <Link to='/login'className='signtxt'>LOGIN</Link>
      </div>
      <a href="#" className='txt text-black'>Home</a>
      <a href="/about" className='txt  text-black'>About</a>
      <a href="/services" className='txt  text-black'>Services</a>
      <a href="/contact" className='txt  text-black'>Contact</a>

      
      </div>
    </div>
    <div className='bg-black flex news'>
    <h3 className='text-white'>News alert:</h3>
    <p className='text-white'>Lorem Ipsum is simply dummy text of the printing
    </p>


    </div>
      </div>
      
      {/* Image */}
      <img src={car} alt="" className='img' />

      {/* Text or content */}
      <div className='text text-neutral-700'>
        Welcome To
      <h1 className='text-white  homehead'>Park <span className='text-orange-400'>X</span>pert</h1>

      Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s   </div>
       
<div className='booking'>


    <h2 className='booking' > 
    <div class="bookinclass px-4 md:px-8 py-12 bg-black rounded-lg shadow-2xl max-w-xl  w-[550px]">
    Book Your Slot Now
   
   
    
    <div class="flex flex-col justify-center w-full text-center mt-8 gap-6 sm:flex-row text-lg font-semibold">
       <input type="text" placeholder='Your Name..' onClick={handle}
            className="py-4 w-full bg-black text-white sm:w-40 border border-orange-500 rounded-lg hover:shadow-2xl hover:text-orange-500 shadow-lg yourname"
        />
 
        <br />
        <a href="/user/register"  onClick={handle}
            class="bg-orange-500 w-full sm:w-40 py-4 rounded-lg text-white hover:bg-orange-500 shadow-lg booknow">
            Book Now
        </a>
    </div>

</div>

      <Link to='/user/register'/> 
     </h2>
      </div>
     
    </div>

{/* <Companyparkarea/> */}

{/* KNOWMOREABOUTUS */}  
<div >
  <h1 className='text-center text-black from-95% knowmore mt-16'   ><b> Know More About Us</b></h1>
  <p className='text-gray-500 text-center mt-10 max-w-7xl mb-10  m-auto'>Discover the convenience and benefits of car subscription with pakXpert. Our customer-friendly system ensures a seamless experience for your favorite pick. Enjoy zero down payment, free insurance, and complimentary maintenance and service. With the freedom to return or extend your subscription anytime, IndusGo guarantees your happiness on the road. Choose parkXpert and experience the joy of hassle-free car subscription today.
</p>
</div>


<div className='bg-gray-800 p-20'>
      
      <h2 className='whyus '>WHY US ?</h2>
      <div className='flx flex'>
  <div className='col-4 column p-11'>
    <h3 className='inhead' >Superior Service </h3>
    <span>Our extensive experience and deep insight of car parking dynamics helps us to improve customer experience</span>
  </div>
  <div className='col-4 column p-11'>
    <h3 className='inhead'>Innovative Technology</h3>
    <span>Secure Parking has established SecureTech, the in-house state-of-art technology division for continuous innovation in products & services</span>
  </div>
  <div className='col-4 column p-11'>
    <h3 className='inhead'>End-TO-End Solutions </h3>
    <span>Secure Parking focuses in providing holistic end-to-end solution for traffic & parking management</span>
  </div>
      </div>
      </div>
       





<div className='text-center pl-5 m-auto'>

<h2 className='text-center text-black from-95% knowmore mt-16 ' > Our Services</h2>
<p className=' m-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed accusantium, optio alias magnam praesentium eveniet error! Quos beatae voluptatibus nemo ducimus nam maxime quia nihil iste. Doloribus reprehenderit saepe dolorum?</p>

</div>
        <div className='container-fluid bg-gray-800 mt-10   pt-20 pb-20'>


        <div className='flex'>
          <div className='col-4 gap-20 knowmorecolumn p-11'> 
      
          <img src="https://www.secureparking.co.in/storage/uploads/service_icon/1580307375_UkBFLlKDUE.svg" alt="" sizes={10}/>
          <h2 className='inhead'>Consultancy
Services
</h2>
The important role of car park within an office building, shopping center, hospital or airport is often underestimated. In many cases, the car park provides the first and the la...
          </div>
          <div className='col-4   knowmorecolumn p-11'> 
        <h2 className='inhead'> Products and Technology Services
          </h2> 
pNew technology and equipment has made car park more efficient, user-friendly and profitable than ever before. Secure Parking established Secure Tech, the in-house, state-of-the-...
      </div>
          <div className='col-4 knowmorecolumn p-11'> 
        <h2 className='inhead'>Management of Car Park Operations</h2>
As a commercial or retail parking operator we strive to maximize parking occupancy while at the same time reducing congestion and pollution. It is essential that customers can g...
          </div>
          <div className='col-4 knowmorecolumn p-11'> 
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui corrupti reiciendis numquam est impedit! Eaque, deleniti. Aliquam quae quod porro soluta molestiae ullam tenetur, exercitationem dolorum hic esse id cum?
          </div>
      

        </div>
        </div>


        <div  className='footer relative '>
        <img src={global} alt="" className='imag relative' />
        <div className="grid grid-cols-4 gap-4 absolute top-0 left-0 w-full h-full p-20">
          <div>  <h1 className='text-black parkhead'>Park <span  className='text-orange-400'>X</span>pert</h1>
          conveniently search, book and park their vehicle for a specific time and venue with a few clicks of fingertips.
          </div>
          <div className='pl-5'> <h2 className='pb-4'>QuickLinks</h2>
          <Link to='/about'>--About Us</Link> <br />
          <Link to='/about'>--About Us</Link> <br />
          <Link to='/about'>--About Us</Link> <br />
          <Link to='/about'>--About Us</Link> <br />
          <Link to='/about'>--About Us</Link>

          </div>
          <div>Resource</div>
          <div><h3 className='pb-4'>Registered Address</h3>
          <IoLocationSharp />
          A-502, Tulip Corpos, Opposite VS Hospital, Ellisbridge, Ahmedabad - 380006 Gujarat India.

 <span><FaPhoneAlt />+91 95120 15235</span>

<span><MdOutlineMail /> showmyparking@gmail.com</span> 
          </div>
        </div>
      </div>

    </div>
  )

}

export default Home;