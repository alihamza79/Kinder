import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getDocument, updateDocument } from "../../../firebase/dbService";
import { uploadFile, getFileURL, deleteFileFromStorage } from "../../../firebase/storageService";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";

const EditFormBody = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        fileId: "",
        newFile: null,
        newFileId: "",
        newFileURL: "",
    });
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        const fetchDocumentData = async () => {
            try {
                const documentSnapshot = await getDocument('formBody', id);
                if (documentSnapshot.exists()) {
                    const data = documentSnapshot.data();
                    let fileUrl = "";
                    try {
                        fileUrl = await getFileURL(data.file);
                    } catch (error) {
                        console.warn("Error fetching file:", error);
                    }

                    setFormData({
                        title: data.title,
                        fileId: data.file,
                        newFileId: data.file,
                        newFileURL: fileUrl,
                    });
                } else {
                    console.error('Document does not exist');
                    navigate("/formbody");
                }
            } catch (error) {
                console.error('Error fetching document data:', error);
                toast.error("Error loading data. Please try again.");
            }
        };

        fetchDocumentData();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newFileURL = URL.createObjectURL(file);
            setFormData((prevData) => ({
                ...prevData,
                newFile: file,
                newFileURL,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (!formData.title || (!formData.newFile && !formData.fileId)) {
                const errors = {};
                if (!formData.title) errors.title = 'Title is required';
                if (!formData.newFile && !formData.fileId) errors.file = 'File is required';
                setFormErrors(errors);
                setLoading(false);
                return;
            }

            let newFileId = formData.fileId;

            if (formData.newFile) {
                const toastId = toast.loading("Uploading file...");
                try {
                    const filePath = `formBody/${Date.now()}-${formData.newFile.name}`;
                    await uploadFile(formData.newFile, filePath);
                    newFileId = filePath;
                    toast.update(toastId, { render: "File uploaded successfully!", type: "success", isLoading: false, autoClose: 2000 });
                } catch (error) {
                    toast.update(toastId, { render: "File upload failed: " + error.message, type: "error", isLoading: false, autoClose: 2000 });
                    throw error;
                }
            }

            if (formData.newFile && formData.fileId !== newFileId) {
                await deleteFileFromStorage(formData.fileId);
            }

            await updateDocument('formBody', id, {
                title: formData.title,
                file: newFileId,
            });

            sessionStorage.setItem('updateFormBodySuccess', 'true');
            navigate("/formbody");
        } catch (error) {
            console.error("Error updating document:", error);
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
                                    <li className="breadcrumb-item active">Edit Form Body</li>
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
                                                    <h4>Edit Form Body</h4>
                                                </div>
                                            </div>
                                            {/* Title */}
                                            <div className="col-12 col-md-12 col-xl-12">
                                                <div className="form-group local-forms">
                                                    <label>Title <span className="login-danger">*</span></label>
                                                    <input
                                                        className={`form-control ${formErrors.title ? 'is-invalid' : ''}`}
                                                        type="text"
                                                        name="title"
                                                        value={formData.title}
                                                        onChange={handleChange}
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
                                                    <label>Upload File <span className="login-danger">*</span></label>
                                                    <input
                                                        className={`form-control ${formErrors.file ? 'is-invalid' : ''}`}
                                                        type="file"
                                                        onChange={handleFileChange}
                                                    />
                                                    {formErrors.file && (
                                                        <div className="invalid-feedback">
                                                            {formErrors.file}
                                                        </div>
                                                    )}
                                                    {formData.newFileURL && (
                                                        <div className="mt-2">
                                                            <a href={formData.newFileURL} target="_blank" rel="noopener noreferrer">View Current File</a>
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
                                                        {loading ? "Updating..." : "Update"}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary cancel-form"
                                                        onClick={() => navigate("/formbody")}
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

export default EditFormBody;
