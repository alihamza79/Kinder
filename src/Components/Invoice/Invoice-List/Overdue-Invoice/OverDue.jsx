/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'antd'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import Overdue_HeaderContent from './Overdue_HeaderContent'
import Header from '../../../Header'
import Sidebar from '../../../Sidebar'
import { invoice_list_data } from '../../../GlobalData/TableData'
import { itemRender, onShowSizeChange } from '../../../Pagination'

const OverDue = () => {

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
                        <Link to="EmployeeSalary.html" className="avatar avatar-sm me-2">
                            <img
                                className="avatar-img rounded-circle"
                                src={record.Img}
                                alt="User Image"
                            />
                        </Link>
                        <Link to="EmployeeSalary.html">{record.Invoice_to}</Link>
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
            dataIndex: "status2",
            sorter: (a, b) => a.status2.length - b.status2.length,
            render: (text, record) => (
                <div className="badge bg-danger-light">
                    {record.status2}
                </div>
            )
        },
        {
            title: "Action",
            dataIndex: "",
            render: (text, record) => (
                <div className="text-end">
                    <Link className="btn btn-sm btn-white text-success me-2" to="/edit-invoice">
                        <i className="far fa-edit me-1" />Edit
                    </Link>
                    <Link className="btn btn-sm btn-white text-danger" to="#">
                        <i className="far fa-trash-alt me-1" />Delete
                    </Link>
                </div>
            )
        },
    ]
    return (
        <>
            <Header />
            <Sidebar />
            <>
                <div className="page-wrapper">
                    <div className="content">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Invoice </Link></li>
                                        <li className="breadcrumb-item"><i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right"/>
                                            </i>
                                        </li>
                                        <li className="breadcrumb-item active">Invoice Overdue</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <Overdue_HeaderContent />
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
                </div>

            </>
        </>
    )
}

export default OverDue
