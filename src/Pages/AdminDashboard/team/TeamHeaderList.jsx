import React, { useState, useEffect } from "react";
import { Table } from "antd";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";
import { Link, useLocation } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import db from "../../../appwrite/Services/dbServices"; // Import Appwrite db services
import { onShowSizeChange, itemRender } from "../../../Components/Pagination";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TeamHeaderList = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateSuccess = sessionStorage.getItem("updateTeamHeaderSuccess");
    const addSuccess = sessionStorage.getItem("addTeamHeaderSuccess");
    if (updateSuccess) {
      toast.success("Document updated successfully!", { autoClose: 2000 });
      sessionStorage.removeItem("updateTeamHeaderSuccess"); // Clear the flag after showing the toast
    }
    if (addSuccess) {
      toast.success("Document Added successfully!", { autoClose: 2000 });
      sessionStorage.removeItem("addTeamHeaderSuccess"); // Clear the flag after showing the toast
    }
    fetchData();
  }, [location]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const querySnapshot = await db.teamHeader.list(); 
      let data = querySnapshot.documents.map((doc) => ({
        id: doc.$id,
        ...doc,
      }));

      if (data.length === 0) {
        // Add a dummy document if the collection is empty
        const dummy = { title: "Dummy Title" };
        const newDocument = await db.teamHeader.create(dummy);
        data.push({ id: newDocument.$id, ...newDocument });
      }

      setDataSource(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
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
                to={`/teamheader/editteamheader/${record.id}`}
              >
                <i className="far fa-edit me-2" />
                Edit
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  

  return (
    <>
      <Header />
      <Sidebar
        id="menu-item4"
        id1="menu-items4"
        activeClassName="teamheader"
      />
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Navbar */}
            <div className="settings-menu-links">
              <ul className="nav nav-tabs menu-tabs">
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    to="/teamheader"
                  >
                    Team Header
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/teamlist"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>
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
                      Team Header
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
                            <h3>Team Headers</h3>
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
      <ToastContainer />
    </>
  );
};

export default TeamHeaderList;
