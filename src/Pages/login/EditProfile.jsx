/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import { imguser } from "../../Components/imagepath";
import { DatePicker} from "antd";
import Select from "react-select";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link } from "react-router-dom";

const EditProfile = () => {
    const [selectedOption, setSelectedOption] = useState(null);
  const [gender, setGender] = useState([
    { value: 1, label: "Select Gender" },
    { value: 2, label: "Male" },
    { value: 3, label: "Female" },
  ]);
  const onChange = (date, dateString) => {
    // console.log(date, dateString);
  };

  return (
    <>
      <Header />
      <Sidebar />
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                     <Link to="#">Dashboard </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right"/>
                        </i>
                    </li>
                    <li className="breadcrumb-item active">Edit Profile</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <form>
              <div className="card-box">
                <h3 className="card-title">Basic Informations</h3>
                <div className="row">
                  <div className="col-md-12">
                    <div className="profile-img-wrap">
                      <img className="inline-block" src={imguser} alt="user" />
                      <div className="fileupload btn">
                        <span className="btn-text">edit</span>
                        <input className="upload" type="file" />
                      </div>
                    </div>
                    <div className="profile-basic">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group local-forms">
                            <label className="focus-label">First Name</label>
                            <input
                              type="text"
                              className="form-control floating"
                              defaultValue="John"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group local-forms">
                            <label className="focus-label">Last Name</label>
                            <input
                              type="text"
                              className="form-control floating"
                              defaultValue="Doe"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group local-forms ">
                            <label className="focus-label">Birth Date</label>
                            <div className="cal-icon">
                            <DatePicker
                              className="form-control datetimepicker"
                              onChange={onChange}
                              suffixIcon={null}
                            />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group local-forms">
                            <label className="focus-label">Gendar</label>
                            <Select
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={gender}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-box">
                <h3 className="card-title">Contact Informations</h3>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group local-forms">
                      <label className="focus-label">Address</label>
                      <input
                        type="text"
                        className="form-control floating"
                        defaultValue="4487 Snowbird Lane"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group local-forms">
                      <label className="focus-label">State</label>
                      <input
                        type="text"
                        className="form-control floating"
                        defaultValue="New York"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group local-forms">
                      <label className="focus-label">Country</label>
                      <input
                        type="text"
                        className="form-control floating"
                        defaultValue="United States"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group local-forms">
                      <label className="focus-label">Pin Code</label>
                      <input
                        type="text"
                        className="form-control floating"
                        defaultValue={10523}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group local-forms">
                      <label className="focus-label">Phone Number</label>
                      <input
                        type="text"
                        className="form-control floating"
                        defaultValue="631-889-3206"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-box">
                <h3 className="card-title">Education Informations</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group local-forms">
                      <label className="focus-label">Institution</label>
                      <input
                        type="text"
                        className="form-control floating"
                        defaultValue="Oxford University"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group local-forms">
                      <label className="focus-label">Subject</label>
                      <input
                        type="text"
                        className="form-control floating"
                        defaultValue="Computer Science"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group local-forms">
                      <label className="focus-label">Starting Date</label>
                      <div className="cal-icon">
                        <DatePicker
                          className="form-control datetimepicker"
                          onChange={onChange}
                          suffixIcon={null}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group local-forms">
                      <label className="focus-label">Complete Date</label>
                      <div className="cal-icon">
                        <DatePicker
                          className="form-control datetimepicker"
                          onChange={onChange}
                          suffixIcon={null}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group local-forms">
                      <label className="focus-label">Degree</label>
                      <input
                        type="text"
                        className="form-control floating"
                        defaultValue="BE Computer Science"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group local-forms">
                      <label className="focus-label">Grade</label>
                      <input
                        type="text"
                        className="form-control floating"
                        defaultValue="Grade A"
                      />
                    </div>
                  </div>
                </div>
                <div className="add-more">
                 <Link to="#" className="btn btn-primary">
                    <i className="fa fa-plus" /> Add More Institute
                  </Link>
                </div>
              </div>
              <div className="card-box">
                <h3 className="card-title">Experience Informations</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group local-forms">
                      <label className="focus-label">Company Name</label>
                      <input
                        type="text"
                        className="form-control floating"
                        defaultValue="Digital Devlopment Inc"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group local-forms">
                      <label className="focus-label">Location</label>
                      <input
                        type="text"
                        className="form-control floating"
                        defaultValue="United States"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group local-forms">
                      <label className="focus-label">Job Position</label>
                      <input
                        type="text"
                        className="form-control floating"
                        defaultValue="Web Developer"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group local-forms">
                      <label className="focus-label">Period From</label>
                      <div className="cal-icon">
                        <DatePicker
                          className="form-control datetimepicker"
                          onChange={onChange}
                          suffixIcon={null}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group local-forms">
                      <label className="focus-label">Period To</label>
                      <div className="cal-icon">
                        <DatePicker
                          className="form-control datetimepicker"
                          onChange={onChange}
                          suffixIcon={null}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-more">
                 <Link to="#" className="btn btn-primary">
                    <i className="fa fa-plus" /> Add More Experience
                  </Link>
                </div>
              </div>
              <div className="text-center m-t-20">
                <button className="btn btn-primary submit-btn" type="button">
                  Save
                </button>
              </div>
            </form>
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
                   <Link to="#">
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
                   <Link to="#">
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
                   <Link to="#">
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
               <Link to="#">See all messages</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default EditProfile;
