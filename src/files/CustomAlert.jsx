import React from 'react';
import './CustomAlert.css'; // Import external CSS for styling

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="alert-overlay">
      <div className="alert-box">
        <p>{message}</p>
        <button onClick={onClose} className="alert-btn">OK</button>
      </div>
    </div>
  );
};

export default CustomAlert;
