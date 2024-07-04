import React from 'react'
import Header from '../../Header'
import Sidebar from '../../Sidebar'
import InvoiceGrid_HeaderContent from './InvoiceGrid_HeaderContent'
import { Avatar10, Avatar11, Avatar12, Avatar3, Avatar4, Avatar6, Avatar8, Avatar9 } from '../../imagepath'
import { Link } from 'react-router-dom';

const Invoice_Grid = () => {
    return (
        <>
            <Header />
            <Sidebar id='menu-item13' id1='menu-items13' activeClassName='invoice-grid'/>
            <>
                <div className="page-wrapper">
                    <div className="content">
                        <InvoiceGrid_HeaderContent/>
                        <div className="row">
                            <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                                <div className="card invoices-grid-card w-100">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <Link to="#" className="invoice-grid-link">IN093439#@09</Link>
                                        <div className="dropdown dropdown-action">
                                            <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></Link>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2" />Edit</Link>
                                                <Link className="dropdown-item" to="/invoice-details"><i className="far fa-eye me-2" />View</Link>
                                                <Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2" />Delete</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-middle">
                                        <h2 className="card-middle-avatar">
                                            <Link to="#"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src={Avatar4} alt="User Image" /> Barbara Moore</Link>
                                        </h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <span><i className="far fa-money-bill-alt" /> Amount</span>
                                                <h6 className="mb-0">$1,54,220</h6>
                                            </div>
                                            <div className="col-auto">
                                                <span><i className="far fa-calendar-alt" /> Due Date</span>
                                                <h6 className="mb-0">23 Mar, 2022</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <span className="badge bg-success-dark">Paid</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                                <div className="card invoices-grid-card w-100">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <Link to="#" className="invoice-grid-link">IN093439#@10</Link>
                                        <div className="dropdown dropdown-action">
                                            <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></Link>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2" />Edit</Link>
                                                <Link className="dropdown-item" to="/invoice-details"><i className="far fa-eye me-2" />View</Link>
                                                <Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2" />Delete</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-middle">
                                        <h2 className="card-middle-avatar">
                                            <Link to="#"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src={Avatar6} alt="User Image" /> Karlene Chaidez</Link>
                                        </h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <span><i className="far fa-money-bill-alt" /> Amount</span>
                                                <h6 className="mb-0">$1,222</h6>
                                            </div>
                                            <div className="col-auto">
                                                <span><i className="far fa-calendar-alt" /> Due Date</span>
                                                <h6 className="mb-0">18 Mar 2022</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <span className="badge bg-danger-dark">Overdue</span>
                                            </div>
                                            <div className="col text-end">
                                                <span className="text-danger text-sm">Overdue 14 days</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                                <div className="card invoices-grid-card w-100">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <Link to="#" className="invoice-grid-link">IN093439#@11</Link>
                                        <div className="dropdown dropdown-action">
                                            <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></Link>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2" />Edit</Link>
                                                <Link className="dropdown-item" to="/invoice-details"><i className="far fa-eye me-2" />View</Link>
                                                <Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2" />Delete</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-middle">
                                        <h2 className="card-middle-avatar">
                                            <Link to="#"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src={Avatar8} alt="User Image" /> Russell Copeland</Link>
                                        </h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <span><i className="far fa-money-bill-alt" /> Amount</span>
                                                <h6 className="mb-0">$3,470</h6>
                                            </div>
                                            <div className="col-auto">
                                                <span><i className="far fa-calendar-alt" /> Due Date</span>
                                                <h6 className="mb-0">10 Mar 2022</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <span className="badge bg-secondary-dark">Cancelled</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                                <div className="card invoices-grid-card w-100">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <Link to="#" className="invoice-grid-link">IN093439#@12</Link>
                                        <div className="dropdown dropdown-action">
                                            <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></Link>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2" />Edit</Link>
                                                <Link className="dropdown-item" to="/invoice-details"><i className="far fa-eye me-2" />View</Link>
                                                <Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2" />Delete</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-middle">
                                        <h2 className="card-middle-avatar">
                                            <Link to="#"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src={Avatar10} alt="User Image" /> Joseph Collins</Link>
                                        </h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <span><i className="far fa-money-bill-alt" /> Amount</span>
                                                <h6 className="mb-0">$8,265</h6>
                                            </div>
                                            <div className="col-auto">
                                                <span><i className="far fa-calendar-alt" /> Due Date</span>
                                                <h6 className="mb-0">30 Mar 2022</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <span className="badge bg-primary-dark">Sent</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                                <div className="card invoices-grid-card w-100">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <Link to="#" className="invoice-grid-link">IN093439#@13</Link>
                                        <div className="dropdown dropdown-action">
                                            <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></Link>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2" />Edit</Link>
                                                <Link className="dropdown-item" to="/invoice-details"><i className="far fa-eye me-2" />View</Link>
                                                <Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2" />Delete</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-middle">
                                        <h2 className="card-middle-avatar">
                                            <Link to="#"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src={Avatar11} alt="User Image" /> Jennifer Floyd</Link>
                                        </h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <span><i className="far fa-money-bill-alt" /> Amount</span>
                                                <h6 className="mb-0">$5,200</h6>
                                            </div>
                                            <div className="col-auto">
                                                <span><i className="far fa-calendar-alt" /> Due Date</span>
                                                <h6 className="mb-0">20 Mar 2022</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <span className="badge bg-secondary-dark">Cancelled</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                                <div className="card invoices-grid-card w-100">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <Link to="#" className="invoice-grid-link">IN093439#@14</Link>
                                        <div className="dropdown dropdown-action">
                                            <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></Link>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2" />Edit</Link>
                                                <Link className="dropdown-item" to="/invoice-details"><i className="far fa-eye me-2" />View</Link>
                                                <Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2" />Delete</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-middle">
                                        <h2 className="card-middle-avatar">
                                            <Link to="#"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src={Avatar9} alt="User Image" /> Leatha Bailey</Link>
                                        </h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <span><i className="far fa-money-bill-alt" /> Amount</span>
                                                <h6 className="mb-0">$480</h6>
                                            </div>
                                            <div className="col-auto">
                                                <span><i className="far fa-calendar-alt" /> Due Date</span>
                                                <h6 className="mb-0">15 Mar 2022</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <span className="badge bg-primary-dark">Sent</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                                <div className="card invoices-grid-card w-100">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <Link to="#" className="invoice-grid-link">IN093439#@15</Link>
                                        <div className="dropdown dropdown-action">
                                            <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></Link>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2" />Edit</Link>
                                                <Link className="dropdown-item" to="/invoice-details"><i className="far fa-eye me-2" />View</Link>
                                                <Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2" />Delete</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-middle">
                                        <h2 className="card-middle-avatar">
                                            <Link to="#"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src={Avatar12} alt="User Image" /> Alex Campbell</Link>
                                        </h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <span><i className="far fa-money-bill-alt" /> Amount</span>
                                                <h6 className="mb-0">$1,999</h6>
                                            </div>
                                            <div className="col-auto">
                                                <span><i className="far fa-calendar-alt" /> Due Date</span>
                                                <h6 className="mb-0">08 Mar 2022</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <span className="badge bg-danger-dark">Overdue</span>
                                            </div>
                                            <div className="col text-end">
                                                <span className="text-danger text-sm">Overdue 10 days</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                                <div className="card invoices-grid-card w-100">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <Link to="#" className="invoice-grid-link">IN093439#@016</Link>
                                        <div className="dropdown dropdown-action">
                                            <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></Link>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2" />Edit</Link>
                                                <Link className="dropdown-item" to="/invoice-details"><i className="far fa-eye me-2" />View</Link>
                                                <Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2" />Delete</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-middle">
                                        <h2 className="card-middle-avatar">
                                            <Link to="#"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src={Avatar3} alt="User Image" /> Marie Canales</Link>
                                        </h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <span><i className="far fa-money-bill-alt" /> Amount</span>
                                                <h6 className="mb-0">$2,700</h6>
                                            </div>
                                            <div className="col-auto">
                                                <span><i className="far fa-calendar-alt" /> Due Date</span>
                                                <h6 className="mb-0">18 Mar, 2022</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <span className="badge bg-success-dark">Paid</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="invoice-load-btn">
                                    <Link to="#" className="btn">
                                        <span className="spinner-border text-primary" /> Load more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        </>
    )
}

export default Invoice_Grid
