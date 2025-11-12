
import './Home.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import React, { useState } from 'react';
import CustomAlert from './CustomAlert'; // Import your custom alert component
const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isLoggedIn] = useState(false); // Assume login state
  const [showAlert, setShowAlert] = useState(false); // Alert state
  const handleAboutClick = () => {
    navigate('/about'); // Navigate to About page
  };
  const handleBookNow = () => {
    if (isLoggedIn) {
      // User is logged in, navigate to the booking form page
      navigate('/Book');
    } else {
      // User is not logged in, show custom alert
      setShowAlert(true);
    }
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
    navigate('/Login'); // Redirect to sign-up page after closing the alert
  };
      

  return (
    <div id="d1" className="home-container">
      <div className="content">
        <button type="button" className="btn btn-warning" id="bh1">Welcome to Hotel Samruddhi</button>
        <p className="h1" id="hh1">Book Hotel<br /> Samruddhi<br /> For Your Best<br /> Dream Event</p>
        <div className="button-group">
          <button type="button" className="btn " id="bh2" onClick={handleBookNow}>Book Now</button>
          {showAlert && <CustomAlert message="You must be logged in to book a table. Please sign up or log in." onClose={handleCloseAlert} />}
          <button type="button" className="btn btn-warning" onClick={handleAboutClick} id="bh3">About Us</button> 
         
        </div>
      </div>
    </div>
  );
};

  export default Home;