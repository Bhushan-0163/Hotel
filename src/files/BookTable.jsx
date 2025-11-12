import React, { useState } from 'react';
import './BookTable.css'; // Import the CSS file

export default function BookTable() {
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  // Function to handle payment
  const handlePayment = () => {
    alert('Payment Successful!');
    setIsPaymentComplete(true);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any booking logic here
    alert('Booking Submitted Successfully!');
  };

  return (
    <div className="container">
      <h1>
        Book a Table at <span>Samruddhi</span>
      </h1>
      <p className="description">Reserve your spot for an unforgettable experience!</p>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="Date">Select Date:</label>
          <input type="date" id="Date" required />
        </div>

        <div className="input-group">
          <label htmlFor="Time">Select Time:</label>
          <input type="time" id="Time" required />
        </div>

        <div className="input-group">
          <label htmlFor="Guests">Number of Guests:</label>
          <input type="number" id="Guests" min="1" required />
        </div>

        {!isPaymentComplete && (
          <button
            type="button"
            className="btn payment-btn"
            onClick={handlePayment}
          >
            Proceed to Payment
          </button>
        )}

        {isPaymentComplete && (
          <button
            type="submit"
            className="btn submit-btn"
            id="submitBtn"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}
