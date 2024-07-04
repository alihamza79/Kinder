import React from 'react'
import Header from '../../Header'
import Sidebar from '../../Sidebar'
import { logodark, signature } from '../../imagepath'

const Invoice_Details = () => {
    return (
        <>
            <Header />
            <Sidebar id='menu-item13' id1='menu-items13' activeClassName='invoice-details'/>
            <>
                <div className="page-wrapper">
                    {/* Page Content */}
                    <div className="content container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="card invoice-info-card">
                                    <div className="card-body">
                                        <div className="invoice-item invoice-item-one">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="invoice-logo">
                                                        <img src={logodark} alt="logo" />
                                                    </div>
                                                    <div className="invoice-head">
                                                        <h2>Invoice</h2>
                                                        <p>Invoice Number : In983248782</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="invoice-info">
                                                        <strong className="customer-text-one">Invoice From</strong>
                                                        <h6 className="invoice-name">Company Name</h6>
                                                        <p className="invoice-details">
                                                            9087484288 <br />
                                                            Address line 1, Address line 2<br />
                                                            Zip code ,City - Country
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Invoice Item */}
                                        <div className="invoice-item invoice-item-two">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="invoice-info">
                                                        <strong className="customer-text-one">Billed to</strong>
                                                        <h6 className="invoice-name">Customer Name</h6>
                                                        <p className="invoice-details invoice-details-two">
                                                            9087484288 <br />
                                                            Address line 1, <br />
                                                            Address line 2 <br />
                                                            Zip code ,City - Country
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="invoice-info invoice-info2">
                                                        <strong className="customer-text-one">Payment Details</strong>
                                                        <p className="invoice-details">
                                                            Debit Card <br />
                                                            XXXXXXXXXXXX-2541 <br />
                                                            HDFC Bank
                                                        </p>
                                                        <div className="invoice-item-box">
                                                            <p>Recurring : 15 Months</p>
                                                            <p className="mb-0">PO Number : 54515454</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /Invoice Item */}
                                        {/* Invoice Item */}
                                        <div className="invoice-issues-box">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="invoice-issues-date">
                                                        <p>Issue Date : 27 Jul 2022</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="invoice-issues-date">
                                                        <p>Due Date : 27 Aug 2022</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="invoice-issues-date">
                                                        <p>Due Amount : ₹ 1,54,22 </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /Invoice Item */}
                                        {/* Invoice Item */}
                                        <div className="invoice-item invoice-table-wrap">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="table-responsive">
                                                        <table className="invoice-table table table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Description</th>
                                                                    <th>Category</th>
                                                                    <th>Rate/Item</th>
                                                                    <th>Quantity</th>
                                                                    <th>Discount (%)</th>
                                                                    <th className="text-end">Amount</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Dell Laptop</td>
                                                                    <td>Laptop</td>
                                                                    <td>$1,110</td>
                                                                    <td>2</td>
                                                                    <td>2%</td>
                                                                    <td className="text-end">$400</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>HP Laptop</td>
                                                                    <td>Laptop</td>
                                                                    <td>$1,500</td>
                                                                    <td>3</td>
                                                                    <td>6%</td>
                                                                    <td className="text-end">$3,000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Apple Ipad</td>
                                                                    <td>Ipad</td>
                                                                    <td>$11,500</td>
                                                                    <td>1</td>
                                                                    <td>10%</td>
                                                                    <td className="text-end">$11,000</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /Invoice Item */}
                                        <div className="row align-items-center justify-content-center">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="invoice-terms">
                                                    <h6>Notes:</h6>
                                                    <p className="mb-0">Enter customer notes or any other details</p>
                                                </div>
                                                <div className="invoice-terms">
                                                    <h6>Terms and Conditions:</h6>
                                                    <p className="mb-0">Enter customer notes or any other details</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="invoice-total-card">
                                                    <div className="invoice-total-box">
                                                        <div className="invoice-total-inner">
                                                            <p>Taxable <span>$6,660.00</span></p>
                                                            <p>Additional Charges <span>$6,660.00</span></p>
                                                            <p>Discount <span>$3,300.00</span></p>
                                                            <p className="mb-0">Sub total <span>$3,300.00</span></p>
                                                        </div>
                                                        <div className="invoice-total-footer">
                                                            <h4>Total Amount <span>$143,300.00</span></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="invoice-sign text-end">
                                            <img className="img-fluid d-inline-block" src={signature} alt="sign" />
                                            <span className="d-block">Harristemp</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Page Content */}
                </div>

            </>
        </>
    )
}

export default Invoice_Details
