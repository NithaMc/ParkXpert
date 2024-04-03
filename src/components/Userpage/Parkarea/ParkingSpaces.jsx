import React, { useEffect, useState } from 'react';
import './parkingspace.css';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { errorToast } from '../../Toast/toastify';
import park from '../../../image/park.gif'



const ParkingSpaces = ({ companyData }) => {
  const navigate = useNavigate()
  const value = useLocation();

  console.log(value);
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedSpace, setSelectedSpace] = useState(null)
  const [userData, setUserData] = useState([])
  const [refresh, setRefresh] = useState(true)


  const [selectedDuration, setSelectedDuration] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [totalCost, setTotalCost] = useState(0);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("userToken")
        const response = await axios.get(`http://localhost:5001/api/user/profile`, {
          // headers: {
          //   Authorization: `Bearer ${localStorage.getItem("userToken")}`
          // }
        })
        console.log(token,'uiertoken');
        setUserData(response.data.users)
      } catch (error) {
        console.log(error);
        errorToast(error.response?.data?.message || error.message);
      }
    }
    fetchUser()

  }, [refresh])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const formattedTime = currentTime.toLocaleTimeString();


  const handleSpaceSelection = async (companyID, blockKey, spaceIndex) => {

    try {
      const token = localStorage.getItem("userToken")

      const response = await axios.post(`http://localhost:5001/api/user/booking-spot`, { companyID, blockKey, spaceIndex },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`
          }
        }
      )

console.log(token,'lowwtoken');
      setRefresh(!refresh)

    } catch (error) {
      console.log(error);
      errorToast(error.response?.data?.message || error.message);
    }
  }


  const proceedToPayment = async () => {
    // if(selectedSpace){
      console.log(localStorage.getItem('userToken'),'---');
    try {
      const token = localStorage.getItem("userToken")
      const response = await axios.post(`http://localhost:5001/api/booking/createbooking/${localStorage.getItem('userToken')}`,{amount:totalCost}, 


      )

      const userData = response.data
      const selectedCompany = companyData.find(company => company.blockName === selectedSpace.split('-')[0]);
      navigate('/createbooking'
        , {
          // selectedSpace,
          userData,
          selectedCompany
        })
      console.log(selectedSpace, "selectedspace");
    } catch (error) {
      console.error('Error fetching user data:', error);
    }

    // }else{
    //   alert('please select a parking area')
    // }

  }


  const handleDurationChange = (event) => {
    const duration = event.target.value;
    setSelectedDuration(duration);
    // Call a function to calculate and set the total cost based on the selected duration
    calculateTotalCost(duration);
  };



  const calculateTotalCost = (duration) => {
    // Implement your logic to calculate the total cost based on the selected duration
    let cost = 0;
    if (duration === '2 hours') {
      cost = 50;
    } else if (duration === '3 hours') {
      cost = 75;
    } else if (duration === '4 hours') {
      cost = 100;
    } else if (duration === '5 hours') {
      cost = 125;
    }
    setTotalCost(cost);
  };

  const handleStartTimeChange = (event) => {
    const time = event.target.value;
    setStartTime(time);
    // Update the end time options based on the selected start time if needed
    // Implement your logic here
  };

  const handleEndTimeChange = (event) => {
    const time = event.target.value;
    setEndTime(time);
    // Implement any necessary logic based on the selected end time
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement logic to submit the booking details
  };


console.log(value.state.companyName,'name');


  return (

    <>

      <div className="firstnsv">


        <div class="nav">

          <h1 className='text-black parkhead'>Park <span className='text-orange-700'>X</span>pert</h1>
          <div className='navbar'>

            <a href="#" className='txt text-black'>Home</a>
            <label >
              <select name="" id="">
                <option value="" >Professionals</option>
                <option value="">
                  <Link to='/userlogin'>login into you account </Link>

                </option>

              </select>
            </label>
            {/* <a href="#" className='txt text-black'>Home</a> */}
            {/* <a href="/about" className='txt  text-black'>About</a> */}
            {/* <a href="/services" className='txt  text-black'>Services</a> */}
            {/* <a href="/contact" className='txt  text-black'>Contact</a> */}


          </div>
        </div>
        {/* <div className='bg-black flex news'> */}
        {/* <h3 className='text-white'>News alert:</h3>
<p className='text-white'>Lorem Ipsum is simply dummy text of the printing
</p> */}


        {/* </div> */}
      </div>

      <div className='parking-maindiv bg-white flex'>

        <div className=' w-[350px] h-[400px] m-10 bg-white shadow-slate-300 text-black flex flex-col p-4 rounded-2xl border border-grey-300 reservation'>

          <div className='flex'>
            <strong>

              <h2>Reservation Details</h2>
            </strong>
            <p className='m-4'>{new Date().toLocaleDateString()}</p>
          </div>
          <div className='border border-slate-600 rounded-2xl items-center text-center'>

            <p className='m-4'>{value.state.companyName}</p>
            <p className='m-4'>{formattedTime}</p>


            <form onSubmit={handleSubmit} className='booking-form'>
              <label>
                Select Duration:
                <select value={selectedDuration} onChange={handleDurationChange}>
                  <option value="">Select Duration</option>
                  <option value="2 hours">2 hours</option>
                  <option value="3 hours">3 hours</option>
                  <option value="4 hours">4 hours</option>
                  <option value="5 hours">5 hours</option>


                </select>
              </label>
              <br />
              <div className='w-[100px] m-1 h-[1px] bg-gray-400'></div>
              <div className='flex'>

                <label className='labels text-gray-500'>
                  Arrival <br />
                  <input type="datetime-local" value={startTime} onChange={handleStartTimeChange} />
                </label>

                <label className='labels text-gray-500'>
                  Departure <br />
                  <input type="datetime-local" value={endTime} onChange={handleEndTimeChange} />
                </label>
              </div>
              <br />
              <div className='w-[100px] m-1 h-[1px] bg-gray-400'></div>

              <p>Total Cost: ${totalCost}</p>
            </form>

          </div>
          <button className='p-1 m-2 bg-gray-300 px-1'>Free Cancelation</button>
            
          <button type="button" onClick={proceedToPayment} className='p-1 rounded-xl bg-amber-700 px-2'> Continue</button>   
        </div>
          {/* <div class="navss flex  w-28 mt-3 ">
             <a href="#" className='font p-2  text-black'>summary</a>
            <a href="/about" className='font  text-black'>How to get there</a>
            <a href="/services" className='font  text-black'>Services</a> */}
            {/* <a href="/contact" className='txt  text-black'>Contact</a> */}

            {/* </div> */}

            <div className='secondone m-4'>


                    <div className='parkimg '>
            <h3>{value.state.companyName}</h3> 
                      {/* <img src={park} alt="" className='h-[200px] ' /> */}
      <div className='bg-blue-200 p-2 m-4 rounded-xl '>
<h3 className='text-gray-500 '>Features</h3>
<ul  className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2 mt-3">
<li className="flex gap-2 items-center">
<span  className="flex min-w-fit basis-5 justify-center items-center bg-secondary-300 rounded-full w-5 h-5"><app-check-icon _ngcontent-parclick-c1923326164="" class="text-xs text-secondary-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width="1em" height="1em"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg></app-check-icon>Guaranteed parking space</span>
</li>
<li className="flex gap-2 items-center">
<span  className="flex min-w-fit basis-5 justify-center items-center bg-secondary-300 rounded-full w-5 h-5"><app-check-icon _ngcontent-parclick-c1923326164="" class="text-xs text-secondary-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width="1em" height="1em"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg></app-check-icon>Car park with maximum height allowed (1.9m)
</span>
</li>
<li className="flex gap-2 items-center">
<span  className="flex min-w-fit basis-5 justify-center items-center bg-secondary-300 rounded-full w-5 h-5"><app-check-icon _ngcontent-parclick-c1923326164="" class="text-xs text-secondary-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width="1em" height="1em"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg></app-check-icon>Flexible entry
</span>
</li>
<li className="flex gap-2 items-center">
<span  className="flex min-w-fit basis-5 justify-center items-center bg-secondary-300 rounded-full w-5 h-5"><app-check-icon _ngcontent-parclick-c1923326164="" class="text-xs text-secondary-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width="1em" height="1em"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg></app-check-icon> reduced mobility
</span>
</li>
<li className="flex gap-2 items-center">
<span  className="flex min-w-fit basis-5 justify-center items-center bg-secondary-300 rounded-full w-5 h-5"><app-check-icon _ngcontent-parclick-c1923326164="" class="text-xs text-secondary-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width="1em" height="1em"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg></app-check-icon>24h service
</span>
</li>

</ul>
      </div>

                    </div> <br />
                  
        <div className='parking-secdiv flex flex-wrap'>
          <h1>
            <strong>Choose a parking spot</strong>
          </h1>
          <div className='parking-div '>

            <div className='fourwheeler-div'>
              <p>
                <strong>Spot for Four-Wheelers</strong>
              </p>
              <div className='overflow-scroll flex-wrap flex gap-7 h-[500px] w-[370px] p-1 m-3 spots'>


                {value.state.companyBlock.map((block, i) => (
                  
                  <div key={block.block} className='flex flex-wrap m-4 ml-8 ' >
                    {block.space.map((sp, index) => {

                      return (
                        <p
                        onClick={() => handleSpaceSelection(value.state._id, i, index)}
                        key={index}
                        className={`w-[40px] h-[60px] mx-3 my-2 ${sp ? 'bg-red-400' : 'bg-white'}`}
                        >
                        </p>
                      )
                    }
                    
                    )
                  }

                  </div>
                ))}

              </div>

              {/* {generateParkingSpots()} */}

            </div>
          </div>
          <Link to="/createbooking">
            <button onClick={proceedToPayment}>


              Proceed to Payment</button>
          </Link>
        </div>
        <div className='w-[500px]  intsruction'>
          <h3 className='p-2'> <strong>Instrunction</strong></h3>
          <p className='m-2'>During the purchasing process, select the date you plan to arrive. After making the online payment you will receive a voucher via email with you reservation code.</p>
          <p className='m-2'>On the date of your reservation, enter the parking lot as usual, take a ticket at the entrance and park in any empty spot.</p>
          <p className='m-2'>Once you're out of the car, approach the control booth with the ParXpert voucher and the ticket you took. Our staff there will check your reservation using the reservation code, and will give you a card that will allow you multiple ins and outs.
</p>

        </div>
      </div>
                </div>
    </>
  );
};

export default ParkingSpaces;
