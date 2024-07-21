import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import db from "../../appwrite/Services/dbServices";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SocialLinks = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      facebook: "",
      twitter: "",
      instagram: "",
    },
  });

  const [submitting, setSubmitting] = useState(false);
  const [docId, setDocId] = useState(null);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await db.socialLinks.list();
        if (response.documents.length > 0) {
          const doc = response.documents[0];
          setDocId(doc.$id);
          setValue("facebook", doc.facebook);
          setValue("twitter", doc.twitter);
          setValue("instagram", doc.instagram);
        }
      } catch (error) {
        console.error("Error fetching social links:", error);
      }
    };

    fetchSocialLinks();
  }, [setValue]);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      if (docId) {
        await db.socialLinks.update(docId, data);
      } else {
        const newDoc = await db.socialLinks.create(data);
        setDocId(newDoc.$id);
      }
      toast.success("Social Links updated successfully!", { autoClose: 2000 });
    } catch (error) {
      toast.error("Failed to submit Social Links!", { autoClose: 2000 });
      console.error("Error submitting social links:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Header />
      <Sidebar id="menu-item12" activeClassName="settings" />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Landing Page</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Settings</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="cs_section_title cs_fs_32 m-0 text-2xl font-semibold mb-3">
                  Social Media Links
                </h2>
                <div className="form-group">
                  <label className="text-dark">Facebook</label>
                  <input
                    className="form-control"
                    {...register("facebook")}
                  />
                </div>
                <div className="form-group">
                  <label className="text-dark">Twitter</label>
                  <input
                    className="form-control"
                    {...register("twitter")}
                  />
                </div>
                <div className="form-group">
                  <label className="text-dark">Instagram</label>
                  <input
                    className="form-control"
                    {...register("instagram")}
                  />
                </div>
                <div className="doctor-submit text-end">
                  <button
                    type="submit"
                    className="btn btn-primary submit-form me-2"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Save Social Links"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SocialLinks;
