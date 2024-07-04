import React from 'react'
import { dangericon, error02 } from '../../Components/imagepath';
import { Link } from 'react-router-dom';

const ServerError = () => {
  return (
    <>
     <div className="main-wrapper error-wrapper">
  <div className="error-box">
    <img className="img-fluid" src={error02} alt="Logo" />
    <h3>
      <img
        className="img-fluid mb-0"
        src={dangericon}
        alt="Logo"
      />{" "}
      Internal Server Error
    </h3>
    <p>You do not have permission to view this resource</p>
    <Link to="/admin-dashboard" className="btn btn-primary go-home">
      Go to Home
    </Link>
  </div>
</div>

      
    </>
  )
}

export default ServerError;
