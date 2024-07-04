/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { favicon } from "../../imagepath";
import { DatePicker } from "antd";

const Edit_Expenses = () => {
  const [show, setShow] = useState(false);
  const onChange = (date, dateString) => {};
  const loadFile = (event) => {
    // Handle file loading logic here
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
                      <Link to="/expense-Report">Accounts </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">Edit Expense</li>
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
                            <h4>Edit Expenses</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Item Name <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              defaultValue="Anaesthetic machine"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Purchase From{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              defaultValue="Biomedical Equipment Inc"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms cal-icon">
                            <label>
                              Purchase Date{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <DatePicker
                              className="form-control datetimepicker"
                              onChange={onChange}
                              suffixIcon={null}
                              placeholder="24/11/2022"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Purchased by{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <select className="form-control select">
                              <option>Select Purchase by</option>
                              <option>Bernardo James</option>
                              <option>Galaviz Lalema</option>
                              <option>Tarah Williams </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Amount <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              defaultValue="$1000"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Paid By <span className="login-danger">*</span>
                            </label>
                            <select className="form-control select">
                              <option>Select Paid by</option>
                              <option>Paypal</option>
                              <option>Cheque</option>
                              <option>Debit Card</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-top-form">
                            <label className="local-top">
                              Attachments{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <div className="settings-btn upload-files-avator">
                              <input
                                type="file"
                                accept="image/*"
                                name="image"
                                id="file"
                                onChange={loadFile}
                                className="hide-input"
                              />
                            </div>
                            <div
                              className="upload-images upload-size"
                              style={{ display: show ? "none" : "block" }}
                            >
                              <img src={favicon} alt="Image" />
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
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Payment Status{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <select className="form-control select">
                              <option>Select Payment Status</option>
                              <option>Approved</option>
                              <option>Rejected</option>
                              <option>Pending </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12">
                          <div className="form-group local-forms">
                            <label>
                              Other Information{" "}
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
                              Create Expense
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
        </div>
      </>
    </>
  );
};

export default Edit_Expenses;
