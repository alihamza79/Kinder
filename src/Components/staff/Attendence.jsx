/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { DatePicker} from "antd";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { pdficon, pdficon2, pdficon3, pdficon4, plusicon, refreshicon, searchnormal } from "../imagepath";
const Attendence = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [month, setMonth] = useState([
    { value: 1, label: "Select Month" },
    { value: 2, label: "December" },
    { value: 3, label: "November" },
    { value: 4, label: "October" },
    { value: 5, label: "September" },
  ]);
  const [year, setYear] = useState([
    // { value: 1, label: "Select Year" },
    { value: 2, label: "2022" },
    { value: 3, label: "2021" },
    { value: 4, label: "2020" },
    { value: 5, label: "2019" },
    { value: 6, label: "2018" },
  ]);
  const onChange = (date, dateString) => {
    // console.log(date, dateString);
  };

  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Sidebar id='menu-item3' id1='menu-items3' activeClassName='attendance'/>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                     <Link to="#">Staffs </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">Attandance Sheet</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card card-table show-entire">
                  <div className="card-body">
                    {/* Table Header */}
                    <div className="page-table-header mb-2">
                      <div className="row align-items-center">
                        <div className="col">
                          <div className="doctor-table-blk">
                            <h3>Attandance Sheet</h3>
                            <div className="doctor-search-blk">
                              <div className="top-nav-search table-search-blk">
                                <form>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search here"
                                  />
                                 <Link className="btn">
                                    <img
                                      src={searchnormal}
                                      alt="#"
                                    />
                                  </Link>
                                </form>
                              </div>
                              <div className="add-group">
                               <Link
                                  to="#"
                                  className="btn btn-primary add-pluss ms-2"
                                >
                                  <img src={plusicon} alt="#" />
                                </Link>
                               <Link
                                  to="#"
                                  className="btn btn-primary doctor-refresh ms-2"
                                >
                                  <img
                                    src={refreshicon}
                                    alt="#"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto text-end float-end ms-auto download-grp">
                         <Link to="#" className=" me-2">
                            <img
                              src={pdficon}
                              alt="#"
                            />
                          </Link>
                         <Link to="#" className=" me-2">
                            <img
                              src={pdficon2}
                              alt="#"
                            />
                          </Link>
                         <Link to="#" className=" me-2">
                            <img
                              src={pdficon3}
                              alt="#"
                            />
                          </Link>
                         <Link to="#">
                            <img
                              src={pdficon4}
                              alt="#"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* /Table Header */}
                    <div className="staff-search-table">
                      <form>
                        <div className="row">
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <label>Employee Name </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <label>Year </label>
                              <Select
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={year}
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
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <label>Month </label>
                              <Select
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={month}
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
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms cal-icon">
                              <label>From </label>
                              <DatePicker
                                className="form-control datetimepicker"
                                onChange={onChange}
                                suffixIcon={null}
                              />
                              {/* <input
                        className="form-control datetimepicker"
                        type="text"
                      /> */}
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms cal-icon">
                              <label>To </label>
                              <DatePicker
                                className="form-control datetimepicker"
                                onChange={onChange}
                                suffixIcon={null}
                              />
                              {/* <input
                        className="form-control datetimepicker"
                        type="text"
                      /> */}
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="doctor-submit">
                              <button
                                type="submit"
                                className="btn btn-primary submit-list-form me-2"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="table-responsive">
                      <table className="table border-0 custom-table attent-table datatable mb-0">
                        <thead>
                          <tr>
                            <th>September</th>
                            <th>01</th>
                            <th>02</th>
                            <th>03</th>
                            <th>04</th>
                            <th>05</th>
                            <th className="week-days">06</th>
                            <th className="week-days">07</th>
                            <th>08</th>
                            <th>09</th>
                            <th>10</th>
                            <th>11</th>
                            <th>12</th>
                            <th className="week-days">13</th>
                            <th className="week-days">14</th>
                            <th>15</th>
                            <th>16</th>
                            <th>17</th>
                            <th>18</th>
                            <th>19</th>
                            <th className="week-days">20</th>
                            <th className="week-days">21</th>
                            <th>22</th>
                            <th>23</th>
                            <th>24</th>
                            <th>25</th>
                            <th>26</th>
                            <th className="week-days">27</th>
                            <th className="week-days">28</th>
                            <th>29</th>
                            <th>30</th>
                            <th>31</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="month-table">
                              <h5>Andrea Lalema</h5>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                  <FeatherIcon icon="check" />
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                  <FeatherIcon icon="check" />
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                  <FeatherIcon icon="check" />
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                  <FeatherIcon icon="check" />
                                </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                  <FeatherIcon icon="check" />
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                  <FeatherIcon icon="check" />
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                  <FeatherIcon icon="check" />
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                  <FeatherIcon icon="check" />
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                  <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="month-table">
                              <h5>Smith Bruklin</h5>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="month-table">
                              <h5>Galaviz Lalema</h5>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="month-table">
                              <h5>Mark Hay Smith</h5>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x">
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check" />
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="month-table">
                              <h5>Cristina Groves</h5>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check" />
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="present-table attent-status">
                                <i className="feather-check">
                                <FeatherIcon icon="check"/>
                                </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td />
                            <td />
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                            <td>
                              <span className="absent-table attent-status">
                                <i className="feather-x" >
                                <FeatherIcon icon="x"/>
                                  </i>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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

export default Attendence;
