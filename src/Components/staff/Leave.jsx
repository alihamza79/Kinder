/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { DatePicker} from "antd";
import { onShowSizeChange, itemRender } from "../Pagination";
import {Table} from "antd";
import { imagesend,pdficon,pdficon2,pdficon3,pdficon4,plusicon,refreshicon,searchnormal} from "../imagepath";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Dropdown} from 'react-bootstrap';

const Leave = () => {
  const [dropdownValue, setDropdownValue] = useState('');

  const handleDropdownChange = (value) => {
    setDropdownValue(value);
  };
  const onChange = (date, dateString) => {
    // console.log(date, dateString);
  };
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { value: 1, label: "Select LeaveType" },
    { value: 2, label: "Medical Leave" },
    { value: 3, label: "Casual Leave" },
    { value: 3, label: "Loss of Pay" },
  ]);
  const [leave, setLeave] = useState([
    { value: 1, label: "Leave Status" },
    { value: 2, label: "Pending" },
    { value: 3, label: "Approved" },
    { value: 3, label: "Declined" },
  ]);
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
      EmployeeName: "Andrea Lalema",
      LeaveType: "Medical Leave",
      From: "02.10.2022",
      To: "04.10.2022",
      Noofdays: "2 Days",
      Reason: "Not Feeling well",
      Status: "Approved",
      FIELD9: "",
    },
    {
      id:2,
      EmployeeName: "Smith Bruklin",
      LeaveType: "Casual Leave",
      From: "04.10.2022",
      To: "06.10.2022",
      Noofdays: "2 Days",
      Reason: "Going to Vacation",
      Status: "Pending",
      FIELD9: "",
    },
    {
      id:3,
      EmployeeName: "William Stephin",
      LeaveType: "Casual Leave",
      From: "02.10.2022",
      To: "04.10.2022",
      Noofdays: "2 Days",
      Reason: "Family Function",
      Status: "Declined",
      FIELD9: "",
    },
    {
      id:5,
      EmployeeName: "Cristina Groves",
      LeaveType: "Medical Leave",
      From: "02.10.2022",
      To: "04.10.2022",
      Noofdays: "2 Days",
      Reason: "Family Function",
      Status: "New",
      FIELD9: "",
    },
    {
      id:6,
      EmployeeName: "Mark Hay Smith",
      LeaveType: "Medical Leave",
      From: "02.10.2022",
      To: "04.10.2022",
      Noofdays: "2 Days",
      Reason: "Not Feeling well",
      Status: "Approved",
      FIELD9: "",
    },
    {
      id:7,
      EmployeeName: "Andrea Lalema",
      LeaveType: "Medical Leave",
      From: "02.10.2022",
      To: "04.10.2022",
      Noofdays: "2 Days",
      Reason: "Family Function",
      Status: "Approved",
      FIELD9: "",
    },
    {
      id:8,
      EmployeeName: "Smith Bruklin",
      LeaveType: "Casual Leave",
      From: "02.10.2022",
      To: "04.10.2022",
      Noofdays: "2 Days",
      Reason: "Not Feeling well",
      Status: "Approved",
      FIELD9: "",
    },
  ];

  const columns = [
    {
      title: "EmployeeName",
      dataIndex: "EmployeeName",
      sorter: (a, b) => a.EmployeeName.length - b.EmployeeName.length,
    },
    {
      title: "LeaveType",
      dataIndex: "LeaveType",
      sorter: (a, b) => a.LeaveType.length - b.LeaveType.length,
    },
    {
      title: "From",
      dataIndex: "From",
      sorter: (a, b) => a.From.length - b.From.length,
    },
    {
      title: "To",
      dataIndex: "To",
      sorter: (a, b) => a.To.length - b.To.length,
    },
    {
      title: "Noofdays",
      dataIndex: "Noofdays",
      sorter: (a, b) => a.Noofdays.length - b.Noofdays.length,
    },

    {
      title: "Reason",
      dataIndex: "Reason",
      sorter: (a, b) => a.Reason.length - b.Reason.length,
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      // key: 'status',
      render: (text, record) => (
        <div>
          <Dropdown onSelect={handleDropdownChange}>
            {text === "Approved" && (
              <span className="custom1-badge status-green ">
                {text}
                <Dropdown.Toggle variant="">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="New">New</Dropdown.Item>
                  <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                  <Dropdown.Item eventKey="Approved">Approved</Dropdown.Item>
                  <Dropdown.Item eventKey="Declined" >Declined</Dropdown.Item>
                </Dropdown.Menu>
              </span>
            )}
          </Dropdown>
          <Dropdown onSelect={handleDropdownChange}>
            {text === "Pending" && (
              <span className="custom1-badge status-orange ">
                {text}
                <Dropdown.Toggle variant="">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="New">New</Dropdown.Item>
                  <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                  <Dropdown.Item eventKey="Approved">Approved</Dropdown.Item>
                  <Dropdown.Item eventKey="Declined" >Declined</Dropdown.Item>
                </Dropdown.Menu>
              </span>
            )}
          </Dropdown>
          <Dropdown onSelect={handleDropdownChange}>
            {text === "Declined" && (
              <span className="custom1-badge status-pink ">
                {text}
                <Dropdown.Toggle variant="">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="New">New</Dropdown.Item>
                  <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                  <Dropdown.Item eventKey="Approved">Approved</Dropdown.Item>
                  <Dropdown.Item eventKey="Declined" >Declined</Dropdown.Item>
                </Dropdown.Menu>
              </span>
            )}
          </Dropdown>
          <Dropdown onSelect={handleDropdownChange}>
            {text === "New" && (
              <span className="custom1-badge status-purple ">
                {text}
                <Dropdown.Toggle variant="">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="New">New</Dropdown.Item>
                  <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                  <Dropdown.Item eventKey="Approved">Approved</Dropdown.Item>
                  <Dropdown.Item eventKey="Declined" >Declined</Dropdown.Item>
                </Dropdown.Menu>
              </span>
            )}
          </Dropdown>
        </div>
      ),
    },
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
                <Link className="dropdown-item" to="/editleave">
                  <i className="far fa-edit me-2" />
                  Edit
                </Link>
                <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_patient">
                  <i className="fa fa-trash-alt m-r-5"></i> Delete</Link>
              </div>
            </div>
          </div>
        </>
      ),
    },

  ];

  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Sidebar id='menu-item3' id1='menu-items3' activeClassName='leaves' />
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/add-leave">Staffs </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">Leave Request</li>
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
                            <h3>Leave Request</h3>
                            <div className="doctor-search-blk">
                              <div className="top-nav-search table-search-blk">
                                <form>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search here"
                                  />
                                  <Link className="btn">
                                    <img src={searchnormal} alt="#"/>
                                  </Link>
                                </form>
                              </div>
                              <div className="add-group">
                                <Link
                                  to="/add-leave"
                                  className="btn btn-primary add-pluss ms-2"
                                >
                                  <img src={plusicon} alt="#"/>
                                </Link>
                                <Link
                                  to="#"
                                  className="btn btn-primary doctor-refresh ms-2"
                                >
                                  <img src={refreshicon} alt="#"/>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto text-end float-end ms-auto download-grp">
                          <Link to="#" className=" me-2">
                            <img src={pdficon} alt="#"/>
                          </Link>
                          <Link to="#" className=" me-2">
                            <img src={pdficon2} alt="#"/>
                          </Link>
                          <Link to="#" className=" me-2">
                            <img src={pdficon3} alt="#"/>
                          </Link>
                          <Link to="#">
                            <img src={pdficon4} alt="#"/>
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
                              <label>Leave Type </label>
                              <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                menuPortalTarget={document.body}
                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <label>Leave Status </label>
                              <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={leave}
                                menuPortalTarget={document.body}
                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
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
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="doctor-submit">
                              <button
                                type="submit"
                                className="btn btn-primary submit-list-form me-2"
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
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
                      <table className="table border-0 custom-table comman-table datatable mb-0">
                        <tbody></tbody>
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
        <div
          id="delete_patient"
          className="modal fade delete-modal"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={imagesend} alt="#"width={50} height={46} />
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
  );
};

export default Leave;
