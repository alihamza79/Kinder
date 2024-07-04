/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
  blogimg10,
  blogimg12,
  blogimg2,
  blogimg5,
  blogimg6,
  blogimg7,
  blogimg8,
  imagesend,
  pdficon,
  pdficon2,
  pdficon3,
  pdficon4,
  plusicon,
  refreshicon,
  searchnormal,
} from "../imagepath";
import { Table } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DatePicker, Space } from "antd";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";
import { itemRender, onShowSizeChange } from "../Pagination";
import { Dropdown} from 'react-bootstrap';
const Expenses = () => {
  const [dropdownValue, setDropdownValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [employee, setEmployee] = useState([
    { value: 1, label: "Select Employee Name" },
    { value: 2, label: "Bernardo James" },
    { value: 3, label: "Galaviz Lalema" },
    { value: 4, label: "Tarah Williams" },
  ]);
  const [payment, setPayment] = useState([
    { value: 1, label: "Select Paid by" },
    { value: 2, label: "PayPal" },
    { value: 3, label: "Cheque" },
    { value: 4, label: "Debit Card" },
  ]);
  const onChange = (date, dateString) => {};
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const handleDropdownChange = (value) => {
    setDropdownValue(value);
  };
  const datasource = [
    {
      id:1,
      Item: "Anaesthetic machine",
      Purchase_From: "Biomedical Equipment Inc",
      Img: blogimg2,
      Purchase_by: "Andrea Lalema",
      Paid_by: "Paypal",
      Date: "04.10.2022",
      Amount: "$1000",
      Status: "Approved",
      FIELD8: "",
    },
    {
      id:2,
      Item: "Aspiration Pump",
      Purchase_From: "Medi Pro Service",
      Img: blogimg6,
      Purchase_by: "Smith Bruklin",
      Paid_by: "Cheque",
      Date: "08.10.2022",
      Amount: "$2000",
      Status: "Rejected",
      FIELD8: "",
    },
    {
      id:3,
      Item: "Anaesthetic machine",
      Purchase_From: "Biomedical Equipment Inc",
      Img: blogimg12,
      Purchase_by: "Bernardo James",
      Paid_by: "Paypal",
      Date: "04.10.2022",
      Amount: "$1000",
      Status: "Pending",
      FIELD8: "",
    },
    {
      id:4,
      Item: "Anaesthetic machine",
      Purchase_From: "Biomedical Equipment Inc",
      Img: blogimg8,
      Purchase_by: "Mark Hay Smith",
      Paid_by: "Paypal",
      Date: "04.10.2022",
      Amount: "$1000",
      Status: "New",
      FIELD8: "",
    },
    {
      id:5,
      Item: "Medical Expenses",
      Purchase_From: "Hi-life Medicals",
      Img: blogimg10,
      Purchase_by: " Galaviz Lalema",
      Paid_by: "Debit card",
      Date: "03.10.2022",
      Amount: "$1600",
      Status: "Approved",
      FIELD8: "",
    },
    {
      id:6,
      Item: "Anaesthetic machine",
      Purchase_From: "Biomedical Equipment Inc",
      Img: blogimg2,
      Purchase_by: "Mark Hay Smith",
      Paid_by: "Paypal",
      Date: "04.10.2022",
      Amount: "$1000",
      Status: "Approved",
      FIELD8: "",
    },
    {
      id:7,
      Item: "Aspiration Pump",
      Purchase_From: "Medi Pro Service",
      Img: blogimg5,
      Purchase_by: "William Stephin",
      Paid_by: "Cheque",
      Date: "06.10.2022",
      Amount: "$4000",
      Status: "Rejected",
      FIELD8: "",
    },
    {
      id:8,
      Item: "Medical Expenses",
      Purchase_From: "Hi-life Medicals",
      Img: blogimg7,
      Purchase_by: "William Stephin",
      Paid_by: "Paypal",
      Date: "04.10.2022",
      Amount: "$1000",
      Status: "Approved",
      FIELD8: "",
    },
  ];
  const column = [
    {
      title: "Item",
      dataIndex: "Item",
      sorter: (a, b) => a.Item.length - b.Item.length,
    },
    {
      title: "Purchase_From",
      dataIndex: "Purchase_From",
      sorter: (a, b) => a.Purchase_From.length - b.Purchase_From.length,
    },
    {
      title: "Purchase_by",
      dataIndex: "Purchase_by",
      sorter: (a, b) => a.Purchase_by.length - b.Purchase_by.length,
      render: (text, record) => (
        <>
          <h2 className="profile-image">
            <Link to="/profile" className="avatar avatar-sm me-2">
              <img
                className="avatar-img rounded-circle"
                src={record.Img}
                alt="User Image"
              />
            </Link>
            <Link to="/profile">{record.Purchase_by}</Link>
          </h2>
        </>
      ),
    },
    {
      title: "Paid_by",
      dataIndex: "Paid_by",
      sorter: (a, b) => a.Paid_by.length - b.Paid_by.length,
    },
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a, b) => a.Date.length - b.Date.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },

    {
      title: 'Status',
      dataIndex: 'Status',
      // key: 'status',
      render: (text, record) => (
        <div>
          <Dropdown onSelect={handleDropdownChange}>
            {text === "Approved" && (
              <span className="custom-badge status-green">
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
              <span className="custom-badge status-orange">
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
              <span className="custom-badge status-pink">
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
              <span className="custom-badge status-purple">
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
            {text === "Rejected" && (
              <span className="custom-badge status-pink ">
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
    // {
    //   title: "Status",
    //   dataIndex: "Status",
    //   sorter: (a, b) => a.Status.length - b.Status.length,
    //   render: (text, record) => (
    //     <>
    //       <Link to="#">{record.Status}</Link>
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
                  <Link className="dropdown-item" to="/edit-expenses">
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
      <Header />
      <Sidebar id="menu-item7" id1="menu-items7" activeClassName="expenses" />
      <>
        <div>
          <div className="page-wrapper">
            <div className="content">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                       <Link to="#">Accounts</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <i className="feather-chevron-right">
                          <FeatherIcon icon="chevron-right" />
                        </i>
                      </li>
                      <li className="breadcrumb-item active">Expenses</li>
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
                              <h3>Expenses List</h3>
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
                                    to="/addexpense"
                                    className="btn btn-primary add-pluss ms-2"
                                  >
                                    <img src={plusicon} alt="#" />
                                  </Link>
                                 <Link
                                    to="#"
                                    className="btn btn-primary doctor-refresh ms-2"
                                  >
                                    <img src={refreshicon} alt="#" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto text-end float-end ms-auto download-grp">
                           <Link to="#" className=" me-2">
                              <img src={pdficon} alt="#" />
                            </Link>
                           <Link to="#" className=" me-2">
                              <img src={pdficon2} alt="#" />
                            </Link>
                           <Link to="#" className=" me-2">
                              <img src={pdficon3} alt="#" />
                            </Link>
                           <Link to="#">
                              <img src={pdficon4} alt="#" />
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
                                <label>Item Name</label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                              <div className="form-group local-forms">
                                <label>Purchased by</label>
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
                            <div className="col-12 col-md-6 col-xl-4">
                              <div className="form-group local-forms">
                                <label>Paid by</label>
                                <Select
                                  defaultValue={selectedOption}
                                  onChange={setSelectedOption}
                                  options={payment}
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
                                <label>From</label>
                                <DatePicker
                                  className="form-control datetimepicker"
                                  onChange={onChange}
                                  suffixIcon={null}
                                  // placeholder='24/11/2022'
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                              <div className="form-group local-forms cal-icon">
                                <label>To</label>
                                <DatePicker
                                  className="form-control datetimepicker"
                                  onChange={onChange}
                                  suffixIcon={null}
                                  // placeholder='24/11/2022'
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
                          className="table table-stripped table-hover datatable thead-light "
                          pagination={{
                              total: datasource.length,
                              showTotal: (total, range) =>
                                  `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                              // showSizeChanger: true,
                              onShowSizeChange: onShowSizeChange,
                              itemRender: itemRender,
                          }}
                          columns={column}
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
                            <span className="message-author">
                              Richard Miles
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
                              Catherine Manseau
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
                              Domenic Houston
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
                              Buster Wigton
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
                              Rolland Webber
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
                            <span className="message-author">Claire Mapes</span>
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
                     <Link to="#">
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
                  <img src={imagesend} alt="#" width={50} height={46} />
                  <h3>Are you sure want to delete this ?</h3>
                  <div className="m-t-20">
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
    </>
  );
};

export default Expenses;
