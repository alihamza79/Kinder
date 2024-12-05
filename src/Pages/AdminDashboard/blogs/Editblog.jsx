import React, { useState, useEffect, useRef } from "react";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getDocument, updateDocument } from "../../../firebase/dbService";
import { uploadFile, getFileURL, deleteFileFromStorage } from "../../../firebase/storageService";
import ImageUpload from "../../../Components/ImageUpload";
import TextEditor from "../InformationCard/TextEditor";

const EditBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        tags: "",
        content: "",
        imageId: "",
        newImageFile: null,
        newImageId: "",
        newImageURL: "",
    });
    const [formErrors, setFormErrors] = useState({
        title: "",
        author: "",
        tags: "",
        content: "",
        image: "",
    });
    const editorRef = useRef(null);

    useEffect(() => {
        const fetchDocumentData = async () => {
            try {
                const docSnapshot = await getDocument('blogs', id);
                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    let imageUrl = "";
                    try {
                        imageUrl = await getFileURL(data.image);
                    } catch (error) {
                        console.warn("Error fetching image:", error);
                    }

                    setFormData({
                        title: data.title,
                        author: data.author,
                        tags: data.tags.join(","),
                        content: data.content,
                        imageId: data.image,
                        newImageId: data.image,
                        newImageURL: imageUrl,
                    });
                    editorRef.current.setEditorContent(data.content);
                } else {
                    toast.error('Blog not found');
                    navigate('/blogview');
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
                toast.error('Error loading blog');
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
            const newImageUrl = URL.createObjectURL(file);
            setFormData((prevData) => ({
                ...prevData,
                newImageFile: file,
                newImageUrl,
            }));
        }
    };

    const validateForm = () => {
        const { title, author, tags, content } = formData;
        let valid = true;
        const errors = {
            title: "",
            author: "",
            tags: "",
            content: "",
            image: "",
        };

        if (!title.trim()) {
            errors.title = "Title is required";
            valid = false;
        }

        if (!author.trim()) {
            errors.author = "Author name is required";
            valid = false;
        }

        if (!tags.trim()) {
            errors.tags = "Tags are required";
            valid = false;
        }

        if (!content.trim()) {
            errors.content = "Content is required";
            valid = false;
        }

        // If no new image file is selected and imageId is not set, show error
        if (!formData.newImageFile && !formData.imageId) {
            errors.image = "Image is required";
            valid = false;
        }

        setFormErrors(errors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            let newImagePath = formData.imageId;

            if (formData.newImageFile) {
                const toastId = toast.loading("Uploading image...");
                try {
                    const imagePath = `blogs/${Date.now()}-${formData.newImageFile.name}`;
                    await uploadFile(formData.newImageFile, imagePath);
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

            if (formData.newImageFile && formData.imageId !== newImagePath) {
                try {
                    await deleteFileFromStorage(formData.imageId);
                } catch (error) {
                    console.warn("Error deleting old image:", error);
                }
            }

            const cleanedTags = formData.tags.split(",").map(tag => tag.trim());

            await updateDocument('blogs', id, {
                title: formData.title,
                author: formData.author,
                tags: cleanedTags,
                content: formData.content,
                image: newImagePath,
                updatedAt: new Date().toISOString()
            });

            sessionStorage.setItem('updateBlogSuccess', 'true');
            navigate("/blogview");
        } catch (error) {
            toast.error("Error updating blog: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Header />
            <Sidebar
                id="menu-item11"
                id1="menu-items11"
                activeClassName="edit-blog"
            />
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/blogview">News</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <FeatherIcon icon="chevron-right" />
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Edit News
                                    </li>
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
                                                    <h4>Edit News</h4>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>News Title <span className="login-danger">*</span></label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="title"
                                                        value={formData.title}
                                                        onChange={handleChange}
                                                        disabled={loading}
                                                        required
                                                    />
                                                    {formErrors.title && (
                                                        <div className="text-danger">{formErrors.title}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>Author Name <span className="login-danger">*</span></label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="author"
                                                        value={formData.author}
                                                        onChange={handleChange}
                                                        disabled={loading}
                                                        required
                                                    />
                                                    {formErrors.author && (
                                                        <div className="text-danger">{formErrors.author}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>Tags <small>(separated with a comma)</small> <span className="login-danger">*</span></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="tags"
                                                        value={formData.tags}
                                                        onChange={handleChange}
                                                        disabled={loading}
                                                        required
                                                    />
                                                    {formErrors.tags && (
                                                        <div className="text-danger">{formErrors.tags}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-12">
                                                <div className="form-group summer-mail">
                                                    <label>Content <span className="login-danger">*</span></label>
                                                    <TextEditor 
                                                        ref={editorRef} 
                                                        onChange={(data) => setFormData(prevData => ({ ...prevData, content: data }))} 
                                                        required
                                                    />
                                                    {formErrors.content && (
                                                        <div className="text-danger">{formErrors.content}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-12">
                                                <div className="form-group local-top-form">
                                                    <ImageUpload id="image" src={formData.newImageURL} loadFile={handleImageLoad} imageName="Avatar" />
                                                    {formErrors.image && (
                                                        <div className="text-danger">{formErrors.image}</div>
                                                    )}
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
                                                        onClick={() => navigate("/blogview")}
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

export default EditBlog;
