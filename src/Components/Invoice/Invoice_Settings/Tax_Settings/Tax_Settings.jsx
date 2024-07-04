import React from 'react'
import Header from '../../../Header'
import Sidebar from '../../../Sidebar'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const Tax_Settings = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <>
                <div className="page-wrapper">
                    {/* Page Content */}
                    <div className="content container-fluid">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Invoice </Link></li>
                                        <li className="breadcrumb-item"><i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                        </li>
                                        <li className="breadcrumb-item active">Tax Settings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="row mt-4">
                            <div className="col-xl-3 col-md-4">
                                <div className="widget settings-menu setting-list-menu">
                                    <ul className='mb-0'>
                                        <li className="nav-item">
                                            <Link to="/invoice-settings" className="nav-link ">
                                                <i className="fa fa-cog me-2" /> <span>General Settings</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="#" className="nav-link active">
                                                <i className="fa fa-bookmark me-2" /> <span>Tax Settings</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/bank-settings" className="nav-link">
                                                <i className="fas fa-university me-2" /> <span>Bank Settings</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-9 col-md-8">
                                <div className="card invoices-settings-card">
                                    <div className="card-header px-3">
                                        <h5 className="card-title">Tax Settings</h5>
                                    </div>
                                    <div className="card-body">
                                        {/* Form */}
                                        <form action="#" className="invoices-settings-form">
                                            <div className="row align-items-center form-group">
                                                <label htmlFor="name" className="col-sm-3 col-form-label input-label">Enable Tax</label>
                                                <div className="col-sm-9">
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="invoice" />
                                                        <span className="checkmark" /> Check to enable tax on invoice
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row align-items-center form-group">
                                                <label htmlFor="email" className="col-sm-3 col-form-label input-label">Tax Percentage</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row align-items-center form-group">
                                                <label htmlFor="phone" className="col-sm-3 col-form-label input-label">GSTIN Number</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="invoice-setting-btn text-end">
                                                <button type="submit" className="btn cancel-btn me-2">Cancel</button>
                                                <button type="submit" className="btn btn-primary">Save Changes</button>
                                            </div>
                                        </form>
                                        {/* /Form */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Page Content */}
                </div>

            </>
        </>
    )
}

export default Tax_Settings
