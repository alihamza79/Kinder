import React, { useState, useEffect } from "react";
import Header from "../../../../Components/Header";
import Sidebar from "../../../../Components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ImageUpload from "../../../../Components/ImageUpload";
import { getDocument, updateDocument } from "../../../../firebase/dbService";
import { uploadFile, getFileURL, deleteFileFromStorage } from "../../../../firebase/storageService";

const EditCarouselItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    text: "",
    imageId: "",
    newImageFile: null,
    newImageId: "",
    newImageURL: "",
  });

  useEffect(() => {
    const fetchDocumentData = async () => {
      try {
        const documentSnapshot = await getDocument('heroCarousel', id);
        if (documentSnapshot.exists()) {
          const data = documentSnapshot.data();
          let imageUrl = "";
          try {
            imageUrl = await getFileURL(data.image);
          } catch (error) {
            console.warn("Error fetching image:", error);
          }
          setFormData({
            text: data.text,
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

    if (!formData.text.trim()) {
      toast.error("Text is required", { autoClose: 2000 });
      setLoading(false);
      return;
    }

    if (!formData.newImageFile && !formData.imageId) {
      toast.error("Image is required", { autoClose: 2000 });
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      let newImageId = formData.imageId;

      if (formData.newImageFile) {
        const toastId = toast.loading("Uploading image...");
        try {
          const filePath = `carousel/${Date.now()}-${formData.newImageFile.name}`;
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

      await updateDocument('heroCarousel', id, {
        text: formData.text,
        image: newImageId,
      });

      sessionStorage.setItem('updateCarouselItemSuccess', 'true');
      navigate("/herocarousel");
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
        activeClassName="carousel"
      />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/carousel">Hero Section </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">
                    <Link to="/carousel">Carousel</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Edit Carousel Item</li>
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
                          <h4>Edit Carousel Item</h4>
                        </div>
                      </div>
                      {/* Text */}
                      <div className="col-12 col-md-12 col-xl-12">
                        <div className="form-group local-forms">
                          <label>Text <span className="login-danger">*</span></label>
                          <input
                            className="form-control"
                            type="text"
                            name="text"
                            value={formData.text}
                            onChange={handleChange}
                            disabled={loading}
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
                            onClick={() => navigate("/herocarousel")}
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

export default EditCarouselItem;
