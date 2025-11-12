import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MoreAbout.css';

const MoreAbout= () => {
  const navigate = useNavigate();

  return (
    <div className="book-now-container">
      <h1>More About Us</h1>
      <div className="button-group">
        <button
          className="btn"
          onClick={() => navigate('/Team')}
        >
          Our Team
        </button>
        <button
          className="btn"
          onClick={() => navigate('/HotelRating')}
        >
          Rating
        </button>
        <button
          className="btn"
          onClick={() => navigate('/BookHall')}
        >
          Client Feedback
        </button>
       
      </div>
    </div>
  );
};

export default MoreAbout;
