import React from 'react'
import { dangericon, error1 } from '../../Components/imagepath';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <div className="main-wrapper error-wrapper">
  <div className="error-box">
    <img className="img-fluid" src={error1} alt="Logo" />
    <h3>
      <img
        className="img-fluid mb-0"
        src={dangericon}
        alt="Logo"
      />{" "}
      Service Unavailable
    </h3>
    <p>You may have mistyped the address or the page may have moved.</p>
    <Link to="/admin-dashboard" className="btn btn-primary go-home">
      Back to Home
    </Link>
  </div>
</div>

    </>
  )
}

export default Error;
