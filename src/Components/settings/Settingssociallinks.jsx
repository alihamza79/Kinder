import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const Settingssociallinks = () => {

  const [inputFields, setInputFields] = useState([{}]);

  const addInputField = () => {
    setInputFields([...inputFields, {
    }])

  }
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  }
  const handleChanges = (index, evnt) => {

    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);

  }

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
              <li className="nav-item active">
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
            <div className="col-lg-6 col-md-8">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Social Link Settings</h5>
                </div>
                <div className="card-body pt-0">
                  <form>
                    <div className="settings-form">
                      <div className="links-info">
                        <div className="row form-row links-cont">
                          <div className="form-group form-placeholder d-flex">
                            <button className="btn social-icon ">
                              <i className="feather-facebook">
                                <FeatherIcon icon="facebook" />
                              </i>
                            </button>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="https://www.facebook.com"
                            />
                            <div>
                              <Link to="#" className="btn trash" onClick={removeInputFields}>
                                <i className="feather-trash-2">
                                  <FeatherIcon icon="trash-2" />
                                </i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="links-info">
                        <div className="row form-row links-cont">
                          <div className="form-group form-placeholder d-flex">
                            <button className="btn social-icon">
                              <i className="feather-twitter">
                                <FeatherIcon icon="twitter" />
                              </i>
                            </button>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="https://www.twitter.com"
                            />
                            <div>
                              <Link to="#" className="btn trash" onClick={removeInputFields}>
                                <i className="feather-trash-2">
                                  <FeatherIcon icon="trash-2" />
                                </i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="links-info">
                        <div className="row form-row links-cont">
                          <div className="form-group form-placeholder d-flex">
                            <button className="btn social-icon">
                              <i className="feather-youtube">
                                <FeatherIcon icon="youtube" />
                              </i>
                            </button>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="https://www.youtube.com"
                            />
                            <div>
                              <Link to="#" className="btn trash" onClick={removeInputFields}>
                                <i className="feather-trash-2">
                                  <FeatherIcon icon="trash-2" />
                                </i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="links-info">
                        <div className="row form-row links-cont">
                          <div className="form-group form-placeholder d-flex">
                            <button className="btn social-icon">
                              <i className="feather-linkedin">
                                <FeatherIcon icon="linkedin" />
                              </i>
                            </button>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="https://www.linkedin.com"
                            />
                            <div>
                              <Link to="#" className="btn trash" onClick={removeInputFields}>
                                <i className="feather-trash-2">
                                  <FeatherIcon icon="trash-2" />
                                </i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {
                        inputFields.map((data, index) => {
                          return (
                            <div className="links-info" key={index} onChange={(evnt) => handleChanges(index, evnt)}>
                              <div className="row form-row links-cont">
                                <div className="form-group form-placeholder d-flex">
                                  <button className="btn social-icon">
                                    <i><FeatherIcon icon="github" /></i>
                                  </button>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Social Link"
                                  />
                                  <div>
                                    <Link to="#" className="btn trash" onClick={removeInputFields}>
                                      <i><FeatherIcon icon="trash-2" /></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                    <div className="form-group text-end">
                      <Link to="#" className="btn add-links" onClick={addInputField}>
                        <i className="fas fa-plus me-1" /> Add More
                      </Link>
                    </div>
                    <div className="form-group mb-0">
                      <div className="settings-btns">
                        <button type="submit" className="border-0 btn btn-primary btn-gradient-primary btn-rounded me-2">
                          Submit
                        </button>
                        <button type="submit" className="btn btn-secondary btn-rounded">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>


    </div>
  )
}

export default Settingssociallinks
