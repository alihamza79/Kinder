import React, { useState, useEffect } from "react";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import db from "../../../appwrite/Services/dbServices"; // Import Appwrite db services
import storageServices from "../../../appwrite/Services/storageServices"; // Import Appwrite storage services
import ImageUpload from "../../../Components/ImageUpload"; // Import the ImageUpload component

const EditTeamMember = () => {
    const { id } = useParams(); // Retrieve the document ID from the URL
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        designation: "",
        image: "",
        newImage: "", // State to handle new image URL
    });

    useEffect(() => {
        const fetchDocumentData = async () => {
            try {
                const documentSnapshot = await db.teamBody.get(id);
                if (documentSnapshot) {
                    setFormData({
                        ...documentSnapshot,
                        newImage: documentSnapshot.image,
                    });
                } else {
                    console.error('Document does not exist');
                }
            } catch (error) {
                console.error('Error fetching document data:', error);
            }
        };

        fetchDocumentData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageLoad = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const toastId = toast.loading("Uploading image...");
            try {
                const uploadedImage = await storageServices.kinder.createFile(file);
                const uploadedImageURL = storageServices.kinder.getFileView(uploadedImage.$id);
                setFormData((prevData) => ({
                    ...prevData,
                    newImage: uploadedImageURL,
                }));
                toast.update(toastId, { render: "Image uploaded successfully!", type: "success", isLoading: false, autoClose: 2000 });
            } catch (error) {
                toast.update(toastId, { render: "Image upload failed: " + error.message, type: "error", isLoading: false, autoClose: 2000 });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Delete old image if a new one is uploaded
            if (formData.newImage && formData.image !== formData.newImage) {
                await storageServices.kinder.deleteFile(formData.image);
            }
            await db.teamBody.update(id, {
                name: formData.name,
                designation: formData.designation,
                image: formData.newImage || formData.image,
            });
            sessionStorage.setItem('updateTeamBodySuccess', 'true'); // Set update flag
            navigate("/teamlist");
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
                activeClassName="team"
            />
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/landingpage/team">Landing Page </Link>
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
                                    <li className="breadcrumb-item active">Edit Team Member</li>
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
                                                    <h4>Edit Team Member</h4>
                                                </div>
                                            </div>
                                            {/* Name */}
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>Name <span className="login-danger">*</span></label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            {/* Designation */}
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>Designation <span className="login-danger">*</span></label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="designation"
                                                        value={formData.designation}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            {/* Image Upload Component */}
                                            <ImageUpload id="image" src={formData.newImage} loadFile={handleImageLoad} imageName="Image" />
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
                                                        onClick={() => navigate("/teamlist")}
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

export default EditTeamMember;
