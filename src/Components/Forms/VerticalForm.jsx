/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";
import { Link } from 'react-router-dom'

const VerticalForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [bloodGroup, setBloodGroup] = useState([
    { value: 2, label: "A +" },
    { value: 3, label: "O +" },
    { value: 4, label: "B +" },
    { value: 5, label: "AB +" },
  ]);
  const [state, setState] = useState([
    { value: 2, label: "California" },
    { value: 3, label: "Texas" },
    { value: 4, label: "Florida" },
  ]);
  const [country, setCountry] = useState([
    { value: 2, label: "USA" },
    { value: 3, label: "India" },
    { value: 4, label: "French" },
    { value: 4, label: "Spain" },
  ]);
  return (
    <>
      <Header />
      <Sidebar id='menu-item15' id1='menu-items15' activeClassName='vertical-form'/>
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to ="#">Dashboard </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">Vertical Form</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-6">
                <div className="card-box">
                  <h4 className="card-title">Basic Form</h4>
                  <form action="#">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Repeat Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-box">
                  <h4 className="card-title">Address Form</h4>
                  <form action="#">
                    <div className="form-group">
                      <label>Address Line 1</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Address Line 2</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>City</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>State</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Country</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Postal Code</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card-box">
                  <h4 className="card-title">Two Column Vertical Form</h4>
                  <form action="#">
                    <h4 className="card-title">Personal Information</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Blood Group</label>
                          <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={bloodGroup}
                          />
                        </div>
                        <div className="form-group">
                          <label className="display-block">Gender:</label>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="gender_male"
                              defaultValue="option1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gender_male"
                            >
                              Male
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="gender_female"
                              defaultValue="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gender_female"
                            >
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Username</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Repeat Password</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <h4 className="card-title">Postal Address</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Address Line 1</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Address Line 2</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>State</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>City</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Country</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Postal Code</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <form action="#">
                  <div className="card-box">
                    <div className="row">
                      <div className="col-md-6">
                        <h4 className="card-title">Personal details</h4>
                        <div className="form-group">
                          <label>Name:</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Password:</label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>State:</label>
                          <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={state}
                          />
                        </div>
                        <div className="form-group">
                          <label>Your message:</label>
                          <textarea
                            rows={5}
                            cols={5}
                            className="form-control"
                            placeholder="Enter message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h4 className="card-title">Personal details</h4>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>First name:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Last name:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Email:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Phone:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Address line:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Country:</label>
                              <Select
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={country}
                            />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>State/Province:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>ZIP code:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>City:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
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
                    <Link to ="#">
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
                    <Link to ="#">
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
                    <Link to ="#">
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
                    <Link to ="#">
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
                    <Link to ="#">
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
                    <Link to ="#">
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
                    <Link to ="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">B</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Buster Wigton{" "}
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
                    <Link to ="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">R</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Rolland Webber{" "}
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
                    <Link to ="#">
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
                    <Link to ="#">
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
                    <Link to ="#">
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
                    <Link to ="#">
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
                    <Link to ="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">T</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            Tarah Shropshire
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
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <Link to ="#">See all messages</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default VerticalForm;
