import React, { useState, useEffect } from "react";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ImageUpload from "../../../Components/ImageUpload";
import { getDocument, updateDocument, getAllDocuments } from "../../../firebase/dbService";
import { uploadFile, getFileURL, deleteFileFromStorage } from "../../../firebase/storageService";

const EditGalleryItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    imageId: "",
    newImageFile: null,
    newImageId: "",
    newImageURL: "",
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllDocuments('categories');
        const categoriesList = response.docs.flatMap(doc => 
          [doc.data().category1, doc.data().category2, doc.data().category3].filter(cat => cat)
        );
        setCategories(categoriesList);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchDocumentData = async () => {
      try {
        const documentSnapshot = await getDocument('galleryBody', id);
        if (documentSnapshot.exists()) {
          const data = documentSnapshot.data();
          let imageUrl = "";
          try {
            imageUrl = await getFileURL(data.image);
          } catch (error) {
            console.warn("Error fetching image:", error);
          }
          setFormData({
            category: data.category,
            imageId: data.image,
            newImageId: data.image,
            newImageURL: imageUrl,
          });
        } else {
          console.error('Document does not exist');
        }
      } catch (error) {
        console.error('Error fetching document data:', error);
      }
    };

    fetchCategories();
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

      if (formData.newImageFile) {
        const toastId = toast.loading("Uploading image...");
        try {
          const filePath = `gallery/${Date.now()}-${formData.newImageFile.name}`;
          await uploadFile(formData.newImageFile, filePath);
          newImageId = filePath;
          toast.update(toastId, { render: "Image uploaded successfully!", type: "success", isLoading: false, autoClose: 2000 });
        } catch (error) {
          toast.update(toastId, { render: "Image upload failed: " + error.message, type: "error", isLoading: false, autoClose: 2000 });
          throw error;
        }
      }

      if (formData.newImageFile && formData.imageId !== newImageId) {
        await deleteFileFromStorage(formData.imageId);
      }

      await updateDocument('galleryBody', id, {
        category: formData.category,
        image: newImageId,
      });

      sessionStorage.setItem('updateGalleryBodySuccess', 'true');
      navigate("/gallerylist");
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
      <Sidebar id="menu-item4" id1="menu-items4" activeClassName="gallery" />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  
                  <li className="breadcrumb-item active">
                    <Link to="/gallerylist">Gallery</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Edit Gallery Item</li>
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
                          <h4>Edit Gallery Item</h4>
                        </div>
                      </div>
                      {/* Category */}
                      <div className="col-12">
                        <div className="form-group local-forms">
                          <label>Category <span className="login-danger">*</span></label>
                          <select
                            className="form-control"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                          >
                            {categories.map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      {/* Image Upload Component */}
                      <div className="col-12">
                        <ImageUpload id="image" src={formData.newImageURL} loadFile={handleImageLoad} imageName="Image" />
                      </div>
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
                            onClick={() => navigate("/gallerylist")}
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

export default EditGalleryItem;
