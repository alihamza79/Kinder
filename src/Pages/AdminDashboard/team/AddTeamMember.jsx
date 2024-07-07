import React, { useState } from "react";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import storageServices from "../../../appwrite/Services/storageServices"; // Import Appwrite storage service
import db from "../../../appwrite/Services/dbServices"; // Import Appwrite database service
import { toast, ToastContainer } from "react-toastify"; // Import toast notifications
import FeatherIcon from "feather-icons-react";
import 'react-toastify/dist/ReactToastify.css';

const AddTeamMember = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const loadFile = async (event) => {
        const file = event.target.files[0];

        if (file) {
            const toastId = toast.loading("Uploading image...");
            try {
                setLoading(true);
                const uploadedImage = await storageServices.kinder.createFile(file);
                const uploadedImageURL = await storageServices.kinder.getFileView(uploadedImage.$id);
                setImageUrl(uploadedImageURL);
                setImage(file);
                toast.update(toastId, { render: "Image uploaded successfully!", type: "success", isLoading: false, autoClose: 2000 });
            } catch (error) {
                toast.update(toastId, { render: "Image upload failed: " + error.message, type: "error", isLoading: false, autoClose: 2000 });
            } finally {
                setLoading(false);
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            // Store data in Appwrite database
            await db.teamBody.create({
                name: name,
                designation: designation,
                image: imageUrl,
            });

            sessionStorage.setItem('addTeamBodySuccess', 'true'); // Set update flag
            navigate("/teamlist");

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
                activeClassName="team"
            />
            <div className="page-wrapper">
                <div className="content">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/landingpage/team">Team</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        <Link to="/landingpage/team">Team</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">Add Team Member</li>
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
                                                    <h4>Add Team Member</h4>
                                                </div>
                                            </div>

                                            {/* Name */}
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Name <span className="login-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        disabled={loading}
                                                    />
                                                </div>
                                            </div>

                                            {/* Designation */}
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Designation <span className="login-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        value={designation}
                                                        onChange={(e) => setDesignation(e.target.value)}
                                                        disabled={loading}
                                                    />
                                                </div>
                                            </div>

                                            {/* Image Input */}
                                            <div className="col-10 col-md-2 col-xl-4">
                                                <div className="form-group">
                                                    <label className={image ? "" : "local-top"}>
                                                        Image <span className="login-danger">*</span>
                                                    </label>
                                                    <div className={image ? "upload-files-avator" : "upload-files-avator settings-btn"} style={{ position: 'relative' }}>
                                                        {/* Display the uploaded image */}
                                                        {image && (
                                                            <div className="uploaded-image">
                                                                <img
                                                                    src={URL.createObjectURL(image)}
                                                                    alt="Uploaded Image"
                                                                    style={{
                                                                        width: '180px',
                                                                        height: '180px',
                                                                        objectFit: 'cover',
                                                                    }}
                                                                />
                                                                <div className="edit-icon" style={{ position: 'absolute', backgroundColor: 'white', left: 170, top: 160 }}>
                                                                    {/* Input for choosing a new image */}
                                                                    <input
                                                                        type="file"
                                                                        accept="image/*"
                                                                        name="teamImage"
                                                                        id="file"
                                                                        onChange={loadFile}
                                                                        className="hide-input"
                                                                        style={{ display: 'none' }}
                                                                        disabled={loading}
                                                                    />
                                                                    <label htmlFor="file" className="upload" style={{ cursor: 'pointer' }}>
                                                                        <FeatherIcon icon="edit" />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {/* Input for choosing a new image */}
                                                        {!image && (
                                                            <div>
                                                                <input
                                                                    type="file"
                                                                    accept="image/*"
                                                                    name="teamImage"
                                                                    id="file"
                                                                    onChange={loadFile}
                                                                    className="hide-input"
                                                                    disabled={loading}
                                                                />
                                                                <label htmlFor="file" className="upload" style={{ cursor: 'pointer' }}>
                                                                    Choose File
                                                                </label>
                                                            </div>
                                                        )}
                                                    </div>
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
                                                    <Link to="/teamlist">
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

export default AddTeamMember;
