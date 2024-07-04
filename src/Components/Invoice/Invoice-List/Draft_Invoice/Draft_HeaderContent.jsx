/* eslint-disable no-unused-vars */
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd';

import { invoice_icon1, invoice_icon2, invoice_icon3, invoice_icon4, invoiceicon5 } from '../../../imagepath'

const Draft_HeaderContent = () => {


    const onChange = (date, dateString) => {
    };
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [menu, setMenu] = useState(false)
    const [date, setDate] = useState(new Date());

    const toggleSetShow = (value) => {
        setShow(value)
        setShow1(false)
        setShow2(false)
        setShow3(false)
    }
    const toggleSetShowone = (value) => {
        setShow(false)
        setShow1(value)
        setShow2(false)
        setShow3(false)
    }
    const toggleSetShowtwo = (value) => {
        setShow(false)
        setShow1(false)
        setShow2(value)
        setShow3(false)
    }
    const toggleSetShowthree = (value) => {
        setShow(false)
        setShow1(false)
        setShow2(false)
        setShow3(value)
    }
    return (
        <div>
            <div className="row ">
                <div className="col-lg-12">
                    <div className="py-3 d-flex justify-content-end">
                        <Link to="/invoice-list" className="invoices-links active">
                            <i data-feather="list">
                                <FeatherIcon icon="list" />
                            </i>
                        </Link>
                        <Link to="/invoice-grid" className="invoices-links">
                            <i data-feather="grid">
                                <FeatherIcon icon="grid" />
                            </i>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Report Filter */}
            <div className="card report-card">
                <div className="card-body pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="app-listing">
                                <li>
                                    <div className="multipleSelection">
                                        <div className="selectBox" onClick={() => toggleSetShow(!show)} >
                                            <p className="mb-0"><i className="fas fa-user-plus me-1 select-icon"></i> Select User</p>
                                            <span className="down-icon"><i className="fas fa-chevron-down"></i></span>
                                        </div>
                                        <div id="checkBoxes" style={{ display: show ? "block" : "none" }}>
                                            <form action="#">
                                                <p className="checkbox-title">Customer Search</p>
                                                <div className="form-custom">
                                                    <input type="text" className="form-control bg-grey" placeholder="Enter Customer Name" />
                                                </div>
                                                <div className="selectBox-cont">
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark"></span>  Brian Johnson
                                                    </label>
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark"></span>  Russell Copeland
                                                    </label>
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark"></span>  Greg Lynch
                                                    </label>
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark"></span> John Blair
                                                    </label>
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark"></span> Barbara Moore
                                                    </label>
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark"></span> Hendry Evan
                                                    </label>
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark"></span> Richard Miles
                                                    </label>
                                                </div>
                                                <button type="submit" className="btn w-100 btn-primary">Apply</button>
                                                <button type="reset" className="btn w-100 btn-grey">Reset</button>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="multipleSelection">
                                        <div className="selectBox" onClick={() => toggleSetShowone(!show1)}>
                                            <p className="mb-0"><i className="fas fa-calendar me-1 select-icon"></i> Select Date</p>
                                            <span className="down-icon"><i className="fas fa-chevron-down"></i></span>
                                        </div>
                                        <div id="checkBoxes" style={{ display: show1 ? "block" : "none" }}>
                                            <form action="#">
                                                <p className="checkbox-title">Date Filter</p>
                                                <div className="selectBox-cont selectBox-cont-one h-auto">
                                                    <div className="date-picker">
                                                        <div className="form-custom cal-icon">
                                                            <DatePicker className="form-control datetimepicker" onChange={onChange}
                                                                suffixIcon={null}
                                                                placeholder='24/11/2022'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="date-picker pe-0">
                                                        <div className="form-custom cal-icon">
                                                            <DatePicker className="form-control datetimepicker" onChange={onChange}
                                                                suffixIcon={null}
                                                                placeholder='24/11/2022'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="date-list">
                                                        <ul>
                                                            <li><Link to="#" className="btn date-btn">Today</Link ></li>
                                                            <li><Link to="#" className="btn date-btn">Yesterday</Link ></li>
                                                            <li><Link to="#" className="btn date-btn">Last 7 days</Link ></li>
                                                            <li><Link to="#" className="btn date-btn">This month</Link ></li>
                                                            <li><Link to="#" className="btn date-btn">Last month</Link ></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="multipleSelection">
                                        <div className="selectBox" onClick={() => toggleSetShowtwo(!show2)}>
                                            <p className="mb-0"><i className="fas fa-book-open me-1 select-icon"></i> Select Status</p>
                                            <span className="down-icon"><i className="fas fa-chevron-down"></i></span>
                                        </div>
                                        <div id="checkBoxes" style={{ display: show2 ? "block" : "none" }}>
                                            <form action="#">
                                                <p className="checkbox-title">By Status</p>
                                                <div className="selectBox-cont">
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="name" defaultChecked />
                                                        <span className="checkmark"></span> All Invoices
                                                    </label>
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="name" />
                                                        <span className="checkmark"></span> Paid
                                                    </label>
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="name" />
                                                        <span className="checkmark"></span> Overdue
                                                    </label>
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="name" />
                                                        <span className="checkmark"></span> Draft
                                                    </label>
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="name" />
                                                        <span className="checkmark"></span> Recurring
                                                    </label>
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="name" />
                                                        <span className="checkmark"></span> Cancelled
                                                    </label>
                                                </div>
                                                <button type="submit" className="btn w-100 btn-primary">Apply</button>
                                                <button type="reset" className="btn w-100 btn-grey">Reset</button>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="multipleSelection">
                                        <div className="selectBox" onClick={() => toggleSetShowthree(!show3)}>
                                            <p className="mb-0"><i className="fas fa-bookmark me-1 select-icon"></i> By Category</p>
                                            <span className="down-icon"><i className="fas fa-chevron-down"></i></span>
                                        </div>
                                        <div id="checkBoxes" style={{ display: show3 ? "block" : "none" }}>
                                            <form action="#">
                                                <p className="checkbox-title">Category</p>
                                                <div className="form-custom">
                                                    <input type="text" className="form-control bg-grey" placeholder="Enter Category Name" />
                                                </div>
                                                <div className="selectBox-cont">
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="category" />
                                                        <span className="checkmark"></span> Advertising
                                                    </label>
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="category" />
                                                        <span className="checkmark"></span> Food
                                                    </label>
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="category" />
                                                        <span className="checkmark"></span> Marketing
                                                    </label>
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="category" />
                                                        <span className="checkmark"></span> Repairs
                                                    </label>
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="category" />
                                                        <span className="checkmark"></span> Software
                                                    </label>
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="category" />
                                                        <span className="checkmark"></span> Stationary
                                                    </label>
                                                    <label className="custom_check w-100">
                                                        <input type="checkbox" name="category" />
                                                        <span className="checkmark"></span> Travel
                                                    </label>
                                                </div>
                                                <button type="submit" className="btn w-100 btn-primary">Apply</button>
                                                <button type="reset" className="btn w-100 btn-grey">Reset</button>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="report-btn">
                                        <Link to="#" className="btn">
                                            <img src={invoiceicon5} alt="" className="me-2" /> Generate report
                                        </Link >
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card invoices-tabs-card">
                <div className="card-body card-body pt-0 pb-0">
                    <div className="invoices-main-tabs">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-8">
                                <div className="invoices-tabs">
                                    <ul>
                                        <li><Link to="/invoice-list">All Invoice</Link></li>
                                        <li><Link to="/paid-invoice">Paid</Link></li>
                                        <li><Link to="/overdue-invoice">Overdue</Link></li>
                                        <li><Link to="/draft-invoice" className="active">Draft</Link></li>
                                        <li><Link to="/recurring-invoice">Recurring</Link></li>
                                        <li><Link to="/cancelled-invoice">Cancelled</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="invoices-settings-btn">
                                    <Link to="/invoice-settings" className="invoices-settings-icon">
                                        <i data-feather="settings">
                                            <FeatherIcon icon="settings" />
                                        </i>
                                    </Link>
                                    <Link to="/add-invoice" className="btn">
                                        <i data-feather="plus-circle">
                                            <FeatherIcon icon="plus-circle" />
                                        </i> New Invoice
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card inovices-card">
                        <div className="card-body">
                            <div className="inovices-widget-header">
                                <span className="inovices-widget-icon">
                                    <img src={invoice_icon1} alt />
                                </span>
                                <div className="inovices-dash-count">
                                    <div className="inovices-amount">$8,78,797</div>
                                </div>
                            </div>
                            <p className="inovices-all">All Invoices <span>50</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card inovices-card">
                        <div className="card-body">
                            <div className="inovices-widget-header">
                                <span className="inovices-widget-icon">
                                    <img src={invoice_icon2} alt />
                                </span>
                                <div className="inovices-dash-count">
                                    <div className="inovices-amount">$4,5884</div>
                                </div>
                            </div>
                            <p className="inovices-all">Paid Invoices <span>60</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card inovices-card">
                        <div className="card-body">
                            <div className="inovices-widget-header">
                                <span className="inovices-widget-icon">
                                    <img src={invoice_icon3} alt />
                                </span>
                                <div className="inovices-dash-count">
                                    <div className="inovices-amount">$2,05,545</div>
                                </div>
                            </div>
                            <p className="inovices-all">Unpaid Invoices <span>70</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card inovices-card">
                        <div className="card-body">
                            <div className="inovices-widget-header">
                                <span className="inovices-widget-icon">
                                    <img src={invoice_icon4} alt />
                                </span>
                                <div className="inovices-dash-count">
                                    <div className="inovices-amount">$8,8,797</div>
                                </div>
                            </div>
                            <p className="inovices-all">Cancelled Invoices <span>80</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Draft_HeaderContent
