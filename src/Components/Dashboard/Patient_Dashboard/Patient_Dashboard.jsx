/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import HeartRateChart from "./HeartRate";
import TemperatureChart from "./TemperatureChart";
 import PressureChart from "./BloodPressure";
import SleepChart from "./SleepChart";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
//import CountUp from "react-countup";
import { Link } from "react-router-dom";
 import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
//import HealthChart from "./HealthChart";
import { health_img, morning_img_03, report_icon1, report_icon2, report_icon3, report_icon4,blogimg4,blogimg12,blogimg8,profiles03, imagesend } from "../../imagepath";

import "react-calendar/dist/Calendar.css";
import MarketAreaChart from "./HealthChart";
import Select from "react-select";
import Calendar from "react-calendar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RadialBarChart from "./FullChart";

const Patient_Dashboard = () => {
  const [value, onChange] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { value: 1, label: "2022" },
    { value: 2, label: "2021" },
    { value: 3, label: "2020" },
    { value: 4, label: "2019" },
  ]);
  //console.log(setOptions,"setOptions")
  const weightOptions = [68, 70, 72, 74, 76];
  const heightOptions = [160, 162, 164, 166, 168];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />
      <Sidebar id="menu-item"
        id1="menu-items"
        activeClassName="patient-dashboard" />
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
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">
                      Patient Dashboard
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="good-morning-blk">
              <div className="row">
                <div className="col-md-6">
                  <div className="morning-user">
                    <h2>
                      Good Morning, <span>Williams Sarah</span>
                    </h2>
                    <p>Have a nice day at work</p>
                  </div>
                </div>
                <div className="col-md-6 position-blk">
                  <div className="morning-img">
                    <img src={morning_img_03} alt="#" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12 col-xl-7">
                <div className="card">
                  <div className="card-body">
                    <div className="chart-title patient-visit mb-0">
                      <h4>Static of your Health</h4>
                      <div className="income-value">
                        <p>
                          <span className="passive-view">
                            <i className="feather-arrow-up-right me-1" />
                            40%
                          </span>{" "}
                          vs last month
                        </p>
                      </div>
                      <div className="average-health">
                        <h5>
                          72bmp <span>Average</span>
                        </h5>
                      </div>
                      <div className="form-group mb-0">
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
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
                    <div id="health-chart" />
                    <MarketAreaChart />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-12 col-xl-5 d-flex">
              <div className="card">
                <div className="card-body">
                  <div className="chart-title patient-visit">
                    <h4>Body Mass Index</h4>
                  </div>
                  <div className="body-mass-blk">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="weight-blk">
                          <Slider {...settings}>
                            {weightOptions.map((weight, index) => (
                              <div key={index}>
                                <h4>{weight}</h4>
                                <span>kg</span>
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="weight-blk">
                          <Slider {...settings}>
                            {heightOptions.map((height, index) => (
                              <div key={index}>
                                <h4>{height}</h4>
                                <span>cm</span>
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </div>
                    </div>
                    <div className="progress weight-bar">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                      ></div>
                    </div>
                    <ul className="weight-checkit">
                      <li>Underweight</li>
                      <li>Normal (45.5)</li>
                      <li>Overweight</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6 col-xl-3 d-flex">
                <div className="card report-blk">
                  <div className="card-body">
                    <div className="report-head">
                      <h4>
                        <img
                          src={report_icon1}
                          className="me-2"
                          alt="#"
                        />
                        Heart Rate
                      </h4>
                    </div>
                    <div id="heart-rate" />
                    <HeartRateChart />
                    <div className="dash-content">
                      <h5>
                        110 <span>bpm</span>
                      </h5>
                      <p>
                        <span className="passive-view">
                          <i className="feather-arrow-up-right me-1">
                            <FeatherIcon icon="arrow-up-right" />
                            </i>
                          40%
                        </span>{" "}
                        vs last month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3 d-flex">
                <div className="card report-blk">
                  <div className="card-body">
                    <div className="report-head">
                      <h4>
                        <img
                          src={report_icon2}
                          className="me-2"
                          alt="#"
                        />
                        Temperature
                      </h4>
                    </div>
                    <div id="temperature-chart" />
                    <TemperatureChart />
                    <div className="dash-content">
                      <h5>
                        38.6 <span>c</span>
                      </h5>
                      <p>
                        <span className="negative-view">
                          <i className="feather-arrow-down-right me-1" >
                          <FeatherIcon icon="arrow-up-right" />
                            </i>
                          -20%
                        </span>{" "}
                        vs last month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3 d-flex">
                <div className="card report-blk">
                  <div className="card-body">
                    <div className="report-head">
                      <h4>
                        <img
                          src={report_icon3}
                          className="me-2"
                          alt="#"
                        />
                        Blood Pressure
                      </h4>
                    </div>
                    <div id="pressure-chart" />
                    <PressureChart />
                    <div className="dash-content">
                      <h5>
                        120 <span>mm/Hg</span>
                      </h5>
                      <p>
                        <span className="negative-view">
                          <i className="feather-arrow-down-right me-1">
                          <FeatherIcon icon="arrow-down-right" />
                            </i>
                          -40%
                        </span>{" "}
                        vs last month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3 d-flex">
                <div className="card report-blk">
                  <div className="card-body">
                    <div className="report-head">
                      <h4>
                        <img
                          src={report_icon4}
                          className="me-2"
                          alt="#"
                        />
                        Sleep
                      </h4>
                    </div>
                    <div id="sleep-chart" />
                    <SleepChart />
                    <div className="dash-content">
                      <h5>
                        7<span>h</span> 30 <span>m</span>
                      </h5>
                      <p>
                        <span className="negative-view">
                          <i className="feather-arrow-down-right me-1">
                          <FeatherIcon icon="arrow-down-right" />
                            </i>
                          -10%
                        </span>{" "}
                        vs last month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-xl-7">
                <div className="row">
                  <div className="col-12 col-md-6 col-xl-5">
                    <div className="card top-departments">
                      <div className="card-header pb-0">
                        <h4 className="card-title mb-0">Notes</h4>
                      </div>
                      <div className="card-body pt-1">
                        <div className="note-checkit">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="select_specialist"
                              defaultChecked
                            />
                            <span className="checkmark" /> Take vitamin Tablet
                          </label>
                        </div>
                        <div className="note-checkit">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="select_specialist"
                              defaultChecked
                            />
                            <span className="checkmark" /> Add Appoinment
                          </label>
                        </div>
                        <div className="note-checkit">
                          <label className="custom_check">
                            <input type="checkbox" name="select_specialist" />
                            <span className="checkmark" /> Set a goal
                          </label>
                        </div>
                        <div className="note-checkit">
                          <label className="custom_check mb-0">
                            <input type="checkbox" name="select_specialist" />
                            <span className="checkmark" /> Add new weight
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-7 d-flex">
                    <div className="card wallet-widget general-health">
                      <div className="circle-bar circle-bar2">
                        <div className="circle-graph2" data-percent={66}>
                          {/* <div style={{ width: 145, height: 150 }}>
                            <CircularProgressbar value={66} />
                          </div> */}
                       <RadialBarChart duration={10} />
                          <b>
                            <img src={health_img} alt="#" />
                          </b>
                        </div>
                      </div>
                      <div className="main-limit">
                        <p>General Health</p>
                        <h4>75%</h4>
                        <div className="income-value mt-2">
                          <p>
                            <span className="passive-view">
                              <i className="feather-arrow-up-right me-1">
                              <FeatherIcon icon="arrow-up-right"/>
                                </i>
                              40%
                            </span>{" "}
                            vs last month
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12  col-xl-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title d-inline-block">
                          Medical History
                        </h4>{" "}
                        <Link
                          to="/appoinmentlist"
                          className="patient-views float-end"
                        >
                          Show all
                        </Link>
                      </div>
                      <div className="card-body p-0 table-dash">
                        <div className="table-responsive">
                          <table className="table mb-0 border-0 datatable custom-table patient-table">
                            <thead>
                              <tr>
                                <th>
                                  <div className="form-check check-tables">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue="something"
                                    />
                                  </div>
                                </th>
                                <th>Doctor name</th>
                                <th>Diagnosis</th>
                                <th>Date</th>
                                <th />
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check check-tables">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue="something"
                                    />
                                  </div>
                                </td>
                                <td className="table-image">
                                  <img
                                    width={28}
                                    height={28}
                                    className="rounded-circle"
                                    src={blogimg4}
                                    alt="#"
                                  />
                                  <h2>Dr.Jenny Smith</h2>
                                </td>
                                <td>Dermotology</td>
                                <td>12.05.2022 </td>
                                <td>
                                  <button className="custom-badge status-gray re-shedule">
                                    Reschedule
                                  </button>
                                </td>
                                <td className="text-end">
                                  <div className="dropdown dropdown-action">
                                    <Link
                                      to="#"
                                      className="action-icon dropdown-toggle"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <Link
                                        className="dropdown-item"
                                        to="/editappoinments"
                                      >
                                        <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                        Edit
                                      </Link>
                                      <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_patient">
                       <i className="fa fa-trash-alt m-r-5"></i> Delete</Link>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check check-tables">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue="something"
                                    />
                                  </div>
                                </td>
                                <td className="table-image">
                                  <img
                                    width={28}
                                    height={28}
                                    className="rounded-circle"
                                    src={blogimg12}
                                    alt="#"
                                  />
                                  <h2>Andrea Lalema</h2>
                                </td>
                                <td>Dermotology</td>
                                <td>10.05.2022 </td>
                                <td>
                                  <button className="custom-badge status-gray re-shedule">
                                    Reschedule
                                  </button>
                                </td>
                                <td className="text-end">
                                  <div className="dropdown dropdown-action">
                                    <Link
                                      to="#"
                                      className="action-icon dropdown-toggle"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <Link
                                        className="dropdown-item"
                                        to="/editappoinments"
                                      >
                                        <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                        Edit
                                      </Link>
                                      <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_patient">
                       <i className="fa fa-trash-alt m-r-5"></i> Delete</Link>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check check-tables">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue="something"
                                    />
                                  </div>
                                </td>
                                <td className="table-image">
                                  <img
                                    width={28}
                                    height={28}
                                    className="rounded-circle"
                                    src={blogimg8}
                                    alt="#"
                                  />
                                  <h2>Dr.William Stephin</h2>
                                </td>
                                <td>Dermotology</td>
                                <td>12.05.2022 </td>
                                <td>
                                  <button className="custom-badge status-gray re-shedule ">
                                    Reschedule
                                  </button>
                                </td>
                                <td className="text-end">
                                  <div className="dropdown dropdown-action">
                                    <Link
                                      to="#"
                                      className="action-icon dropdown-toggle"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <Link
                                        className="dropdown-item"
                                        to="/editappoinments"
                                      >
                                        <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                        Edit
                                      </Link>
                                      <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_patient">
                       <i className="fa fa-trash-alt m-r-5"></i> Delete</Link>
                                    </div>
                                  </div>
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
              <div className="col-12 col-md-12 col-xl-5">
                {/* <div className="card flex-fill mb-2">
                  <div className="card-body">
                    <div id="calendar-doctor" className="calendar-container" />
                  </div>
                </div> */}
                <div className="treat-box mb-2">
                  <div className="user-imgs-blk">
                    <div className="circle-bar circle-bar2">
                      <div className="circle-graph2" data-percent="66">
                        <div>
                          <Calendar
                            style={{ widht: "100%" }}
                            onChange={onChange}
                            value={value}
                          />
                        </div>
                        {/* <canvas
                          width="600"
                          height="600"
                          style={{ height: "400px", width: "400px" }}
                        ></canvas> */}
                        {/* <b>
                          <img src={health_img} alt="" />
                        </b> */}
                      </div>
                    </div>
                    {/* <img src={blogimg8} alt />
                    <div className="active-user-detail flex-grow-1">
                      <h4>General Health Check up</h4>
                      <p>Dr. Dianne Philips at 10:00-11:00 AM</p>
                    </div> */}
                  </div>
                  {/* <Link to="#" className="custom-badge status-green">
                    Active
                  </Link> */}
                </div>
                <div className="treat-box mb-2">
                  <div className="user-imgs-blk">
                    <img src={blogimg8} alt="#" />
                    <div className="active-user-detail flex-grow-1">
                      <h4>General Health Check up </h4>
                      <p>Dr. Dianne Philips at 10:00-11:00 AM</p>
                    </div>
                  </div>
                  <Link to="#" className="custom-badge status-green">
                    Pending
                  </Link>
                </div>
                <div className="treat-box mb-2">
                  <div className="user-imgs-blk">
                    <img src={profiles03} alt="#" />
                    <div className="active-user-detail flex-grow-1">
                      <h4>Temporary Headache </h4>
                      <p>Dr. Jenny Smith at 05:00-06:00 PM</p>
                    </div>
                  </div>
                  <Link to="#" className="custom-badge status-orange">
                    Pending
                  </Link>
                </div>


              </div>
            </div>
          </div>
          <div id="delete_patient" className="modal fade delete-modal" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center">
          <img src={imagesend} alt="#" width={50} height={46} />
          <h3>Are you sure want to delete this ?</h3>
          <div className="m-t-20">
            {" "}
            <Link to="#" className="btn btn-white me-2" data-bs-dismiss="modal">
              Close
            </Link>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
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

export default Patient_Dashboard;
