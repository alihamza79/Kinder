/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';
import { DatePicker, Space } from 'antd';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import { Link } from 'react-router-dom';
const AddDepartment = () => {
  const onChange = (date, dateString) => {
    // console.log(date, dateString);
  };
  return (
    <div>
      <Header />
      <Sidebar id='menu-item6' id1='menu-items6' activeClassName='add-department'/>
      <>
  <div className="page-wrapper">
    <div className="content">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="#">Department </Link>
              </li>
              <li className="breadcrumb-item">
                <i className="feather-chevron-right">
                  <FeatherIcon icon="chevron-right"/>
                </i>
              </li>
              <li className="breadcrumb-item active">Add Department</li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-12">
                    <div className="form-heading">
                      <h4>Add Department</h4>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group local-forms">
                      <label>
                        Department Name <span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group local-forms">
                      <label>
                        Department Head <span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12">
                    <div className="form-group local-forms">
                      <label>
                        Description <span className="login-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={3}
                        cols={30}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group local-forms cal-icon">
                      <label>
                        Department Date <span className="login-danger">*</span>
                      </label>
                      <DatePicker className="form-control datetimepicker" onChange={onChange} 
                         suffixIcon={null}
                         />
                      {/* <input
                        className="form-control datetimepicker"
                        type="text"
                      /> */}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group select-gender">
                      <label className="gen-label">
                        Status <span className="login-danger">*</span>
                      </label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="gender"
                            className="form-check-input"
                          />
                          Active
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="gender"
                            className="form-check-input"
                          />
                          In Active
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="doctor-submit text-end">
                      <button
                        type="submit"
                        className="btn btn-primary submit-form me-2"
                      >
                        Create Department
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary cancel-form"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="notification-box">
      <div className="msg-sidebar notifications msg-noti">
        <div className="topnav-dropdown-header">
          <span>Messages</span>
        </div>
        <div className="drop-scroll msg-list-scroll" id="msg_list">
          <ul className="list-box">
            <li>
              <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">R</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Richard Miles </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="list-item new-message">
                  <div className="list-left">
                    <span className="avatar">J</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">John Doe</span>
                    <span className="message-time">1 Aug</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">T</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Tarah Shropshire </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">M</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Mike Litorus</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">C</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Catherine Manseau </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">D</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Domenic Houston </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">B</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Buster Wigton </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">R</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Rolland Webber </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">C</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Claire Mapes </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">M</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Melita Faucher</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">J</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Jeffery Lalor</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">L</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Loren Gatlin</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">T</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Tarah Shropshire</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="topnav-dropdown-footer">
          <Link to="#">See all messages</Link>
        </div>
      </div>
    </div>
  </div>
  
</>

    </div>
  )
}

export default AddDepartment;
