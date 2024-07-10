import { Button, Table } from "antd";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import db from "../../../appwrite/Services/dbServices"; // Import Appwrite db services
import { storage } from "../../../appwrite/config";
import { buckets } from "../../../appwrite/buckets";
import Header from "../../../Components/Header";
import { plusicon, refreshicon } from "../../../Components/imagepath";
import { itemRender, onShowSizeChange } from "../../../Components/Pagination";
import Sidebar from "../../../Components/Sidebar";

const BlogView = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateSuccess = sessionStorage.getItem("updateBlogSuccess");
    const addSuccess = sessionStorage.getItem("addBlogSuccess");
    if (updateSuccess) {
      toast.success("Blog updated successfully!", { autoClose: 2000 });
      sessionStorage.removeItem("updateBlogSuccess"); // Clear the flag after showing the toast
    }
    if (addSuccess) {
      toast.success("Blog added successfully!", { autoClose: 2000 });
      sessionStorage.removeItem("addBlogSuccess"); // Clear the flag after showing the toast
    }
    fetchData();
  }, [location]);

  const getImageUrl = async (imageId) => {
    try {
      const result = await storage.getFileView(buckets[0].id, imageId);
      return result.href;
    } catch (error) {
      console.error("Error fetching image URL:", error);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const querySnapshot = await db.blogs.list(); // Fetch documents from Appwrite collection
      const data = await Promise.all(
        querySnapshot.documents.map(async (doc) => {
          const imageUrl = await getImageUrl(doc.imageUrl);
          return {
            id: doc.$id,
            ...doc,
            imageUrl: imageUrl,
            imageId: doc.imageUrl // Store the original image ID
          };
        })
      );
      setBlogs(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setDeleting(true);
      const selectedBlog = blogs.find((blog) => blog.id === selectedBlogId);
      if (selectedBlog && selectedBlog.imageId) {
        // Delete image from Appwrite storage if it exists
        await storage.deleteFile(buckets[0].id, selectedBlog.imageId);
      }
      await db.blogs.delete(selectedBlogId); // Delete the document from Appwrite
      toast.success("Blog deleted successfully!", { autoClose: 2000 });
      fetchData(); // Refresh data after deletion
      setSelectedBlogId(null);
      hideDeleteModal();
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setDeleting(false);
    }
  };

  const showDeleteModal = (id) => {
    setSelectedBlogId(id);
    setDeleteModalVisible(true);
  };

  const hideDeleteModal = () => {
    setDeleteModalVisible(false);
  };

  const columns = [
    {
      title: "S/N",
      dataIndex: "serialNumber",
      key: "serialNumber",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (text) => (
        <img
          src={text}
          alt="Image"
          className="image-column"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="text-end">
          <div className="dropdown dropdown-action">
            <Link
              to="#"
              className="action-icon dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v" />
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link
                className="dropdown-item"
                to={`/blogview/edit/${record.id}`}
              >
                <i className="far fa-edit me-2" />
                Edit
              </Link>
              <Link
                className="dropdown-item"
                to="#"
                onClick={() => showDeleteModal(record.id)}
              >
                <i className="fa fa-trash-alt m-r-5"></i> Delete
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleRefresh = () => {
    fetchData(); // Refresh data from Appwrite
  };

  return (
    <>
      <Header />
      <Sidebar id="menu-item11" id1="menu-items11" activeClassName="blog-view" />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Blog</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <FeatherIcon icon="chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Blogs</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table show-entire">
                <div className="card-body">
                  <div className="page-table-header mb-2">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="doctor-table-blk">
                          <h3>Blogs</h3>
                          <div className="doctor-search-blk">
                            <div className="add-group">
                              <Link
                                to="/blogview/addblog"
                                className="btn btn-primary add-pluss ms-2"
                              >
                                <img src={plusicon} alt="#" />
                              </Link>
                              <Link
                                to="#"
                                className="btn btn-primary doctor-refresh ms-2"
                                onClick={handleRefresh}
                              >
                                <img src={refreshicon} alt="#" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive doctor-list">
                    <Table
                      loading={loading}
                      pagination={{
                        total: blogs.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      columns={columns}
                      dataSource={blogs}
                      rowKey={(record) => record.id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {deleteModalVisible && (
        <div
          className={
            deleteModalVisible
              ? "modal fade show delete-modal"
              : "modal fade delete-modal"
          }
          style={{
            display: deleteModalVisible ? "block" : "none",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <h3>Are you sure you want to delete this blog?</h3>
                <div className="m-t-20">
                  <Button
                    onClick={hideDeleteModal}
                    className="btn btn-white me-2 pt-1"
                  >
                    Close
                  </Button>
                  <Button
                    type="button"
                    className="btn btn-danger pt-1"
                    onClick={handleDelete}
                    disabled={deleting}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default BlogView;
