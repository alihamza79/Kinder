import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { account } from '../../appwrite/config';
import { login02 } from '../../Components/imagepath';

const ResetPassword = () => {
  const [userId, setUserId] = useState('');
  const [secret, setSecret] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const userId = query.get('userId');
    const secret = query.get('secret');
    if (userId && secret) {
      setUserId(userId);
      setSecret(secret);
    } else {
      setError('Invalid password reset link');
    }
  }, [location]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setError('');
    try {
      await account.updateRecovery(userId, secret, password, password);
      setMessage('Password has been reset successfully. You can now log in.');
      navigate('/login'); // Redirect to login page after success
    } catch (error) {
      setError('Failed to reset password. Please try again.');
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
