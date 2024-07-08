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

const EditAboutItem = () => {
    const { id } = useParams(); // Retrieve the document ID from the URL
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imageId: "",
        newImageFile: null, // State to handle new image file
        newImageId: "", // State to handle new image ID
        newImageURL: "", // State to handle new image URL
    });

    useEffect(() => {
        const fetchDocumentData = async () => {
            try {
                const documentSnapshot = await db.about.get(id);
                if (documentSnapshot) {
                    const imageUrl = "";
                    try {
                        const imageView = await storageServices.images.getFileView(documentSnapshot.image);
                        const response = await fetch(imageView.href);
                        if (response.status === 200) {
                            imageUrl = imageView.href;
                        } else if (response.status === 404) {
                            console.warn("Image not found in storage.");
                        } else {
                            throw new Error("Error fetching image");
                        }
                    } catch (error) {
                        if (error.message.includes("not be found")) {
                            console.warn("Image not found in storage.");
                        } else {
                            throw error;
                        }
                    }
                    setFormData({
                        ...documentSnapshot,
                        imageId: documentSnapshot.image,
                        newImageId: documentSnapshot.image,
                        newImageURL: imageUrl.href,
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

    const handleImageLoad = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newImageURL = URL.createObjectURL(file);
            setFormData((prevData) => ({
                ...prevData,
                newImageFile: file,
                newImageURL,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            let newImageId = formData.imageId;

            // Upload the new image if a new file is selected
            if (formData.newImageFile) {
                const toastId = toast.loading("Uploading image...");
                try {
                    const uploadedImage = await storageServices.images.createFile(formData.newImageFile);
                    newImageId = uploadedImage.$id;
                    toast.update(toastId, { render: "Image uploaded successfully!", type: "success", isLoading: false, autoClose: 2000 });
                } catch (error) {
                    toast.update(toastId, { render: "Image upload failed: " + error.message, type: "error", isLoading: false, autoClose: 2000 });
                    throw error;
                }
            }

            // Delete the old image if a new one was uploaded
            if (formData.newImageFile && formData.imageId !== newImageId) {
                try {
                    console.log("Image id to be deleted: ",formData.imageId)
                    await storageServices.images.deleteFile(formData.imageId);
                } catch (error) {
                    // if (error.response && error.response.status === 404) {
                        toast.warn("Old image not found in storage.", { autoClose: 2000 });
                    // } else {
                    //     throw error;
                    // }
                }
            }

            await db.about.update(id, {
                title: formData.title,
                description: formData.description,
                image: newImageId,
            });

            sessionStorage.setItem('updateAboutItemSuccess', 'true'); // Set update flag
            navigate("/aboutlist");
        } catch (error) {
            toast.error("Error updating document: " + error.message, { autoClose: 2000 });
            console.log(error);
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
                activeClassName="about"
            />
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/about">Landing Page </Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">Edit About Item</li>
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
                                                    <h4>Edit About Item</h4>
                                                </div>
                                            </div>
                                            {/* Title */}
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>Title <span className="login-danger">*</span></label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="title"
                                                        value={formData.title}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            {/* Description */}
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>Description <span className="login-danger">*</span></label>
                                                    <textarea
                                                        className="form-control"
                                                        rows="4"
                                                        name="description"
                                                        value={formData.description}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            {/* Image Upload Component */}
                                            <ImageUpload id="image" src={formData.newImageURL} loadFile={handleImageLoad} imageName="Image" />
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
                                                        onClick={() => navigate("/aboutlist")}
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

export default EditAboutItem;
