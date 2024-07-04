import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import { Link } from 'react-router-dom'

const Edit_Taxes = () => {
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
                                        <li className="breadcrumb-item"><Link to="/taxes">Accounts </Link></li>
                                        <li className="breadcrumb-item"><i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                        </li>
                                        <li className="breadcrumb-item active">Edit Taxes</li>
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
                                                        <h4>Edit Taxes</h4>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Tax Name <span className="login-danger">*</span></label>
                                                        <input className="form-control" type="text" defaultValue="VAT" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Tax Percentage <span className="login-danger">*</span></label>
                                                        <input className="form-control" type="text" defaultValue="20%" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Tax Method <span className="login-danger">*</span></label>
                                                        <select className="form-control select">
                                                            <option>Select Tax Method</option>
                                                            <option>Active</option>
                                                            <option>In Active</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group select-gender">
                                                        <label className="gen-label">Status <span className="login-danger">*</span></label>
                                                        <div className="form-check-inline">
                                                            <label className="form-check-label">
                                                                <input type="radio" name="gender" className="form-check-input" defaultChecked />Active
                                                            </label>
                                                        </div>
                                                        <div className="form-check-inline">
                                                            <label className="form-check-label">
                                                                <input type="radio" name="gender" className="form-check-input" />In Active
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12">
                                                    <div className="form-group local-forms">
                                                        <label>Other Information  <span className="login-danger">*</span></label>
                                                        <textarea className="form-control" rows={3} cols={30} defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="doctor-submit text-end">
                                                        <button type="submit" className="btn btn-primary submit-form me-2">Create Tax</button>
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

export default Edit_Taxes
