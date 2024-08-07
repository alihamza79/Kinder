import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login02 } from '../../Components/imagepath';
import { sendPasswordRecoveryEmail } from '../../appwrite/Services/authServices';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");
    try {
      await sendPasswordRecoveryEmail(email);
      setMessage("Password recovery email sent. Please check your inbox.");
    } catch (error) {
      setError("Failed to send recovery email. Please try again later.");
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

export default ForgotPassword;
