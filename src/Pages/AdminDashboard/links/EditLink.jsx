import React, { useState, useEffect, useRef } from "react";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import db from "../../../appwrite/Services/dbServices"; 
import TextEditor from "../InformationCard/TextEditor";

const EditLink = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const editorRef = useRef(null);

    useEffect(() => {
        const fetchDocumentData = async () => {
            try {
                const documentSnapshot = await db.links.get(id);
                if (documentSnapshot) {
                    setTitle(documentSnapshot.title);
                    setDescription(documentSnapshot.description);
                    editorRef.current.setEditorContent(documentSnapshot.description);
                } else {
                    console.error('Document does not exist');
                }
            } catch (error) {
                console.error('Error fetching document data:', error);
            }
        };

        fetchDocumentData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!title.trim() || !description.trim()) {
            toast.error('Please fill in all required fields.', { autoClose: 2000 });
            return;
        }

        setLoading(true);
        try {
            await db.links.update(id, { title, description });
            sessionStorage.setItem('updateLinkSuccess', 'true'); 
            navigate("/linkslist");
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
                activeClassName="links"
            />
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="#">Links </Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        <Link to="/linkslist">Links</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">Edit Link</li>
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
                                                    <h4>Edit Link</h4>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>Title <span className="login-danger">*</span></label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="title"
                                                        value={title}
                                                        onChange={(e) => setTitle(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-12">
                                                <div className="form-group local-forms">
                                                    <label>Description <span className="login-danger">*</span></label>
                                                    <TextEditor 
                                                        ref={editorRef} 
                                                        onChange={(data) => setDescription(data)} 
                                                        value={description}
                                                        required
                                                    />
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
                                                        onClick={() => navigate("/linkslist")}
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

export default EditLink;
