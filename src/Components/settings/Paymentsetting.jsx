import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const Paymentsetting = () => {
  return (
    <div>
      <Header />
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
        <li className="nav-item active">
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
        <li className="nav-item">
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
      <div className="col-md-6">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title">Paypal</h5>
            <div className="status-toggle d-flex justify-content-between align-items-center">
              <input type="checkbox" id="status_1" className="check" />
              <label htmlFor="status_1" className="checktoggle">
                checkbox
              </label>
            </div>
          </div>
          <div className="card-body pt-0">
            <form>
              <div className="settings-form">
                <div className="form-group">
                  <p className="pay-cont">Paypal Option</p>
                  <label className="custom_radio me-4">
                    <input
                      type="radio"
                      name="budget"
                      defaultChecked="true"
                    />
                    <span className="checkmark"/> Sandbox
                  </label>
                  <label className="custom_radio">
                    <input type="radio" name="budget" defaultValue="Yes" />
                    <span className="checkmark" /> Live
                  </label>
                </div>
                <div className="form-group form-placeholder">
                  <label>
                    Braintree Tokenization key{" "}
                    <span className="star-red">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="sandbox_pgjcppvs_pd6gznv7zbrx9hb8"
                  />
                </div>
                <div className="form-group form-placeholder">
                  <label>
                    Braintree Merchant ID <span className="star-red">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="pd6gznv7zbrx9hb8"
                  />
                </div>
                <div className="form-group form-placeholder">
                  <label>
                    Braintree Public key <span className="star-red">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="h8bydrz7gcjkp7d4"
                  />
                </div>
                <div className="form-group form-placeholder">
                  <label>
                    Braintree Private key <span className="star-red">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="sandbox_pgjcppvs_pd6gznv7zbrx9hb8"
                  />
                </div>
                <div className="form-group form-placeholder">
                  <label>
                    Paypal APP ID <span className="star-red">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="pd6gznv7zbrx9hb8"
                  />
                </div>
                <div className="form-group form-placeholder">
                  <label>
                    Paypal Secret Key <span className="star-red">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="h8bydrz7gcjkp7d4"
                  />
                </div>
                <div className="form-group mb-0">
                  <div className="settings-btns">
                    <button
                      type="submit"
                      className="border-0 btn btn-primary btn-gradient-primary btn-rounded"
                    >
                      Save
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="submit"
                      className="btn btn-secondary btn-rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title">Stripe</h5>
            <div className="status-toggle d-flex justify-content-between align-items-center">
              <input
                type="checkbox"
                id="status_2"
                className="check"
                defaultChecked="true"
              />
              <label htmlFor="status_2" className="checktoggle">
                checkbox
              </label>
            </div>
          </div>
          <div className="card-body pt-0">
            <form>
              <div className="settings-form">
                <div className="form-group">
                  <p className="pay-cont">Stripe Option</p>
                  <label className="custom_radio me-4">
                    <input
                      type="radio"
                      name="budget"
                      defaultChecked="true"
                    />
                    <span className="checkmark" /> Sandbox
                  </label>
                  <label className="custom_radio">
                    <input type="radio" name="budget" defaultValue="Yes" />
                    <span className="checkmark" /> Live
                  </label>
                </div>
                <div className="form-group form-placeholder">
                  <label>
                    Gateway Name <span className="star-red">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Stripe"
                  />
                </div>
                <div className="form-group form-placeholder">
                  <label>
                    API Key <span className="star-red">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="pk_test_AealxxOygZz84AruCGadWvUV00mJQZdLvr"
                  />
                </div>
                <div className="form-group form-placeholder">
                  <label>
                    Rest Key <span className="star-red">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="sk_test_8HwqAWwBd4C4E77bgAO1jUgk00hDlERgn3"
                  />
                </div>
                <div className="form-group mb-0">
                  <div className="settings-btns">
                    <button
                      type="submit"
                      className="border-0 btn btn-primary btn-gradient-primary btn-rounded"
                    >
                      Save
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="submit"
                      className="btn btn-secondary btn-rounded"
                    >
                      Cancel
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

export default Paymentsetting;
