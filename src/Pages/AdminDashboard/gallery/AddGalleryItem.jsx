import React, { useState, useEffect } from "react";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import storageServices from "../../../appwrite/Services/storageServices";
import db from "../../../appwrite/Services/dbServices";
import { toast, ToastContainer } from "react-toastify";
import FeatherIcon from "feather-icons-react";
import 'react-toastify/dist/ReactToastify.css';
import ImageUpload from "../../../Components/ImageUpload";

const AddGalleryItem = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await db.categories.list();
        const categoriesList = response.documents.flatMap(doc => 
          [doc.category1, doc.category2, doc.category3].filter(cat => cat)
        );
        setCategories(categoriesList);
        if (categoriesList.length > 0) {
          setCategory(categoriesList[0]); // Default to the first category
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleImageLoad = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageURL = URL.createObjectURL(file);
      setImageFile(file);
      setImageURL(newImageURL);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      let uploadedImageId = '';

      if (imageFile) {
        const toastId = toast.loading("Uploading image...");
        try {
          const uploadedImage = await storageServices.images.createFile(imageFile);
          uploadedImageId = uploadedImage.$id;
          toast.update(toastId, { render: "Image uploaded successfully!", type: "success", isLoading: false, autoClose: 2000 });
        } catch (error) {
          toast.update(toastId, { render: "Image upload failed: " + error.message, type: "error", isLoading: false, autoClose: 2000 });
          throw error;
        }
      } else {
        toast.error("Please upload an image", { autoClose: 2000 });
        setLoading(false);
        return;
      }

      if (!category) {
        toast.error("Please select a category", { autoClose: 2000 });
        setLoading(false);
        return;
      }

      await db.galleryBody.create({
        category: category,
        image: uploadedImageId,
      });

      sessionStorage.setItem('addGalleryBodySuccess', 'true');
      navigate("/gallerylist");

    } catch (error) {
      toast.error('Error adding document: ' + error.message, { autoClose: 2000 });
      console.error('Error adding document: ', error);
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
                    <Link to="/landingpage/gallery">Gallery</Link>
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
                  <li className="breadcrumb-item active">Add Gallery Item</li>
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
                          <h4>Add Gallery Item</h4>
                        </div>
                      </div>
                      {/* Category */}
                      <div className="col-12">
                        <div className="form-group local-forms">
                          <label>
                            Category <span className="login-danger">*</span>
                          </label>
                          <select
                            className="form-control"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            disabled={loading}
                            required
                          >
                            <option value="">Select a category...</option>
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
                        <ImageUpload id="image" src={imageURL} loadFile={handleImageLoad} imageName="Image" required />
                      </div>

                      {/* Submit/Cancel Button */}
                      <div className="col-12">
                        <div className="doctor-submit text-end">
                          <button
                            type="submit"
                            className="btn btn-primary submit-form me-2"
                            disabled={loading}
                          >
                            {loading ? "Adding..." : "Add"}
                          </button>
                          <Link to="/gallerylist">
                            <button
                              type="button"
                              className="btn btn-primary cancel-form"
                              disabled={loading}
                            >
                              Cancel
                            </button>
                          </Link>
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

export default AddGalleryItem;
