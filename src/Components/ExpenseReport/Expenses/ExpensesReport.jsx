/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import { Link } from "react-router-dom";

import {
    imagesend,
  pdficon,
  pdficon2,
  pdficon3,
  pdficon4,
  plusicon,
  refreshicon,
  searchnormal,
} from "../../imagepath";
import { onShowSizeChange, itemRender } from "../../Pagination";
import { Table } from "antd";
import { useState } from "react";
import { ExpenseReportData } from "../../GlobalData/TableData";
import { DatePicker} from "antd";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";
import { Dropdown} from 'react-bootstrap';

const ExpensesReport = () => {
  const [dropdownValue, setDropdownValue] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const handleDropdownChange = (value) => {
      setDropdownValue(value);
    };
  // eslint-disable-next-line no-unused-vars
  const [patient, setPatient] = useState([
    { value: 1, label: "Select Purchase by" },
    { value: 2, label: "Bernardo James" },
    { value: 3, label: "Galaviz Lalema" },
    { value: 4, label: "Tarah Williams" },
  ]);
  // eslint-disable-next-line no-unused-vars
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
  const columns = [
    {
      title: "Item",
      dataIndex: "Item",
      sorter: (a, b) => a.Item.length - b.Item.length,
    },
    {
      title: "Purchase Form",
      dataIndex: "Purchase_Form",
      sorter: (a, b) => a.Purchase_Form.length - b.Purchase_Form.length,
    },
    {
      title: "Purchase by",
      dataIndex: "Purchase_by",
      render: (text, record) => (
        <>
          <h2 className="profile-image">
            <Link to="#" className="avatar avatar-sm me-2">
              <img
                className="avatar-img rounded-circle"
                src={record.Img}
                alt="User Image"
              />
            </Link>
            <Link to="#">{record.Purchase_by}</Link>
          </h2>
        </>
      ),
    },
    {
      title: "Paid by",
      dataIndex: "Paid_by",
      sorter: (a, b) => a.Paid_by.length - b.Paid_by.length,
    },
    {
      title: "Data",
      dataIndex: "Data",
      sorter: (a, b) => a.Data.length - b.Data.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: 'Status',
      dataIndex: 'status',
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
    //   dataIndex: "status",
    //   sorter: (a, b) => a.status.length - b.status.length,
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
  ];
  return (
    <>
      <Header />
      <Sidebar
        id="menu-item12"
        id1="menu-items12"
        activeClassName="expenses-report"
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
                      <Link to="/expense-Report">Reports </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">Expense Report</li>
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
                            <h3>Expense Report</h3>
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
                                  to="/add-expense"
                                  className="btn btn-primary add-pluss ms-2"
                                >
                                  <img src={plusicon} alt="#" />
                                </Link>
                                <Link
                                  to="to"
                                  className="btn btn-primary doctor-refresh ms-2"
                                >
                                  <img src={refreshicon} alt="#"/>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto text-end float-end ms-auto download-grp">
                          <Link to="to" className=" me-2">
                            <img src={pdficon} alt="#" />
                          </Link>
                          <Link to="to" className=" me-2">
                            <img src={pdficon2} alt="#"/>
                          </Link>
                          <Link to="to" className=" me-2">
                            <img src={pdficon3} alt="#" />
                          </Link>
                          <Link to="to">
                            <img src={pdficon4} alt="#"/>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* /Table Header */}
                    <div className="staff-search-table">
                      <form>
                        <div className="row">
                          <div className="col-12 col-md-6 col-xl-3">
                            <div className="form-group local-forms">
                              <label>Purchased by </label>
                              <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={patient}  menuPortalTarget={document.body}
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
                          <div className="col-12 col-md-6 col-xl-3">
                            <div className="form-group local-forms cal-icon">
                              <label>From </label>
                              <DatePicker
                                className="form-control datetimepicker"
                                onChange={onChange}
                                suffixIcon={null}
                                // placeholder='24/11/2022'
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-3">
                            <div className="form-group local-forms cal-icon">
                              <label>To </label>
                              <DatePicker
                                className="form-control datetimepicker"
                                onChange={onChange}
                                suffixIcon={null}
                                // placeholder='24/11/2022'
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-3">
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
                          total: ExpenseReportData.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          // showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        columns={columns}
                        dataSource={ExpenseReportData}
                        rowSelection={rowSelection}
                        rowKey={(record) => record.id}
                      />
                    </div>
                  </div>
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

export default ExpensesReport;
