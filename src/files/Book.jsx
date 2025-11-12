import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Book.css'; // External CSS for styling

const Book= () => {
  const navigate = useNavigate();

  return (
    <div className="book-now-container">
      <h1>Welcome to Booking</h1>
      <div className="button-group">
        <button
          className="btn"
          onClick={() => navigate('/Book-Table')}
        >
          Book Table
        </button>
        <button
          className="btn"
          onClick={() => navigate('/Book-Event')}
        >
          Book Event
        </button>
        <button
          className="btn"
          onClick={() => navigate('/Book-Hall')}
        >
          Book Hall
        </button>
        <button
          className="btn"
          onClick={() => navigate('/my-reservations')}
        >
          My Reservations
        </button>
      </div>
    </div>
  );
};

export default Book;
