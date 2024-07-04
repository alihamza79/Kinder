/* eslint-disable no-unused-vars */
import React,{ useState } from 'react'
import { Table } from "antd";
import Header from '../Header';
import Sidebar from '../Sidebar';
import { blogimg10, imagesend, pdficon, pdficon3, pdficon4, plusicon, refreshicon, searchnormal, blogimg12,
     blogimg2, blogimg4, blogimg6, blogimg8} from '../imagepath';
import {onShowSizeChange,itemRender}from  '../Pagination'
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';


const AppoinmentList = () => {

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };
    const datasource = [
        {
            id:"1",
            Img:blogimg2,

            FIELD1: "",
            Name: "Andrea Lalema",
            ConsultingDoctor: "Dr.Bernardo James",
            Treatment: "Infertility",
            Mobile: "+1 23 456890",
            Email: "example@email.com",
            Date: "01.10.2022",
            Time: "07:30",
            FIELD9: ""
        },
        {
            id:"2",
            Img:blogimg4,


            FIELD1: "",
            Name: "Smith Bruklin",
            ConsultingDoctor: "Dr.William Stephin",
            Treatment: "Infertility",
            Mobile: "+1 23 456890",
            Email: "example@email.com",
            Date: "01.10.2022",
            Time: "07:30",
            FIELD9: ""
        },
        {
            id:"3",
            Img:blogimg6,

            FIELD1: "",
            Name: "William Stephin",
            ConsultingDoctor: "Dr.Galaviz Lalema",
            Treatment: "Cancer",
            Mobile: "+1 23 456890",
            Email: "example@email.com",
            Date: "01.10.2022",
            Time: "07:30",
            FIELD9: ""
        },
        {
            id:"4",
            Img:blogimg12,

            FIELD1: "",
            Name: "Bernardo James",
            ConsultingDoctor: "Dr.Cristina Groves",
            Treatment: "Infertility",
            Mobile: "+1 23 456890",
            Email: "example@email.com",
            Date: "01.10.2022",
            Time: "07:30",
            FIELD9: " "
        },
        {
            id:"5",
            Img:blogimg10,

            FIELD1: "",
            Name: "Cristina Groves",
            ConsultingDoctor: "Dr.Smith Bruklin",
            Treatment: "Infertility",
            Mobile: "+1 23 456890",
            Email: "example@email.com",
            Date: "01.10.2022",
            Time: "07:30",
            FIELD9: " "
        },
        {
            id:"6",
            Img:blogimg8,

            FIELD1: "",
            Name: "Mark Hay Smith",
            ConsultingDoctor: "Dr.Smith Bruklin",
            Treatment: "Prostate",
            Mobile: "+1 23 456890",
            Email: "example@email.com",
            Date: "01.10.2022",
            Time: "07:30",
            FIELD9: " "
        },
        {
            id:"7",
            Img:blogimg2,

            FIELD1: "",
            Name: "Andrea Lalema",
            ConsultingDoctor: "Dr.Smith Bruklin",
            Treatment: "Infertility",
            Mobile: "+1 23 456890",
            Email: "example@email.com",
            Date: "01.10.2022",
            Time: "07:30",
            FIELD9: " "
        },
        {
            id:"8",
            Img:blogimg4,

            FIELD1: "",
            Name: "Smith Bruklin",
            ConsultingDoctor: "Dr.Bernardo James",
            Treatment: "Infertility",
            Mobile: "+1 23 456890",
            Email: "example@email.com",
            Date: "01.10.2022",
            Time: "07:30",
            FIELD9: " "
        }
    ]
    const columns = [
        {
            title: "Name",
            dataIndex: "Name",
            render: (text, record) => (
                <>
                    <h2 className="profile-image">
                       <Link to="#" className="avatar avatar-sm me-2">
                            <img
                                className="avatar-img rounded-circle"
                                src={record.Img}
                                alt="User Image"
                            />
                        </Link>
                       <Link to="#">{record.Name}</Link>
                    </h2>

                </>
            )
        },
        {
            title:"ConsultingDoctor",
            dataIndex: "ConsultingDoctor",
                sorter: (a, b) => a.ConsultingDoctor.length - b.ConsultingDoctor.length
        },
        {
            title:"Treatment",
            dataIndex: "Treatment",
                sorter: (a, b) => a.Treatment.length - b.Treatment.length
        },
        {
            title:"Mobile",
            dataIndex: "Mobile",
                sorter: (a, b) => a.Mobile.length - b.Mobile.length
        },
        {
            title:"Email",
            dataIndex: "Email",
                sorter: (a, b) => a.Email.length - b.Email.length,
                render: (text, record) => (
                    <>

                            <Link to="#">{record.Mobile}</Link>

                    </>
                )
        }, {
            title:"Date",
            dataIndex: "Date",
                sorter: (a, b) => a.Date.length - b.Date.length
        }, {
            title:"Time",
            dataIndex: "Time",
                sorter: (a, b) => a.Time.length - b.Time.length
        },
        {
          title: "",
          dataIndex: "FIELD8",
          render: (text, record) => (
            <>
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
                    <Link className="dropdown-item" to="/editappoinments">
                      <i className="far fa-edit me-2" />
                      Edit
                    </Link>
                    <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_patient">
                    <i className="fa fa-trash-alt m-r-5"></i> Delete</Link>
                  </div>
                </div>
              </div>
            </>
          ),
        },

    ]


  return (
    <>
    <Header />
    <Sidebar id='menu-item4' id1='menu-items4' activeClassName='appoinment-list'/>
    <>
  <div className="page-wrapper">
    <div className="content">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
               <Link to="#">Appoinment</Link>
              </li>
              <li className="breadcrumb-item">
                <i className="feather-chevron-right">
                  <FeatherIcon icon="chevron-right"/>
                </i>
              </li>
              <li className="breadcrumb-item active">Appoinment  List</li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-sm-12">
          <div className="card card-table show-entire">
            <div className="card-body">
              {/* Table Header */}
              <div className="page-table-header mb-2">
                <div className="row align-items-center">
                  <div className="col">
                    <div className="doctor-table-blk">
                      <h3>Appoinment List</h3>
                      <div className="doctor-search-blk">
                        <div className="top-nav-search table-search-blk">
                          <form>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here"
                            />
                           <Link className="btn">
                              <img
                                src={searchnormal}
                               alt="#"
                              />
                            </Link>
                          </form>
                        </div>
                        <div className="add-group">
                          <Link to="/addappoinments"
                            className="btn btn-primary add-pluss ms-2"
                          >
                            <img src={plusicon}alt="#" />
                          </Link>
                         <Link
                            to="#"
                            className="btn btn-primary doctor-refresh ms-2"
                          >
                            <img src={refreshicon}alt="#" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto text-end float-end ms-auto download-grp">
                   <Link to="#" className=" me-2">
                      <img src={pdficon}alt="#" />
                    </Link>
                   <Link to="#" className=" me-2">
                    </Link>
                   <Link to="#" className=" me-2">
                      <img src={pdficon3}alt="#" />
                    </Link>
                   <Link to="#">
                      <img src={pdficon4}alt="#" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* /Table Header */}
              <div className="table-responsive doctor-list">
              <Table
                        pagination={{
                          total: datasource.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          //showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        columns={columns}
                        dataSource={datasource}

                        rowSelection={rowSelection}
                        rowKey={(record) => record.id}
                      />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="notification-box">
      <div className="msg-sidebar notifications msg-noti">
        <div className="topnav-dropdown-header">
          <span>Messages</span>
        </div>
        <div className="drop-scroll msg-list-scroll" id="msg_list">
          <ul className="list-box">
            <li>
             <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">R</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Richard Miles </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
             <Link to="#">
                <div className="list-item new-message">
                  <div className="list-left">
                    <span className="avatar">J</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">John Doe</span>
                    <span className="message-time">1 Aug</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
             <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">T</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Tarah Shropshire </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
             <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">M</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Mike Litorus</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
             <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">C</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Catherine Manseau </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
             <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">D</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Domenic Houston </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
             <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">B</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Buster Wigton </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
             <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">R</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Rolland Webber </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
             <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">C</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Claire Mapes </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
             <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">M</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Melita Faucher</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
             <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">J</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Jeffery Lalor</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
             <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">L</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Loren Gatlin</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
             <Link to="#">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">T</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Tarah Shropshire</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="topnav-dropdown-footer">
         <Link to="#">See all messages</Link>
        </div>
      </div>
    </div>
  </div>
  <div id="delete_patient" className="modal fade delete-modal" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center">
          <img src={imagesend}alt="#" width={50} height={46} />
          <h3>Are you sure want to delete this ?</h3>
          <div className="m-t-20">
            {" "}
           <Link to="#" className="btn btn-white me-2" data-bs-dismiss="modal">
              Close
            </Link>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="delete_patient" className="modal fade delete-modal" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center">
          <img src={imagesend}alt="#" width={50} height={46} />
          <h3>Are you sure want to delete this ?</h3>
          <div className="m-t-20">
            {" "}
           <Link to="#" className="btn btn-white me-2" data-bs-dismiss="modal">
              Close
            </Link>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

</>


    <>

</>

</>

  )
}

export default AppoinmentList;

