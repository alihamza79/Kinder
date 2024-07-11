import { Button, Table } from "antd";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import db from "../../../../appwrite/Services/dbServices"; // Import Appwrite db services
import Header from "../../../../Components/Header";
import { plusicon, refreshicon } from "../../../../Components/imagepath";
import { itemRender, onShowSizeChange } from "../../../../Components/Pagination";
import Sidebar from "../../../../Components/Sidebar";

const RepresentativeList = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecordId, setSelectedRecordId] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const location = useLocation();
  const [representationDate,setRepresentationDate]=useState();
  const navigate = useNavigate();
  const { id } = useParams(); // Get the representation date ID from the URL

  useEffect(() => {
    const updateSuccess = sessionStorage.getItem("updateRepresentativeSuccess");
    const addSuccess = sessionStorage.getItem("addRepresentativeSuccess");
    if (updateSuccess) {
      toast.success("Representative updated successfully!", { autoClose: 2000 });
      sessionStorage.removeItem("updateRepresentativeSuccess"); // Clear the flag after showing the toast
    }
    if (addSuccess) {
      toast.success("Representative added successfully!", { autoClose: 2000 });
      sessionStorage.removeItem("addRepresentativeSuccess"); // Clear the flag after showing the toast
    }
    fetchData();
  }, [location]);

  const fetchData = async () => {
    try {
      setLoading(true);
      // Fetch the representation date document
      const representationDateDoc = await db.representationDates.get(id);
      const representativeIds = representationDateDoc.representativesCollection;

      setRepresentationDate(
        representationDateDoc.fromDate === representationDateDoc.toDate
          ? new Date(representationDateDoc.fromDate).toLocaleDateString().replace(/\//g, '.')
          : `${new Date(representationDateDoc.fromDate).toLocaleDateString().replace(/\//g, '.')} - ${new Date(representationDateDoc.toDate).toLocaleDateString().replace(/\//g, '.')}`
      );
            // Fetch the representative documents
      const representativePromises = representativeIds.map((repId) => db.representatives.get(repId));
      const representatives = await Promise.all(representativePromises);

      const data = representatives.map((rep) => ({
        id: rep.$id,
        hospital: rep.hospital,
        address: rep.address,
        telephoneNumber: rep.telephoneNumber,
        doctors: rep.doctors,
      }));

      setDataSource(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await db.representatives.delete(selectedRecordId); // Delete the document from Appwrite
      toast.success("Representative deleted successfully!", { autoClose: 2000 });
      fetchData(); // Refresh data after deletion
      setSelectedRecordId(null);
      hideDeleteModal();
    } catch (error) {
      console.error("Error deleting document:", error);
      toast.error("Error deleting document: " + error.message, { autoClose: 2000 });
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
      title: "Hospital",
      dataIndex: "hospital",
      key: "hospital",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Telephone",
      dataIndex: "telephoneNumber",
      key: "telephoneNumber",
    },
    {
      title: "Doctor(s)",
      dataIndex: "doctors",
      key: "doctors",
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
                to={`/representatives/editrepresentative/${record.id}`}
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
      <Sidebar id="menu-item4" id1="menu-items4" activeClassName="representatives" />
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Navbar */}
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
                    <li className="breadcrumb-item active">Representatives</li>
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
                            <h3>{`${representationDate} Representatives`}</h3>
                            <div className="doctor-search-blk">
                              <div className="add-group">
                                <Link
                                  to={`/representationdates/${id}/representatives/addrepresentative`}
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
                <h3>Are you sure you want to delete this representative?</h3>
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

export default RepresentativeList;
