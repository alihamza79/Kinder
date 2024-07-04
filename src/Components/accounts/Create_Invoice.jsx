/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { DatePicker, Space } from 'antd';
import Select from 'react-select';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import { Link } from "react-router-dom";

const Create_Invoice = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [department, setDepartment] = useState([
    { value: 1, label: "Orthopedics" },
    { value: 2, label: "Radiology" },
    { value: 3, label: "Dentist" },
  ]);
  const [tax, setTax] = useState([
    { value: 1, label: "VAT" },
    { value: 2, label: "GST" },
    { value: 3, label: "No GST" },

  ]);
  const [cash, setCash] = useState([
    { value: 1, label: "Debit Card" },
    { value: 2, label: "Gpay" },
    { value: 3, label: "Dentist" },
  ]);
  const [payment, setPayment] = useState([
    { value: 1, label: "Paied" },
    { value: 2, label: "Unpaied" },
    { value: 3, label: "Partically Paid" },
  ]);

  const onChange = (date, dateString) => {
  };
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
                      <li className="breadcrumb-item"><Link to="invoices.html">Accounts </Link></li>
                      <li className="breadcrumb-item">
                        <i className="feather-chevron-right">
                          <FeatherIcon icon="chevron-right"/>
                          </i>

                        </li>
                      <li className="breadcrumb-item active">Add Invoice</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="row">
                <div className="col-sm-12">
                  <div className="card ">
                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-heading">
                              <h4>Add Invoice</h4>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>Patient Name <span className="login-danger">*</span></label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>Email <span className="login-danger">*</span></label>
                              <input className="form-control" type="email" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>Department <span className="login-danger">*</span></label>
                              <Select
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={department}
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
                              <label>Tax <span className="login-danger">*</span></label>
                              <Select
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={tax}
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
                            <div className="form-group local-forms cal-icon">
                              <label>Invoice Date  <span className="login-danger">*</span></label>
                              <DatePicker className="form-control datetimepicker" onChange={onChange}
                                suffixIcon={null}
                              // placeholder='24/11/2022'
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms cal-icon">
                              <label>Due Date <span className="login-danger">*</span></label>
                              <DatePicker className="form-control datetimepicker" onChange={onChange}
                                suffixIcon={null}
                              // placeholder='24/11/2022'
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>Patient Address  <span className="login-danger">*</span></label>
                              <textarea className="form-control" rows={3} cols={30} defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>Billing  Address  <span className="login-danger">*</span></label>
                              <textarea className="form-control" rows={3} cols={30} defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>Payment Method <span className="login-danger">*</span></label>
                              <Select
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={payment}
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
                                <option>Select Payment Method</option>
                                <option>Debit Card</option>
                                <option>Gpay</option>
                              </select> */}
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>Select Payment Status <span className="login-danger">*</span></label>
                              <Select
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={cash}
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
                                <option>Select  Tax</option>
                                <option>Paid</option>
                                <option>Un Paid</option>
                                <option>Patially Paid</option>
                              </select> */}
                            </div>
                          </div>
                          <div className="col-12 col-sm-12">
                            <div className="table-responsive">
                              <table className="table border-0 custom-table invoices-table">
                                <thead>
                                  <tr>
                                    <th style={{ width: 20 }}>#</th>
                                    <th className="col-sm-2">Item</th>
                                    <th className="col-md-6">Description</th>
                                    <th style={{ width: 100 }}>Unit Cost</th>
                                    <th style={{ width: 80 }}>Qty</th>
                                    <th>Amount</th>
                                    <th> </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>
                                      <input className="form-control" type="text" style={{ minWidth: 150 }} />
                                    </td>
                                    <td>
                                      <input className="form-control" type="text" style={{ minWidth: 150 }} />
                                    </td>
                                    <td>
                                      <input className="form-control" style={{ width: 100 }} type="text" />
                                    </td>
                                    <td>
                                      <input className="form-control" style={{ width: 80 }} type="text" />
                                    </td>
                                    <td>
                                      <input className="form-control " style={{ width: 120 }} type="text" />
                                    </td>
                                    <td><Link to="#" className="text-success font-18 add-table-invoice" title="Add"><i className="fa fa-plus" /></Link></td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>
                                      <input className="form-control" type="text" style={{ minWidth: 150 }} />
                                    </td>
                                    <td>
                                      <input className="form-control" type="text" style={{ minWidth: 150 }} />
                                    </td>
                                    <td>
                                      <input className="form-control" style={{ width: 100 }} type="text" />
                                    </td>
                                    <td>
                                      <input className="form-control" style={{ width: 80 }} type="text" />
                                    </td>
                                    <td>
                                      <input className="form-control " style={{ width: 120 }} type="text" />
                                    </td>
                                    <td><Link to="#" className="text-success font-18 add-table-invoice" title="Add"><i className="fa fa-plus" /></Link></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="table-responsive custom-table invoices-table">
                              <table className="table border-0 grand-totals">
                                <tbody>
                                  <tr>
                                    <td className="text-end">Total</td>
                                    <td>
                                      <input className="form-control text-end" type="text" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-end ">Tax</td>
                                    <td>
                                      <input className="form-control text-end" type="text" />
                                    </td>
                                  </tr>
                                  <tr className="bold-total">
                                    <td className="text-end">
                                      Grand Total
                                    </td>
                                    <td>
                                      <input className="form-control text-end" type="text" />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group local-forms">
                              <label>Other Information  <span className="login-danger">*</span></label>
                              <textarea className="form-control" rows={3} cols={30} defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="doctor-submit text-end">
                              <button type="submit" className="btn btn-primary submit-form me-2">Submit</button>
                              <button type="submit" className="btn btn-primary cancel-form">Cancel</button>
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
                      <Link to="chat.html">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">R</span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">Richard Miles </span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                            <span className="message-author"> Tarah Shropshire </span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                            <span className="message-author"> Catherine Manseau </span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                            <span className="message-author"> Domenic Houston </span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
      </>
    </>
  )
}

export default Create_Invoice
