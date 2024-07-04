/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd';


const Edit_Provident = () => {

    const onChange = (date, dateString) => {
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
                                        <li className="breadcrumb-item"><Link to="/providentfund">Accounts </Link></li>
                                        <li className="breadcrumb-item"><i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                        </li>
                                        <li className="breadcrumb-item active">Edit Provident Fund</li>
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
                                                        <h4>Edit Provident Fund</h4>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Employee Name  <span className="login-danger">*</span></label>
                                                        <select className="form-control select">
                                                            <option>Select Employee Name</option>
                                                            <option>Bernardo James</option>
                                                            <option>Galaviz Lalema</option>
                                                            <option>Tarah Williams	</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Provident Fund Type <span className="login-danger">*</span></label>
                                                        <select className="form-control select">
                                                            <option>Select Provident Fund Type</option>
                                                            <option>Basic Salary</option>
                                                            <option>Month Salary</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Employee Share ($) <span className="login-danger">*</span></label>
                                                        <input className="form-control" type="text" defaultValue="$10" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Organization Share ($) <span className="login-danger">*</span></label>
                                                        <input className="form-control" type="text" defaultValue="$5" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <div className="form-group local-forms cal-icon">
                                                            <label >Employee Share (%)  <span className="login-danger">*</span></label>
                                                            {/* <input class="form-control datetimepicker" type="text" value="10%" /> */}
                                                            <DatePicker className="form-control datetimepicker" onChange={onChange}
                                                                suffixIcon={null}
                                                            // placeholder='24/11/2022'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="form-group local-forms">
                                                        <label>Organization Share (%)  <span className="login-danger">*</span></label>
                                                        <input className="form-control" type="text" defaultValue="5%" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12">
                                                    <div className="form-group local-forms">
                                                        <label>Description  <span className="login-danger">*</span></label>
                                                        <textarea className="form-control" rows={3} cols={30} defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="doctor-submit text-end">
                                                        <button type="submit" className="btn btn-primary submit-form me-2">Create Provident Fund</button>
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

export default Edit_Provident
