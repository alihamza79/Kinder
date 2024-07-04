/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../Header"
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { favicon } from "../imagepath";
import Select from "react-select";

const Setting = () => {
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [option, setOption] = useState([
    { value: 1, label: "Select City" },
    { value: 2, label: "California" },
    { value: 3, label: "Tasmania" },
    { value: 4, label: "Auckland" },
    { value: 5, label: "Marlborough" },
  ]);
  const [country, setCountry] = useState([
    { value: 1, label: "Select City" },
    { value: 2, label: "India" },
    { value: 3, label: "London" },
    { value: 4, label: "USA" },
    { value: 5, label: "French" },
  ]);
  return (
    <div>
      <Header />
      <Sidebar activeClassName="setting" />

      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="index.html">Dashboard </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Settings</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="settings-menu-links">
            <ul className="nav nav-tabs menu-tabs">
              <li className="nav-item active">
                <Link className="nav-link " to="/settings">
                  General Settings
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/localization">
                  Localization
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/paymentsetting">
                  Payment Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settingsemail">
                  Email Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settingssocialmedia">
                  Social Media Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settingssociallink">
                  Social Links
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settingsseo">
                  SEO Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settingsthem">
                  Theme Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settingschangepassword">
                  Change Password
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settingsothers">
                  Others
                </Link>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Website Basic Details</h5>
                </div>
                <div className="card-body pt-0">
                  <form>
                    <div className="settings-form">
                      <div className="form-group">
                        <label>
                          Website Name <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Website Name"
                        />
                      </div>
                      <div className="form-group">
                        <p className="settings-label">
                          Logo <span className="star-red">*</span>
                        </p>
                        <div className="settings-btn">
                          <input
                            type="file"
                            accept="image/*"
                            name="image"
                            id="file"
                            // onchange="loadFile(event)"
                            className="hide-input"
                          />
                          <label htmlFor="file" className="upload">
                            <i className="feather-upload">
                              <FeatherIcon icon="upload" />
                            </i>
                          </label>
                        </div>
                        <h6 className="settings-size">
                          Recommended image size is <span>150px x 150px</span>
                        </h6>
                        <div
                          className="upload-images"
                          style={{ display: show ? "none" : "" }}
                        >
                          <img src={favicon} alt="Image" />
                          <Link to="#" className="btn-icon logo-hide-btn">
                            <i
                              className="feather-x-circle crossmark"
                              onClick={() => setShow((s) => !s)}
                            >
                              <FeatherIcon icon="x-circle" />
                            </i>
                          </Link>
                        </div>
                      </div>
                      <div className="form-group">
                        <p className="settings-label">
                          Favicon <span className="star-red">*</span>
                        </p>
                        <div className="settings-btn">
                          <input
                            type="file"
                            accept="image/*"
                            name="image"
                            id="file"
                            // onchange="loadFile(event)"
                            className="hide-input"
                          />
                          <label htmlFor="file" className="upload">
                            <i className="feather-upload">
                              <FeatherIcon icon="upload" />
                            </i>
                          </label>
                        </div>
                        <h6 className="settings-size">
                          Recommended image size is{" "}
                          <span>16px x 16px or 32px x 32px</span>
                        </h6>
                        <h6 className="settings-size mt-1">
                          Accepted formats: only png and ico
                        </h6>
                        <div
                          className="upload-images upload-size"
                          style={{ display: show ? "none" : "" }}
                        >
                          <img
                            className="favicon-changes"
                            src={favicon}
                            alt="Image"
                          />
                          <Link to="#" className="btn-icon logo-hide-btn">
                            <i
                              className="feather-x-circle"
                              onClick={() => setShow((s) => !s)}
                            >
                              <FeatherIcon icon="x-circle" />
                            </i>
                          </Link>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-5 col-md-6">
                          <div className="form-group">
                            <div className="status-toggle d-flex justify-content-between align-items-center">
                              <p className="mb-0">RTL</p>
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                              />
                              <label htmlFor="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-0">
                        <div className="settings-btns">
                          <button
                            type="submit"
                            className="border-0 btn btn-primary btn-gradient-primary btn-rounded me-2"
                          >
                            Update
                          </button>
                          <button
                            type="submit"
                            className="btn btn-secondary btn-rounded"
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
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Address Details</h5>
                </div>
                <div className="card-body pt-0">
                  <form>
                    <div className="settings-form">
                      <div className="form-group">
                        <label>
                          Address Line 1 <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Address Line 1"
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Address Line 2 <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Address Line 2"
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              City <span className="star-red">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              State/Province <span className="star-red">*</span>
                            </label>
                            <Select
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={option}
                              id="search-commodity"
                              components={{
                                IndicatorSeparator: () => null,
                              }}
                              styles={{
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                  borderColor: state.isFocused
                                    ? "hsl(0, 0%, 80%)"
                                    : "#86b7fe", // Change to navy blue (#000080)
                                  border: state.isFocused
                                    ? "2px solid rgba(46, 55, 164, 0.1)"
                                    : "2px solid rgba(46, 55, 164, 0.1)",
                                  boxShadow: "none",
                                  borderRadius: "10px",
                                  fontSize: "14px",
                                  minHeight: "45px",
                                }),
                                dropdownIndicator: (base, state) => ({
                                  ...base,
                                  transform: state.selectProps.menuIsOpen
                                    ? "rotate(-180deg)"
                                    : "rotate(0)",
                                  transition: "250ms",
                                  width: "35px",
                                  height: "35px",
                                }),
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Zip/Postal Code{" "}
                              <span className="star-red">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Country <span className="star-red">*</span>
                            </label>
                            <Select
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={country}
                              id="search-commodity"
                              components={{
                                IndicatorSeparator: () => null
                              }}
                              styles={{
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                  borderColor: state.isFocused ?'none' : '2px solid rgba(46, 55, 164, 0.1);',
                                   boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                                  '&:hover': {
                                    borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                                  },
                                  borderRadius: '10px',
                                  fontSize: "14px",
                                    minHeight: "45px",
                                }),
                                dropdownIndicator: (base, state) => ({
                                  ...base,
                                  transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                                  transition: '250ms',
                                  width: '35px',
                                  height: '35px',
                                }),
                              }}

                            />
                            {/* <select className="select form-control">
                                                            <option selected="selected">Select</option>
                                                            <option>India</option>
                                                            <option>London</option>
                                                            <option>France</option>
                                                            <option>USA</option>
                                                        </select> */}
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-0">
                        <div className="settings-btns">
                          <button
                            type="submit"
                            className="border-0 btn btn-primary btn-gradient-primary btn-rounded"
                          >
                            Update
                          </button>
                          &nbsp;&nbsp;
                          <button
                            type="submit"
                            className="btn btn-secondary btn-rounded"
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
        {/* /Page Content */}
        <div className="notification-box">
          <div className="msg-sidebar notifications msg-noti">
            <div className="topnav-dropdown-header">
              <span>Messages</span>
            </div>
            <div className="drop-scroll msg-list-scroll" id="msg_list">
              <ul className="list-box">
                <li>
                  <Link to="chat.html">
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
                  <Link to="chat.html">
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
                  <Link to="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">T</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">
                          {" "}
                          Tarah Shropshire{" "}
                        </span>
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
                  <Link to="chat.html">
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
                  <Link to="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">C</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">
                          {" "}
                          Catherine Manseau{" "}
                        </span>
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
                  <Link to="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">D</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">
                          {" "}
                          Domenic Houston{" "}
                        </span>
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
                  <Link to="chat.html">
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
                  <Link to="chat.html">
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
                  <Link to="chat.html">
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
                  <Link to="chat.html">
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
                  <Link to="chat.html">
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
                  <Link to="chat.html">
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
                  <Link to="chat.html">
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
              <Link to="chat.html">See all messages</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
