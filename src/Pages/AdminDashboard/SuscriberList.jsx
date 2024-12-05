import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Checkbox, Spin } from 'antd';
import { MailOutlined, LoadingOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import { db } from '../../config/firebase';
import { collection, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SubscriberList = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubscriber, setSelectedSubscriber] = useState({});
  const [selectedSubscribers, setSelectedSubscribers] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      setIsLoading(true);
      const subscribersRef = collection(db, "subscribers");
      const q = query(subscribersRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const subscriberData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setSubscribers(subscriberData);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
      toast.error("Error fetching subscribers: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const showModal = (subscriber) => {
    setSelectedSubscriber(subscriber);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleReply = () => {
    const mailtoLink = `mailto:${selectedSubscriber.email}?subject=Your Subscription&body=Dear subscriber,%0D%0A%0D%0A`;
    window.location.href = mailtoLink;
    handleOk();
  };

  const handleReplyAll = () => {
    const emailList = selectedSubscribers
      .map((id) => subscribers.find((subscriber) => subscriber.id === id).email)
      .join(",");
    const mailtoLink = `mailto:${emailList}?subject=Your Subscription&body=Dear subscriber,%0D%0A%0D%0A`;
    window.location.href = mailtoLink;
  };

  const handleCheckboxChange = (id, checked) => {
    setSelectedSubscribers((prev) =>
      checked
        ? [...prev, id]
        : prev.filter((subscriberId) => subscriberId !== id)
    );
  };

  const handleDeleteSelected = () => {
    if (selectedSubscribers.length === 0) {
      toast.warning("Please select subscribers to delete");
      return;
    }
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    setIsLoading(true);
    try {
      const deletePromises = selectedSubscribers.map((id) =>
        deleteDoc(doc(db, "subscribers", id))
      );
      await Promise.all(deletePromises);
      
      setSubscribers(prev => 
        prev.filter(subscriber => !selectedSubscribers.includes(subscriber.id))
      );
      setSelectedSubscribers([]);
      toast.success("Subscribers deleted successfully!");
    } catch (error) {
      console.error("Error deleting subscribers:", error);
      toast.error("Failed to delete subscribers: " + error.message);
    } finally {
      setIsLoading(false);
      setIsDeleteModalOpen(false);
    }
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const columns = [
    {
      title: (
        <Checkbox
          onChange={(e) => {
            const checked = e.target.checked;
            const allIds = subscribers.map((subscriber) => subscriber.id);
            setSelectedSubscribers(checked ? allIds : []);
          }}
          checked={
            subscribers.length > 0 && 
            selectedSubscribers.length === subscribers.length
          }
          indeterminate={
            selectedSubscribers.length > 0 && 
            selectedSubscribers.length < subscribers.length
          }
        />
      ),
      dataIndex: "checkbox",
      render: (_, record) => (
        <Checkbox
          onChange={(e) => handleCheckboxChange(record.id, e.target.checked)}
          checked={selectedSubscribers.includes(record.id)}
        />
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <Button
          className="btn btn-primary"
          onClick={() => showModal(record)}
          icon={<MailOutlined />}
        >
          Reply
        </Button>
      ),
    },
  ];

  return (
    <>
      <Header />
      <Sidebar id="menu-item13" activeClassName="subscribers" />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
              <h2 className="cs_section_title cs_fs_32 m-0 text-2xl font-semibold mb-2"> Subscriber List </h2>
              </div>
              <div className="col-auto">
                {selectedSubscribers.length > 0 && (
                  <>
                    <Button
                      danger
                      style={{
                        marginLeft: "20px",
                        backgroundColor: "#E70226",
                        color: "white",
                      }}
                      onClick={handleDeleteSelected}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
                      ) : (
                        "Delete Selected"
                      )}
                    </Button>
                    <Button
                      type="primary"
                      style={{ marginLeft: "20px" }}
                      onClick={handleReplyAll}
                      icon={<MailOutlined />}
                    >
                      Reply All
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      loading={isLoading}
                      columns={columns}
                      dataSource={subscribers}
                      rowKey="id"
                    />
                  </div>

                  <Modal
                    title="Reply to Subscriber"
                    open={isModalOpen}
                    onCancel={handleCancel}
                    footer={[
                      <Button key="back" onClick={handleCancel}>
                        Close
                      </Button>,
                      <Button
                        key="submit"
                        type="primary"
                        onClick={handleReply}
                        icon={<MailOutlined />}
                      >
                        Reply
                      </Button>,
                    ]}
                  >
                    <p>Email: {selectedSubscriber.email}</p>
                    <p>Body: Dear subscriber</p>
                  </Modal>

                  <Modal
                    title="Delete Subscribers"
                    open={isDeleteModalOpen}
                    onCancel={cancelDelete}
                    footer={[
                      <Button key="back" onClick={cancelDelete}>
                        Cancel
                      </Button>,
                      <Button
                        key="submit"
                        type="primary"
                        danger
                        onClick={confirmDelete}
                        loading={isLoading}
                      >
                        Delete
                      </Button>,
                    ]}
                  >
                    <p>Are you sure you want to delete the selected subscribers?</p>
                  </Modal>
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

export default SubscriberList;