import React from "react";
import FeatherIcon from "feather-icons-react";
import { useEffect } from "react";
import { getCurrentUser } from "../../src/appwrite/Services/authServices";
import { useNavigate } from "react-router-dom";

const ImageUpload = ({ id, src, loadFile, imageName }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getCurrentUser()) {
      navigate('/login');
    }
  
    
  }, [])
  
  const handleFileChange = (event) => {
    loadFile(event, id); // Pass the id to the loadFile function
  };

  return (
    <div className="col-10 col-md-2 col-xl-4">
      <div className="form-group">
        <label className={src ? "" : "local-top"}>
          {imageName} <span className="login-danger">*</span>
        </label>
        <div
          className={src ? "upload-files-avator" : "upload-files-avator settings-btn"}
          style={{ position: 'relative' }}
        >
          {/* Display the uploaded image */}
          {src && (
            <div className="uploaded-image">
              <img
                src={src}
                alt="Uploaded Image"
                style={{
                  width: '180px',
                  height: '180px',
                  objectFit: 'cover',
                }}
              />
              <div className="edit-icon" style={{ position: 'absolute', backgroundColor: 'white', left: 170, top: 160 }}>
                {/* Input for choosing a new image */}
                <input
                  type="file"
                  accept="image/*"
                  name={`image-${id}`} // Use id to create unique input name
                  id={`file-${id}`} // Use id to create unique input id
                  onChange={handleFileChange}
                  className="hide-input"
                  style={{ display: 'none' }}
                />
                <label htmlFor={`file-${id}`} className="upload" style={{ cursor: 'pointer' }}>
                  <FeatherIcon icon="edit" />
                </label>
              </div>
            </div>
          )}
          {/* Input for choosing a new image */}
          {!src && (
            <div>
              <input
                type="file"
                accept="image/*"
                name={`image-${id}`} // Use id to create unique input name
                id={`file-${id}`} // Use id to create unique input id
                onChange={handleFileChange}
                className="hide-input"
                placeholder="Select an Image..."
              />
              <label htmlFor={`file-${id}`} className="upload" style={{ cursor: 'pointer' }}>
                Choose File
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
