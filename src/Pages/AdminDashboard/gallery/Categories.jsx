import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getAllDocuments, updateDocument, addDocument } from "../../../firebase/dbService";

const Categories = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category1: "",
      category2: "",
      category3: "",
    },
  });

  const [submitting, setSubmitting] = useState(false);
  const [docId, setDocId] = useState(null);
  const [initialCategories, setInitialCategories] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllDocuments('categories');
        if (!response.empty) {
          const doc = response.docs[0];
          setDocId(doc.id);
          const data = doc.data();
          setInitialCategories({
            category1: data.category1,
            category2: data.category2,
            category3: data.category3,
          });
          setValue("category1", data.category1);
          setValue("category2", data.category2);
          setValue("category3", data.category3);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [setValue]);

  const updateGalleryCategories = async (oldCategory, newCategory) => {
    try {
      const response = await getAllDocuments('galleryBody');
      const galleryItems = response.docs.filter(item => item.data().category === oldCategory);
      for (const item of galleryItems) {
        await updateDocument('galleryBody', item.id, { category: newCategory });
      }
    } catch (error) {
      console.error("Error updating gallery categories:", error);
    }
  };

  const onSubmit = async (data) => {
    setSubmitting(true);
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

      await Promise.all(promises);

      if (docId) {
        await updateDocument('categories', docId, data);
      } else {
        const newDoc = await addDocument('categories', data);
        setDocId(newDoc.id);
      }
      toast.success("Categories updated successfully!", { autoClose: 2000 });
    } catch (error) {
      toast.error("Failed to submit categories!", { autoClose: 2000 });
      console.error("Error submitting categories:", error);
    } finally {
      setSubmitting(false);
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
