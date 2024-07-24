import React, { useState } from "react";
import Header from "../../../../Components/Header";
import Sidebar from "../../../../Components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import db from "../../../../appwrite/Services/dbServices"; // Import Appwrite database service
import { toast, ToastContainer } from "react-toastify"; // Import toast notifications
import FeatherIcon from "feather-icons-react";
import 'react-toastify/dist/ReactToastify.css';
import { DatePicker } from "antd";
import moment from "moment";

const AddRepresentationDate = () => {
    const navigate = useNavigate();
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validation checks
        if (!fromDate) {
            toast.error("Start Date is required", { autoClose: 2000 });
            return;
        }

        if (!toDate) {
            toast.error("End Date is required", { autoClose: 2000 });
            return;
        }

        if (toDate && toDate.isBefore(fromDate)) {
            toast.error("End Date should be the same as or after Start Date", { autoClose: 2000 });
            return;
        }

        setLoading(true);

        try {
            const formattedData = {
                fromDate: fromDate ? fromDate.toDate() : null,
                toDate: toDate ? toDate.toDate() : null,
                representativesCollection: [],
            };

            // Store data in Appwrite database
            await db.representationDates.create(formattedData);

            toast.success("Representation Date added successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setFromDate(null);
            setToDate(null);
            navigate("/representationdates");

        } catch (error) {
            toast.error("Error adding date: " + error.message, { autoClose: 2000 });
            console.error("Error adding date: ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Header />
            <Sidebar
                id="menu-item4"
                id1="menu-items4"
                activeClassName="representationdates"
            />
            <div className="page-wrapper">
                <div className="content">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/representationdates">Representation Dates</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        <Link to="/landingpage/representationdates">Dates</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">Add Representation Date</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-heading">
                                                    <h4>Add Representation Date</h4>
                                                </div>
                                            </div>

                                            {/* Date Picker */}
                                            <div className="col-12 col-md-12 col-xl-12">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Start Date <span className="login-danger">*</span>
                                                    </label>
                                                    <DatePicker
                                                        className="form-control"
                                                        format="YYYY-MM-DD"
                                                        onChange={(date) => {
                                                            setFromDate(date);
                                                        }}
                                                        value={fromDate}
                                                        disabled={loading}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-12 col-xl-12">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        End Date <span className="login-danger">*</span>
                                                    </label>
                                                    <DatePicker
                                                        className="form-control"
                                                        format="YYYY-MM-DD"
                                                        onChange={(date) => {
                                                            setToDate(date);
                                                        }}
                                                        value={toDate}
                                                        disabled={loading}
                                                    />
                                                </div>
                                            </div>

                                            {/* Submit/Cancel Button */}
                                            <div className="col-12">
                                                <div className="doctor-submit text-end">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary submit-form me-2"
                                                        disabled={loading}
                                                    >
                                                        {loading ? "Adding..." : "Add"}
                                                    </button>
                                                    <Link to="/representationdates">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary cancel-form"
                                                            disabled={loading}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRepresentationDate;
