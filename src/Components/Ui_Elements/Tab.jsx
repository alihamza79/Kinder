import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const Tab = () => {
    return (
        <>
            <Header />
            <Sidebar id='menu-item14' id1='menu-items14' activeClassName='tabs'/>
            <>
                <div className="page-wrapper">
                    <div className="content container-fluid">
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
                                        <li className="breadcrumb-item active">Tabs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Tabs */}
                        <section className="comp-section" id="comp_tabs">
                            <h3 className="section-title">Tabs</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Basic tabs</h4>
                                            <ul className="nav nav-tabs">
                                                <li className="nav-item"><Link className="nav-link active" to="#basictab1" data-bs-toggle="tab">Home</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#basictab2" data-bs-toggle="tab">Profile</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#basictab3" data-bs-toggle="tab">Messages</Link></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane show active" id="basictab1">
                                                    Tab content 1
                                                </div>
                                                <div className="tab-pane" id="basictab2">
                                                    Tab content 2
                                                </div>
                                                <div className="tab-pane" id="basictab3">
                                                    Tab content 3
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Basic justified tabs</h4>
                                            <ul className="nav nav-tabs nav-justified">
                                                <li className="nav-item"><Link className="nav-link active" to="#basic-justified-tab1" data-bs-toggle="tab">Home</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#basic-justified-tab2" data-bs-toggle="tab">Profile</Link></li>
                                                <li className="nav-item dropdown">
                                                    <Link to="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">Dropdown</Link>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <Link className="dropdown-item" to="#basic-justified-tab3" data-bs-toggle="tab">Dropdown 1</Link>
                                                        <Link className="dropdown-item" to="#basic-justified-tab4" data-bs-toggle="tab">Dropdown 2</Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane show active" id="basic-justified-tab1">
                                                    Tab content 1
                                                </div>
                                                <div className="tab-pane" id="basic-justified-tab2">
                                                    Tab content 2
                                                </div>
                                                <div className="tab-pane" id="basic-justified-tab3">
                                                    Tab content 3
                                                </div>
                                                <div className="tab-pane" id="basic-justified-tab4">
                                                    Tab content 4
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Top line tabs</h4>
                                            <ul className="nav nav-tabs nav-tabs-top">
                                                <li className="nav-item"><Link className="nav-link active" to="#top-tab1" data-bs-toggle="tab">Home</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#top-tab2" data-bs-toggle="tab">Profile</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#top-tab3" data-bs-toggle="tab">Messages</Link></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane show active" id="top-tab1">
                                                    Tab content 1
                                                </div>
                                                <div className="tab-pane" id="top-tab2">
                                                    Tab content 2
                                                </div>
                                                <div className="tab-pane" id="top-tab3">
                                                    Tab content 3
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Top line justified</h4>
                                            <ul className="nav nav-tabs nav-tabs-top nav-justified">
                                                <li className="nav-item"><Link className="nav-link active" to="#top-justified-tab1" data-bs-toggle="tab">Home</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#top-justified-tab2" data-bs-toggle="tab">Profile</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#top-justified-tab3" data-bs-toggle="tab">Messages</Link></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane show active" id="top-justified-tab1">
                                                    Tab content 1
                                                </div>
                                                <div className="tab-pane" id="top-justified-tab2">
                                                    Tab content 2
                                                </div>
                                                <div className="tab-pane" id="top-justified-tab3">
                                                    Tab content 3
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6 className="card-title">Bottom line tabs</h6>
                                            <ul className="nav nav-tabs nav-tabs-bottom">
                                                <li className="nav-item"><Link className="nav-link active" to="#bottom-tab1" data-bs-toggle="tab">Home</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#bottom-tab2" data-bs-toggle="tab">Profile</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#bottom-tab3" data-bs-toggle="tab">Messages</Link></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane show active" id="bottom-tab1">
                                                    Tab content 1
                                                </div>
                                                <div className="tab-pane" id="bottom-tab2">
                                                    Tab content 2
                                                </div>
                                                <div className="tab-pane" id="bottom-tab3">
                                                    Tab content 3
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6 className="card-title">Bottom line justified</h6>
                                            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                                <li className="nav-item"><Link className="nav-link active" to="#bottom-justified-tab1" data-bs-toggle="tab">Home</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#bottom-justified-tab2" data-bs-toggle="tab">Profile</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#bottom-justified-tab3" data-bs-toggle="tab">Messages</Link></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane show active" id="bottom-justified-tab1">
                                                    Tab content 1
                                                </div>
                                                <div className="tab-pane" id="bottom-justified-tab2">
                                                    Tab content 2
                                                </div>
                                                <div className="tab-pane" id="bottom-justified-tab3">
                                                    Tab content 3
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Solid tabs</h4>
                                            <ul className="nav nav-tabs nav-tabs-solid">
                                                <li className="nav-item"><Link className="nav-link active" to="#solid-tab1" data-bs-toggle="tab">Home</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#solid-tab2" data-bs-toggle="tab">Profile</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#solid-tab3" data-bs-toggle="tab">Messages</Link></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane show active" id="solid-tab1">
                                                    Tab content 1
                                                </div>
                                                <div className="tab-pane" id="solid-tab2">
                                                    Tab content 2
                                                </div>
                                                <div className="tab-pane" id="solid-tab3">
                                                    Tab content 3
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Solid justified</h4>
                                            <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                                                <li className="nav-item"><Link className="nav-link active" to="#solid-justified-tab1" data-bs-toggle="tab">Home</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#solid-justified-tab2" data-bs-toggle="tab">Profile</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#solid-justified-tab3" data-bs-toggle="tab">Messages</Link></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane show active" id="solid-justified-tab1">
                                                    Tab content 1
                                                </div>
                                                <div className="tab-pane" id="solid-justified-tab2">
                                                    Tab content 2
                                                </div>
                                                <div className="tab-pane" id="solid-justified-tab3">
                                                    Tab content 3
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Solid Rounded</h4>
                                            <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                                                <li className="nav-item"><Link className="nav-link active" to="#solid-rounded-tab1" data-bs-toggle="tab">Home</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#solid-rounded-tab2" data-bs-toggle="tab">Profile</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#solid-rounded-tab3" data-bs-toggle="tab">Messages</Link></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane show active" id="solid-rounded-tab1">
                                                    Tab content 1
                                                </div>
                                                <div className="tab-pane" id="solid-rounded-tab2">
                                                    Tab content 2
                                                </div>
                                                <div className="tab-pane" id="solid-rounded-tab3">
                                                    Tab content 3
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Rounded justified</h4>
                                            <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
                                                <li className="nav-item"><Link className="nav-link active" to="#solid-rounded-justified-tab1" data-bs-toggle="tab">Home</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#solid-rounded-justified-tab2" data-bs-toggle="tab">Profile</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#solid-rounded-justified-tab3" data-bs-toggle="tab">Messages</Link></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane show active" id="solid-rounded-justified-tab1">
                                                    Tab content 1
                                                </div>
                                                <div className="tab-pane" id="solid-rounded-justified-tab2">
                                                    Tab content 2
                                                </div>
                                                <div className="tab-pane" id="solid-rounded-justified-tab3">
                                                    Tab content 3
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /Tabs */}
                    </div>
                </div>
            </>
        </>
    )
}

export default Tab
