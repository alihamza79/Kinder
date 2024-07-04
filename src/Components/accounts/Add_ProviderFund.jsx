/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { DatePicker} from "antd";
import Select from "react-select";
const Add_ProviderFund = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [employee, setEmployee] = useState([
    { value: 1, label: "Select Employee Name" },
    { value: 2, label: "Bernardo James" },
    { value: 3, label: "Galaviz Lalema" },
    { value: 4, label: "Tarah Williams" },
  ]);
  const [salery, setSalery] = useState([
    { value: 1, label: "Select Provident Fund Type" },
    { value: 2, label: "Basic Salery" },
    { value: 3, label: "Month salery" },
  ]);

  const onChange = (date, dateString) => {};
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
                      <Link to="/providentfund">Accounts </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="fa fa-angle-right" />
                    </li>
                    <li className="breadcrumb-item active">
                      Add Provident Fund
                    </li>
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
                            <h4>Add Provident Fund</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Employee Name{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <Select
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={employee}
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
                              Provident Fund Type{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <Select
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={salery}
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
                              Employee Share ($){" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Organization Share ($){" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms cal-icon">
                            <label>
                              Employee Share (%){" "}
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
                              Organization Share (%){" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-12">
                          <div className="form-group local-forms">
                            <label>
                              Description{" "}
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
                              Create Provident Fund
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

export default Add_ProviderFund;
