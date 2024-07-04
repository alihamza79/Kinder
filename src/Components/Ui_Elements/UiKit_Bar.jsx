import React from 'react'
import { Link } from "react-router-dom";
const UiKit_Bar = () => {
    return (
        <>
            <div className="card-box progress-example">
                <h4 className="card-title">Progress Bars</h4>
                <h5 className="text-muted">Large Progress Bars</h5>
                <div className="row">
                    <div className="col-lg-6">
                        <div >
                            <div className="progress progress-lg">
                                <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress progress-lg">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress progress-lg">
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress progress-lg">
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress progress-lg">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="progress progress-lg">
                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-lg">
                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-lg">
                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-lg">
                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-lg">
                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                </div>
                <h5 className="text-muted">Default Progress Bars</h5>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                </div>
                <h5 className="text-muted">Medium Progress Bars</h5>
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <div className="progress progress-md">
                                <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress progress-md">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress progress-md">
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress progress-md">
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress progress-md">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="progress progress-md">
                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-md">
                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-md">
                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-md">
                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-md">
                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                </div>
                <h5 className="text-muted">Small Progress Bars</h5>
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <div className="progress progress-sm">
                                <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress progress-sm">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress progress-sm">
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress progress-sm">
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress progress-sm">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="progress progress-sm">
                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-sm">
                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-sm">
                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-sm">
                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-sm">
                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                </div>
                <h5 className="text-muted">Extra Small Progress Bars</h5>
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <div className="progress progress-xs">
                                <div className="progress-bar w-75" role="progressbar" style={{ width: '10%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress progress-xs">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress progress-xs">
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress progress-xs">
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress progress-xs">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card-box pagination-box">
                        <h4 className="card-title">Pagination</h4>
                        <div>
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <Link className="page-link" to="#" tabIndex={-1}>Previous</Link>
                                </li>
                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                <li className="page-item active">
                                    <Link className="page-link" to="#">2 <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">Next</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="pagination">
                                <li className="page-item">
                                    <Link className="page-link" to="#" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                        <span className="sr-only">Previous</span>
                                    </Link>
                                </li>
                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" to="#" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                        <span className="sr-only">Next</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="pagination pagination-lg">
                                <li className="page-item disabled">
                                    <Link className="page-link" to="#" tabIndex={-1}>Previous</Link>
                                </li>
                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                <li className="page-item active">
                                    <Link className="page-link" to="#">2 <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">Next</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="pagination pagination-sm">
                                <li className="page-item disabled">
                                    <Link className="page-link" to="#" tabIndex={-1}>Previous</Link>
                                </li>
                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                <li className="page-item active">
                                    <Link className="page-link" to="#">2 <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">Next</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card-box">
                        <h4 className="card-title">Breadcrumbs</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">Home</li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Products</li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Products</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Accessories</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UiKit_Bar
