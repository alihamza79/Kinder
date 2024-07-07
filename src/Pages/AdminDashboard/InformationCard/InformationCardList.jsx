import React, { useState, useEffect } from "react";
import { Table } from "antd";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useLocation } from "react-router-dom";
import { Button } from "antd";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import db from "../../../appwrite/Services/dbServices";
import { plusicon, refreshicon } from "../../../Components/imagepath";
import { onShowSizeChange, itemRender } from "../../../Components/Pagination";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InformationCardList = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecordId, setSelectedRecordId] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateSuccess = sessionStorage.getItem("updateInformationCardSuccess");
    const addSuccess = sessionStorage.getItem("addInformationCardSuccess");
    if (updateSuccess) {
      toast.success("Document updated successfully!", { autoClose: 2000 });
      sessionStorage.removeItem("updateInformationCardSuccess"); // Clear the flag after showing the toast
    }
    if (addSuccess) {
      toast.success("Document Added successfully!", { autoClose: 2000 });
      sessionStorage.removeItem("addInformationCardSuccess"); // Clear the flag after showing the toast
    }
    fetchData();
  }, [location]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const querySnapshot = await db.informationCard.list(); // Fetch documents from Appwrite collection
      let data = querySnapshot.documents.map((doc) => ({
        id: doc.$id,
        ...doc,
      }));

      if (data.length === 0) {
        // Add three dummy documents if the collection is empty
        const dummyData = [
          { Title: "Dummy Title 1", Description: "Dummy Description 1" },
          { Title: "Dummy Title 2", Description: "Dummy Description 2" },
          { Title: "Dummy Title 3", Description: "Dummy Description 3" },
        ];

        for (const dummy of dummyData) {
          const newDocument = await db.informationCard.create(dummy);
          data.push({ id: newDocument.$id, ...newDocument });
        }
      }

      setDataSource(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await db.informationCard.delete(selectedRecordId); // Delete the document from Appwrite
      toast.success("Information card deleted successfully!", { autoClose: 2000 });
      fetchData(); // Refresh data after deletion
      setSelectedRecordId(null);
      hideDeleteModal();
    } catch (error) {
      console.error("Error deleting document:", error);
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
      dataIndex: "Title",
      key: "Title",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
      render: (text) => (
        <div className={text && text.length > 20 ? "multiline-text" : ""}>
          {text}
        </div>
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
                to={`/informationcard/editinformationcard/${record.id}`}
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
        activeClassName="informationcard"
      />
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Navbar*/}
            
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
                    <li className="breadcrumb-item active">
                      Information Card
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
                            <h3>Information Cards</h3>
                            <div className="doctor-search-blk">
                              <div className="add-group">
                                <Link
                                  to="/informationcard/addinformationcard"
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
                <h3>Are you sure you want to delete this information card?</h3>
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

export default InformationCardList;
