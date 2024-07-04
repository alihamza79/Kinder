import React from 'react'
import Header from "../Header";
import Sidebar from "../Sidebar";
import { blogimg2, chaticon07, documenticon, drafticon, editicon2, foldericon01, foldericon02, foldericon03, foldericon04, foldericon05, forwardicon01, forwardicon02, forwardicon03, galleryicon, inboxicon, printericon, replayicon, replayicon01, sendicon, staricon, tagicon01, tagicon02, tagicon04, trashicon, warningicon } from '../imagepath';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

import { Link } from 'react-router-dom';
const MailView = () => {
  return (
    <>
      <div className="main-wrapper">
         <Header />
         <Sidebar id='menu-item10' id1='menu-items10' activeClassName='mail-view'/>
         <div className="page-wrapper">
  <div className="content">
    {/* Page Header */}
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
             <Link to="#">App </Link>
            </li>
            <li className="breadcrumb-item">
              <i className="feather-chevron-right" >
                <FeatherIcon icon="chevron-right"/>
                </i>
            </li>
            <li className="breadcrumb-item active">Inbox</li>
          </ul>
        </div>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      <div className="col-xl-4 d-flex">
        <div className="card chat-box">
          <div className="chat-widgets">
            <div className="chat-user-group d-flex align-items-center">
              <div className="img-users call-user">
                <img src={blogimg2} alt="img" />
              </div>
              <div className="chat-users user-main">
                <div className="user-titles user-head-compse">
                  <h5> William Stephin </h5>
                  <div className="chat-user-time">
                    <p>10:22 AM</p>
                  </div>
                </div>
                <div className="drop-item chat-menu user-dot-list">
                 <Link
                   to="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className=""
                  >
                    <i className="feather-more-vertical">
                        <FeatherIcon icon="more-vertical" />
                        </i>
                  </Link>
                  <div className="dropdown-menu" style={{}}>
                   <Link className="dropdown-item"to="">
                      <i className="feather-user me-2 text-primary" /> Profile
                    </Link>
                   <Link className="dropdown-item"to="#">
                      <i className="feather-plus-circle me-2 text-success" />{" "}
                      Archive
                    </Link>
                   <Link className="dropdown-item"to="#">
                      <i className="feather-trash-2 me-2 text-danger" /> Delete
                    </Link>
                   <Link className="dropdown-item "to="#">
                      <i className="feather-slash me-2 text-secondary" /> Block
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="compose-mail">
             <Link to="/compose-mail" className="btn btn-primary">
                <img
                  src={editicon2}
                  className="me-2"
                  alt="img"
                />
                Compose Mail
              </Link>
            </div>
            <div className="email-menu-blk">
              <ul>
                <li className="active">
               <Link to="#">
                    <img
                      src={inboxicon}
                      className="me-2"
                      alt="img"
                    />
                    Inbox<span className="comman-flex">50</span>
                  </Link>
                </li>
                <li>
               <Link to="#">
                    <img
                      src={sendicon}
                      className="me-2"
                      alt="img"
                    />
                    Sent <span className="comman-flex">120</span>
                  </Link>
                </li>
                <li>
               <Link to="#">
                    <img
                      src={drafticon}
                      className="me-2"
                      alt="img"
                    />
                    Draft <span className="comman-flex">20</span>
                  </Link>
                </li>
                <li>
               <Link to="#">
                    <img
                      src={staricon}
                      className="me-2"
                      alt="img"
                    />
                    Starred <span className="comman-flex">05</span>
                  </Link>
                </li>
                <li>
                 <Link to="#">
                    <img
                      src={trashicon}
                      className="me-2"
                      alt="img"
                    />
                    Trash <span className="comman-flex">12</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="label-blk comman-space-flex">
              <h4>Labels</h4>
              <ul className="nav label-add-list">
                <li>
                 <Link to="#" className="add-list-btn me-2">
                    <i className="feather-plus ">
                        <FeatherIcon icon="plus"/>
                        </i>
                  </Link>
                </li>
                <li>
                 <Link
                   to="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="add-list-btn"
                  >
                    <i className="feather-more-vertical">
                        <FeatherIcon icon="more-vertical" />
                        </i>
                  </Link>
                  <div className="dropdown-menu" style={{}}>
                   <Link className="dropdown-item"to="#">
                      <i className="feather-user me-2 text-primary" /> Profile
                    </Link>
                   <Link className="dropdown-item"to="#">
                      <i className="feather-plus-circle me-2 text-success" />{" "}
                      Archive
                    </Link>
                   <Link className="dropdown-item"to="#">
                      <i className="feather-trash-2 me-2 text-danger" /> Delete
                    </Link>
                   <Link className="dropdown-item "to="#">
                      <i className="feather-slash me-2 text-secondary" /> Block
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="email-menu-blk">
              <ul>
                <li>
               <Link to="#">
                    <img
                      src={tagicon01}
                      className="me-2"
                      alt="img"
                    />
                    Work<span className="comman-flex">50</span>
                  </Link>
                </li>
                <li>
               <Link to="#">
                    <img
                      src={tagicon02}
                      className="me-2"
                      alt="img"
                    />
                    Personal <span className="comman-flex">120</span>
                  </Link>
                </li>
                <li>
               <Link to="#">
                    <img
                      src={tagicon04}
                      className="me-2"
                      alt="img"
                    />
                    Read Later <span className="comman-flex">20</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="label-blk comman-space-flex">
              <h4>Folders</h4>
              <ul className="nav label-add-list ">
                <li>
                 <Link to="#" className="add-list-btn me-2">
                    <i className="feather-plus ">
                        <FeatherIcon icon="plus"/>
                        </i>
                  </Link>
                </li>
                <li>
                 <Link
                   to="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="add-list-btn"
                  >
                    <i className="feather-more-vertical">
                        <FeatherIcon icon="more-vertical" />
                        </i>
                  </Link>
                  <div className="dropdown-menu" style={{}}>
                   <Link className="dropdown-item"to="#">
                      <i className="feather-user me-2 text-primary" /> Profile
                    </Link>
                   <Link className="dropdown-item"to="#">
                      <i className="feather-plus-circle me-2 text-success" />{" "}
                      Archive
                    </Link>
                   <Link className="dropdown-item"to="#">
                      <i className="feather-trash-2 me-2 text-danger" /> Delete
                    </Link>
                   <Link className="dropdown-item "to="#">
                      <i className="feather-slash me-2 text-secondary" /> Block
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="email-menu-blk">
              <ul className="mb-0">
                <li>
               <Link to="#">
                    <img
                      src={foldericon01}
                      className="me-2"
                      alt="img"
                    />
                    Personal<span className="comman-flex">50</span>
                  </Link>
                </li>
                <li>
               <Link to="#">
                    <img
                      src={foldericon02}
                      className="me-2"
                      alt="img"
                    />
                    Office <span className="comman-flex">120</span>
                  </Link>
                </li>
                <li>
               <Link to="#">
                    <img
                      src={foldericon03}
                      className="me-2"
                      alt="img"
                    />
                    Bills <span className="comman-flex">20</span>
                  </Link>
                </li>
                <li>
               <Link to="#">
                    <img
                      src={foldericon04}
                      className="me-2"
                      alt="img"
                    />
                    Medical <span className="comman-flex">20</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-8 ">
        <div className="card chat-box ">
          <div className="mailview-content view-content-bottom">
            <div className="mail-view-list">
              <ul className="nav">
                <li>
               <Link to="#">
                    <img alt="#" src={warningicon} />
                  </Link>
                </li>
                <li>
               <Link to="#">
                    <img alt="#" src={tagicon04} />
                  </Link>
                </li>
                <li>
               <Link to="#">
                    <img alt="#" src={inboxicon} />
                  </Link>
                </li>
                <li>
               <Link to="#">
                    <img alt="#" src={foldericon05} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mailview-header comman-space-flex">
              <div className="sender-info comman-flex">
                <div className="sender-img">
                  <img
                    alt="#"
                    src={blogimg2}
                    className="rounded-circle me-2"
                  />
                </div>
                <div className="send-user send-user-name">
                  <h4>
                    Bernardo James{" "}
                    <span className="email-market">Marketting</span>
                  </h4>
                  <p>
                    <span>From:</span> Markhaysmith@example.com
                  </p>
                </div>
              </div>
              <div className="mail-reports">
                <ul className="nav">
                  <li>
                   <Link to="#" className="ford-angle star-bg">
                      <i className="fas fa-star starred" />
                    </Link>
                  </li>
                  <li>
                   <Link to="#" className="ford-angle">
                      <img alt="#" src={forwardicon01} />
                    </Link>
                  </li>
                  <li>
                   <Link to="#" className="ford-angle">
                      <img alt="#" src={forwardicon02} />
                    </Link>
                  </li>
                  <li>
                   <Link to="#" className="ford-angle">
                      <img alt="#" src={forwardicon03} />
                    </Link>
                  </li>
                  <li>
                   <Link
                     to="#"
                      className="ford-angle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="feather-more-vertical">
                        <FeatherIcon icon="more-vertical" />
                        </i>
                    </Link>
                    <div className="dropdown-menu" style={{}}>
                     <Link className="dropdown-item"to="#">
                        <i className="feather-user me-2 text-primary" /> Profile
                      </Link>
                     <Link className="dropdown-item"to="#">
                        <i className="feather-plus-circle me-2 text-success" />{" "}
                        Archive
                      </Link>
                     <Link className="dropdown-item"to="#">
                        <i className="feather-trash-2 me-2 text-danger" />{" "}
                        Delete
                      </Link>
                     <Link className="dropdown-item "to="#">
                        <i className="feather-slash me-2 text-secondary" />{" "}
                        Block
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mailview-inner">
              <p>Hola, thanks for reaching me out.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Scelerisque purus semper eget duis at. Feugiat in fermentum
                posuere urna net.
              </p>
              <p>Leo in vitae turpis massa sed element ?</p>
            </div>
            <div className="thank-mail">
              <h5>Thanks</h5>
              <h4>Mark hay smith</h4>
            </div>
            <div className="mail-attach">
              <h2>
                Attachments< Link to="#">Download All</Link>
              </h2>
              <ul className="msg-sub-list nav">
                <li>
                  <img
                    src={documenticon}
                    alt="#"
                    className="me-1"
                  />
                  Expense.txt <span className="ms-1">30.0 MB</span>
                  <img
                    src={chaticon07}
                    alt="#"
                    className="ms-2 "
                  />
                  <i className="feather-x ms-2">
                    <FeatherIcon icon="x"/>
                    </i>
                </li>
                <li>
                  <img
                    src={galleryicon}
                    alt="#"
                    className="me-1"
                  />
                  Expense.img <span className="ms-1">4.0 MB</span>
                  <img
                    src={chaticon07}
                    alt="#"
                    className="ms-2 "
                  />
                  <i className="feather-x ms-2">
                    <FeatherIcon icon="x"/>
                    </i>
                </li>
              </ul>
            </div>
            <div className="forward-send">
             <Link to="#" className="btn btn-primary replay-btn me-2">
                <img
                  src={replayicon}
                  className="me-2"
                  alt="img"
                />
                Reply
              </Link>
             <Link to="#" className="btn btn-primary forwrd-btn">
                <img
                  src={replayicon01}
                  className="me-2"
                  alt="img"
                />
                Forward
              </Link>
             <Link to="#">
                <img
                  src={printericon}
                  className="ms-2 me-2"
                  alt="img"
                />
              </Link>
             <Link to="#">
                <img
                  src={trashicon}
                  className="me-2"
                  alt="img"
                />
              </Link>
            </div>
          </div>
          <div className="mailview-content">
            <div className="mail-view-list">
              <ul className="nav">
                <li>
               <Link to="#">
                    <img alt="#" src={warningicon} />
                  </Link>
                </li>
                <li>
               <Link to="#">
                    <img alt="#" src={tagicon04} />
                  </Link>
                </li>
                <li>
               <Link to="#">
                    <img alt="#" src={inboxicon} />
                  </Link>
                </li>
                <li>
               <Link to="#">
                    <img alt="#" src={foldericon05} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mailview-header comman-space-flex">
              <div className="sender-info comman-flex">
                <div className="sender-img">
                  <img
                    alt="#"
                    src={blogimg2}
                    className="rounded-circle me-2"
                  />
                </div>
                <div className="send-user send-user-name">
                  <h4>
                    Bernardo James{" "}
                    <span className="email-market">Marketting</span>
                  </h4>
                  <p>
                    <span>From:</span> Markhaysmith@example.com
                  </p>
                </div>
              </div>
              <div className="mail-reports">
                <ul className="nav">
                  <li>
                   <Link to="#" className="ford-angle star-bg">
                      <i className="fas fa-star starred" />
                    </Link>
                  </li>
                  <li>
                   <Link to="#" className="ford-angle">
                      <img alt="#" src={forwardicon01} />
                    </Link>
                  </li>
                  <li>
                   <Link to="#" className="ford-angle">
                      <img alt="#" src={forwardicon02} />
                    </Link>
                  </li>
                  <li>
                   <Link to="#" className="ford-angle">
                      <img alt="#" src={forwardicon03} />
                    </Link>
                  </li>
                  <li>
                   <Link
                     to="#"
                      className="ford-angle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="feather-more-vertical">
                        <FeatherIcon icon="more-vertical" />
                        </i>
                    </Link>
                    <div className="dropdown-menu" style={{}}>
                     <Link className="dropdown-item"to="#">
                        <i className="feather-user me-2 text-primary" /> Profile
                      </Link>
                     <Link className="dropdown-item"to="#">
                        <i className="feather-plus-circle me-2 text-success" />{" "}
                        Archive
                      </Link>
                     <Link className="dropdown-item"to="#">
                        <i className="feather-trash-2 me-2 text-danger" />{" "}
                        Delete
                      </Link>
                     <Link className="dropdown-item "to="#">
                        <i className="feather-slash me-2 text-secondary" />{" "}
                        Block
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mailview-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </p>
            </div>
            <div className="thank-mail">
              <h5>Thanks</h5>
              <h4>Mark hay smith</h4>
            </div>
            <div className="forward-send">
             <Link to="#" className="btn btn-primary replay-btn me-2">
                <img
                  src={replayicon}
                  className="me-2"
                  alt="img"
                />
                Reply
              </Link>
             <Link to="#" className="btn btn-primary forwrd-btn">
                <img
                  src={replayicon01}
                  className="me-2"
                  alt="img"
                />
                Forward
              </Link>
             <Link to="#">
                <img
                  src={printericon}
                  className="ms-2 me-2"
                  alt="img"
                />
              </Link>
             <Link to="#">
                <img
                  src={trashicon}
                  className="me-2"
                  alt="img"
                />
              </Link>
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

       </div>
       </>
  )
}

export default MailView
