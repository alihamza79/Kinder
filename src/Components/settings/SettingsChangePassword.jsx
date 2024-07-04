import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const SettingsChangePassword = () => {
  return (
    <div>
        <Header/>
        <Sidebar />
        <div className="page-wrapper">
  {/* Page Content */}
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="index.html">Dashboard </Link>
            </li>
            <li className="breadcrumb-item">
              <i className="feather-chevron-right">
                <FeatherIcon icon="chevron-right"/>
                </i>
            </li>
            <li className="breadcrumb-item active">Settings</li>
          </ul>
        </div>
      </div>
    </div>
    {/* /Page Header */}
    <div className="settings-menu-links">
      <ul className="nav nav-tabs menu-tabs">
        <li className="nav-item ">
          <Link className="nav-link" to="/settings">
            General Settings
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/localization">
            Localization
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/paymentsetting">
            Payment Settings
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/settingsemail">
            Email Settings
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/settingssocialmedia">
            Social Media Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/settingssociallink">
            Social Links
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/settingsseo">
            SEO Settings
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/settingsthem">
            Theme Settings
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/settingschangepassword">
            Change Password
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/settingsothers">
            Others
          </Link>
        </li>
      </ul>
    </div>
    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="row">
                <h4 className="page-title">Change Password</h4>
                <div className="col-12 col-md-6 col-xl-12">
                  <div className="form-group local-forms">
                    <label>
                      Old password <span className="login-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-6">
                  <div className="form-group local-forms">
                    <label>
                      New password <span className="login-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-6">
                  <div className="form-group local-forms">
                    <label>
                      Confirm password <span className="login-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="doctor-submit text-end">
                    <button
                      type="submit"
                      className="btn btn-primary submit-form me-2"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Content */}
  <div className="notification-box">
    <div className="msg-sidebar notifications msg-noti">
      <div className="topnav-dropdown-header">
        <span>Messages</span>
      </div>
      <div className="drop-scroll msg-list-scroll" id="msg_list">
        <ul className="list-box">
          <li>
            <Link to="chat.html">
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
            <Link to="chat.html">
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
            <Link to="chat.html">
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
            <Link to="chat.html">
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
            <Link to="chat.html">
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
            <Link to="chat.html">
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
            <Link to="chat.html">
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
            <Link to="chat.html">
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
            <Link to="chat.html">
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
            <Link to="chat.html">
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
            <Link to="chat.html">
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
            <Link to="chat.html">
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
            <Link to="chat.html">
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
        <Link to="chat.html">See all messages</Link>
      </div>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default SettingsChangePassword
