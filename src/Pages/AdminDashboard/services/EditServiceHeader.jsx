import React, { useState, useEffect } from "react";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const EditServiceHeader = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState('');

    useEffect(() => {
        const fetchDocumentData = async () => {
            try {
                const docRef = doc(db, "serviceHeader", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setTitle(docSnap.data().title);
                } else {
                    console.error('Document does not exist');
                    toast.error("Service header not found");
                    navigate("/serviceheader");
                }
            } catch (error) {
                console.error('Error fetching document data:', error);
                toast.error("Error fetching data: " + error.message);
            }
        };

        fetchDocumentData();
    }, [id, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            setTitleError('Title is required');
            toast.error("Title is required", { autoClose: 2000 });
            return;
        }

        setLoading(true);
        try {
            const docRef = doc(db, "serviceHeader", id);
            await updateDoc(docRef, {
                title: title,
                updatedAt: new Date()
            });
            sessionStorage.setItem('updateServiceHeaderSuccess', 'true');
            navigate("/serviceheader");
        } catch (error) {
            toast.error("Error updating document: " + error.message);
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
                activeClassName="serviceheader"
            />
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="#">Services </Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        <Link to="/serviceheader">Service Header</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">Edit Service Header</li>
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
                                                    <h4>Edit Service Header</h4>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>Title <span className="login-danger">*</span></label>
                                                    <input
                                                        className={`form-control ${titleError ? 'is-invalid' : ''}`}
                                                        type="text"
                                                        value={title}
                                                        onChange={(e) => {
                                                            setTitle(e.target.value);
                                                            setTitleError('');
                                                        }}
                                                        disabled={loading}
                                                    />
                                                    {titleError && <div className="invalid-feedback">{titleError}</div>}
                                                </div>
                                            </div>
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
                                                        onClick={() => navigate("/serviceheader")}
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

export default EditServiceHeader;
