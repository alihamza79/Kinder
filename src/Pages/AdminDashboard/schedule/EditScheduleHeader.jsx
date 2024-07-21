import React, { useState, useEffect } from "react";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import db from "../../../appwrite/Services/dbServices"; // Import Appwrite db services

const EditScheduleHeader = () => {
    const { id } = useParams(); // Retrieve the document ID from the URL
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState('');

    useEffect(() => {
        const fetchDocumentData = async () => {
            try {
                const documentSnapshot = await db.scheduleHeader.get(id);
                if (documentSnapshot) {
                    setTitle(documentSnapshot.title);
                } else {
                    console.error('Document does not exist');
                }
            } catch (error) {
                console.error('Error fetching document data:', error);
            }
        };

        fetchDocumentData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            setTitleError('Title is required');
            return;
        } else {
            setTitleError('');
        }

        setLoading(true);
        try {
            await db.scheduleHeader.update(id, { title });
            sessionStorage.setItem('updateScheduleHeaderSuccess', 'true'); // Set update flag
            navigate("/scheduleheader");
        } catch (error) {
            toast.error("Error updating document: " + error.message, { autoClose: 2000 });
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
                activeClassName="scheduleheader"
            />
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="#">Landing Page </Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        <Link to="/scheduleheader">Schedule Header</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">Edit Schedule Header</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-heading">
                                                    <h4>Edit Schedule Header</h4>
                                                </div>
                                            </div>
                                            {/* Title */}
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>Title <span className="login-danger">*</span></label>
                                                    <input
                                                        className={`form-control ${titleError ? 'is-invalid' : ''}`}
                                                        type="text"
                                                        name="title"
                                                        value={title}
                                                        onChange={(e) => setTitle(e.target.value)}
                                                    />
                                                    {titleError && <div className="invalid-feedback">{titleError}</div>}
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
                                                        {loading ? "Updating..." : "Update"}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary cancel-form"
                                                        onClick={() => navigate("/scheduleheader")}
                                                    >
                                                        Cancel
                                                    </button>
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

export default EditScheduleHeader;
