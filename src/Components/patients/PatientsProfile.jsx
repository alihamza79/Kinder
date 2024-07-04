import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
  cameraicon,
  doctor,
  imagesend,
  menuicon16,
  profilebg,
  profileuser01,
} from "../imagepath";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

const PatientsProfile = () => {
  return (
    <div>
      <>
        <Header />
        <Sidebar id="menu-item2" id1="menu-items2" activeClassName="patient" />
        <>
          <div className="page-wrapper">
            <div className="content">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="#">Patients </Link>
                      </li>
                      <li className="breadcrumb-item">
                        <i className="feather-chevron-right">
                          <FeatherIcon icon="chevron-right" />
                        </i>
                      </li>
                      <li className="breadcrumb-item active">
                        Patient Profile
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
                      <div className="row">
                        <div className="col-md-12">
                          <div className="about-info">
                            <h4>
                              Patients Profile{" "}
                              <span>
                                <Link to="#">
                                  <i className="feather-more-vertical">
                                    <FeatherIcon icon="more-vertical" />
                                  </i>
                                </Link>
                              </span>
                            </h4>
                          </div>
                          <div className="doctor-profile-head">
                            <div className="profile-bg-img">
                              <img src={profilebg} alt="Profile" />
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4">
                                <div className="profile-user-box">
                                  <div className="profile-user-img">
                                    <img src={profileuser01} alt="Profile" />
                                    <div className="form-group doctor-up-files profile-edit-icon mb-0">
                                      <div className="uplod d-flex">
                                        <label className="file-upload profile-upbtn mb-0">
                                          <img src={cameraicon} alt="Profile" />
                                          <input type="file" />
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="names-profiles">
                                    <h4>Smith Bruklin</h4>
                                    <h5>Engineer</h5>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 d-flex align-items-center">
                                <div className="follow-group">
                                  <div className="doctor-follows">
                                    <h5>Followers</h5>
                                    <h4>850</h4>
                                  </div>
                                  <div className="doctor-follows">
                                    <h5>Following</h5>
                                    <h4>18K</h4>
                                  </div>
                                  <div className="doctor-follows">
                                    <h5>Posts</h5>
                                    <h4>250</h4>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 d-flex align-items-center">
                                <div className="follow-btn-group">
                                  <button
                                    type="submit"
                                    className="btn btn-info follow-btns"
                                  >
                                    Follow
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-info message-btns"
                                  >
                                    Message
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="doctor-personals-grp">
                        <div className="card">
                          <div className="card-body">
                            <div className="heading-detail ">
                              <h4 className="mb-3">About me</h4>
                              <p>
                                Hello I am Smith Bruklin a Gynaecologist in
                                Sanjivni Hospital Surat. I love to work with all
                                my hospital staff and seniour doctors.
                              </p>
                            </div>
                            <div className="about-me-list">
                              <ul className="list-space">
                                <li>
                                  <h4>Gender</h4>
                                  <span>Male</span>
                                </li>
                                <li>
                                  <h4>Operation Done</h4>
                                  <span>30+</span>
                                </li>
                                <li>
                                  <h4>Designation</h4>
                                  <span>Engineer</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="doctor-personals-grp">
                        <div className="card">
                          <div className="card-body">
                            <div className="heading-detail">
                              <h4>Skills:</h4>
                            </div>
                            <div className="skill-blk">
                              <div className="skill-statistics">
                                <div className="skills-head">
                                  <h5>Heart Beat</h5>
                                  <p>45%</p>
                                </div>
                                <div className="progress mb-0">
                                  <div
                                    className="progress-bar bg-operations"
                                    role="progressbar"
                                    style={{ width: "45%" }}
                                    aria-valuenow={45}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <div className="skill-statistics">
                                <div className="skills-head">
                                  <h5>Haemoglobin</h5>
                                  <p>85%</p>
                                </div>
                                <div className="progress mb-0">
                                  <div
                                    className="progress-bar bg-haemoglobin"
                                    role="progressbar"
                                    style={{ width: "85%" }}
                                    aria-valuenow={85}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <div className="skill-statistics">
                                <div className="skills-head">
                                  <h5>Blood Pressure </h5>
                                  <p>65%</p>
                                </div>
                                <div className="progress mb-0">
                                  <div
                                    className="progress-bar bg-statistics"
                                    role="progressbar"
                                    style={{ width: "65%" }}
                                    aria-valuenow={65}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <div className="skill-statistics">
                                <div className="skills-head">
                                  <h5>Sugar </h5>
                                  <p>90%</p>
                                </div>
                                <div className="progress mb-0">
                                  <div
                                    className="progress-bar bg-visit"
                                    role="progressbar"
                                    style={{ width: "90%" }}
                                    aria-valuenow={90}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="doctor-personals-grp">
                        <div className="card">
                          <div className="card-body">
                            <div className="tab-content-set">
                              <ul className="nav">
                                <li>
                                  <Link
                                    to="/patientsprofile"
                                    className="active"
                                  >
                                    <span className="set-about-icon me-2">
                                      <img src={doctor} alt="" />
                                    </span>
                                    About me
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/patient-settings">
                                    <span className="set-about-icon me-2">
                                      <img src={menuicon16} alt="" />
                                    </span>
                                    Settings
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="personal-list-out">
                              <div className="row">
                                <div className="col-xl-3 col-md-6">
                                  <div className="detail-personal">
                                    <h2>Full Name</h2>
                                    <h3>Smith Bruklin</h3>
                                  </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                  <div className="detail-personal">
                                    <h2>Mobile </h2>
                                    <h3>264-625-2583</h3>
                                  </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                  <div className="detail-personal">
                                    <h2>Email</h2>
                                    <h3>smith@email.com</h3>
                                  </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                  <div className="detail-personal">
                                    <h2>Location</h2>
                                    <h3>USA</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="hello-park">
                              <p>
                                Completed my graduation in Gynaecologist
                                Medicine from the well known and renowned
                                institution of India – SARDAR PATEL MEDICAL
                                COLLEGE, BARODA in 2000-01, which was affiliated
                                to M.S. University. I ranker in University exams
                                from the same university from 1996-01.
                              </p>
                              <p>
                                Worked as Professor and Head of the department ;
                                Community medicine Department at Sterline
                                Hospital, Rajkot, Gujarat from 2003-2015
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header">
                            <h4 className="card-title ">Medical History</h4>
                          </div>
                          <div className="card-body p-0 table-dash">
                            <div className="table-responsive">
                              <table className="table mb-0 border-0 datatable custom-table patient-profile-table">
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
                                    <th>Date</th>
                                    <th>Doctor</th>
                                    <th>Treatment</th>
                                    <th>Charges ($)</th>
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
                                    <td>29/09/2022 </td>
                                    <td>Dr.Jenny Smith</td>
                                    <td>Check up</td>
                                    <td>$ 60</td>
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
                                          <Link
                                            className="dropdown-item"
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_patient"
                                          >
                                            <i className="fa fa-trash-alt m-r-5"></i>{" "}
                                            Delete
                                          </Link>
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
                                    <td>19/09/2022 </td>
                                    <td>Andrea Lalema</td>
                                    <td>Blood Test </td>
                                    <td>$ 50</td>
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
                                          <Link
                                            className="dropdown-item"
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_patient"
                                          >
                                            <i className="fa fa-trash-alt m-r-5"></i>{" "}
                                            Delete
                                          </Link>
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
                                    <td>20/09/2022 </td>
                                    <td>Dr.William Stephin</td>
                                    <td>Blood Pressure</td>
                                    <td>$ 30</td>
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
                                          <Link
                                            className="dropdown-item"
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_patient"
                                          >
                                            <i className="fa fa-trash-alt m-r-5"></i>{" "}
                                            Delete
                                          </Link>
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
                            <span className="message-author">
                              Richard Miles{" "}
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
                      <Link to="chat.html">
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
                      <Link to="chat.html">
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
                      <Link to="chat.html">
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
                      <Link to="chat.html">
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
                      <Link to="chat.html">
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
                      <Link to="chat.html">
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
                      <Link to="chat.html">
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
                      <Link to="chat.html">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">C</span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">
                              {" "}
                              Claire Mapes{" "}
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
                      <Link to="chat.html">
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
                      <Link to="chat.html">
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
                      <Link to="chat.html">
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
                      <Link to="chat.html">
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
                  <Link to="chat.html">See all messages</Link>
                </div>
              </div>
            </div>
          </div>
          <div
            id="delete_patient"
            className="modal fade delete-modal"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <img src={imagesend} alt="" width={50} height={46} />
                  <h3>Are you sure want to delete this ?</h3>
                  <div className="m-t-20">
                    {" "}
                    <Link
                      to="#"
                      className="btn btn-white me-2"
                      data-bs-dismiss="modal"
                    >
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
        </>
      </>
    </div>
  );
};

export default PatientsProfile;
