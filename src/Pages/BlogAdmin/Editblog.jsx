/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import FeatherIcon from "feather-icons-react";
import TextEditor from '../../Components/TextEditor';


import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import Select from "react-select";

const Editblog = () => {
  const loadFile = (event) => {
    // Handle file loading logic here
  };
  const [selectedOption, setSelectedOption] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [blog, setBlog] = useState([
    { value: 1, label: "Choose Blog Category" },
    { value: 2, label: "Health Care" },
    { value: 3, label: "Child" },
    { value: 4, label: "Safety" },
  ]);
  const [category,setCategory ] = useState([
    { value: 1, label: "Choose Sub Blog Category" },
    { value: 2, label: "Health Care" },
    { value: 3, label: "Corona Virus" },

  ]);

  return (
    <>

      <div className="main-wrapper">
        <Header />
        <Sidebar id='menu-item11' id1='menu-items11' activeClassName='edit-blog'/>
        {/* page-wrapper-start  */}
        <>
          <div className="page-wrapper">

              <div className="content">
                {/* Page Header */}
                <div className="page-header">
                  <div className="row">
                    <div className="col-sm-12">
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link to="#">Blog </Link>
                        </li>
                        <li className="breadcrumb-item">
                          <i className="feather-chevron-right">
                            <FeatherIcon icon="chevron-right"/>
                            </i>
                        </li>
                        <li className="breadcrumb-item active">Edit Blogs</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Page Header */}
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <form>
                          <div className="row">
                            <div className="col-12">
                              <div className="form-heading">
                                <h4>Blog Details</h4>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-6">
                              <div className="form-group local-forms">
                                <label>
                                  Blog Title <span className="login-danger" >*</span>

                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder=" Vaccines Are Close - But Right Now We Need to Hunker Down"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-6">
                              <div className="form-group local-forms">
                                <label>
                                  Author Name <span className="login-danger">*</span>
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
                                  Blog Category <span className="login-danger">*</span>
                                </label>
                                <Select
                          className="custom-react-select"
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          menuPortalTarget={document.body}
                          // styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                          options={blog}
                          id="search-commodity"
                          components={{
                            IndicatorSeparator: () => null
                          }}
                          styles={{
                            control: (baseStyles, state) => ({
                              menuPortal: base => ({ ...base, zIndex: 9999 }),
                              ...baseStyles,
                              borderColor: state.isFocused ?'none' : '2px solid rgba(46, 55, 164, 0.1);',
                               boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                              '&:hover': {
                                borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                              },
                              borderRadius: '10px',
                              fontSize: "14px",
                                minHeight: "45px",
                            }),
                            dropdownIndicator: (base, state) => ({
                              ...base,
                              transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                              transition: '250ms',
                              width: '35px',
                              height: '35px',
                            }),
                          }}
                        />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-6">
                              <div className="form-group local-forms">
                                <label>
                                  Blog Sub Category{" "}
                                  <span className="login-danger">*</span>
                                </label>
                                <Select
                          className="custom-react-select"
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          menuPortalTarget={document.body}
                          // styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                          options={category}
                          id="search-commodity"
                          components={{
                            IndicatorSeparator: () => null
                          }}
                          styles={{
                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                            control: (baseStyles, state) => ({
                              ...baseStyles,
                              borderColor: state.isFocused ?'none' : '2px solid rgba(46, 55, 164, 0.1);',
                               boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                              '&:hover': {
                                borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                              },
                              borderRadius: '10px',
                              fontSize: "14px",
                                minHeight: "45px",
                            }),
                            dropdownIndicator: (base, state) => ({
                              ...base,
                              transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                              transition: '250ms',
                              width: '35px',
                              height: '35px',
                            }),
                          }}
                        />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-6">
                              <div className="form-group local-forms">
                                <label>
                                  Tags <small>(separated with a comma)</small>{" "}
                                  <span className="login-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  data-role="tagsinput"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-6">
                              <div className="form-group select-gender">
                                <label className="gen-label">
                                  Blog Status <span className="login-danger">*</span>
                                </label>
                                <div className="form-check-inline">
                                  <label className="form-check-label">
                                    <input
                                      type="radio"
                                      name="gender"
                                      className="form-check-input"
                                      defaultChecked="true"

                                    />
                                    Active
                                  </label>
                                </div>
                                <div className="form-check-inline">
                                  <label className="form-check-label">
                                    <input
                                      type="radio"
                                      name="gender"
                                      className="form-check-input"
                                    />
                                    In Active
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-12">
                              <div className="form-group summer-mail">
                                <TextEditor />
                                {/* <textarea
                        rows={4}
                        cols={5}
                        className="form-control summernote"
                        placeholder=" "
                        defaultValue={""}
                      /> */}
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-12">
                              <div className="form-group local-top-form">
                                <label className="local-top">
                                  Avatar <span className="login-danger">*</span>
                                </label>
                                <div className="settings-btn upload-files-avator">
                              <input
                                type="file"
                                accept="image/*"
                                name="image"
                                id="file"
                                onChange={loadFile}
                                className="hide-input"
                              />
                               <label htmlFor="file" className="upload">
                                Choose File
                              </label>
                            </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="doctor-submit text-end">
                                <button
                                  type="submit"
                                  className="btn btn-primary submit-form me-2"
                                >
                                  Publish Blog
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-primary cancel-form"
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

            <div id="delete_patient" className="modal fade delete-modal" role="dialog">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body text-center">
                    <img src="assets/img/sent.png" alt="#" width={50} height={46} />
                    <h3>Are you sure want to delete this ?</h3>
                    <div className="m-t-20">
                      {" "}
                      <Link to="#" className="btn btn-white" data-bs-dismiss="modal">
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


        {/* page-wrapper-end */}

      </div>
      <div className="sidebar-overlay" data-reff="" />
    </>

  )
}

export default Editblog
