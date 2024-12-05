import React, { useState } from "react";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { addDocument } from "../../../firebase/dbService";
import { uploadFile } from "../../../firebase/storageService";
import { toast, ToastContainer } from "react-toastify";
import FeatherIcon from "feather-icons-react";
import 'react-toastify/dist/ReactToastify.css';

const AddFormBody = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            // Validate form fields
            if (!title || !file) {
                const errors = {};
                if (!title) errors.title = 'Title is required';
                if (!file) errors.file = 'File is required';
                setFormErrors(errors);
                setLoading(false);
                return;
            }

            let uploadedFilePath = "";

            // Upload file if selected
            if (file) {
                const toastId = toast.loading("Uploading file...");
                try {
                    const filePath = `formBody/${Date.now()}-${file.name}`;
                    await uploadFile(file, filePath);
                    uploadedFilePath = filePath;
                    toast.update(toastId, { render: "File uploaded successfully!", type: "success", isLoading: false, autoClose: 2000 });
                } catch (error) {
                    toast.update(toastId, { render: "File upload failed: " + error.message, type: "error", isLoading: false, autoClose: 2000 });
                    throw error;
                }
            }

            // Store data in Firebase database
            await addDocument('formBody', {
                title: title,
                file: uploadedFilePath,
            });

            sessionStorage.setItem('addFormBodySuccess', 'true');
            navigate("/formbody");

        } catch (error) {
            toast.error('Error adding document: ' + error.message, { autoClose: 2000 });
            console.error('Error adding document: ', error);
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
                activeClassName="formbody"
            />
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    
                                    <li className="breadcrumb-item active">
                                        <Link to="/formbody">Form Body</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">Add Form Body</li>
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
                                                    <h4>Add Form Body</h4>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <div className="col-12 col-md-12 col-xl-12">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Title <span className="login-danger">*</span>
                                                    </label>
                                                    <input
                                                        className={`form-control ${formErrors.title ? 'is-invalid' : ''}`}
                                                        type="text"
                                                        value={title}
                                                        onChange={(e) => setTitle(e.target.value)}
                                                        disabled={loading}
                                                    />
                                                    {formErrors.title && (
                                                        <div className="invalid-feedback">
                                                            {formErrors.title}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* File Upload */}
                                            <div className="col-12 col-md-12 col-xl-12">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Upload File <span className="login-danger">*</span>
                                                    </label>
                                                    <input
                                                        className={`form-control p-3 ${formErrors.file ? 'is-invalid' : ''}`}
                                                        type="file"
                                                        onChange={handleFileChange}
                                                        disabled={loading}
                                                    />
                                                    {formErrors.file && (
                                                        <div className="invalid-feedback">
                                                            {formErrors.file}
                                                        </div>
                                                    )}
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
                                                    <Link to="/formbody">
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

export default AddFormBody;
