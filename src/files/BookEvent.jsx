import React, { useState } from 'react';
import './BookEvent.css'; // Import the CSS file

export default function BookEvent() {
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
    alert('Event Booking Submitted Successfully!');
  };

  return (
    <div className="event-container">
      <h1>
        Book an Event at <span>Samruddhi</span>
      </h1>
      <p className="description">Plan your perfect event with us!</p>

      <form className="event-booking-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="EventType">Type of Event:</label>
          <select id="EventType" required>
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate">Corporate Event</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="EventDate">Select Date:</label>
          <input type="date" id="EventDate" required />
        </div>

        <div className="input-group">
          <label htmlFor="EventTime">Select Time:</label>
          <input type="time" id="EventTime" required />
        </div>

        <div className="input-group">
          <label htmlFor="EventGuests">Number of Guests:</label>
          <input type="number" id="EventGuests" min="1" required />
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
