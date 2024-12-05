// src/components/ResetPassword.jsx

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { confirmPasswordResetFunc } from '../../firebase/authService';
import { login02 } from '../../Components/imagepath'; // Ensure this path is correct

const ResetPassword = () => {
  const [oobCode, setOobCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  /**
   * Extracts the 'oobCode' parameter from the URL on component mount.
   */
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const code = query.get('oobCode');
    if (code) {
      setOobCode(code);
    } else {
      setError('Invalid password reset link.');
    }
  }, [location]);

  /**
   * Handles the form submission to reset the password.
   * @param {Event} event - The form submission event.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setError('');
    if (!oobCode) {
      setError('Invalid or missing password reset code.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      await confirmPasswordResetFunc(oobCode, password);
      setMessage('Your password has been reset successfully. You can now log in.');
      // Redirect to login after a short delay to allow user to read the message
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      console.error("Error resetting password:", error);
      if (error.code === 'auth/invalid-action-code') {
        setError('Invalid or expired password reset link.');
      } else if (error.code === 'auth/weak-password') {
        setError('Password is too weak. Please choose a stronger password.');
      } else {
        setError('Failed to reset password. Please try again.');
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
                    <h2>Reset Password</h2>
                    {error && <p className="text-danger">{error}</p>}
                    {message && <p className="text-success">{message}</p>}
                    {!message && (
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label>
                            New Password <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your new password"
                          />
                        </div>
                        <div className="form-group">
                          <label>
                            Confirm New Password <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder="Confirm your new password"
                          />
                        </div>
                        <div className="form-group login-btn">
                          <button className="btn btn-primary btn-block" type="submit">
                            Reset Password
                          </button>
                        </div>
                      </form>
                    )}
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

export default ResetPassword;
