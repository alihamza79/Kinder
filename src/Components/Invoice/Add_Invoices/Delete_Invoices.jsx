import React from 'react'
import { Link } from "react-router-dom";

const Delete_Invoices = () => {
    return (
        <div>
            <div className="modal custom-modal modal-bg fade" id="delete_invoices_details" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="form-header">
                                <h3>Delete Invoice Details</h3>
                                <p>Are you sure want to delete?</p>
                            </div>
                            <div className="modal-btn delete-action">
                                <div className="row">
                                    <div className="col-6">
                                        <Link to="#" data-bs-dismiss="modal" className="btn btn-primary paid-continue-btn">Delete</Link>
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

export default Delete_Invoices
