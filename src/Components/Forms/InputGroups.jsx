import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link } from 'react-router-dom'
const InputGroups = () => {
  return (
    <>
      <Header />
      <Sidebar id='menu-item15' id1='menu-items15' activeClassName='input-groups'/>
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Dashboard </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right"/>
                        </i>
                    </li>
                    <li className="breadcrumb-item active">Input Groups</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card-box">
                  <h4 className="card-title">Basic Examples</h4>
                  <form action="#">
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Group Left
                      </label>
                      <div className="col-md-10">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              @
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Group Right
                      </label>
                      <div className="col-md-10">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                          <span className="input-group-text" id="basic-addon2">
                            @example.com
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        URL Example
                      </label>
                      <div className="col-md-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">https://</span>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Group with Price
                      </label>
                      <div className="col-md-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <input type="text" className="form-control" />
                          <span className="input-group-text">.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Group with Price (Left)
                      </label>
                      <div className="col-md-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <div className="input-group-prepend">
                            <span className="input-group-text">0.00</span>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="card-box">
                  <h4 className="card-title">Sizing</h4>
                  <form action="#">
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Input Group Large
                      </label>
                      <div className="col-md-10">
                        <div className="input-group input-group-lg">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="sizing-addon1"
                            >
                              @
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-describedby="sizing-addon1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Input Group Default
                      </label>
                      <div className="col-md-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="sizing-addon2"
                            >
                              @
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-describedby="sizing-addon2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Input Group Small
                      </label>
                      <div className="col-md-10">
                        <div className="input-group input-group-sm">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="sizing-addon3"
                            >
                              @
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-describedby="sizing-addon3"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="card-box">
                  <h4 className="card-title">Checkbox and Radio Addons</h4>
                  <form action="#">
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Checkbox
                      </label>
                      <div className="col-md-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <input type="checkbox" />
                            </span>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">Radio</label>
                      <div className="col-md-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <input type="radio" />
                            </span>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="card-box">
                  <h4 className="card-title">Multiple addons</h4>
                  <form action="#">
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Radio and Text addons
                      </label>
                      <div className="col-md-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <input type="checkbox" />
                            </span>
                          </div>
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Two addons
                      </label>
                      <div className="col-md-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <div className="input-group-prepend">
                            <span className="input-group-text">0.00</span>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="card-box">
                  <h4 className="card-title">Buttons with dropdowns</h4>
                  <form action="#">
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Radio and Text addons
                      </label>
                      <div className="col-md-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <button
                              type="button"
                              className="btn btn-white dropdown-toggle"
                              data-bs-toggle="dropdown"
                            >
                              Action
                            </button>
                            <div className="dropdown-menu">
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div
                                role="separator"
                                className="dropdown-divider"
                              />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Left dropdown"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Two addons
                      </label>
                      <div className="col-md-10">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Right dropdown"
                          />
                          <button
                            type="button"
                            className="btn btn-white dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            Action
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <Link className="dropdown-item" to="#">
                              Action
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Another action
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Something else here
                            </Link>
                            <div
                              role="separator"
                              className="dropdown-divider"
                            />
                            <Link className="dropdown-item" to="#">
                              Separated link
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
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
                          <span className="message-author">
                            {" "}
                            Tarah Shropshire{" "}
                          </span>
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
                          <span className="message-author">
                            {" "}
                            Catherine Manseau{" "}
                          </span>
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
                          <span className="message-author">
                            {" "}
                            Domenic Houston{" "}
                          </span>
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
                          <span className="message-author">
                            {" "}
                            Buster Wigton{" "}
                          </span>
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
                          <span className="message-author">
                            {" "}
                            Rolland Webber{" "}
                          </span>
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
                          <span className="message-author">
                            Tarah Shropshire
                          </span>
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
      </>
    </>
  );
};

export default InputGroups;
