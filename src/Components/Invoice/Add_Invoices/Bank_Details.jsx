import React from 'react'
import { Link } from 'react-router-dom'

const Bank_Details = () => {
  return (
    <div>
     <div className="modal custom-modal modal-bg fade bank-details" id="bank_details" role="dialog">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <div className="form-header text-start mb-0">
          <h4 className="mb-0">Add Bank Details</h4>
        </div>
        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body text-start">
        <div className="bank-inner-details">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Account Holder Name</label>
                <input type="text" className="form-control" placeholder="Add Name" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Bank name</label>
                <input type="text" className="form-control" placeholder="Add Bank name" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>IFSC Code</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Account Number</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <div className="bank-details-btn">
       <Link to="#" data-bs-dismiss="modal" className="btn bank-cancel-btn me-2">Cancel</Link> 
       <Link to="#" className="btn bank-save-btn">Save Item</Link> 
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Bank_Details
