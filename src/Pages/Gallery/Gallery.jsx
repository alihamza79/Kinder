import React, { useState } from "react";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Lightbox from "yet-another-react-lightbox";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Blog1, Blog2, Blog3, Blog4 } from "../../Components/imagepath";

const GalleryImage = () => {
  const images = [
    Blog1,
    Blog2,
    Blog3,
    Blog4,
    Blog1,
    Blog2,
    Blog3,
    Blog4,
    Blog1,
    Blog2,
    Blog3,
    Blog4,
  ];

 
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(false);
  };

  const closeLightbox = () => {
    setPhotoIndex(0);
    setIsOpen(false);
  };

  return (
    <>
   {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
      {!isOpen && (
        <>
          <Header />
          <Sidebar
            id="menu-item17"
            id1="menu-items17"
            activeClassName="gallery"
          />
          <div className="page-wrapper">
            <div className="content">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="index.html">Dashboard </Link>
                      </li>
                      <li className="breadcrumb-item">
                        <i className="feather-chevron-right">
                          <FeatherIcon icon="chevron-right" />
                        </i>
                      </li>
                      <li className="breadcrumb-item active">Gallery</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Page Header */}

              <div id="lightgallery" className="row">
              <div>
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="src"
                      className="img-thumbnail"
                      onClick={() => openLightbox(index)}
                      style={{
                        cursor: "pointer",
                        margin: "20px",
                        width: "150px",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default  GalleryImage;

