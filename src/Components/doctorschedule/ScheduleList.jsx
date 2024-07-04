/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { pagination, Table } from "antd";
import { onShowSizeChange, itemRender } from "../Pagination";
import {
  blogimg10,
  blogimg12,
  blogimg2,
  blogimg4,
  blogimg6,
  blogimg8,
  imagesend,
  pdficon,
  pdficon2,
  pdficon3,
  pdficon4,
  plusicon,
  refreshicon,
  searchnormal,

} from "../../Components/imagepath";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
// import { Dropdown, Badge } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
const ScheduleList = () => {
  const [dropdownValue, setDropdownValue] = useState('');

  // const handleDropdownChange = (value) => {
  //   setDropdownValue(value);
  // };

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const datasource = [
    {
      id:1,
      Img: blogimg2,
      DoctorName: "Dr.Andrea Lalema",
      Department: "Cardiology",
      AvailableDays: "Mon - Sun",
      AvailableTime: "09:00 AM - 06:00 PM",
      Status: "Active",
      FIELD7: "",
    },
    {
      id:2,

      Img: blogimg4,

      DoctorName: "Dr.Smith Bruklin",
      Department: "Urology",
      AvailableDays: "Mon,Tue,Sat,Sun",
      AvailableTime: "09:00 AM - 04:00 PM",
      Status: "Active",
      FIELD7: "",
    },
    {
      id:3,
      Img: blogimg6,

      DoctorName: "Dr.William Stephin",
      Department: "Radiology",
      AvailableDays: "Mon,Fri",
      AvailableTime: "09:00 AM - 06:00 PM",
      Status: "Active",
      FIELD7: "",
    },
    {
      id:4,
      Img: blogimg12,

      DoctorName: "Dr.Bernardo James",
      Department: "Dentist",
      AvailableDays: "Mon - fri",
      AvailableTime: "010:00 AM - 05:00 PM",
      Status: "In Active",
      FIELD7: "",
    },
    {
      id:5,
      Img: blogimg10,
      DoctorName: "Dr.Cristina Groves",
      Department: "Gynocolgy",
      AvailableDays: "Mon - Sun",
      AvailableTime: "09:00 AM - 06:00 PM",
      Status: "In Active",
      FIELD7: " ",
    },
    {
      id:6,
      Img: blogimg8,
      DoctorName: "Mark Hay Smith",
      Department: "Gynocolgy",
      AvailableDays: "Sat, Sun",
      AvailableTime: "09:00 AM - 12:00 PM",
      Status: "Active",
      FIELD7: "",
    },
    {
      id:7,
      Img: blogimg2,
      DoctorName: "Dr.Andrea Lalema",
      Department: "Otolaryngology",
      AvailableDays: "Mon - Sun",
      AvailableTime: "09:00 AM - 06:00 PM",
      Status: "Active",
      FIELD7: "",
    },
    {
      id:8,
      Img: blogimg4,
      DoctorName: "Dr.Smith Bruklin",
      Department: "Urology",
      AvailableDays: "Mon - wed",
      AvailableTime: "11:00 AM - 09:00 PM",
      Status: "In Active",
      FIELD7: " ",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "DoctorName",
      render: (text, record) => (
        <>
          <h2 className="profile-image">
            <Link to="#" className="avatar avatar-sm me-2">
              <img
                className="avatar-img rounded-circle"
                src={record.Img}
                alt="rounded circle"
              />
            </Link>
            <Link to="#">{record.DoctorName}</Link>
          </h2>
        </>
      ),
    },
    {
      title: "Department",
      dataIndex: "Department",
      sorter: (a, b) => a.Department.length - b.Department.length,
    },
    {
      title: "AvailableDays",
      dataIndex: "AvailableDays",
      sorter: (a, b) => a.AvailableDays.length - b.AvailableDays.length,
    },
    {
      title: "AvailableTime",
      dataIndex: "AvailableTime",
      sorter: (a, b) => a.AvailableTime.length - b.AvailableTime.length,
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      // key: 'status',
      render: (text, record) => (
        <div>
          {text === "Active" && (
            <span className="custom-badge status-green">
              {text}
            </span>
          )}
          {text === "In Active" && (
            <span className="custom-badge status-pink">
              {text}
            </span>
          )}
        </div>
        // <Dropdown onSelect={handleDropdownChange}>
        //   <Dropdown.Toggle variant="secondary">
        //     {record.status} <Badge bg="danger">Badge</Badge>
        //   </Dropdown.Toggle>

        //   <Dropdown.Menu>
        //     <Dropdown.Item eventKey="In Progress">In Progress</Dropdown.Item>
        //     <Dropdown.Item eventKey="Completed">Completed</Dropdown.Item>
        //     <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
        //   </Dropdown.Menu>
        // </Dropdown>
      ),
    },
    // {
    //   title: "Status",
    //   dataIndex: "Status",
    //   sorter: (a, b) => a.Status.length - b.Status.length,
    //   render: (text, record) => (
    //     <>
    //       <Link to="#">{record.Mobile}</Link>
    //     </>
    //   ),
    // },
    {
      title: "",
      dataIndex: "FIELD8",
      render: (text, record) => (
        <>
          <div className="text-end">
            <div className="dropdown dropdown-action">
              <Link
                to="#"
                className="action-icon dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v" />
              </Link>
              <div className="dropdown-menu dropdown-menu-end">
                <Link className="dropdown-item" to="/editschedule">
                  <i className="far fa-edit me-2" />
                  Edit
                </Link>
                <Link
                  className="dropdown-item"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_patient"
                >
                  <i className="fa fa-trash-alt m-r-5"></i> Delete
                </Link>
              </div>
            </div>
          </div>
        </>
      ),
    },
    //{
    //     title:"Email",
    //     dataIndex: "Email",
    //         sorter: (a, b) => a.Email.length - b.Email.length
    // }, {
    //     title:"JoiningDate",
    //     dataIndex: "JoiningDate",
    //         sorter: (a, b) => a.JoiningDate.length - b.JoiningDate.length
    // },
  ];
  return (
    <div>
      <>
        <Header />
        <Sidebar id='menu-item5' id1='menu-items5' activeClassName='shedule-list' />
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Doctor Shedule </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">Schedule List</li>
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
                            <h3>Schedule List</h3>
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
                                  to="/addschedule"
                                  className="btn btn-primary add-pluss ms-2"
                                >
                                  <img src={plusicon}alt="#" />
                                </Link>
                                <Link
                                  to="#"
                                  className="btn btn-primary doctor-refresh ms-2"
                                >
                                  <img src={refreshicon}alt="#" />
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
                    <div className="table-responsive">
                      <Table
                        pagination={{
                          total: datasource.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          // showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        columns={columns}
                        dataSource={datasource}
                        rowSelection={rowSelection}
                        rowKey={(record) => record.id}
                      />
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
          <div
            id="delete_patient"
            className="modal fade delete-modal"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <img src={imagesend} alt="#" width={50} height={46} />
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
        </div>
      </>
    </div>
  );
};

export default ScheduleList;
