import React, { useState, useEffect } from "react";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { db, storage } from "../../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import ImageUpload from "../../../Components/ImageUpload";

const EditTeamMember = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        designation: "",
        imageUrl: "",
        newImageFile: null,
    });

    useEffect(() => {
        const fetchDocumentData = async () => {
            try {
                const docRef = doc(db, "teamBody", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setFormData({
                        name: data.name,
                        designation: data.designation,
                        imageUrl: data.imageUrl,
                        newImageFile: null
                    });
                } else {
                    console.error('Document does not exist');
                    toast.error("Team member not found");
                    navigate("/teamlist");
                }
            } catch (error) {
                console.error('Error fetching document data:', error);
                toast.error("Error fetching data: " + error.message);
            }
        };

        fetchDocumentData();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageLoad = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newImageURL = URL.createObjectURL(file);
            setFormData(prev => ({
                ...prev,
                newImageFile: file,
                imageUrl: newImageURL
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.designation) {
            toast.error("All fields are required");
            return;
        }

        setLoading(true);
        try {
            let imageUrl = formData.imageUrl;

            if (formData.newImageFile) {
                // Upload new image
                const toastId = toast.loading("Uploading image...");
                const imageRef = ref(storage, `team/${Date.now()}_${formData.newImageFile.name}`);
                await uploadBytes(imageRef, formData.newImageFile);
                imageUrl = await getDownloadURL(imageRef);
                
                // Delete old image if it exists
                if (formData.imageUrl) {
                    try {
                        const oldImageRef = ref(storage, formData.imageUrl);
                        await deleteObject(oldImageRef);
                    } catch (error) {
                        console.warn("Old image not found in storage");
                    }
                }
                
                toast.update(toastId, {
                    render: "Image uploaded successfully!",
                    type: "success",
                    isLoading: false,
                    autoClose: 2000
                });
            }

            const docRef = doc(db, "teamBody", id);
            await updateDoc(docRef, {
                name: formData.name,
                designation: formData.designation,
                imageUrl: imageUrl,
                updatedAt: new Date()
            });

            sessionStorage.setItem('updateTeamBodySuccess', 'true');
            navigate("/teamlist");
        } catch (error) {
            toast.error("Error updating team member: " + error.message);
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
                                        <Link to="#">Team </Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        <Link to="/teamlist">Team</Link>
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
                                                        required
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
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            {/* Image Upload Component */}
                                            <ImageUpload id="image" src={formData.imageUrl} loadFile={handleImageLoad} imageName="Image" />
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
