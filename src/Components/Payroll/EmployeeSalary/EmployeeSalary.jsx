/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React from "react";
import { pagination, Table } from "antd";
import Sidebar from "../../Sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { onShowSizeChange, itemRender } from "../../Pagination";
import { employeedata } from "../../GlobalData/TableData";
import { Dropdown} from 'react-bootstrap';
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
import { DatePicker, Space } from "antd";
import Header from "../../Header";
import Select from "react-select";
const EmployeeSalary = () => {

  const [dropdownValue, setDropdownValue] = useState('');

  const handleDropdownChange = (value) => {
    setDropdownValue(value);
  };
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { value: 1, label: "Select Role" },
    { value: 2, label: "Accountant" },
    { value: 3, label: "Nurse" },
    { value: 4, label: "Pharmacist" },
  ]);
  const [leave, setLeave] = useState([
    { value: 1, label: "Select Leave Status" },
    { value: 2, label: "Pending" },
    { value: 3, label: "Approved" },
    { value: 4, label: "Rejected" },
  ]);
  const onChange = (date, dateString) => { };

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
      title: "  Employee ID",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "EmployeeName",
      dataIndex: "EmployeeName",
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
            <Link to="#">{record.EmployeeName}</Link>
          </h2>
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a, b) => a.Email.length - b.Email.length,
    },
    {
      title: "JoiningDate",
      dataIndex: "JoiningDate",
      sorter: (a, b) => a.JoiningDate.length - b.JoiningDate.length,
    },
    {
      title: "Role",
      dataIndex: "Role",
      render: (text, record) => (
        <div>
          <Dropdown onSelect={handleDropdownChange}>

            <div className="custom-badge status-purple">{record.Role}
              <Dropdown.Toggle variant="">
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="New">Nurse</Dropdown.Item>
                <Dropdown.Item eventKey="Pending">Accountant</Dropdown.Item>
                <Dropdown.Item eventKey="Approved">Pharmacist</Dropdown.Item>
              </Dropdown.Menu>
            </div>
          </Dropdown>
        </div>
      ),
      sorter: (a, b) => a.Role.length - b.Role.length,
    },
    {
      title: "Salary",
      dataIndex: "Salary",
      sorter: (a, b) => a.Salary.length - b.Salary.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.Status.length - b.Status.length,
      render: (text, record) => (
        <div className="btn btn-sm btn-primary">{record.status}</div>
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
                <Link className="dropdown-item" to="/editsalary">
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
        id="menu-item8"
        id1="menu-items8"
        activeClassName="employee-salary"
      />
      <>
        <div className="main-wrapper">
          <div className="page-wrapper">
            <div className="content">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="#S">Payroll </Link>
                      </li>
                      <li className="breadcrumb-item">
                        <i className="fa fa-angle-right" />
                      </li>
                      <li className="breadcrumb-item active">Empoyee Salary</li>
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
                              <h3>Empoyee Salary</h3>
                              <div className="doctor-search-blk">
                                <div className="top-nav-search table-search-blk">
                                  <form>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Search here"
                                    />
                                    <Link className="btn">
                                      <img src={searchnormal}alt="#"/>
                                    </Link>
                                  </form>
                                </div>
                                <div className="add-group">
                                  <Link
                                    to="/addsalary"
                                    className="btn btn-primary add-pluss ms-2"
                                  >
                                    <img src={plusicon}alt="#"/>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="btn btn-primary doctor-refresh ms-2"
                                  >
                                    <img src={refreshicon}alt="#"/>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto text-end float-end ms-auto download-grp">
                            <Link to="#" className=" me-2">
                              <img src={pdficon}alt="#"/>
                            </Link>
                            <Link to="#" className=" me-2">
                              <img src={pdficon2}alt="#"/>
                            </Link>
                            <Link to="#" className=" me-2">
                              <img src={pdficon3}alt="#"/>
                            </Link>
                            <Link to="#">
                              <img src={pdficon4}alt="#"/>
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
                                <label>Role </label>
                                <Select
                                  defaultValue={selectedOption}
                                  onChange={setSelectedOption}
                                  options={options}
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
                                <label>Leave Status </label>
                                <Select
                                  defaultValue={selectedOption}
                                  onChange={setSelectedOption}
                                  options={leave}
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
                                <label>From </label>
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
                                <label>To </label>
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
                          pagination={{
                            total: employeedata.length,
                            showTotal: (total, range) =>
                              `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                            // showSizeChanger: true,
                            onShowSizeChange: onShowSizeChange,
                            itemRender: itemRender,
                          }}
                          columns={columns}
                          dataSource={employeedata}
                          rowSelection={rowSelection}
                          rowKey={(record) => record.id}
                        />
                      </div>
                      {/* /Table Header */}
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
                    <img src={imagesend}alt="#"width={50} height={46} />
                    <h3>Are you sure want to delete this ?</h3>
                    <div className="m-t-20">
                      {" "}
                      <Link
                        to="#"
                        className="btn btn-white"
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
          <div
            id="delete_patient"
            className="modal fade delete-modal"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <img src={imagesend}alt="#"width={50} height={46} />
                  <h3>Are you sure want to delete this ?</h3>
                  <div className="m-t-20">
                    {" "}
                    <Link
                      to="#"
                      className="btn btn-white"
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
export default EmployeeSalary;
