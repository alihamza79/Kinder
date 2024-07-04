/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { useState } from 'react';
import { imagesend, pdficon, pdficon2, pdficon3, pdficon4, plusicon, refreshicon, searchnormal } from '../imagepath';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import { itemRender, onShowSizeChange } from '../Pagination';

const Taxes = () => {
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
            s_no:"1",
            Tax_Name:"VAT",
            Tax_Percentage: "14%",
            Status: "Active",
            FIELD8: ""
        },
        {
            id:2,
            s_no:"2",
            Tax_Name:"GST",
            Tax_Percentage: "30%",
            Status: "IN Active",
            FIELD8: ""
        },
        {
            id:3,
            s_no:"3",
            Tax_Name:"CGST",
            Tax_Percentage: "40%",
            Status: "Active",
            FIELD8: ""
        }
    ]
    const column = [
        {
            title: "s_no",
            dataIndex: "s_no",
            sorter: (a, b) => a.s_no.length - b.s_no.length
        },

        {
            title: "Tax_Name",
            dataIndex: "Tax_Name",
            sorter: (a, b) => a.Tax_Name.length - b.Tax_Name.length
        },
        {
            title: "Tax_Percentage",
            dataIndex: "Tax_Percentage",
            sorter: (a, b) => a.Tax_Percentage.length - b.Tax_Percentage.length

        },
        {
            title: "Status",
            dataIndex: "Status",
            sorter: (a, b) => a.Status.length - b.Status.length,
            render: (text, record) => (
                <div>
                    {text === "Active" && (
                        <span className="custom-badge status-green">
                            {text}
                        </span>
                    )}
                    {text === "IN Active" && (
                        <span className="custom-badge status-pink">
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
                      <Link className="dropdown-item" to="/edit-taxes">
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
            <Header/>
            <Sidebar id='menu-item7' id1='menu-items7' activeClassName='taxes'/>
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
                                                <i className="feather-chevron-right">
                                                    <FeatherIcon icon="chevron-right"/>
                                                    </i>
                                            </li>
                                            <li className="breadcrumb-item active">Taxes</li>
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
                                                            <h3>Taxes</h3>
                                                            <div className="doctor-search-blk">
                                                                <div className="top-nav-search table-search-blk">
                                                                    <form>
                                                                        <input type="text" className="form-control" placeholder="Search here"/>
                                                                     <Link className="btn">
                                                                            <img src={searchnormal} alt="#"/></Link>
                                                                    </form>
                                                                </div>
                                                                <div className="add-group">
                                                                    <Link to="/addtax" className="btn btn-primary add-pluss ms-2">
                                                                        <img src={plusicon} alt="#"/></Link>
                                                                 <Link to="#" className="btn btn-primary doctor-refresh ms-2">
                                                                        <img src={refreshicon} alt="#"/></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto text-end float-end ms-auto download-grp">
                                                     <Link to="#" className=" me-2">
                                                            <img src={pdficon} alt="#"/></Link>
                                                     <Link to="#" className=" me-2">
                                                            <img src={pdficon2} aria-valuetext="#"/></Link>
                                                     <Link to="#" className=" me-2">
                                                            <img src={pdficon3} alt="#"/></Link>
                                                     <Link to="#">
                                                            <img src={pdficon4} alt="#"/></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /Table Header */}
                                            <div className="table-responsive">
                                            <Table className="table table-stripped table-hover datatable thead-light mb-0 "
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
                                         <Link to="chat.html">
                                                <div className="list-item">
                                                    <div className="list-left">
                                                        <span className="avatar">R</span>
                                                    </div>
                                                    <div className="list-body">
                                                        <span className="message-author">Richard Miles
                                                        </span>
                                                        <span className="message-time">12:28 AM</span>
                                                        <div className="clearfix"/>
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <div className="clearfix"/>
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <div className="clearfix"/>
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <div className="clearfix"/>
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                            Catherine Manseau
                                                        </span>
                                                        <span className="message-time">12:28 AM</span>
                                                        <div className="clearfix"/>
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                            Domenic Houston
                                                        </span>
                                                        <span className="message-time">12:28 AM</span>
                                                        <div className="clearfix"/>
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                            Buster Wigton
                                                        </span>
                                                        <span className="message-time">12:28 AM</span>
                                                        <div className="clearfix"/>
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                            Rolland Webber
                                                        </span>
                                                        <span className="message-time">12:28 AM</span>
                                                        <div className="clearfix"/>
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                            Claire Mapes
                                                        </span>
                                                        <span className="message-time">12:28 AM</span>
                                                        <div className="clearfix"/>
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <span className="message-author">Melita Faucher</span>
                                                        <span className="message-time">12:28 AM</span>
                                                        <div className="clearfix"/>
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <span className="message-author">Jeffery Lalor</span>
                                                        <span className="message-time">12:28 AM</span>
                                                        <div className="clearfix"/>
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <div className="clearfix"/>
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                                        <span className="message-author">Tarah Shropshire</span>
                                                        <span className="message-time">12:28 AM</span>
                                                        <div className="clearfix"/>
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                </div>

            </>
        </>
    )
}

export default Taxes
