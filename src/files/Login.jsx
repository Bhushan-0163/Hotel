// src/components/Login.js
import React, { useState } from 'react';
import "./Login.css";

const Login = () => {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const handleCreateAccountClick = () => {
    setIsCreatingAccount(true);
  };

  const handleBackToLoginClick = () => {
    setIsCreatingAccount(false);
  };

  return (
    <div className="login-container">
      <h2>{isCreatingAccount ? 'Create Account' : 'Login'}</h2>
      {!isCreatingAccount ? (
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p className="forgot-password">Forgot your password? <a href="./ForgotPassword">Click here</a></p>
          <div className="create-account">
            <p>Don't have an account?</p>
            <button type="button" onClick={handleCreateAccountClick} className="create-account-btn">Create New Account</button>
          </div>
        </form>
      ) : (
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="tel" placeholder="Phone no" required />
          <button type="submit">Sign Up</button>
          <button type="button" className="google-signup-btn">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Icon" /> Sign up with Google
          </button>
          <p className="back-to-login">
            Already have an account? <a href="/Login" onClick={handleBackToLoginClick}>Back to Login</a>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
