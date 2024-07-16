import React, { useState, useEffect } from "react";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import db from "../../../appwrite/Services/dbServices";
import storageServices from "../../../appwrite/Services/storageServices";
import ImageUpload from "../../../Components/ImageUpload";

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
        const response = await db.categories.list();
        const categoriesList = response.documents.flatMap(doc => 
          [doc.category1, doc.category2, doc.category3].filter(cat => cat)
        );
        setCategories(categoriesList);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchDocumentData = async () => {
      try {
        const documentSnapshot = await db.galleryBody.get(id);
        if (documentSnapshot) {
          let imageUrl = "";
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
          const uploadedImage = await storageServices.images.createFile(formData.newImageFile);
          newImageId = uploadedImage.$id;
          toast.update(toastId, { render: "Image uploaded successfully!", type: "success", isLoading: false, autoClose: 2000 });
        } catch (error) {
          toast.update(toastId, { render: "Image upload failed: " + error.message, type: "error", isLoading: false, autoClose: 2000 });
          throw error;
        }
      }

      if (formData.newImageFile && formData.imageId !== newImageId) {
        try {
          console.log("Image id to be deleted: ", formData.imageId);
          await storageServices.images.deleteFile(formData.imageId);
        } catch (error) {
          console.warn("Old image not found in storage.");
        }
      }

      await db.galleryBody.update(id, {
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
                  <li className="breadcrumb-item">
                    <Link to="/landingpage/gallery">Landing Page </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">
                    <Link to="/landingpage/gallery">Gallery</Link>
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
