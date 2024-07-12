import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login02, loginicon01, loginicon02, loginicon03, loginlogo } from "../../Components/imagepath";
import { Eye, EyeOff } from "feather-icons-react/build/IconComponents";
import { signIn, checkAuth } from "../../appwrite/Services/authServices";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("hamza@gmail.com");
  const [password, setPassword] = useState("P@ssw0rd288");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("reloaded")) {
      localStorage.setItem("reloaded", "true");
      window.location.reload();
    } else {
      localStorage.removeItem("reloaded");
      const checkLoggedIn = async () => {
        try {
          const isLoggedIn = await checkAuth();
          if (isLoggedIn) {
            navigate("/herocarousel");
          }
        } catch (error) {
          console.error("Error checking authentication:", error);
        }
      };

      checkLoggedIn();
    }
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Reset error message
    try {
      await signIn(email, password);
      navigate("/teamheader");
    } catch (error) {
      console.error("Login failed:", error); // Log the error for more details
      if (error.message.includes("Invalid credentials")) {
        setError("Invalid email or password. Please try again.");
      } else if (error.message.includes("Rate limit")) {
        setError("Too many login attempts. Please wait a few minutes and try again.");
      } else {
        setError("Failed to login. Please try again later.");
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
                <img className="img-fluid" src={login02} alt="#" />
              </div>
            </div>
          </div>
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
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>Email <span className="login-danger">*</span></label>
                        <input
                          className="form-control"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Password <span className="login-danger">*</span></label>
                        <input
                          type={passwordVisible ? 'text' : 'password'}
                          className="form-control pass-input"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <span className="toggle-password" onClick={togglePasswordVisibility}>
                          {passwordVisible ? <EyeOff className="react-feather-custom" /> : <Eye className="react-feather-custom" />}
                        </span>
                      </div>
                      {error && <p className="text-danger">{error}</p>}
                      <div className="forgotpass">
                        <div className="remember-me">
                          <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                            Remember me
                            <input type="checkbox" name="radio" />
                            <span className="checkmark" />
                          </label>
                        </div>
                        <Link to="/forgotpassword">Forgot Password?</Link>
                      </div>
                      <div className="form-group login-btn">
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                      </div>
                    </form>
                    <div className="next-sign">
                      <p className="account-subtitle">Need an account? <Link to="/signup">Sign Up</Link></p>
                      <div className="social-login">
                        <Link to="#"><img src={loginicon01} alt="#" /></Link>
                        <Link to="#"><img src={loginicon02} alt="#" /></Link>
                        <Link to="#"><img src={loginicon03} alt="#" /></Link>
                      </div>
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

export default Login;
