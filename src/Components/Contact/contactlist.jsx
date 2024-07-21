import React, { useEffect, useState } from "react";
import { Table, Button, Checkbox, Select } from "antd";
import { MailOutlined } from "@ant-design/icons";

import Header from "../Header";
import Sidebar from "../Sidebar";
import { imagesend } from "../imagepath";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

import db from '../../appwrite/Services/dbServices';

const { Option } = Select;

const Contactlist = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});
  const [filter, setFilter] = useState("all");
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteType, setDeleteType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await db.contacts.list();
      const contactData = response.documents.map((doc) => ({
        id: doc.$id,
        name: doc.name,
        email: doc.email,
        phoneNumber: doc.phone,
        message: doc.comment,
        read: doc.read || false,
      }));
      setContacts(contactData);
      setFilteredContacts(contactData);
    };

    fetchContacts();
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredContacts(contacts);
    } else {
      const isRead = filter === "read";
      setFilteredContacts(
        contacts.filter((contact) => contact.read === isRead)
      );
    }
  }, [filter, contacts]);

  const showModal = (contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleReply = () => {
    window.location.href = `mailto:${selectedContact.email}?subject=Eskino&body=Hi ${selectedContact.name},%0D%0A%0D%0A`;
    handleOk();
  };

  const handleMarkAsRead = async (contact) => {
    await db.contacts.update(contact.id, { read: true });
    setContacts(
      contacts.map((c) => (c.id === contact.id ? { ...c, read: true } : c))
    );
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleCheckboxChange = (id, checked) => {
    setSelectedContacts((prev) =>
      checked ? [...prev, id] : prev.filter((contactId) => contactId !== id)
    );
  };

  const handleDeleteSelected = () => {
    setDeleteType("selected");
    setIsDeleteModalOpen(true);
  };

  const handleDeleteAllRead = () => {
    setDeleteType("allRead");
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (deleteType === "selected") {
      const promises = selectedContacts.map((id) => db.contacts.delete(id));
      await Promise.all(promises);
      setContacts(
        contacts.filter((contact) => !selectedContacts.includes(contact.id))
      );
      setSelectedContacts([]);
    } else if (deleteType === "allRead") {
      const readContacts = contacts
        .filter((contact) => contact.read)
        .map((contact) => contact.id);
      const promises = readContacts.map((id) => db.contacts.delete(id));
      await Promise.all(promises);
      setContacts(
        contacts.filter((contact) => !readContacts.includes(contact.id))
      );
    }
    setIsDeleteModalOpen(false);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setDeleteType("");
  };

  const columns = [
    {
      title: (
        <Checkbox
          onChange={(e) => {
            const checked = e.target.checked;
            const allIds = filteredContacts.map((contact) => contact.id);
            setSelectedContacts(checked ? allIds : []);
          }}
          checked={selectedContacts.length === filteredContacts.length}
        />
      ),
      dataIndex: "checkbox",
      render: (_, record) => (
        <Checkbox
          onChange={(e) => handleCheckboxChange(record.id, e.target.checked)}
          checked={selectedContacts.includes(record.id)}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      sorter: (a, b) => a.phoneNumber.localeCompare(b.phoneNumber),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <>
          <Button className="btn btn-primary" onClick={() => showModal(record)}>
            View Message
          </Button>
          {!record.read && (
            <Button
              className="btn btn-primary"
              style={{ marginLeft: "20px" }}
              onClick={() => handleMarkAsRead(record)}
            >
              Mark as Read
            </Button>
          )}
        </>
      ),
    },
  ];

  return (
    <>
      <Header />
      <Sidebar id="menu-item1" activeClassName="contact-list" />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="cs_section_title cs_fs_32 m-0 text-2xl font-semibold mb-2">
                  Contact List
                </h2>
                <Select
                  defaultValue="all"
                  style={{ width: 200 }}
                  onChange={handleFilterChange}
                >
                  <Option value="all">All</Option>
                  <Option value="read">Read</Option>
                  <Option value="unread">Unread</Option>
                </Select>
                {selectedContacts.length > 0 && (
                  <Button
                    type="danger"
                    style={{
                      marginLeft: "20px",
                      backgroundColor: "#E70226",
                      color: "white",
                    }}
                    onClick={handleDeleteSelected}
                  >
                    Delete
                  </Button>
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
                      columns={columns}
                      dataSource={filteredContacts}
                      rowKey="id"
                    />
                  </div>
                  {isModalOpen && (
                    <Modal
                      title="Contact Message"
                      visible={isModalOpen}
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
                      <p>{selectedContact.message}</p>
                    </Modal>
                  )}
                  <div
                    className={
                      isDeleteModalOpen
                        ? "modal fade show delete-modal"
                        : "modal fade delete-modal"
                    }
                    style={{
                      display: isDeleteModalOpen ? "block" : "none",
                      backgroundColor: "rgba(0,0,0,0.5)",
                    }}
                    role="dialog"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-body text-center">
                          <img src={imagesend} alt="#" width={50} height={46} />
                          <h3>
                            Are you sure you want to delete{" "}
                            {deleteType === "selected"
                              ? "the selected contacts?"
                              : "all read contacts?"}
                          </h3>
                          <div className="m-t-20">
                            <Button
                              onClick={cancelDelete}
                              className="btn btn-white me-2"
                            >
                              Close
                            </Button>
                            <Button
                              type="button"
                              className="btn btn-danger"
                              onClick={confirmDelete}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactlist;
