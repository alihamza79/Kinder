/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { blog, dashboard, doctor, doctorschedule, logout, menuicon04, menuicon06, menuicon08, menuicon09, menuicon10, menuicon11, menuicon12, menuicon14, menuicon15, menuicon16, patients, sidemenu } from './imagepath';
import Scrollbars from "react-custom-scrollbars-2";


const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState("");
  const handleClick = (e, item, item1, item3) => {
    const div = document.querySelector(`#${item}`);
    const ulDiv = document.querySelector(`.${item1}`);
    e?.target?.className ? ulDiv.style.display = 'none' : ulDiv.style.display = 'block'
    e?.target?.className ? div.classList.remove('subdrop') : div.classList.add('subdrop');
  }

  useEffect(() => {
    if (props?.id && props?.id1) {
      const ele = document.getElementById(`${props?.id}`);
      handleClick(ele, props?.id, props?.id1);
    }
  }, [])


  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };
  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };
  return (
    <>
      <div className="sidebar" id="sidebar">
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="95vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu"
              onMouseLeave={expandMenu}
              onMouseOver={expandMenuOpen}
            >
              <ul>
                <li className="menu-title">Main</li>
                <li className="submenu" >
                  <Link to="#" id="menu-item" onClick={(e) => {

                    handleClick(e, "menu-item", "menu-items")
                  }}>
                    <span className="menu-side">
                      <img src={dashboard} alt="" />
                    </span>{" "}
                    <span> Dashboard </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: sidebar === 'Dashboard' ? 'block' : "none" }} className='menu-items'>
                    <li>
                      <Link className={props?.activeClassName === 'admin-dashboard' ? 'active' : ''} to="/admin-dashboard">Admin Dashboard</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'doctor-dashboard' ? 'active' : ''} to="/doctor-dashboard">Doctor Dashboard</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'patient-dashboard' ? 'active' : ''} to="/patient-dashboard">Patient Dashboard</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item1" onClick={(e) => {
                    // setSidebar('Doctors')
                    handleClick(e, "menu-item1", "menu-items1")
                  }}>
                    <span className="menu-side">
                      <img src={doctor} alt="" />
                    </span>{" "}
                    <span> Doctors </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: sidebar === 'Doctors' ? 'block' : 'none' }} className="menu-items1">
                    <li>
                      <Link className={props?.activeClassName === 'doctor-list' ? 'active' : ''} to="/doctorlist">Doctor List</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-doctor' ? 'active' : ''} to="/add-doctor">Add Doctor</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'edit-doctor' ? 'active' : ''} to="/editdoctor">Edit Doctor</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'doctor-profile' ? 'active' : ''} to="/doctorprofile">Doctor Profile</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item2" onClick={(e) => handleClick(e, "menu-item2", "menu-items2")}>
                    <span className="menu-side">
                      <img src={patients} alt="" />
                    </span>{" "}
                    <span>Patients </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items2">
                    <li>
                      <Link className={props?.activeClassName === 'patient-list' ? 'active' : ''} to="/patientslist">Patients List</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-patient' ? 'active' : ''} to="/addpatients">Add Patients</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'edit-patient' ? 'active' : ''} to="/editpatients">Edit Patients</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'patient' ? 'active' : ''} to="/patientsprofile">Patients Profile</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item3" onClick={(e) => handleClick(e, "menu-item3", "menu-items3")}>
                    <span className="menu-side">
                      <img src={menuicon08} alt="" />
                    </span>{" "}
                    <span> Staff </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items3">
                    <li>
                      <Link className={props?.activeClassName === 'staff-list' ? 'active' : ''} to="/stafflist">Staff List</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-staff' ? 'active' : ''} to="/addstaff">Add Staff</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'staff-profile' ? 'active' : ''} to="/staffprofile">Staff Profile</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'leaves' ? 'active' : ''} to="/leave">Leaves</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'holidays' ? 'active' : ''} to="/holiday">Holidays</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'attendance' ? 'active' : ''} to="/attendence">Attendance</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item4" onClick={(e) => handleClick(e, "menu-item4", "menu-items4")}>
                    <span className="menu-side">
                      <img src={menuicon04} alt="" />
                    </span>{" "}
                    <span> Appointments </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items4">
                    <li>
                      <Link className={props?.activeClassName === 'appoinment-list' ? 'active' : ''} to="/appoinmentlist">Appointment List</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-appoinment' ? 'active' : ''} to="/addappoinments">Add Appointment</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'edit-appoinment' ? 'active' : ''} to="/editappoinments">Edit Appointment</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item5" onClick={(e) => handleClick(e, "menu-item5", "menu-items5")}>
                    <span className="menu-side">
                      <img src={doctorschedule} alt="" />
                    </span>{" "}
                    <span> Doctor Schedule </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items5">
                    <li>
                      <Link className={props?.activeClassName === 'shedule-list' ? 'active' : ''} to="/schedulelist">Schedule List</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-shedule' ? 'active' : ''} to="/addschedule">Add Schedule</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'edit-shedule' ? 'active' : ''} to="/editschedule">Edit Schedule</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item6" onClick={(e) => handleClick(e, "menu-item6", "menu-items6")}>
                    <span className="menu-side">
                      <img src={menuicon06} alt="" />
                    </span>{" "}
                    <span> Departments </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items6">
                    <li>
                      <Link className={props?.activeClassName === 'department-list' ? 'active' : ''} to="/departmentlist">Department List</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-department' ? 'active' : ''} to="/add-department">Add Department</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'edit-department' ? 'active' : ''} to="/editdepartment">Edit Department</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item7" onClick={(e) => handleClick(e, "menu-item7", "menu-items7")}>
                    <span className="menu-side">
                      <img src={sidemenu} alt="" />
                    </span>{" "}
                    <span> Accounts </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items7">
                    <li>
                      <Link className={props?.activeClassName === 'invoice-list' ? 'active' : ''} to="/invoicelist">Invoices</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'payments' ? 'active' : ''} to="/payments">Payments</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'expenses' ? 'active' : ''} to="/expenses">Expenses</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'taxes' ? 'active' : ''} to="/taxes">Taxes</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'provident-fund' ? 'active' : ''} to="/providentfund">Provident Fund</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item8" onClick={(e) => handleClick(e, "menu-item8", "menu-items8")}>
                    <span className="menu-side">
                      <img src={menuicon09} alt="" />
                    </span>{" "}
                    <span> Payroll </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items8">
                    <li>
                      <Link className={props?.activeClassName === 'employee-salary' ? 'active' : ''} to="/employeesalary"> Employee Salary </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'employee-payslip' ? 'active' : ''} to="/payslip"> Payslip </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className={props?.activeClassName === 'chat' ? 'active' : ''} to="/chat">
                    <span className="menu-side">
                      <img src={menuicon10} alt="" />
                    </span>{" "}
                    <span>Chat</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item9" onClick={(e) => handleClick(e, "menu-item9", "menu-items9")}>
                    <span className="menu-side">
                      <img src={menuicon11} alt="" />
                    </span>{" "}
                    <span> Calls</span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items9">
                    <li>
                      <Link className={props?.activeClassName === 'voice-call' ? 'active' : ''} to="/voice-call">Voice Call</Link>
                    </li>
                    <li >
                      <Link className={props?.activeClassName === 'video-call' ? 'active' : ''} to="/video-call">Video Call</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'incoming-call' ? 'active' : ''} to="/incoming-call">Incoming Call</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item10" onClick={(e) => handleClick(e, "menu-item10", "menu-items10")}>
                    <span className="menu-side">
                      <img src={menuicon12} alt="" />
                    </span>{" "}
                    <span> Email</span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items10">
                    <li>
                      <Link className={props?.activeClassName === 'compose-mail' ? 'active' : ''} to="/compose-mail">Compose Mail</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'inbox' ? 'active' : ''} to="/inbox">Inbox</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'mail-view' ? 'active' : ''} to="/mail-view">Mail View</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item11" onClick={(e) => handleClick(e, "menu-item11", "menu-items11")}>
                    <span className="menu-side">
                      <img src={blog} alt="" />
                    </span>{" "}
                    <span> Blog</span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items11">
                    <li>
                      <Link className={props?.activeClassName === 'blog-grid' ? 'active' : ''} to="/blogview">Blog</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'blog-details' ? 'active' : ''} to="/blog">
                        Blog View
                      </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-blog' ? 'active' : ''} to="/addblog">Add Blog</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'edit-blog' ? 'active' : ''} to="/editblog">Edit Blog</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className={props?.activeClassName === 'assests' ? 'active' : ''} to="/assests">
                    <i className="fa fa-cube" /> <span>Assets</span>
                  </Link>
                </li>
                <li>
                  <Link className={props?.activeClassName === 'activity' ? 'active' : ''} to="/user-activity">
                    <span className="menu-side">
                      <img src={menuicon14} alt="" />
                    </span>{" "}
                    <span>Activities</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item12" onClick={(e) => handleClick(e, "menu-item12", "menu-items12")}>
                    <i className="fa fa-flag" /> <span> Reports </span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items12">
                    <li>
                      <Link className={props?.activeClassName === 'expenses-report' ? 'active' : ''} to="/expense-Report"> Expense Report </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'invoice-report' ? 'active' : ''} to="/invoice-report"> Invoice Report </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item13" onClick={(e) => handleClick(e, "menu-item13", "menu-items13")}>
                    <span className="menu-side">
                      <img src={menuicon15} alt="" />
                    </span>{" "}
                    <span> Invoice </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items13">
                    <li>
                      <Link className={props?.activeClassName === 'invoice-list' ? 'active' : ''} to="/invoice-list"> Invoices List </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'invoice-grid' ? 'active' : ''} to="/invoice-grid"> Invoices Grid</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-invoice' ? 'active' : ''} to="/add-invoice"> Add Invoices</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'edit-invoice' ? 'active' : ''} to="/edit-invoice"> Edit Invoices</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'invoice-details' ? 'active' : ''} to="/invoice-details"> Invoices Details</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'invoice-settings' ? 'active' : ''} to="/invoice-settings"> Invoices Settings</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/settings">
                    <span className="menu-side">
                      <img src={menuicon16} alt="" />
                    </span>{" "}
                    <span>Settings</span>
                  </Link>
                </li>
                <li className="menu-title">UI Elements</li>
                <li className="submenu">
                  <Link to="#" id="menu-item14" onClick={(e) => handleClick(e, "menu-item14", "menu-items14")}>
                    <i className="fa fa-laptop" /> <span> Components</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items14">
                    <li>
                      <Link className={props?.activeClassName === 'uikit' ? 'active' : ''} to="/ui-kit">UI Kit</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'typography' ? 'active' : ''} to="/typography">Typography</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'tabs' ? 'active' : ''} to="/tab">Tabs</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item15" onClick={(e) => handleClick(e, "menu-item15", "menu-items15")}>
                    <i className="fa fa-edit" /> <span> Forms</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items15">
                    <li>
                      <Link className={props?.activeClassName === 'basic-input' ? 'active' : ''} to="/basic-input">Basic Inputs</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'input-groups' ? 'active' : ''} to="/inputgroup">Input Groups</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'horizontal-form' ? 'active' : ''} to="/horizontal-form">Horizontal Form</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'vertical-form' ? 'active' : ''} to="/vertical-form">Vertical Form</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item16" onClick={(e) => handleClick(e, "menu-item16", "menu-items16")}>
                    <i className="fa fa-table" /> <span> Tables</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items16">
                    <li>
                      <Link className={props?.activeClassName === 'basic-table' ? 'active' : ''} to="/basic-table">Basic Tables</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'data-table' ? 'active' : ''} to="/data-table">Data Table</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className={props?.activeClassName === 'calendar' ? 'active' : ''} to="/calender">
                    <i className="fa fa-calendar" /> <span>Calendar</span>
                  </Link>
                </li>
                <li className="menu-title">Extras</li>
                <li className="submenu">
                  <Link to="#" id="menu-item17" onClick={(e) => handleClick(e, "menu-item17", "menu-items17")}>
                    <i className="fa fa-columns" /> <span>Pages</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items17">
                    <li>
                      <Link to="/login"> Login </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'register' ? 'active' : ''} to="/register"> Register </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'forgotpassword' ? 'active' : ''} to="/forgotpassword"> Forgot Password </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'changepassword' ? 'active' : ''} to="/changepassword"> Change Password </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'lock-screen' ? 'active' : ''} to="/lockscreen"> Lock Screen </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'profile' ? 'active' : ''} to="/profile"> Profile </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'gallery' ? 'active' : ''} to="/gallery"> Gallery </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === '404-error' ? 'active' : ''} to="/error">404 Error </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === '500-error' ? 'active' : ''} to="/server-error">500 Error </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'blank-page' ? 'active' : ''} to="/blankpage"> Blank Page </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" id="menu-item18" onClick={(e) => handleClick(e, "menu-item18", "menu-items18")}>
                    <i className="fa fa-share-alt" /> <span>Multi Level</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items18">
                    <li className="submenu">
                      <Link to="#" id="menu-item19" onClick={(e) => handleClick(e, "menu-item19", "menu-items19")}>
                        <span>Level 1</span> <span className="menu-arrow" />
                      </Link>
                      <ul style={{ display: "none" }} className="menu-items19">
                        <li>
                          <Link to="#">
                            <span>Level 2</span>
                          </Link>
                        </li>
                        <li className="submenu">
                          <Link to="#" id="menu-item20" onClick={(e) => handleClick(e, "menu-item20", "menu-items20")}>
                            {" "}
                            <span> Level 2</span> <span className="menu-arrow" />
                          </Link>
                          <ul style={{ display: "none" }} className="menu-items20">
                            <li>
                              <Link to="#">Level 3</Link>
                            </li>
                            <li>
                              <Link to="#">Level 3</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#">
                            <span>Level 2</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#">
                        <span>Level 1</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="logout-btn">
                <Link to="/login">
                  <span className="menu-side">
                    <img src={logout} alt="" />
                  </span>{" "}
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  )
}
export default Sidebar
