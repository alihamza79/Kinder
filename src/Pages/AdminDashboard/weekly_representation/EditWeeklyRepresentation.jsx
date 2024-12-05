import React, { useState, useEffect, useRef } from "react";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import TextEditor from "../InformationCard/TextEditor";

const EditWeeklyRepresentation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const editorRef = useRef(null);

  useEffect(() => {
    const fetchDocumentData = async () => {
      try {
        const docRef = doc(db, "weeklyRepresentation", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title);
          setDescription(data.description);
          editorRef.current.setEditorContent(data.description);
        } else {
          console.error('Document does not exist');
          toast.error("Weekly representation not found");
          navigate("/weeklyrepresentationbody");
        }
      } catch (error) {
        console.error('Error fetching document data:', error);
        toast.error("Error fetching data: " + error.message);
      }
    };

    fetchDocumentData();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      toast.error('All fields are required', { autoClose: 2000 });
      return;
    }

    setLoading(true);
    try {
      const docRef = doc(db, "weeklyRepresentation", id);
      await updateDoc(docRef, {
        title,
        description,
        updatedAt: new Date()
      });
      
      sessionStorage.setItem('updateWeeklyRepresentationSuccess', 'true');
      navigate("/weeklyrepresentationbody");
    } catch (error) {
      toast.error("Error updating document: " + error.message);
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
        activeClassName="weeklyrepresentationbody"
      />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/weeklyrepresentationbody">Representation </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">
                    <Link to="/weeklyrepresentationbody">Weekly Representation</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Edit Weekly Representation</li>
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
                          <h4>Edit Weekly Representation</h4>
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
                            onClick={() => navigate("/weeklyrepresentationbody")}
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

export default EditWeeklyRepresentation;
