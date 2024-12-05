import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getDocument, updateDocument } from "../../../firebase/dbService";
import { uploadFile, getFileURL, deleteFileFromStorage } from "../../../firebase/storageService";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import FeatherIcon from "feather-icons-react";
import ImageUpload from "../../../Components/ImageUpload";
import TextEditor from "../InformationCard/TextEditor";

const EditAboutItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imageId: "",
        newImageFile: null,
        newImageId: "",
        newImageURL: "",
        imageTitle: "",
        imageSubtitle: "",
    });
    const editorRef = useRef(null);

    useEffect(() => {
        const fetchDocumentData = async () => {
            try {
                const docSnapshot = await getDocument('about', id);
                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    let imageUrl = "";
                    try {
                        imageUrl = await getFileURL(data.image);
                    } catch (error) {
                        console.warn("Error fetching image:", error);
                    }

                    setFormData({
                        ...data,
                        imageId: data.image,
                        newImageId: data.image,
                        newImageURL: imageUrl,
                        imageTitle: data.imageTitle,
                        imageSubtitle: data.imageSubtitle,
                    });
                    editorRef.current.setEditorContent(data.description);
                } else {
                    toast.error('Document does not exist');
                    navigate('/aboutlist');
                }
            } catch (error) {
                console.error('Error fetching document data:', error);
                toast.error('Error fetching document data');
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
        if (!formData.title || !formData.description || !formData.newImageURL || !formData.imageTitle || !formData.imageSubtitle) {
            toast.error("All fields are required, including the image.");
            return;
        }

        setLoading(true);
        try {
            let newImagePath = formData.imageId;

            // Upload new image if selected
            if (formData.newImageFile) {
                const toastId = toast.loading("Uploading image...");
                try {
                    const imagePath = `about/${Date.now()}-${formData.newImageFile.name}`;
                    const imageUrl = await uploadFile(formData.newImageFile, imagePath);
                    newImagePath = imagePath;
                    toast.update(toastId, { 
                        render: "Image uploaded successfully!", 
                        type: "success", 
                        isLoading: false, 
                        autoClose: 2000 
                    });
                } catch (error) {
                    toast.update(toastId, { 
                        render: "Image upload failed: " + error.message, 
                        type: "error", 
                        isLoading: false, 
                        autoClose: 2000 
                    });
                    throw error;
                }
            }

            // Delete old image if new one was uploaded
            if (formData.newImageFile && formData.imageId !== newImagePath) {
                try {
                    await deleteFileFromStorage(formData.imageId);
                } catch (error) {
                    console.warn("Error deleting old image:", error);
                }
            }

            await updateDocument('about', id, {
                title: formData.title,
                description: formData.description,
                image: newImagePath,
                imageTitle: formData.imageTitle,
                imageSubtitle: formData.imageSubtitle,
            });

            sessionStorage.setItem('updateAboutItemSuccess', 'true');
            navigate("/aboutlist");
        } catch (error) {
            toast.error("Error updating document: " + error.message);
            console.error(error);
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
                                        <Link to="/aboutlist">About us </Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
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
                                                        required
                                                    />
                                                </div>
                                            </div>
                                         
                                            {/* Description */}
                                            <div className="col-12 col-md-6 col-xl-12">
                                                <div className="form-group local-forms">
                                                    <label>Description <span className="login-danger">*</span></label>
                                                    <TextEditor 
                                                        ref={editorRef} 
                                                        onChange={(data) => setFormData((prevData) => ({ ...prevData, description: data }))}
                                                        value={formData.description}
                                                        required
                                                    />
                                                </div>
                                            </div>

   {/* Image Title */}
   <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>Image Title <span className="login-danger">*</span></label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="imageTitle"
                                                        value={formData.imageTitle}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            {/* Image Subtitle */}
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>Image Subtitle <span className="login-danger">*</span></label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="imageSubtitle"
                                                        value={formData.imageSubtitle}
                                                        onChange={handleChange}
                                                        required
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
