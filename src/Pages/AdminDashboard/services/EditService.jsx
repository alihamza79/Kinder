import React, { useState, useEffect } from "react";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const EditService = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');

    useEffect(() => {
        const fetchDocumentData = async () => {
            try {
                const docRef = doc(db, "services", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setName(docSnap.data().name);
                } else {
                    console.error('Document does not exist');
                    toast.error("Service not found");
                    navigate("/serviceslist");
                }
            } catch (error) {
                console.error('Error fetching document data:', error);
                toast.error("Error fetching service: " + error.message);
            }
        };

        fetchDocumentData();
    }, [id, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setNameError('Name is required');
            toast.error("Name is required", { autoClose: 2000 });
            return;
        }

        setLoading(true);
        try {
            const docRef = doc(db, "services", id);
            await updateDoc(docRef, {
                name: name,
                updatedAt: new Date()
            });
            sessionStorage.setItem('updateServiceSuccess', 'true');
            navigate("/serviceslist");
        } catch (error) {
            toast.error("Error updating service: " + error.message);
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
                activeClassName="services"
            />
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item active">
                                        <Link to="/serviceslist">Services</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">Edit Service</li>
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
                                                    <h4>Edit Service</h4>
                                                </div>
                                            </div>
                                            {/* Name */}
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>Name <span className="login-danger">*</span></label>
                                                    <input
                                                        className={`form-control ${nameError ? 'is-invalid' : ''}`}
                                                        type="text"
                                                        value={name}
                                                        onChange={(e) => {
                                                            setName(e.target.value);
                                                            setNameError('');
                                                        }}
                                                        disabled={loading}
                                                    />
                                                    {nameError && <div className="invalid-feedback">{nameError}</div>}
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
                                                        onClick={() => navigate("/serviceslist")}
                                                        disabled={loading}
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

export default EditService;
