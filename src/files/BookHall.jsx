import React, { useState } from 'react';
import './BookHall.css'; // Import external CSS

const BookHall = () => {
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  const handlePayment = () => {
    // Simulate a payment process
    alert('Payment Successful!');
    setIsPaymentComplete(true); // Show the submit button after payment
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Hall Booking Submitted Successfully!');
  };

  return (
    <div className="hall-container">
      <h1>Book a Hall at <span>Samruddhi</span></h1>
      <p className="description">Choose the perfect hall for your event!</p>

      <form className="hall-booking-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="Hall">Select Hall:</label>
          <select id="Hall" required>
            <option value="">Select Hall</option>
            <option value="Banquet Hall 1">Banquet Hall 1</option>
            <option value="Banquet Hall 2">Banquet Hall 2</option>
            <option value="Conference Hall">Conference Hall</option>
            <option value="Outdoor Area">Outdoor Area</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="HallDate">Select Date:</label>
          <input type="date" id="HallDate" required />
        </div>

        <div className="input-group">
          <label htmlFor="HallTime">Select Time:</label>
          <input type="time" id="HallTime" required />
        </div>

        <div className="input-group">
          <label htmlFor="HallGuests">Number of Guests:</label>
          <input type="number" id="HallGuests" min="1" required />
        </div>

        {/* Payment and Submit Buttons */}
        <button type="button" className="btn payment-btn" onClick={handlePayment}>
          Proceed to Payment
        </button>

        {isPaymentComplete && (
          <button type="submit" className="btn submit-btn">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default BookHall;
