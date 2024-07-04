/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {Table} from "antd";
import { onShowSizeChange, itemRender } from "../Pagination";
import {
  imagesend,
  pdficon,
  pdficon3,
  pdficon2,
  pdficon4,
  plusicon,
  refreshicon,
  searchnormal,
} from "../imagepath";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const Holiday = () => {
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
      FIELD1: "",
      Title: "New Year",
      HolidayDate: "01-01-2022",
      Day: "Sunday",
      Description: "Common Holiday",
      FIELD6: "",
    },
    {
      id:2,
      FIELD1: "",
      Title: "Pongal",
      HolidayDate: "14-01-2022",
      Day: "Monday",
      Description: "Religious Holiday",
      FIELD6: "",
    },
    {
      id: 3,
      FIELD1: "",
      Title: "Pongal Holiday",
      HolidayDate: "15-01-2022",
      Day: "Monday",
      Description: "Religious Holiday",
      FIELD6: "",
    },
    {
      id: 4,
      FIELD1: "",
      Title: "Tamil New Year",
      HolidayDate: "14-04-2022",
      Day: "Tuesday",
      Description: "Religious Holiday",
      FIELD6: "",
    },
    {
      id:5,
      FIELD1: "",
      Title: "Good Friday",
      HolidayDate: "05-01-2022",
      Day: "Friday",
      Description: "Religious Holiday",
      FIELD6: "",
    },
    {
      id:6,
      FIELD1: "",
      Title: "May Day",
      HolidayDate: "15-01-2022",
      Day: "Wednesday",
      Description: "Common Holiday",
      FIELD6: "",
    },
    {
      id:7,
      FIELD1: "",
      Title: "Ramzan",
      HolidayDate: "10-08-2022",
      Day: "Monday",
      Description: "Religious Holiday",
      FIELD6: "",
    },
    {
      id:8,
      FIELD1: "",
      Title: "Independence day",
      HolidayDate: "26-01-2022",
      Day: "Friday",
      Description: "Common Holiday",
      FIELD6: "",
    },
  ];

  const columns = [
    {
      title: "Title",
      dataIndex: "Title",
      sorter: (a, b) => a.Title.length - b.Title.length,
    },
    {
      title: "HolidayDate",
      dataIndex: "HolidayDate",
      sorter: (a, b) => a.HolidayDate.length - b.HolidayDate.length,
    },
    {
      title: "Day",
      dataIndex: "Day",
      sorter: (a, b) => a.Day.length - b.Day.length,
    },
    {
      title: "Description",
      dataIndex: "Description",
      sorter: (a, b) => a.Description.length - b.Description.length,
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
                <Link className="dropdown-item" to="">
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
    <div>
      |<Header />
      <Sidebar id="menu-item3" id1="menu-items3" activeClassName="holidays" />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/stafflist">Staffs </Link>
                  </li>
                  <li className="breadcrumb-item">
                  <i className="feather-chevron-right">
                    <FeatherIcon icon="chevron-right" />
                  </i>
                </li>
                  <li className="breadcrumb-item active">Holidays</li>
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
                          <h3>Holidays</h3>
                          <div className="doctor-search-blk">
                            <div className="top-nav-search table-search-blk">
                              <form>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search here"
                                />
                                <Link className="btn">
                                  <img src={searchnormal} alt="#" />
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
                    {/* <table className="table border-0 custom-table comman-table datatable mb-0">
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
                    <th>Title</th>
                    <th>Holiday Date</th>
                    <th>Day</th>
                    <th>Description</th>
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
                    <td>New Year</td>
                    <td>01.01.2022 </td>
                    <td>Sunday</td>
                    <td>Common Holiday</td>
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
                          <Link className="dropdown-item" to="#">
                            <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                            Edit
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_patient"
                          >
                            <i className="fa fa-trash-alt m-r-5" /> Delete
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
                    <td>Pongal</td>
                    <td>14.01.2022 </td>
                    <td>Monday</td>
                    <td>Religious Holiday</td>
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
                          <Link className="dropdown-item" to="#">
                            <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                            Edit
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_patient"
                          >
                            <i className="fa fa-trash-alt m-r-5" /> Delete
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
                    <td>Pongal Holiday </td>
                    <td>15.01.2022 </td>
                    <td>Monday</td>
                    <td>Religious Holiday</td>
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
                          <Link className="dropdown-item" to="#">
                            <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                            Edit
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_patient"
                          >
                            <i className="fa fa-trash-alt m-r-5" /> Delete
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
                    <td>Tamil New Year </td>
                    <td>14.04.2022 </td>
                    <td>Tuesday</td>
                    <td>Religious Holiday</td>
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
                          <Link className="dropdown-item" to="#">
                            <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                            Edit
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_patient"
                          >
                            <i className="fa fa-trash-alt m-r-5" /> Delete
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
                    <td>Good Friday </td>
                    <td>05.01.2022 </td>
                    <td>Friday</td>
                    <td>Religious Holiday</td>
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
                          <Link className="dropdown-item" to="#">
                            <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                            Edit
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_patient"
                          >
                            <i className="fa fa-trash-alt m-r-5" /> Delete
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
                    <td>May Day </td>
                    <td>15.01.2022 </td>
                    <td>Wednesday</td>
                    <td>Common Holiday</td>
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
                          <Link className="dropdown-item" to="#">
                            <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                            Edit
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_patient"
                          >
                            <i className="fa fa-trash-alt m-r-5" /> Delete
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
                    <td>Ramzan</td>
                    <td>10.08.2022 </td>
                    <td>Monday</td>
                    <td>Religious Holiday</td>
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
                          <Link className="dropdown-item" to="#">
                            <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                            Edit
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_patient"
                          >
                            <i className="fa fa-trash-alt m-r-5" /> Delete
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
                    <td>Independence day </td>
                    <td>26.01.2022 </td>
                    <td>Friday</td>
                    <td>Common Holiday</td>
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
                          <Link className="dropdown-item" to="#">
                            <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                            Edit
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_patient"
                          >
                            <i className="fa fa-trash-alt m-r-5" /> Delete
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table> */}
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
                  <Link to="/chat">
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
                  <Link to="/chat">
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
                  <Link to="/chat">
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
                  <Link to="/chat">
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
                  <Link to="/chat">
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
                  <Link to="/chat">
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
                  <Link to="/chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">B</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Buster Wigton </span>
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
                  <Link to="/chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">R</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Rolland Webber </span>
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
                  <Link to="/chat">
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
                  <Link to="/chat">
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
                  <Link to="/chat">
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
                  <Link to="/chat">
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
                  <Link to="/chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">T</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Tarah Shropshire</span>
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
              <Link to="/chat">See all messages</Link>
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
  );
};

export default Holiday;
