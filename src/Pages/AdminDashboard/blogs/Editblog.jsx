import React, { useState, useEffect, useRef } from "react";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import db from "../../../appwrite/Services/dbServices";
import storageServices from "../../../appwrite/Services/storageServices";
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
        newImageUrl: "",
    });
    const editorRef = useRef(null);

    useEffect(() => {
        const fetchDocumentData = async () => {
            try {
                const documentSnapshot = await db.blogs.get(id);
                if (documentSnapshot) {
                    const imageUrl = await storageServices.images.getFileView(documentSnapshot.imageUrl);
                    setFormData({
                        title: documentSnapshot.title,
                        author: documentSnapshot.author,
                        tags: documentSnapshot.tags.join(","),
                        content: documentSnapshot.content,
                        imageId: documentSnapshot.imageUrl,
                        newImageId: documentSnapshot.imageUrl,
                        newImageUrl: imageUrl.href,
                    });
                    editorRef.current.setEditorContent(documentSnapshot.content);
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
            const newImageUrl = URL.createObjectURL(file);
            setFormData((prevData) => ({
                ...prevData,
                newImageFile: file,
                newImageUrl,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            let newImageId = formData.imageId;

            if (formData.newImageFile) {
                try {
                    const uploadedImage = await storageServices.images.createFile(formData.newImageFile);
                    newImageId = uploadedImage.$id;
                } catch (error) {
                    throw error;
                }
            }

            if (formData.newImageFile && formData.imageId !== newImageId) {
                await storageServices.images.deleteFile(formData.imageId);
            }

            await db.blogs.update(id, {
                title: formData.title,
                author: formData.author,
                tags: formData.tags.split(","),
                content: formData.content,
                imageUrl: newImageId,
            });

            sessionStorage.setItem('updateBlogSuccess', 'true'); 
            navigate("/blogview");
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
                                        <Link to="/blogview">Blog</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <FeatherIcon icon="chevron-right" />
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Edit Blog
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
                                                    <h4>Edit Blog</h4>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>Blog Title <span className="login-danger">*</span></label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="title"
                                                        value={formData.title}
                                                        onChange={handleChange}
                                                        disabled={loading}
                                                    />
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
                                                    />
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
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-12">
                                                <div className="form-group summer-mail">
                                                    <label>Content <span className="login-danger">*</span></label>
                                                    <TextEditor 
                                                        ref={editorRef} 
                                                        onChange={(data) => setFormData(prevData => ({ ...prevData, content: data }))} 
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-12">
                                                <div className="form-group local-top-form">
                                                    <ImageUpload id="image" src={formData.newImageUrl} loadFile={handleImageLoad} imageName="Avatar" />
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
