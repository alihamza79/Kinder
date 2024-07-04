import React from 'react'
import Header from "../Header";
import Sidebar from '../Sidebar';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import UiKit_Bar from './UiKit_Bar';
import { Link } from "react-router-dom";
const UiKit = () => {
    return (
        <>
            <Header />
            <Sidebar id='menu-item14' id1='menu-items14' activeClassName='uikit'/>
            <>
                <div className="page-wrapper">
                    <div className="content">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Dashboard </Link></li>
                                        <li className="breadcrumb-item"><i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right"/>
                                            </i>
                                        </li>
                                        <li className="breadcrumb-item active">Uikit</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card-box">

                                    <h4 className="card-title">Default Button</h4>
                                    <div className='uikit-design'>
                                    <button type="button" className="btn btn-primary me-1">Primary</button>
                                    <button type="button" className="btn btn-secondary me-1">Secondary</button>
                                    <button type="button" className="btn btn-success me-1">Success</button>
                                    <button type="button" className="btn btn-danger me-1">Danger</button>
                                    <button type="button" className="btn btn-warning me-1">Warning</button>
                                    <button type="button" className="btn btn-info me-1">Info</button>
                                    <button type="button" className="btn btn-light me-1">Light</button>
                                    <button type="button" className="btn btn-dark me-1">Dark</button>
                                    <button type="button" className="btn btn-link me-1">Link</button>
                                    <hr />
                                    <h4 className="card-title">Button Sizes</h4>
                                    <p>
                                        <button type="button" className="btn btn-primary btn-lg me-1">Primary</button>
                                        <button type="button" className="btn btn-secondary btn-lg me-1">Secondary</button>
                                        <button type="button" className="btn btn-success btn-lg me-1">Success</button>
                                        <button type="button" className="btn btn-danger btn-lg me-1">Danger</button>
                                        <button type="button" className="btn btn-warning btn-lg me-1">Warning</button>
                                        <button type="button" className="btn btn-info btn-lg me-1">Info</button>
                                        <button type="button" className="btn btn-light btn-lg me-1">Light</button>
                                        <button type="button" className="btn btn-dark btn-lg me-1">Dark</button>
                                    </p>
                                    <p>
                                        <button type="button" className="btn btn-primary me-1">Primary</button>
                                        <button type="button" className="btn btn-secondary me-1">Secondary</button>
                                        <button type="button" className="btn btn-success me-1">Success</button>
                                        <button type="button" className="btn btn-danger me-1">Danger</button>
                                        <button type="button" className="btn btn-warning me-1">Warning</button>
                                        <button type="button" className="btn btn-info me-1">Info</button>
                                        <button type="button" className="btn btn-light me-1">Light</button>
                                        <button type="button" className="btn btn-dark me-1">Dark</button>
                                    </p>
                                    <p>
                                        <button type="button" className="btn btn-primary btn-sm me-1">Primary</button>
                                        <button type="button" className="btn btn-secondary btn-sm me-1">Secondary</button>
                                        <button type="button" className="btn btn-success btn-sm me-1">Success</button>
                                        <button type="button" className="btn btn-danger btn-sm me-1">Danger</button>
                                        <button type="button" className="btn btn-warning btn-sm me-1">Warning</button>
                                        <button type="button" className="btn btn-info btn-sm me-1">Info</button>
                                        <button type="button" className="btn btn-light btn-sm me-1">Light</button>
                                        <button type="button" className="btn btn-dark btn-sm me-1">Dark</button>
                                    </p>
                                    <hr />
                                    <h4 className="card-title">Button Groups</h4>
                                    <br />
                                    <div className="btn-toolbar">
                                        <div className="btn-group btn-group-lg">
                                            <button type="button" className="btn btn-primary">Left</button>
                                            <button type="button" className="btn btn-primary">Middle</button>
                                            <button type="button" className="btn btn-primary">Right</button>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="btn-toolbar">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-primary">Left</button>
                                            <button type="button" className="btn btn-primary">Middle</button>
                                            <button type="button" className="btn btn-primary">Right</button>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="btn-toolbar">
                                        <div className="btn-group btn-group-sm">
                                            <button type="button" className="btn btn-primary">Left</button>
                                            <button type="button" className="btn btn-primary">Middle</button>
                                            <button type="button" className="btn btn-primary">Right</button>
                                        </div>
                                    </div>
                                 </div>
                                </div>
                                <div className="card-box">
                                    <h4 className="card-title">Alerts</h4>
                                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                        <strong>Warning!</strong> There was a problem with your <Link to="#" className="alert-link">network connection</Link>.
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true"> </span>
                                        </button>
                                    </div>
                                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>Error!</strong> A <Link to="#" className="alert-link">problem</Link> has been occurred while submitting your data.
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true"> </span>
                                        </button>
                                    </div>
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Success!</strong> Your <Link to="#" className="alert-link">message</Link> has been sent successfully.
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true"> </span>
                                        </button>
                                    </div>
                                    <div className="alert alert-info alert-dismissible fade show" role="alert">
                                        <strong>Note!</strong> Please read the <Link to="#" className="alert-link">comments</Link> carefully.
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true"> </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-box">
                                    <h4 className="card-title">Dropdowns within Text</h4>
                                    <div className="dropdown">
                                        <Link className="dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown </Link>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                        </div>
                                    </div>
                                    <hr />
                                    <h4 className="card-title">Dropdowns within Buttons</h4>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-primary dropdown-toggle me-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <div className="dropdown-divider" />
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-secondary dropdown-toggle me-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <div className="dropdown-divider" />
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-info dropdown-toggle me-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <div className="dropdown-divider" />
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-success dropdown-toggle me-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <div className="dropdown-divider" />
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-warning dropdown-toggle me-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <div className="dropdown-divider" />
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-danger dropdown-toggle me-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <div className="dropdown-divider" />
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                    <hr />
                                    <h4 className="card-title">Split button dropdowns</h4>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-primary">Action</button>
                                        <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split me-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <div className="dropdown-divider" />
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-secondary">Action</button>
                                        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split me-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <div className="dropdown-divider" />
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-info">Action</button>
                                        <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split me-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <div className="dropdown-divider" />
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-success">Action</button>
                                        <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split me-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <div className="dropdown-divider" />
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-warning">Action</button>
                                        <button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split me-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <div className="dropdown-divider" />
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-danger">Action</button>
                                        <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split me-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <div className="dropdown-divider" />
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                </div>
                                <UiKit_Bar/>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        </>
    )
}

export default UiKit;
