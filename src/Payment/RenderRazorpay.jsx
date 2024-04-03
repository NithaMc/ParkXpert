import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

const RenderRazorpay = ({
    orderId,
    keyId,
    keySecret,
    currency,
    amount,
    serverBaseUrl,
}) => {
    const paymentId = useRef(null);
    const paymentMethod = useRef(null);

    useEffect(() => {
        const loadScript = (src) => {
            return new Promise((resolve) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = () => {
                    console.log('razorpay loaded successfully');
                    resolve(true);
                };
                script.onerror = () => {
                    console.log('error in loading razorpay');
                    resolve(false);
                };
                document.body.appendChild(script);
            });
        };

        // To load razorpay checkout modal script.
        const displayRazorpay = async (options) => {
            const res = await loadScript(
                'https://checkout.razorpay.com/v1/checkout.js'
            );

            if (!res) {
                console.log('Razorpay SDK failed to load. Are you online?');
                return;
            }
            // All information is loaded in options which we will discuss later.
            const rzp1 = new window.Razorpay(options);

            // If you want to retrieve the chosen payment method.
            rzp1.on('payment.submit', (response) => {
                paymentMethod.current = response.method;
            });

            // To get payment id in case of a failed transaction.
            rzp1.on('payment.failed', (response) => {
                paymentId.current = response.error.metadata.payment_id;
            });

            // to open razorpay checkout modal.
            rzp1.open();
        };

        // we will be filling this object in the next step.
        const options = {
            key: keyId,
            amount: 1000, // convert amount into lowest unit. here, Dollar->Cents
            currency: currency,
            name: "My Store",
            description: "Test Transaction",
            image: "https://i.imgur.com/3g7nmJC.png",
            order_id: orderId,
            handler: function (response){
                handlePayment('success', response);
            },
            prefill: {
                name: 'Gaurav Kumar',
                email: 'gaurav.kumar@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'Razorpay Corporate Office'
            },
            theme: {
                color: '#F37254'
            }
        }; // Fill options with necessary data for Razorpay

        console.log('in razorpay');
        console.log(options,'options');
        displayRazorpay(options);

    }, [orderId, keyId, amount]);

    const handlePayment = async (status, orderDetails = {}) => {
        await Axios.post(`${serverBaseUrl}/payment`, {
            status,
            orderDetails,
        });
    };
    const handlesPayment = async (status, response, amount, orderId) => {
        try {
            // Include amount and orderId in the payment receipt data
            const receiptData = {
                orderId: orderId,
                amount: amount,
                currency: currency,
                timestamp: new Date().toISOString(),
                // Add any other relevant information here
            };

            
            const receiptHTML = `
                <div>
                    <h1>Payment Receipt</h1>
                    <p>Order ID: ${receiptData.orderId}</p>
                    <p>Amount: ${receiptData.amount} ${receiptData.currency}</p>
                    <p>Date: ${receiptData.timestamp}</p>
                    <!-- Add more details as needed -->
                </div>
            `;

            alert(receiptHTML); 
            } catch (error) {
            console.error('Payment failed:', error); 
    };


};

    return
    (
        <div className="container mx-auto mt-8">
            <div className="bg-white p-8 rounded shadow-lg">
                <h1 className="text-2xl font-semibold mb-4">Payment</h1>
                <div className="border-t border-gray-300 pt-4">
                    <h2 className="text-lg font-semibold mb-2">Payment Details</h2>
                    <p>Amount: {amount} {currency}</p>
                    <p>Description: Test Transaction</p>
                    <p>Name: Gaurav Kumar</p>
                    <p>Email: gaurav.kumar@example.com</p>
                    <p>Contact: 9999999999</p>
                </div>
                <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => {}}>Pay Now</button>
            </div>
        </div>
    );

RenderRazorpay.propTypes = {
    orderId: PropTypes.string.isRequired,
    keyId: PropTypes.string.isRequired,
    keySecret: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    serverBaseUrl: PropTypes.string.isRequired,
};
}
export default RenderRazorpay;