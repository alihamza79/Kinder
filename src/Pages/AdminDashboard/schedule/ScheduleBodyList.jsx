import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import db from "../../../appwrite/Services/dbServices";
import {  refreshicon } from "../../../Components/imagepath";
import { onShowSizeChange, itemRender } from "../../../Components/Pagination";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../../Components/Header";
import Sidebar from "../../../Components/Sidebar";

const ScheduleBodyList = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateSuccess = sessionStorage.getItem("updateScheduleSuccess");
    const addSuccess = sessionStorage.getItem("addScheduleSuccess");
    if (updateSuccess) {
      toast.success("Document updated successfully!", { autoClose: 2000 });
      sessionStorage.removeItem("updateScheduleSuccess");
    }
    if (addSuccess) {
      toast.success("Document Added successfully!", { autoClose: 2000 });
      sessionStorage.removeItem("addScheduleSuccess");
    }
    fetchData();
  }, [location]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const querySnapshot = await db.scheduleBody.list();
      const data = querySnapshot.documents.map((doc) => ({
        id: doc.$id,
        ...doc,
      }));

      if (data.length === 0) {
        const newDocuments = [
          await db.scheduleBody.create({ title: "Dummy Title 1", description: "Dummy Description 1" }),
          await db.scheduleBody.create({ title: "Dummy Title 2", description: "Dummy Description 2" }),
        ];
        data.push(...newDocuments.map((doc) => ({ id: doc.$id, ...doc })));
      }

      setDataSource(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const truncateHtml = (text, length) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = text;
    const plainText = tempDiv.textContent || tempDiv.innerText || "";
    return plainText.length > length ? plainText.slice(0, length) + "..." : plainText;
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
      render: (text) => truncateHtml(text, 30),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => (
        <div
          className="multiline-text"
          dangerouslySetInnerHTML={{ __html: truncateHtml(text, 30) }}
        />
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
                to={`/schedulebody/editschedule/${record.id}`}
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

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <>
      <Header />
      <Sidebar
        id="menu-item4"
        id1="menu-items4"
        activeClassName="schedulebody"
      />
      <div className="page-wrapper">
        <div className="content">
          <div className="settings-menu-links">
            <ul className="nav nav-tabs menu-tabs">
              <li className="nav-item">
                <Link className="nav-link" to="/scheduleheader">
                  Schedule Header
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/schedulebody">
                Business Details Body
                </Link>
              </li>
            </ul>
          </div>
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Business Details</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Business Details Body</li>
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
                          <h3>Business Details</h3>
                          
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
      <ToastContainer />
    </>
  );
};

export default ScheduleBodyList;
