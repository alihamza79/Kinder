import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import db from "../../../appwrite/Services/dbServices";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Categories = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category1: "", // Initialize default values for categories
      category2: "",
      category3: "",
    },
  });

  const [submitting, setSubmitting] = useState(false); // State to manage form submission
  const [docId, setDocId] = useState(null); // State to store document ID from Firestore
  const [initialCategories, setInitialCategories] = useState({}); // State to store initial category values

  useEffect(() => {
    // Fetch categories data from Firestore on component mount
    const fetchCategories = async () => {
      try {
        const response = await db.categories.list();
        if (response.documents.length > 0) {
          const doc = response.documents[0];
          setDocId(doc.$id);
          setInitialCategories({
            category1: doc.category1,
            category2: doc.category2,
            category3: doc.category3,
          });
          // Set form values using setValue from react-hook-form
          setValue("category1", doc.category1);
          setValue("category2", doc.category2);
          setValue("category3", doc.category3);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [setValue]); // Dependency array ensures fetch happens once on mount

  // Function to update gallery items when categories change
  const updateGalleryCategories = async (oldCategory, newCategory) => {
    try {
      const response = await db.galleryBody.list();
      const galleryItems = response.documents.filter(item => item.category === oldCategory);
      for (const item of galleryItems) {
        await db.galleryBody.update(item.$id, { category: newCategory });
      }
    } catch (error) {
      console.error("Error updating gallery categories:", error);
    }
  };

  // Form submission handler
  const onSubmit = async (data) => {
    setSubmitting(true); // Set submitting state to true to disable form during submission
    try {
      const promises = [];
      if (data.category1 !== initialCategories.category1) {
        promises.push(updateGalleryCategories(initialCategories.category1, data.category1));
      }
      if (data.category2 !== initialCategories.category2) {
        promises.push(updateGalleryCategories(initialCategories.category2, data.category2));
      }
      if (data.category3 !== initialCategories.category3) {
        promises.push(updateGalleryCategories(initialCategories.category3, data.category3));
      }

      // Wait for all promises to resolve
      await Promise.all(promises);

      // Update or create categories document in Firestore
      if (docId) {
        await db.categories.update(docId, data);
      } else {
        const newDoc = await db.categories.create(data);
        setDocId(newDoc.$id);
      }
      toast.success("Categories updated successfully!", { autoClose: 2000 });
    } catch (error) {
      toast.error("Failed to submit categories!", { autoClose: 2000 });
      console.error("Error submitting categories:", error);
    } finally {
      setSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div>
      <Header />
      <Sidebar id="menu-item13" activeClassName="categories" />
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
                  <li className="breadcrumb-item active">Categories</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="cs_section_title cs_fs_32 m-0 text-2xl font-semibold mb-3">
                  Categories
                </h2>
                <div className="form-group">
                  <label className="text-dark">Category 1</label>
                  <input
                    className="form-control"
                    {...register("category1", { required: true })}
                  />
                  {errors.category1 && <span className="text-danger">Category 1 is required</span>}
                </div>
                <div className="form-group">
                  <label className="text-dark">Category 2</label>
                  <input
                    className="form-control"
                    {...register("category2", { required: true })}
                  />
                  {errors.category2 && <span className="text-danger">Category 2 is required</span>}
                </div>
                <div className="form-group">
                  <label className="text-dark">Category 3</label>
                  <input
                    className="form-control"
                    {...register("category3", { required: true })}
                  />
                  {errors.category3 && <span className="text-danger">Category 3 is required</span>}
                </div>
                <div className="doctor-submit text-end">
                  <button
                    type="submit"
                    className="btn btn-primary submit-form me-2"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Save Categories"}
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

export default Categories;
