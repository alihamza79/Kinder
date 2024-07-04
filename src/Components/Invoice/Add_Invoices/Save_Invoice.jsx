import React from 'react'
import { Link } from "react-router-dom";
const Save_Invoice = () => {
    return (
        <div>
            <div className="modal custom-modal modal-bg fade" id="save_invocies_details" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="form-header">
                                <h3>Save Invoice Details</h3>
                                <p>Are you sure want to save?</p>
                            </div>
                            <div className="modal-btn delete-action">
                                <div className="row">
                                    <div className="col-6">
                                        <Link to="#" data-bs-dismiss="modal" className="btn btn-primary paid-continue-btn">Save</Link>
                                    </div>
                                    <div className="col-6">
                                        <Link to="#" data-bs-dismiss="modal" className="btn btn-primary paid-cancel-btn">Cancel</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Save_Invoice
