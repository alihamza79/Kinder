/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import { DatePicker} from "antd";
import { Link } from 'react-router-dom';
const Edit_Assets = () => {

    const onChange = (date, dateString) => {
        // console.log(date, dateString);
    };
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
                                        <li className="breadcrumb-item"><Link to="#">Assets </Link></li>
                                        <li className="breadcrumb-item"><i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                        </li>
                                        <li className="breadcrumb-item active">Edit Assets</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-heading">
                                                        <h4>Edit Assets</h4>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Asset Name <span className="login-danger">*</span></label>
                                                        <input className="form-control" type="text" defaultValue="Williams Bruk" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Asset Id <span className="login-danger">*</span></label>
                                                        <input className="form-control" type="text" defaultValue="#AST-0001" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms cal-icon">
                                                        <label>Purchase Date  <span className="login-danger">*</span></label>
                                                        <DatePicker className="form-control datetimepicker" onChange={onChange}
                                                            suffixIcon={null}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Purchase From <span className="login-danger">*</span></label>
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Manufacturer <span className="login-danger">*</span></label>
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Model <span className="login-danger">*</span></label>
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Serial Number <span className="login-danger">*</span></label>
                                                        <input className="form-control" type="text" defaultValue={3455} />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Supplier <span className="login-danger">*</span></label>
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Condition <span className="login-danger">*</span></label>
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Warranty<span className="login-danger">*</span></label>
                                                        <input className="form-control" type="text" defaultValue="4year" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Value<span className="login-danger">*</span></label>
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Asset User <span className="login-danger">*</span></label>
                                                        <select className="form-control select">
                                                            <option>Select Asset User</option>
                                                            <option>Williams Bruk</option>
                                                            <option>Galaviz Lalema</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12">
                                                    <div className="form-group local-forms">
                                                        <label>Description  <span className="login-danger">*</span></label>
                                                        <textarea className="form-control" rows={3} cols={30} defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Status <span className="login-danger">*</span></label>
                                                        <select className="form-control select">
                                                            <option>Select Status</option>
                                                            <option>Pending </option>
                                                            <option>Approved</option>
                                                            <option>Returned</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="doctor-submit text-end">
                                                        <button type="submit" className="btn btn-primary submit-form me-2">Submit</button>
                                                        <button type="submit" className="btn btn-primary cancel-form">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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

export default Edit_Assets
