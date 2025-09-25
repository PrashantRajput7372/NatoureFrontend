import React from 'react'
import "./CssFiles/PaymentSuccessScreen.css"
import { useSearchParams } from 'react-router-dom'

function PaymentSuccessScreen() {
    const [searchParams] = useSearchParams();
    console.log(searchParams.toString());
    // const sessionId = searchParams.get('session_id');
    // const orderId = searchParams.get('order_id');
    const email = searchParams.get('email');
    const tourId = searchParams.get('tourId');
    const tourName = searchParams.get('tourName');
    const amount = searchParams.get('amount');

    
        setTimeout(() => {
            window.location.href = '/allTours';
        },4000);
        
  return (
   
    <div className="payment-success-wrapper">
      <div className="payment-success-card">
        <div className="payment-success-icon">
          <span>✔</span>
        </div>

        <h2 className="payment-success-title">Payment Successful</h2>
        <p className="payment-success-message">
          Thank you! Your payment was successfully processed.
        </p>

        <div className="payment-success-details">
          <p>
            <span>Tour Booked:</span> {tourName}
          </p>
          <p>
            <span>Amount Paid:</span> ₹{amount*100}
          </p>
          <p>
            <span>Tour ID:</span> {tourId || "Pending"}
          </p>
          <p>
            <span>Email:</span> {email}
          </p>
        </div>

        <p className="payment-success-footer">
          A confirmation email will be sent shortly.
        </p>
      </div>
    </div>
  )
}

export default PaymentSuccessScreen
