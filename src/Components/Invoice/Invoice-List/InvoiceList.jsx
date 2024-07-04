/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Table } from "antd";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link } from "react-router-dom";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import { itemRender, onShowSizeChange } from "../../Pagination";
import { invoice_list_data } from "../../GlobalData/TableData";
import Invoice_HeaderContent from "./Invoice_HeaderContent";
import { imagesend } from "../../imagepath";

const InvoiceList = () => {

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
            title: "Invoice Id",
            dataIndex: "Invoice_Id",
            sorter: (a, b) => a.Invoice_Id.length - b.Invoice_Id.length,
            render: (text, record) => (
              <>
                  <Link to="/invoice-details">{record.Invoice_Id}</Link>
              </>
            ),
        },
        {
            title: "Category",
            dataIndex: "Category",
            sorter: (a, b) => a.Category.length - b.Category.length
        },
        {
            title: "Created on",
            dataIndex: "Created_on",
            sorter: (a, b) => a.Created_on.length - b.Created_on.length
        },
        {
            title: "Invoice to",
            dataIndex: "Invoice_to",
            render: (text, record) => (
                <>
                    <h2 className="profile-image">
                        <Link to="#" className="avatar avatar-sm me-2">
                            <img
                                className="avatar-img rounded-circle"
                                src={record.Img}
                                alt="#"
                            />
                        </Link>
                        <Link to="#">{record.Invoice_to}</Link>
                    </h2>
                </>
            )
        },
        {
            title: "Amount",
            dataIndex: "Amount",
            sorter: (a, b) => a.Amount.length - b.Amount.length,
            render: (text, record) => (
                <div className="text-primary">
                    {record.Amount}
                </div>
            )
        },
        {
            title: "Due data",
            dataIndex: "Due_data",
            sorter: (a, b) => a.Due_data.length - b.Due_data.length
        },
        {
            title: "Status",
            dataIndex: "status",
            sorter: (a, b) => a.status1.length - b.status1.length,
            render: (text, record) => (
                <div>
                    {text === "Paid" && (
                        <span className="badge bg-success-light">
                            {text}
                        </span>
                    )}
                    {text === "Overdue" && (
                        <span className="badge bg-danger-light">
                            {text}
                        </span>
                    )}
                    {text === "Cancelled" && (
                        <span className="badge bg-primary-light">
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
                    <Link className="dropdown-item" to="/edit-invoice">
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
      <Sidebar
        id="menu-item13"
        id1="menu-items13"
        activeClassName="invoice-list"
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
                     <Link to="/invoice-list">Invoice </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">Invoice List</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <Invoice_HeaderContent />
            <div className="row">
              <div className="col-sm-12">
                <div className="card card-table">
                  <div className="card-body p-4">
                    <div className="table-responsive">
                      <Table
                        pagination={{
                          total: invoice_list_data.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          // showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        columns={columns}
                        dataSource={invoice_list_data}
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
                  <img src={imagesend} alt="#" width={50} height={46} />
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

export default InvoiceList;
