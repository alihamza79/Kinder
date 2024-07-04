import React from 'react'
import { login02, loginicon01, loginicon02, loginicon03, loginlogo } from '../../Components/imagepath';
import { Link } from 'react-router-dom';

const LockScreen = () => {
  return (
    <>
    <div className="main-wrapper login-body">
  <div className="container-fluid px-0">
    <div className="row">
      {/* Login logo */}
      <div className="col-lg-6 login-wrap">
        <div className="login-sec">
          <div className="log-img">
            <img
              className="img-fluid"
              src={login02}
              alt="Logo"
            />
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
                  <Link to  ="/admin-dashboard">
                    <img src={loginlogo} alt="" />
                  </Link>
                </div>
                <div className="user-lock-screen">
                  <h2>Hi, Williams</h2>
                  <p>Enter your password to unlock the account</p>
                </div>
                {/* Form */}
                <form action="login.html">
                  <div className="form-group">
                    <label>
                      Password <span className="login-danger">*</span>
                    </label>
                    <input
                      className="form-control pass-input"
                      type="password"
                    />
                    <span className="profile-views feather-eye-off toggle-password" />
                  </div>
                  <div className="form-group login-btn">
                  <Link to="/login"className="btn btn-primary btn-block" type="submit">
                      Unlock
                    </Link>
                  </div>
                </form>
                {/* /Form */}
                <div className="next-sign">
                  <p className="account-subtitle">
                    Sign in as a different user?{" "}
                    <Link to  ="/login">Login</Link>
                  </p>
                  {/* Social Login */}
                  <div className="social-login">
                    <Link to  ="#">
                      <img src={loginicon01} alt="" />
                    </Link>
                    <Link to  ="#">
                      <img src={loginicon02} alt="" />
                    </Link>
                    <Link to  ="#">
                      <img src={loginicon03} alt="" />
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

  )
}

export default LockScreen;