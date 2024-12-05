// src/components/ForgotPassword.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login02 } from '../../Components/imagepath'; // Ensure this path is correct
import { sendPasswordRecoveryEmail } from '../../firebase/authService';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  /**
   * Handles the form submission to send a password recovery email.
   * @param {Event} event - The form submission event.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");
    try {
      await sendPasswordRecoveryEmail(email);
      // Always display a generic success message
      setMessage("Apassword reset link has been sent.");
    } catch (error) {
      console.error("Error sending password recovery email:", error);
      if (error.code === 'auth/invalid-email') {
        setError("Invalid email address. Please enter a valid email.");
      } else {
        // For security reasons, do not reveal if the user exists or not
        setError("Failed to send recovery email. Please try again later.");
      }
    }
  };

  return (
    <div className="main-wrapper login-body">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-6 login-wrap">
            <div className="login-sec">
              <div className="log-img">
                <img className="img-fluid" src={login02} alt="Logo" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 login-wrap-bg">
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="login-right">
                  <div className="login-right-wrap">
                    <div className="account-logo">
                      <Link to="/">
                        <div className="flex items-center">
                          <img
                            width={80}
                            height={80}
                            src="/assets/img/webp/logo1.png"
                            data-rjs="/assets/img/webp/logo-cropped@2x.png"
                            alt="logo"
                          />
                          <img
                            width={230}
                            height={70}
                            src="/assets/img/webp/logo2.png"
                            data-rjs="/assets/img/webp/logo-cropped@2x.png"
                            alt="logo"
                          />
                        </div>
                      </Link>
                    </div>
                    <h2>Reset Password</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>
                          Email <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="Enter your registered email"
                        />
                      </div>
                      {message && <p className="text-success">{message}</p>}
                      {error && <p className="text-danger">{error}</p>}
                      <div className="form-group login-btn">
                        <button className="btn btn-primary btn-block" type="submit">
                          Reset Password
                        </button>
                      </div>
                    </form>
                    <div className="text-center">
                      <Link to="/login">Back to Login</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default ForgotPassword;
