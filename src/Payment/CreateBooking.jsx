import axios from 'axios';
import React, { useEffect, useState } from 'react'
import RenderRazorpay from './RenderRazorpay';
import { errorToast } from '../components/Toast/toastify';


const CreateBooking = ({parkingSpot, startTime, endTime, userId}) => {
  
  const [refresh,setRefresh] =useState(true)
  const [details,setDetails]=useState([])
  const [displayRazorpay, setDisplayRazorpay] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    parkingSpot: null,
    startTime: null,
    endTime: null,
      userId: null,
      orderId: null,
      currency: null,
      amount: null,
     });
     const [loading, setLoading] = useState(false);
     const [success, setSuccess] = useState(false);
     const [failure, setFailure] = useState(false);
     const [cancel, setCancel] = useState(false);
     
     
     const handleCreateBooking = async () => {
       try {
         const serverBaseUrl = 'https://localhost:5001/api/booking';
         const data = await axios.post(serverBaseUrl + '/createbooking',
       {
        parkingSpot,
        startTime,
        endTime,
        userId,
    
        
       }
      );
    
      if(data && data.data.order_id){
        setOrderDetails(data.data.paymentOrder);
        setDisplayRazorpay(true);
        setSuccess(true);
        setLoading(false);
    }
    } catch (error) {
      console.log(error);
      setFailure(true);
      setLoading(false);
     }
}

    return (
<>
<div className="container mx-auto mt-8">
            <div className="bg-white p-8 rounded shadow-lg">
                <h1 className="text-2xl font-semibold mb-4">Payment</h1>
                <div className="mb-4">
                    {details.map((item, index) => (
                        <div key={index}>
                            <p className="text-gray-700"><strong>Name:</strong> {item.name}</p>
                            <p className="text-gray-700"><strong>No:</strong> {item.number}</p>
                            <p className="text-gray-700"><strong>Spot:</strong> {item.spot}</p>
                        </div>
                    ))}
                </div>
              
               
            </div>
            {orderDetails && (
                <RenderRazorpay
                    amount={orderDetails.amount}
                    currency={orderDetails.currency}
                    orderId={orderDetails.orderId}
                    keyId={'rzp_test_0iHVTPq8gj2kun'}
                    keySecret={'FjcbHkxc2ZhDy0kTciSYeABc'}
                    onCancel={() => setCancel(true)}
                />
            )}
        </div>
        </>
    )}  
          export default CreateBooking