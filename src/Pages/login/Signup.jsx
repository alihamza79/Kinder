import React from "react";
import {
  login02,
  loginicon01,
  loginicon02,
  loginicon03,
  loginlogo,
} from "../../Components/imagepath";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "feather-icons-react/build/IconComponents";

const Signup = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [password1, setPassword1] = useState('');

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };


  
  return (
    <div>
      <div className="main-wrapper login-body">
        <div className="container-fluid px-0">
          <div className="row">
            {/* Login logo */}
            <div className="col-lg-6 login-wrap">
              <div className="login-sec">
                <div className="log-img">
                  <img className="img-fluid" src={login02} alt="Logo" />
                </div>
              </div>
            </div>
            {/* /Login logo */}
            {/* Login Content */}
            <div className="col-lg-6 login-wrap-bg">
              <div className="login-wrapper">
                <div className="loginbox">
                  <div className="login-right">
                    <div className="login-right-wrap">
                      <div className="account-logo">
                        <Link to="/admin-dashboard">
                          <img src={loginlogo}alt="#"/>
                        </Link>
                      </div>
                      <h2>Getting Started</h2>
                      {/* Form */}
                      <form action="./login">
                        <div className="form-group">
                          <label>
                            Full Name <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                          <label>
                            Email <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                          <label>
                            Password <span className="login-danger">*</span>
                          </label>
                          <input
                          type={passwordVisible ? 'password' : ''}
                          className="form-control pass-input"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                          className="toggle-password"
                          onClick={togglePasswordVisibility}
                        >
                          {passwordVisible ? <EyeOff className="react-feather-custom" /> : <Eye className="react-feather-custom" />}
                        </span>
                        </div>
                        <div className="form-group">
                          <label>
                            Confirm Password{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <input
                          type={passwordVisible1 ? 'password' : ''}
                          className="form-control pass-input"
                          value={password1}
                          onChange={(e) => setPassword1(e.target.value)}
                        />
                        <span
                          className="toggle-password"
                          onClick={togglePasswordVisibility1}
                        >
                          {passwordVisible1 ? <EyeOff className="react-feather-custom" /> : <Eye className="react-feather-custom" />}
                        </span>
                          {/* <input
                            className="form-control pass-input-confirm"
                            type="password"
                          /> */}
                          <span className="profile-views feather-eye-off confirm-password" />
                        </div>
                        <div className="forgotpass">
                          <div className="remember-me">
                            <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                              {" "}
                              I agree to the{" "}
                              <Link to="#">&nbsp; terms of service </Link>
                              &nbsp; and{" "}
                              <Link to="#">&nbsp; privacy policy </Link>
                              <input type="checkbox" name="radio" />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </div>
                        <div className="form-group login-btn">
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                          >
                            Sign up
                          </button>
                        </div>
                      </form>
                      {/* /Form */}
                      <div className="next-sign">
                        <p className="account-subtitle">
                          Already have account? <Link to="/login">Login</Link>
                        </p>
                        {/* Social Login */}
                        <div className="social-login">
                          <Link to="#">
                            <img src={loginicon01}alt="#"/>
                          </Link>
                          <Link to="#">
                            <img src={loginicon02}alt="#"/>
                          </Link>
                          <Link to="#">
                            <img src={loginicon03}alt="#"/>
                          </Link>
                        </div>
                        {/* /Social Login */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Login Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
