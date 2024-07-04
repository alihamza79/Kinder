import React from 'react'
import Header from "../Header";
import Sidebar from "../Sidebar";
import { blogimg10, blogimg2, blogimg4, clipicons, drafticon, editicon2, foldericon01, foldericon02, foldericon03, foldericon04, foldericon05, inboxicon, profileavatar03, profileavatar04, profileavatar05, profileavatar07, refreshicons, searchnormal, sendicon, staremptyicon, staricon,tagicon01, tagicon02, tagicon03, tagicon04, trashicon } from '../imagepath';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import { Link } from "react-router-dom";
const Inbox = () => {
  return (
   <>
    <div className="main-wrapper">
        <Header />
        <Sidebar id='menu-item10' id1='menu-items10' activeClassName='inbox'/>
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
              <i className="feather-chevron-right">
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
                <img src={blogimg2}alt="img" />
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
                    <Link className="dropdown-item" to="#">
                      <i className="feather-user me-2 text-primary" /> Profile
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="feather-plus-circle me-2 text-success" />{" "}
                      Archive
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="feather-trash-2 me-2 text-danger" /> Delete
                    </Link>
                    <Link className="dropdown-item " to="#">
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
                    <i className="feather-plus " >
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
                    <Link className="dropdown-item" to="#">
                      <i className="feather-user me-2 text-primary" /> Profile
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="feather-plus-circle me-2 text-success" />{" "}
                      Archive
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="feather-trash-2 me-2 text-danger" /> Delete
                    </Link>
                    <Link className="dropdown-item " to="#">
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
                      src={tagicon03}
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
                      <FeatherIcon icon="plus" />
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
                    <Link className="dropdown-item" to="#">
                      <i className="feather-user me-2 text-primary" /> Profile
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="feather-plus-circle me-2 text-success" />{" "}
                      Archive
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="feather-trash-2 me-2 text-danger" /> Delete
                    </Link>
                    <Link className="dropdown-item " to="#">
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
      <div className="col-xl-8">
        <div className="card chat-box mb-2">
          <div className=" chat-search-group ">
            <div className="chat-user-group mb-0 d-flex align-items-center">
              <div className="top-check me-3">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                </div>
              </div>
              <div className="top-inbox-blk comman-flex me-3">
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
                  <Link className="dropdown-item" to="#">
                    {" "}
                    Reply
                  </Link>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    Forward
                  </Link>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    Archived
                  </Link>
                  <Link className="dropdown-item " to="#">
                    {" "}
                    Mark as Read
                  </Link>
                  <Link className="dropdown-item " to="#">
                    {" "}
                    Mark as Unread
                  </Link>
                  <Link className="dropdown-item " to="#">
                    {" "}
                    Delete
                  </Link>
                </div>
              </div>
              <div className="top-liv-search top-chat-search top-action-search">
                <form>
                  <div className="chat-search mb-0">
                    <div className="form-group me-2 mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search here"
                      />
                      <Link className="btn">
                        <img src={searchnormal} alt="#" />
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="top-action-right">
              <ul className="nav">
                <li>
                  <Link to="#">
                    <img src={refreshicons} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src={tagicon04} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src={inboxicon} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src={foldericon05} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src={trashicon} alt="img" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="email-content">
          <div className="table-responsive">
            <table className="table table-inbox table-hover">
              <tbody>
                <tr className="unread clickable-row" data-to="/mail-view">
                  <td>
                    <div className="top-check ">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="mail-important">
                      <i className="fas fa-star starred" />
                    </span>
                  </td>
                  <td className="name">
                    <div className="email-img-blk">
                      <div className="email-img">
                        <img
                          src={profileavatar03}
                          alt="img"
                        />
                      </div>
                      <div className="send-user">
                        <h4>
                          Bernardo James{" "}
                          <span className="email-market">Marketting</span>
                        </h4>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa
                        </p>
                      </div>
                    </div>
                  </td>
                  <td />
                  <td className="mail-date">
                    <img
                      src={clipicons}
                      className="me-2"
                      alt="img"
                    />
                    13:14
                  </td>
                </tr>
                <tr className="unread clickable-row" data-to="/mail-view">
                  <td>
                    <div className="top-check ">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="mail-important">
                      <img src={staremptyicon} alt="img" />
                    </span>
                  </td>
                  <td className="name">
                    <div className="email-img-blk">
                      <div className="email-img">
                        <img
                          src={profileavatar04}
                          alt="img"
                        />
                      </div>
                      <div className="send-user">
                        <h4>
                          Galaviz Lalema{" "}
                          <span className="email-bills">Bills</span>
                        </h4>
                        <p>
                          Fwd: quis nostrud exercitation ullamco laboris nisi ut
                          aliquip voluptate velit esse cillum.
                        </p>
                      </div>
                    </div>
                  </td>
                  <td />
                  <td className="mail-date">8:42</td>
                </tr>
                <tr className="clickable-row" data-to="/mail-view">
                  <td>
                    <div className="top-check ">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="mail-important">
                      <img src={staremptyicon} alt="img" />
                    </span>
                  </td>
                  <td className="name">
                    <div className="email-img-blk">
                      <div className="email-img">
                        <img
                          src={profileavatar05}
                          alt="img"
                        />
                      </div>
                      <div className="send-user">
                        <h4>
                          Bernardo James{" "}
                          <span className="email-work">Work</span>
                        </h4>
                        <p>
                          Fwd: tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam
                        </p>
                      </div>
                    </div>
                  </td>
                  <td />
                  <td className="mail-date">
                    <img
                      src={clipicons}
                      className="me-2"
                      alt="img"
                    />
                    13:14
                  </td>
                </tr>
                <tr className="unread clickable-row" data-to="/mail-view">
                  <td>
                    <div className="top-check ">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="mail-important">
                      <i className="fas fa-star starred" />
                    </span>
                  </td>
                  <td className="name">
                    <div className="email-img-blk">
                      <div className="email-img">
                        <img
                          src={blogimg10}
                          alt="img"
                        />
                      </div>
                      <div className="send-user">
                        <h4>
                          Bernardo James{" "}
                          <span className="email-office">Office</span>
                        </h4>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa
                        </p>
                      </div>
                    </div>
                  </td>
                  <td />
                  <td className="mail-date">18 Sep</td>
                </tr>
                <tr className="clickable-row" data-to="/mail-view">
                  <td>
                    <div className="top-check ">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="mail-important">
                      <i className="fas fa-star starred" />
                    </span>
                  </td>
                  <td className="name">
                    <div className="email-img-blk">
                      <div className="email-img">
                        <img
                          src={profileavatar07}
                          alt="img"
                        />
                      </div>
                      <div className="send-user">
                        <h4>
                          Bernardo James{" "}
                          <span className="email-market">Marketting</span>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod
                        </p>
                      </div>
                    </div>
                  </td>
                  <td />
                  <td className="mail-date">
                    <img
                      src={clipicons}
                      className="me-2"
                      alt="img"
                    />
                    13:14
                  </td>
                </tr>
                <tr className="clickable-row" data-to="/mail-view">
                  <td>
                    <div className="top-check ">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="mail-important">
                      <img src={staremptyicon} alt="img" />
                    </span>
                  </td>
                  <td className="name">
                    <div className="email-img-blk">
                      <div className="email-img">
                        <img
                          src={ profileavatar04}
                          alt="img"
                        />
                      </div>
                      <div className="send-user">
                        <h4>
                          Galaviz Lalema{" "}
                          <span className="email-bills">Bills</span>
                        </h4>
                        <p>
                          Fwd: quis nostrud exercitation ullamco laboris nisi ut
                          aliquip voluptate velit esse cillum.
                        </p>
                      </div>
                    </div>
                  </td>
                  <td />
                  <td className="mail-date">1 Aug</td>
                </tr>
                <tr className="unread clickable-row" data-to="/mail-view">
                  <td>
                    <div className="top-check ">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="mail-important">
                      <img src={staremptyicon} alt="img" />
                    </span>
                  </td>
                  <td className="name">
                    <div className="email-img-blk">
                      <div className="email-img">
                        <img
                          src={profileavatar05}
                          alt="img"
                        />
                      </div>
                      <div className="send-user">
                        <h4>
                          Bernardo James{" "}
                          <span className="email-work">Work</span>
                        </h4>
                        <p>
                          Fwd: tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam
                        </p>
                      </div>
                    </div>
                  </td>
                  <td />
                  <td className="mail-date">
                    <img
                      src={clipicons}
                      className="me-2"
                      alt="img"
                    />
                    13:14
                  </td>
                </tr>
                <tr className="clickable-row" data-to="/mail-view">
                  <td>
                    <div className="top-check ">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="mail-important">
                      <i className="fas fa-star starred" />
                    </span>
                  </td>
                  <td className="name">
                    <div className="email-img-blk">
                      <div className="email-img">
                        <img
                          src={blogimg10}
                          alt="img"
                        />
                      </div>
                      <div className="send-user">
                        <h4>
                          Bernardo James{" "}
                          <span className="email-market">Marketting</span>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod
                        </p>
                      </div>
                    </div>
                  </td>
                  <td />
                  <td className="mail-date">
                    <img
                      src={clipicons}
                      className="me-2"
                      alt="img"
                    />
                    13:14
                  </td>
                </tr>
                <tr className="unread clickable-row" data-to="/mail-view">
                  <td>
                    <div className="top-check">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="mail-important">
                      <img src={staremptyicon} alt="img" />
                    </span>
                  </td>
                  <td className="name">
                    <div className="email-img-blk">
                      <div className="email-img">
                        <img
                          src={profileavatar04}
                          alt="img"
                        />
                      </div>
                      <div className="send-user">
                        <h4>
                          Bernardo James{" "}
                          <span className="email-work">Work</span>
                        </h4>
                        <p>
                          Fwd: tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam
                        </p>
                      </div>
                    </div>
                  </td>
                  <td />
                  <td className="mail-date">
                    <img
                      src={clipicons}
                      className="me-2"
                      alt="img"
                    />
                    13:14
                  </td>
                </tr>
                <tr className="clickable-row" data-to="/mail-view">
                  <td>
                    <div className="top-check">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="mail-important">
                      <i className="fas fa-star starred" />
                    </span>
                  </td>
                  <td className="name">
                    <div className="email-img-blk">
                      <div className="email-img">
                        <img
                          src={blogimg4}
                          alt="img"
                        />
                      </div>
                      <div className="send-user">
                        <h4>
                          Bernardo James{" "}
                          <span className="email-office">Office</span>
                        </h4>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa
                        </p>
                      </div>
                    </div>
                  </td>
                  <td />
                  <td className="mail-date">Sep 12</td>
                </tr>
              </tbody>
            </table>
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

export default Inbox;
