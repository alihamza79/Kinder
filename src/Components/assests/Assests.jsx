/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { imagesend, pdficon, pdficon2, pdficon3, pdficon4, plusicon, proavatar, refreshicon, serchimage } from '../imagepath'
import { DatePicker} from "antd";
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
const Assests = () => {
  const onChange = (date) => {
    // console.log(date, dateString);
  };
  return (
    <div>
      <Header />
      <Sidebar activeClassName='assests' />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/addasset">Assets </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right"/>
                      </i>
                  </li>
                  <li className="breadcrumb-item active">Assets List</li>
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
                          <h3>Assets List</h3>
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
                                    src={serchimage}
                                    alt=""
                                  />
                                </Link>
                              </form>
                            </div>
                            <div className="add-group">
                              <Link
                                to="/addasset"
                                className="btn btn-primary add-pluss ms-2"
                              >
                                <img src={plusicon} alt="" >

                                </img>
                              </Link>
                              <Link
                                to= "#"
                                className="btn btn-primary doctor-refresh ms-2"
                              >
                                <img src={refreshicon} alt="" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-end float-end ms-auto download-grp">
                        <Link to= "#" className=" me-2">
                          <img src={pdficon} alt="" />
                        </Link>
                        <Link to= "#" className=" me-2">
                          <img src={pdficon2} alt="" />
                        </Link>
                        <Link to= "#" className=" me-2">
                          <img src={pdficon3} alt="" />
                        </Link>
                        <Link to= "#">
                          <img src={pdficon4} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* /Table Header */}
                  <div className="staff-search-table">
                    <form>
                      <div className="row">
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="form-group local-forms">
                            <label>Employee Name </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="form-group local-forms cal-icon">
                            <label>From </label>
                            <DatePicker className="form-control datetimepicker" onChange={onChange}
                              suffixIcon={null}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="form-group local-forms cal-icon">
                            <label>To </label>
                            <DatePicker className="form-control datetimepicker" onChange={onChange}
                              suffixIcon={null}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="doctor-submit">
                            <button
                              type="submit"
                              className="btn btn-primary submit-list-form me-2"
                            >
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="table-responsive">
                    <table className="table border-0 custom-table comman-table datatable mb-0">
                      <thead>
                        <tr>
                          <th>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </th>
                          <th>Asset Id</th>
                          <th>Asset User</th>
                          <th>Asset Name</th>
                          <th>Purchase Date</th>
                          <th>Warrenty</th>
                          <th>Warrenty End</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </td>
                          <td>#AST-0001</td>
                          <td className="profile-image">
                            <Link to="profile.html">
                              <img
                                width={28}
                                height={28}
                                src={proavatar}
                                className="rounded-circle m-r-5"
                                alt=""
                              />{" "}
                              Andrea Lalema
                            </Link>
                          </td>
                          <td>Anaesthetic machine </td>
                          <td>01.05.2020</td>
                          <td>4 Years</td>
                          <td>04.08.2024</td>
                          <td>$62480</td>
                          <td>
                            <div className="dropdown action-label">
                              <Link
                                className="custom-badge status-orange dropdown-toggle"
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Pending
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end status-staff">
                                <Link className="dropdown-item" to= "#">
                                  Pending
                                </Link>
                                <Link className="dropdown-item" to= "#">
                                  Approved
                                </Link>
                                <Link className="dropdown-item" to= "#">
                                  Returnd
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <Link
                                to="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end">
                                <Link className="dropdown-item" to="/edit-assets">
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_patient"
                                >
                                  <i className="fa fa-trash-alt m-r-5" /> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="delete_patient" className="modal fade delete-modal" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center">
          <img src={imagesend} alt="" width={50} height={46} />
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
    <div id="delete_patient" className="modal fade delete-modal" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center">
          <img src={imagesend} alt="" width={50} height={46} />
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
    </div>
  )
}

export default Assests
