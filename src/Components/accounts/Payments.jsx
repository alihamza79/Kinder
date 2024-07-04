/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { useState } from 'react';
import { blogimg10, blogimg12, blogimg2, blogimg6, blogimg8, imagesend, pdficon, pdficon2, pdficon3, pdficon4, plusicon, refreshicon, searchnormal } from '../imagepath';
import { DatePicker, Space } from 'antd';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import {onShowSizeChange,itemRender}from  '../Pagination'
import Select from "react-select";

const Payments = () => {
    const [selectedOption, setSelectedOption] = useState(null);

  const [payment, setPayment] = useState([
    { value: 1, label: "Select Payment Status" },
    { value: 2, label: "Paid" },
    { value: 3, label: "Unpaid" },
    { value: 4, label: "Partical Paid" },
  ]);
    const onChange = (date, dateString) => {
    };
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log("selectedRowKeys changed: ", selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };
    const datasource = [
        {
            id:1,
            Invoice_Number: "#INV-0004",
            Img: blogimg2,
            patient: "Andrea Lalema",
            Payment_Type: "Credit card",
            Paid_Date: "01.10.2022",
            Paid_Amount: "$2450",
            Status: "Paid",
            FIELD8: ""
        },
        {
            id:2,
            Invoice_Number: "#INV-0001",
            Img: blogimg6,
            patient: "Smith Bruklin",
            Payment_Type: "Debit card",
            Paid_Date: "02.10.2022",
            Paid_Amount: "$1505",
            Status: "Un paid",
            FIELD8: ""
        },
        {
            id:3,
            Invoice_Number: "#INV-0002",
            Img: blogimg12,
            patient: "Bernardo James",
            Payment_Type: "Pay Pal",
            Paid_Date: "01.10.2022",
            Paid_Amount: "$2000",
            Status: "Paid",
            FIELD8: ""
        },
        {
            id:4,
            Invoice_Number: "#INV-0003",
            Img: blogimg8,
            patient: "Mark Hay Smith",
            Payment_Type: "Credit card",
            Paid_Date: "05.10.2022",
            Paid_Amount: "$1000",
            Status: "patially paid",
            FIELD8: ""
        }, {
            id:5,
            Invoice_Number: "#INV-0004",
            Img: blogimg10,
            patient: " Galaviz Lalema",
            Payment_Type: "Debit card",
            Paid_Date: "01.10.2022",
            Paid_Amount: "$2300",
            Status: "Paid",
            FIELD8: ""
        }, {
            id:6,
            Invoice_Number: "#INV-0003",
            Img: blogimg2,
            patient: "Mark Hay Smith",
            Payment_Type: "Pay Pal",
            Paid_Date: "05.10.2022",
            Paid_Amount: "$4000",
            Status: "patially paid",
            FIELD8: ""
        }, {
            id:7,
            Invoice_Number: "#INV-0005",
            Img: blogimg2,
            patient: "William Stephin",
            Payment_Type: "Pay Pal",
            Paid_Date: "10.10.2022",
            Paid_Amount: "$3000",
            Status: "Un paid",
            FIELD8: ""
        }
    ]
    const column = [
        {
            title: "Invoice_Number",
            dataIndex: "Invoice_Number",
            sorter: (a, b) => a.Invoice_Number.length - b.Invoice_Number.length
        },
        {
            title: "patient",
            dataIndex: "patient",
            sorter: (a, b) => a.patient.length - b.patient.length,
            render: (text, record) => (
                <>
                    <h2 className="profile-image">
                        <Link to="/profile" className="avatar avatar-sm me-2">
                            <img className="avatar-img rounded-circle"
                                src={
                                    record.Img
                                }
                                alt="User Image" />
                        </Link>
                        <Link to="/profile">
                            {
                                record.patient
                            }</Link>
                    </h2>

                </>
            )
        },
        {
            title: "Payment_Type",
            dataIndex: "Payment_Type",
            sorter: (a, b) => a.Payment_Type.length - b.Payment_Type.length
        },
        {
            title: "Paid_Date",
            dataIndex: "Paid_Date",
            sorter: (a, b) => a.Paid_Date.length - b.Paid_Date.length

        }, {
            title: "Paid_Amount",
            dataIndex: "Paid_Amount",
            sorter: (a, b) => a.Paid_Amount.length - b.Paid_Amount.length
        },
        {
            title: "Status",
            dataIndex: "Status",
            sorter: (a, b) => a.Status.length - b.Status.length,
            render: (text, record) => (
                <div>
                    {text === "Paid" && (
                        <span className="custom-badge status-green">
                            {text}
                        </span>
                    )}
                    {text === "Un paid" && (
                        <span className="custom-badge status-pink ">
                            {text}
                        </span>
                    )}
                     {text === "patially paid" && (
                        <span className="custom-badge status-orange ">
                            {text}
                        </span>
                    )}
                </div>
            )
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
                      <Link className="dropdown-item" to="/edit-payment">
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

    ]
    return (
        <>
            <Header />
            <Sidebar id='menu-item7' id1='menu-items7' activeClassName='payments' />
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
                                               <Link to="#">Accounts
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <i className="feather-chevron-right" >
                                                    <FeatherIcon icon="chevron-right"/>
                                                    </i>

                                                </li>
                                            <li className="breadcrumb-item active">Payments
                                            </li>
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
                                                            <h3>Payment List</h3>
                                                            <div className="doctor-search-blk">
                                                                <div className="top-nav-search table-search-blk">
                                                                    <form>
                                                                        <input type="text" className="form-control" placeholder="Search here" />
                                                                       <Link className="btn"><img src={searchnormal} alt="#" /></Link>
                                                                    </form>
                                                                </div>
                                                                <div className="add-group">
                                                                    <Link to="/addpayment" className="btn btn-primary add-pluss ms-2"><img src={plusicon} alt="#" /></Link>
                                                                   <Link to="#" className="btn btn-primary doctor-refresh ms-2"><img src={refreshicon} alt="#" /></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto text-end float-end ms-auto download-grp">
                                                       <Link to="#" className=" me-2"><img src={pdficon} alt="#" /></Link>
                                                       <Link to="#" className=" me-2"><img src={pdficon2} alt="#" /></Link>
                                                       <Link to="#" className=" me-2"><img src={pdficon3} alt="#"  /></Link>
                                                       <Link to="#"><img src={pdficon4} alt="#"  /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /Table Header */}
                                            <div className="staff-search-table">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-12 col-md-6 col-xl-3">
                                                            <div className="form-group local-forms cal-icon">
                                                                <label>From
                                                                </label>
                                                                <DatePicker className="form-control datetimepicker" onChange={onChange}
                                                                    suffixIcon={null}
                                                                // placeholder='24/11/2022'
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6 col-xl-3">
                                                            <div className="form-group local-forms cal-icon">
                                                                <label>To
                                                                </label>
                                                                <DatePicker className="form-control datetimepicker" onChange={onChange}
                                                                    suffixIcon={null}
                                                                // placeholder='24/11/2022'
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6 col-xl-3 ">
                                                            <div className="form-group local-forms">
                                                                <label>Payment Status
                                                                </label>
                                                                <Select
                                menuPortalTarget={document.body}
                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                  defaultValue={selectedOption}
                                  onChange={setSelectedOption}
                                  options={payment}
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
                                                                {/* <select className="form-control select">
                                                                    <option>Select Payment Status</option>
                                                                    <option>Paid</option>
                                                                    <option>Un Paid</option>
                                                                    <option>Patially Paid</option>
                                                                </select> */}
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6 col-xl-3 ms-auto">
                                                            <div className="doctor-submit">
                                                                <button type="submit" className="btn btn-primary submit-list-form me-2">Search</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="table-responsive">
                                                <Table className="table table-stripped table-hover datatable thead-light "
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
                                                    rowKey={
                                                        (record) => record.id
                                                    } />
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
                                                        <span className="message-author">Richard Miles
                                                        </span>
                                                        <span className="message-time">12:28 AM</span>
                                                        <div className="clearfix" />
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                            Claire Mapes
                                                        </span>
                                                        <span className="message-time">12:28 AM</span>
                                                        <div className="clearfix" />
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <span className="message-author">Tarah Shropshire</span>
                                                        <span className="message-time">12:28 AM</span>
                                                        <div className="clearfix" />
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                    <div id="delete_patient" className="modal fade delete-modal" role="dialog">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body text-center">
                                    <img src={imagesend} alt="#"
                                        width={50}
                                        height={46} />
                                    <h3>Are you sure want to delete this ?</h3>
                                    <div className="m-t-20">
                                       <Link to="#" className="btn btn-white me-2" data-bs-dismiss="modal">Close</Link>
                                        <button type="submit" className="btn btn-danger">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        </>
    )
}

export default Payments;
