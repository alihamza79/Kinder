import React, { useState } from "react";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { db, storage } from "../../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast, ToastContainer } from "react-toastify";
import FeatherIcon from "feather-icons-react";
import 'react-toastify/dist/ReactToastify.css';
import ImageUpload from "../../../Components/ImageUpload";

const AddTeamMember = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imageURL, setImageURL] = useState("");
    const [loading, setLoading] = useState(false);

    const handleImageLoad = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newImageURL = URL.createObjectURL(file);
            setImageFile(file);
            setImageURL(newImageURL);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name.trim() || !designation.trim() || !imageFile) {
            toast.error('Please fill in all required fields.', { autoClose: 2000 });
            return;
        }

        setLoading(true);

        try {
            // Upload image to Firebase Storage
            const toastId = toast.loading("Uploading image...");
            const imageRef = ref(storage, `team/${Date.now()}_${imageFile.name}`);
            await uploadBytes(imageRef, imageFile);
            const imageUrl = await getDownloadURL(imageRef);
            toast.update(toastId, { 
                render: "Image uploaded successfully!", 
                type: "success", 
                isLoading: false, 
                autoClose: 2000 
            });

            // Store data in Firestore
            await addDoc(collection(db, "teamBody"), {
                name,
                designation,
                imageUrl,
                createdAt: new Date()
            });

            sessionStorage.setItem('addTeamBodySuccess', 'true');
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
                                        <Link to="/teamlist">Team</Link>
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
                                                        required  // HTML5 validation
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
                                                        required  // HTML5 validation
                                                    />
                                                </div>
                                            </div>

                                            {/* Image Upload Component */}
                                            <ImageUpload id="image" src={imageURL} loadFile={handleImageLoad} imageName="Image" required />

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
