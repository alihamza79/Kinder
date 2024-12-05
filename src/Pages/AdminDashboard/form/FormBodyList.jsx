import { Table, Button } from "antd";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllDocuments, deleteDocument } from "../../../firebase/dbService";
import { getFileURL, deleteFileFromStorage } from "../../../firebase/storageService";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Header from "../../../Components/Header";
import { plusicon, refreshicon } from "../../../Components/imagepath";
import { itemRender, onShowSizeChange } from "../../../Components/Pagination";
import Sidebar from "../../../Components/Sidebar";

const FormBodyList = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecordId, setSelectedRecordId] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchData();
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [location, navigate]);

  useEffect(() => {
    const updateSuccess = sessionStorage.getItem("updateFormBodySuccess");
    const addSuccess = sessionStorage.getItem("addFormBodySuccess");
    if (updateSuccess) {
      toast.success("Document updated successfully!", { autoClose: 2000 });
      sessionStorage.removeItem("updateFormBodySuccess");
    }
    if (addSuccess) {
      toast.success("Document added successfully!", { autoClose: 2000 });
      sessionStorage.removeItem("addFormBodySuccess");
    }
  }, [location]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getAllDocuments('formBody');
      const data = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          let fileUrl = '';
          try {
            fileUrl = await getFileURL(doc.data().file);
          } catch (error) {
            console.warn(`Error fetching file for document ${doc.id}:`, error);
            fileUrl = '#';
          }
          return {
            id: doc.id,
            title: doc.data().title,
            fileId: doc.data().file,
            fileUrl: fileUrl,
          };
        })
      );
      setDataSource(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error loading data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setDeleting(true);
      const selectedRecord = dataSource.find((record) => record.id === selectedRecordId);
      if (selectedRecord && selectedRecord.fileId) {
        await deleteFileFromStorage(selectedRecord.fileId);
      }
      await deleteDocument('formBody', selectedRecordId);
      toast.success("Form deleted successfully!", { autoClose: 2000 });
      fetchData();
      setSelectedRecordId(null);
      hideDeleteModal();
    } catch (error) {
      console.error("Error deleting document and file:", error);
      toast.error("Error deleting form. Please try again.");
    } finally {
      setDeleting(false);
    }
  };

  const showDeleteModal = (id) => {
    setSelectedRecordId(id);
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
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "File",
      dataIndex: "fileUrl",
      key: "fileUrl",
      render: (text) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          View File
        </a>
      ),
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
                to={`/formbody/editformbody/${record.id}`}
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
      <Sidebar
        id="menu-item4"
        id1="menu-items4"
        activeClassName="formbody"
      />
      <>
        <div className="page-wrapper">
          <div className="content">
          <div className="settings-menu-links">
              <ul className="nav nav-tabs menu-tabs">
                <li className="nav-item ">
                  <Link
                    className="nav-link"
                    to="/formheader"
                  >
                    Form Header
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    to="/formbody"
                  >
                    Form Body
                  </Link>
                </li>
              </ul>
            </div>
            {/* Page Navbar */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Forms</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">
                      Form
                    </li>
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
                            <h3>Forms</h3>
                            <div className="doctor-search-blk">
                              <div className="add-group">
                                <Link
                                  to="/formbody/addformbody"
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
                          total: dataSource.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        columns={columns}
                        dataSource={dataSource}
                        rowKey={(record) => record.id}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
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
                <h3>Are you sure you want to delete this form?</h3>
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

export default FormBodyList;
