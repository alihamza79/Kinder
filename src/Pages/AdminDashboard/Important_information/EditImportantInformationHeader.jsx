import React, { useState, useEffect } from "react";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import db from "../../../appwrite/Services/dbServices";

const EditImportantInformationHeader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  useEffect(() => {
    const fetchDocumentData = async () => {
      try {
        const documentSnapshot = await db.importantInformationHeader.get(id);
        if (documentSnapshot) {
          setTitle(documentSnapshot.title);
          setDescription(documentSnapshot.description);
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

    if (!title.trim()) {
      setTitleError('Title is required');
      return;
    } else {
      setTitleError('');
    }

    if (!description.trim()) {
      setDescriptionError('Description is required');
      return;
    } else {
      setDescriptionError('');
    }

    setLoading(true);
    try {
      await db.importantInformationHeader.update(id, { title, description });
      sessionStorage.setItem('updateImportantInformationHeaderSuccess', 'true');
      navigate("/importantinformationheader");
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
        activeClassName="importantinformationheader"
      />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/importantinformationheader">Important Info </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">
                    <Link to="/importantinformationheader">Important Information Header</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Edit Important Information Header</li>
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
                          <h4>Edit Important Information Header</h4>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>Title <span className="login-danger">*</span></label>
                          <input
                            className={`form-control ${titleError ? 'is-invalid' : ''}`}
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                          {titleError && <div className="invalid-feedback">{titleError}</div>}
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-12">
                        <div className="form-group local-forms">
                          <label>Description <span className="login-danger">*</span></label>
                          <textarea
                            className={`form-control ${descriptionError ? 'is-invalid' : ''}`}
                            rows="4"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                          {descriptionError && <div className="invalid-feedback">{descriptionError}</div>}
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
                            onClick={() => navigate("/importantinformationheader")}
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

export default EditImportantInformationHeader;
