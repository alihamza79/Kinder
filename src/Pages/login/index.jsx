import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login02, loginicon01, loginicon02, loginicon03, loginlogo } from "../../Components/imagepath";
import { Eye, EyeOff } from "feather-icons-react/build/IconComponents";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    const reloadKey = 'loginPageReloaded';

    if (!localStorage.getItem(reloadKey)) {
      localStorage.setItem(reloadKey, 'true');
      window.location.reload();
    } else {
      localStorage.removeItem(reloadKey);
    }
  }, []);

  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper login-body">
        <div className="container-fluid px-0">
          <div className="row">
            {/* Login logo */}
            <div className="col-lg-6 login-wrap">
              <div className="login-sec">
                <div className="log-img">
                  <img className="img-fluid" src={login02} alt="#" />
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
                          <img src={loginlogo} alt="#" />
                        </Link>
                      </div>
                      <h2>Login</h2>
                      {/* Form */}
                      <form>
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
                            type={passwordVisible ? 'text' : 'password'}
                            className="form-control pass-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <span className="toggle-password" onClick={togglePasswordVisibility}>
                            {passwordVisible ? <EyeOff className="react-feather-custom" /> : <Eye className="react-feather-custom" />}
                          </span>
                        </div>
                        <div className="forgotpass">
                          <div className="remember-me">
                            <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                              {" "}
                              Remember me
                              <input type="checkbox" name="radio" />
                              <span className="checkmark" />
                            </label>
                          </div>
                          <Link to="/forgotpassword">Forgot Password?</Link>
                        </div>
                        <div className="form-group login-btn">
                          <Link to="/herocarousel" className="btn btn-primary btn-block">
                            Login
                          </Link>
                        </div>
                      </form>
                      {/* /Form */}
                      <div className="next-sign">
                        <p className="account-subtitle">
                          Need an account? <Link to="/signup">Sign Up</Link>
                        </p>
                        {/* Social Login */}
                        <div className="social-login">
                          <Link to="#">
                            <img src={loginicon01} alt="#" />
                          </Link>
                          <Link to="#">
                            <img src={loginicon02} alt="#" />
                          </Link>
                          <Link to="#">
                            <img src={loginicon03} alt="#" />
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
    </>
  );
};

export default Login;
