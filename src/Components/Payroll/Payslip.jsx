import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {pdficon2,pdficon,logo} from "../imagepath"
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link } from 'react-router-dom';
const Payslip = () => {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Sidebar id='menu-item8' id1='menu-items8' activeClassName='employee-payslip'/>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Payroll </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right"/>
                        </i>
                    </li>
                    <li className="breadcrumb-item active">Payslip</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="Payslip-head">
                      <div className="payrolss-counts">
                        <h5>Payslip for the Month of October 2022</h5>
                        <ul className="nav">
                          <li>
                            <Link to="#" className=" me-2">
                              <img
                                src={pdficon}
                                alt=""
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className=" me-2">
                              <img
                                src={pdficon2}
                                alt=""
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="payroll-head-clinic">
                      <div className="row">
                        <div className="col-12 col-sm-12">
                          <div className="invoice-counts">
                            <h4>
                              Invoice#345766 <br />
                              <span> Salary Month: July, 2018</span>
                            </h4>
                            <h4>
                              Status:{" "}
                              <Link to="#" className="status-green">
                                Success
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row custom-invoice">
                      <div className="col-12 col-md-6 m-b-20">
                        <img
                          src={logo}
                          width={35}
                          height={35}
                          alt=""
                        />{" "}
                        <span>Pre Clinic</span>
                        <ul className="list-unstyled invoice-clinic mt-2">
                          <li>3864 Quiet Valley Lane,</li>
                          <li>Sherman Oaks, CA, 91403</li>
                          <li>GST No:2914035</li>
                        </ul>
                      </div>
                      <div className="col-12 col-md-6 m-b-20">
                        <div className="invoice-details">
                          <h3>Andrea Lalema:</h3>
                          <h3>Nurse</h3>
                          <ul className="list-unstyled invoice-clinic">
                            <li>Employee ID: NS-0001</li>
                            <li>oining Date: 7 May 2015</li>
                            <li>barrycuda@example.com</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="payslip-head-roll">
                          <h5>Earnings</h5>
                        </div>
                        <div className="form-group local-forms">
                          <label>Basic Salary </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="$1000"
                          />
                        </div>
                        <div className="form-group local-forms">
                          <label>House Rent Allowance (H.R.A) </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="$800"
                          />
                        </div>
                        <div className="form-group local-forms">
                          <label>Conveyance </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="$600"
                          />
                        </div>
                        <div className="form-group local-forms">
                          <label>Other Allowance </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="$50"
                          />
                        </div>
                        <div className="form-group local-forms">
                          <label>Total Earnings </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="$16000"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="payslip-head-roll">
                          <h5>Deductions</h5>
                        </div>
                        <div className="form-group local-forms">
                          <label>Tax Deducted at Source (T.D.S.) </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="$600"
                          />
                        </div>
                        <div className="form-group local-forms">
                          <label>Provident Fund </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="$500"
                          />
                        </div>
                        <div className="form-group local-forms">
                          <label>ESI </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="$60"
                          />
                        </div>
                        <div className="form-group local-forms">
                          <label>Loan</label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="$40"
                          />
                        </div>
                        <div className="form-group local-forms">
                          <label>Total Deductions </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="$300"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="invoice-info">
                      <h5>
                        Net Salary: $59698 (Fifty Nine Thousand Six Hundred and
                        Ninety Eight Only)
                      </h5>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus sed dictum ligula, cursus blandit risus.
                        Maecenas eget metus non tellus dignissim aliquam ut a
                        ex. Maecenas sed vehicula dui, ac suscipit lacus.
                      </p>
                    </div>
                    <div className="col-12">
                      <div className="doctor-submit text-end">
                        <Link
                          to="#"
                          className="btn btn-primary submit-form me-2"
                        >
                          Send Payslip
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-primary cancel-form"
                        >
                          <i className="feather-printer me-2">
                            <FeatherIcon icon="printer me-2"/>
                            </i>
                          Print
                        </Link>
                      </div>
                    </div>
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
      </div>
    </>
  );
};

export default Payslip;
