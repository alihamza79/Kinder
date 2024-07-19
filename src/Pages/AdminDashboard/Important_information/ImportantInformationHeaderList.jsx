import { Table } from "antd";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import db from "../../../appwrite/Services/dbServices";
import Header from "../../../Components/Header";
import { itemRender, onShowSizeChange } from "../../../Components/Pagination";
import Sidebar from "../../../Components/Sidebar";

const ImportantInformationHeaderList = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateSuccess = sessionStorage.getItem("updateImportantInformationHeaderSuccess");
    const addSuccess = sessionStorage.getItem("addImportantInformationHeaderSuccess");
    if (updateSuccess) {
      toast.success("Document updated successfully!", { autoClose: 2000 });
      sessionStorage.removeItem("updateImportantInformationHeaderSuccess");
    }
    if (addSuccess) {
      toast.success("Document Added successfully!", { autoClose: 2000 });
      sessionStorage.removeItem("addImportantInformationHeaderSuccess");
    }
    fetchData();
  }, [location]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const querySnapshot = await db.importantInformationHeader.list();
      const data = querySnapshot.documents.map((doc) => ({
        id: doc.$id,
        ...doc,
      }));

      if (data.length === 0) {
        const newDocument = await db.importantInformationHeader.create({
          title: "Dummy Title",
          description: "Dummy Description",
        });
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
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => (
        <div
        style={{
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 3, // Number of lines to show
          WebkitBoxOrient: "vertical",
        }}
      >
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
                to={`/importantinformationheader/editimportantinformationheader/${record.id}`}
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
        activeClassName="importantinformationheader"
      />
      <>
        <div className="page-wrapper">
          <div className="content">
            <div className="settings-menu-links">
              <ul className="nav nav-tabs menu-tabs">
                <li className="nav-item active">
                  <Link className="nav-link" to="/importantinformationheader">
                    Important Information Header
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/importantinformationbody">
                    Important Information Body
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
                      Important Information Header
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
                            <h3>Important Information Headers</h3>
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

export default ImportantInformationHeaderList;
