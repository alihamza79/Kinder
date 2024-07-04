/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { DatePicker, Space } from "antd";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";
import { Link } from 'react-router-dom';

const Add_Payment = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [doctor, setDoctor] = useState([
    // { value: 1, label: "Select Doctor" },
    { value: 2, label: "Dr.Bernardo James" },
    { value: 3, label: "Dr.Andrea Lalema" },
    { value: 4, label: "Dr.William Stephin" },
  ]);
  const [paymentMethod, setPaymentmethod] = useState([
    { value: 1, label: "Select Card" },
    { value: 2, label:"Credit Card" },
    { value: 3, label: "Debit Card" },
    { value: 4, label: "Pay Pal " },
  ]);
  const [paymentStatus, setPaymentStatus] = useState([
    { value: 1, label: "Select tatus" },
    { value: 2, label:"Paid" },
    { value: 3, label: "Partically Paid" },
    { value: 4, label: "UnPaid" },
  ]);

  const onChange = (date, dateString) => {};
  return (
    <>
      <Header />
      <Sidebar />
      <>
        <div>
          <div className="page-wrapper">
            <div className="content">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                       <Link to="#">Accounts</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <i className="feather-chevron-right">
                          <FeatherIcon icon="chevron-right" />
                        </i>
                      </li>
                      <li className="breadcrumb-item active">Add Payments</li>
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
                              <h4>Add Payments</h4>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Payment Number
                                <span className="login-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms cal-icon">
                              <label>
                                Payment Date
                                <span className="login-danger">*</span>
                              </label>
                              <DatePicker
                                className="form-control datetimepicker"
                                onChange={onChange}
                                suffixIcon={null}
                                // placeholder='24/11/2022'
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Patient Name
                                <span className="login-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Doctor Name
                                <span className="login-danger">*</span>
                              </label>
                              <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={doctor}
                                menuPortalTarget={document.body}
                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                menuPortalTarget={document.body}
                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
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
                              {/* <select className="form-control select">
                                                                <option>Enter Doctor Name</option>
                                                                <option>Dr.Galaviz Lalema</option>
                                                                <option>Dr.Bernardo James</option>
                                                                <option>Dr.Mark Hay Smith</option>
                                                            </select> */}
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Total Amount
                                <span className="login-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Discount
                                <span className="login-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Payment Method
                                <span className="login-danger">*</span>
                              </label>
                              <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={paymentMethod}
                                menuPortalTarget={document.body}
                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
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

                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Payment Status
                                <span className="login-danger">*</span>
                              </label>
                              <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={paymentStatus}
                                menuPortalTarget={document.body}
                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
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

                            </div>
                          </div>
                          <div className="col-12 col-sm-12">
                            <div className="form-group local-forms">
                              <label>
                                Other Information
                                <span className="login-danger">*</span>
                              </label>
                              <textarea
                                className="form-control"
                                rows={3}
                                cols={30}
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="doctor-submit text-end">
                              <button
                                type="submit"
                                className="btn btn-primary submit-form me-2"
                              >
                                Submit
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
                            <span className="message-author">
                              Richard Miles
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
                              Catherine Manseau
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
                              Domenic Houston
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
                              Buster Wigton
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
                              Rolland Webber
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
                            <span className="message-author">Claire Mapes</span>
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
                            <span className="message-author">
                              Melita Faucher
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
                            <span className="avatar">J</span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">
                              Jeffery Lalor
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
          <div
            id="delete_patient"
            className="modal fade delete-modal"
            role="dialog"
          >
          </div>
        </div>
      </>
    </>
  );
};

export default Add_Payment;
