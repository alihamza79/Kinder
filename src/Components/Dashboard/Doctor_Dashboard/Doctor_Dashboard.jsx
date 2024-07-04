import React, { useState } from "react";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import Select from "react-select";
import CountUp from "react-countup";
import {
  blogimg12,
  blogimg4,
  blogimg6,
  doctor_dashboard_01,
  doctor_dashboard_02,
  doctor_dashboard_03,
  doctor_dashboard_04,
  imgicon,
  morning_img_02,
  profileicon,
  sorticon,
  sorticon02,
  timericon,
  trashicon,
} from "../../imagepath";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import RadialPatientsChart from "./DonutChart";
import { Link } from "react-router-dom";
import ActivityChart from "./ActivityChart";
import MarketAreaChart from "./IncomeChart";
import RadialBarChart from "../Patient_Dashboard/FullChart";
// import { CircularProgressbar } from "react-circular-progressbar";
const Doctor_Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [options, setOptions] = useState([
    { value: 1, label: "This Week" },
    { value: 2, label: "Last Week" },
    { value: 3, label: "This Month" },
    { value: 4, label: "Last Month" },
  ]);
  // eslint-disable-next-line no-unused-vars
  const [year, setyear] = useState([
    { value: 1, label: "2022" },
    { value: 2, label: "2021" },
    { value: 3, label: "2020" },
    { value: 4, label: "2019" },
  ]);

  return (
    <>
      <Header />
      <Sidebar
        id="menu-item"
        id1="menu-items"
        activeClassName="doctor-dashboard"
      />
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
                    <li className="breadcrumb-item active">Doctor Dashboard</li>
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
                      Good Morning, <span>Dr.Smith Wayne</span>
                    </h2>
                    <p>Have a nice day at work</p>
                  </div>
                </div>
                <div className="col-md-6 position-blk">
                  <div className="morning-img">
                    <img src={morning_img_02} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="doctor-list-blk">
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget border-right-bg">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img src={doctor_dashboard_01} alt="" />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        <CountUp delay={0.4} end={30} duration={0.6} />
                        <span className="counter-up">/85</span>
                        <span className="status-green">+40%</span>
                      </h4>
                      <h5>Appointments</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget border-right-bg">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img src={doctor_dashboard_02} alt="" />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        <CountUp delay={0.4} end={20} duration={0.6} />
                        <span className="counter-up">/125</span>
                        <span className="status-green">+40%</span>
                      </h4>
                      <h5>Consultations</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget border-right-bg">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img src={doctor_dashboard_03} alt="" />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        <CountUp delay={0.4} end={12} duration={0.6} />
                        <span className="counter-up">/30</span>
                        <span className="status-green">+40%</span>
                      </h4>
                      <h5>Operations</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img src={doctor_dashboard_04} alt="" />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        $ <CountUp delay={0.4} end={530} duration={0.6} />
                        <span className="status-green">+50%</span>
                      </h4>
                      <h5>Earnings</h5>
                      {/* <p>
                        <span className="passive-view">
                          <i className="feather-arrow-up-right me-1" />
                          30%
                        </span>{" "}
                        vs last month
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12 col-xl-7">
                <div className="card">
                  <div className="card-body">
                    <div className="chart-title patient-visit mb-0">
                      <h4>Income</h4>
                      <div className="income-value">
                        <h3>
                          <span>$</span> 20,560
                        </h3>
                        <p>
                          <span className="passive-view">
                            <i className="feather-arrow-up-right me-1">
                              <FeatherIcon icon="arrow-up-right me-1" />
                            </i>
                            40%
                          </span>{" "}
                          vs last month
                        </p>
                      </div>
                      <div className="form-group mb-0">
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={year}
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
                    <div id="apexcharts-area" />
                    <MarketAreaChart />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6 col-xl-3 d-flex">
                <div className="card">
                  <div className="card-body">
                    <div id="radial-patients" />
                    <RadialPatientsChart />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6 col-xl-2 d-flex">
                <div className="struct-point">
                  <div className="card patient-structure">
                    <div className="card-body">
                      <h5>New Patients</h5>
                      <h3>
                        56
                        <span className="status-green">
                          <img src={sorticon} alt="" className="me-1" />
                          60%
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div className="card patient-structure">
                    <div className="card-body">
                      <h5>Old Patients</h5>
                      <h3>
                        35
                        <span className="status-pink">
                          <img src={sorticon02} alt="" className="me-1" />
                          -20%
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12  col-xl-7">
                <div className="card">
                  <div className="card-body">
                    <div className="chart-title patient-visit">
                      <h4>Activity Chart</h4>
                      <div>
                        <ul className="nav chat-user-total">
                          <li>
                            <i
                              className="fa fa-circle low-users"
                              aria-hidden="true"
                            />
                            Low
                          </li>
                          <li>
                            <i
                              className="fa fa-circle current-users"
                              aria-hidden="true"
                            />{" "}
                            Highh
                          </li>
                        </ul>
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
                    <ActivityChart />
                    <div id="activity-chart" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-12  col-xl-8">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title d-inline-block">
                          Recent Appointments
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
                          <table className="table mb-0 border-0 custom-table">
                            <tbody>
                              <tr>
                                <td className="table-image appoint-doctor">
                                  <img
                                    width={28}
                                    height={28}
                                    className="rounded-circle"
                                    src={blogimg4}
                                    alt=""
                                  />
                                  <h2>Dr.Jenny Smith</h2>
                                </td>
                                <td className="appoint-time text-center">
                                  <h6>Today 5:40 PM</h6>
                                  <span>Typoid Fever</span>
                                </td>
                                <td>
                                  <button className="check-point status-green me-1">
                                    <i className="feather-check">
                                      <FeatherIcon icon="check" />
                                    </i>
                                  </button>
                                  <button className="check-point status-pink ">
                                    <i className="feather-x">
                                      <FeatherIcon icon="x" />
                                    </i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td className="table-image appoint-doctor">
                                  <img
                                    width={28}
                                    height={28}
                                    className="rounded-circle"
                                    src={blogimg6}
                                    alt=""
                                  />
                                  <h2>Dr.Angelica Ramos</h2>
                                </td>
                                <td className="appoint-time text-center">
                                  <h6>Today 5:40 PM</h6>
                                  <span>Typoid Fever</span>
                                </td>
                                <td>
                                  <button className="check-point status-green me-1">
                                    <i className="feather-check">
                                      <FeatherIcon icon="check" />
                                    </i>
                                  </button>
                                  <button className="check-point status-pink ">
                                    <i className="feather-x">
                                      <FeatherIcon icon="x" />
                                    </i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td className="table-image appoint-doctor">
                                  <img
                                    width={28}
                                    height={28}
                                    className="rounded-circle"
                                    src={blogimg12}
                                    alt=""
                                  />
                                  <h2>Dr.Martin Doe</h2>
                                </td>
                                <td className="appoint-time text-center">
                                  <h6>Today 5:40 PM</h6>
                                  <span>Typoid Fever</span>
                                </td>
                                <td>
                                  <button className="check-point status-green me-1">
                                    <i className="feather-check">
                                      <FeatherIcon icon="check" />
                                    </i>
                                  </button>
                                  <button className="check-point status-pink ">
                                    <i className="feather-x">
                                      <FeatherIcon icon="x" />
                                    </i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12  col-xl-4 d-flex">
                    <div className="card wallet-widget">
                      <div className="circle-bar circle-bar2">
                        <div className="circle-graph2" data-percent={66}>
                          {/* <div style={{ width: 140, height: 150 }}>
                            <CircularProgressbar value={66} />
                          </div> */}
                          <RadialBarChart duration={10}/>
                          <b>
                            <img src={timericon} alt="" />
                          </b>
                        </div>
                      </div>
                      <div className="main-limit">
                        <p>Next Appointment in</p>
                        <h4>02h:12m</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-12 col-xl-5 d-flex">
                <div className="card flex-fill comman-shadow">
                  <div className="card-header">
                    <h4 className="card-title d-inline-block">
                      Recent Appointments
                    </h4>{" "}
                    <Link
                      to="/appoinmentlist"
                      className="patient-views float-end"
                    >
                      Show all
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="teaching-card">
                      <ul className="steps-history">
                        <li>08:00</li>
                        <li>09:00</li>
                        <li>10:00</li>
                        <li>11:00</li>
                      </ul>
                      <ul className="activity-feed">
                        <li className="feed-item d-flex align-items-center">
                          <div className="dolor-activity hide-activity">
                            <ul className="doctor-date-list mb-2">
                              <li className="stick-line">
                                <i className="fas fa-circle me-2" />
                                08:00 <span>Benjamin Bruklin</span>
                              </li>
                              <li className="stick-line">
                                <i className="fas fa-circle me-2" />
                                08:00 <span>Andrea Lalema</span>
                              </li>
                              <li className=" dropdown ongoing-blk ">
                                <Link
                                  to="#"
                                  className="dropdown-toggle  active-doctor"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fas fa-circle me-2 active-circles" />
                                  08:00 <span>Andrea Lalema</span>
                                  <span className="ongoing-drapt">
                                    Ongoing{" "}
                                    <i className="feather-chevron-down ms-2">
                                      <FeatherIcon icon="chevron-down ms-2" />
                                    </i>
                                  </span>
                                </Link>
                                <ul className="doctor-sub-list dropdown-menu">
                                  <li className="patient-new-list dropdown-item">
                                    Patient<span>Marie kennedy</span>
                                    <Link
                                      to="#"
                                      className="new-dot status-green"
                                    >
                                      <i className="fas fa-circle me-1 fa-2xs" />
                                      New
                                    </Link>
                                  </li>
                                  <li className="dropdown-item">
                                    Time<span>8:30 - 9:00 (30min)</span>
                                  </li>
                                  <li className="schedule-blk mb-0 pt-2 dropdown-item">
                                    <ul className="nav schedule-time">
                                      <li>
                                        <Link to="#">
                                          <img src={trashicon} alt="" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={profileicon} alt="" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={imgicon} alt="" />
                                        </Link>
                                      </li>
                                    </ul>
                                    <Link className="btn btn-primary appoint-start">
                                      Start Appointment
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="feed-item d-flex align-items-center">
                          <div className="dolor-activity">
                            <ul className="doctor-date-list mb-2">
                              <li>
                                <i className="fas fa-circle me-2" />
                                09:00 <span>Galaviz Lalema</span>
                              </li>
                              <li>
                                <i className="fas fa-circle me-2" />
                                09:20 <span>Benjamin Bruklin</span>
                              </li>
                              <li>
                                <i className="fas fa-circle me-2" />
                                09:40 <span>Jenny Smith</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="feed-item d-flex align-items-center">
                          <div className="dolor-activity">
                            <ul className="doctor-date-list mb-2">
                              <li>
                                <i className="fas fa-circle me-2" />
                                10:00 <span>Cristina Groves</span>
                              </li>
                              <li>
                                <i className="fas fa-circle me-2" />
                                10:30 <span>Benjamin Bruklin</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="feed-item d-flex align-items-center">
                          <div className="dolor-activity">
                            <ul className="doctor-date-list mb-2">
                              <li>
                                <i className="fas fa-circle me-2" />
                                10:00 <span>Cristina Groves</span>
                              </li>
                              <li>
                                <i className="fas fa-circle me-2" />
                                10:30 <span>Benjamin Bruklin</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
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

export default Doctor_Dashboard;
