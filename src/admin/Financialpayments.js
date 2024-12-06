import React, { useState } from 'react'
import Sidebar from './partials/Sidebar'
import Dashboardpaneltopbar from './partials/Dashboardpaneltopbar'
import { Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Financialpayments() {
    const [key, setKey] = useState('nav-invoice-tab');
  return (
    <>

<section className="user-dashboard">
    <div className="container-fluid">
        <div className="row g-0">
            <div className="col-lg-3 col-md-3 sidebar-col">
               <Sidebar/>
            </div>
            <div className="col-lg-9 col-md-9 panel-col">
                <div className="dashboard-panel penalty-panel">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="dashboard-panel-topbar">
                                <Dashboardpaneltopbar/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="penalty-sec db-default-sec">
                                 <div className="row main-payments">
                                    <div className="col-md-4">
                                        <div className="main-payments-bx">
                                            <div className="pmnt-name">
                                                <p>Total Revenue</p>
                                                <h4>£2.000</h4>
                                            </div>
                                            <div className="pmnt-dt">
                                                <span>Next Payment Date</span>
                                                <span>27 June, 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="main-payments-bx">
                                            <div className="pmnt-name">
                                                <p>Outstanding Balance</p>
                                                <h4>£2.000</h4>
                                            </div>
                                            <div className="pmnt-dt">
                                                <span>Next Payment Date</span>
                                                <span>27 June, 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="main-payments-bx">
                                            <div className="pmnt-name">
                                                <p>Payment Pending</p>
                                                <h4>£2.000</h4>
                                            </div>
                                            <div className="pmnt-dt">
                                                <span>Next Payment Date</span>
                                                <span>27 June, 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="penalty-card db-default-wrapper rigistration-tabl">
                                    <div className="row invoice-tabs">
                                    <div className="invoice-topbar-wrap invoice_sear">
                                                <Link className="invoiceDownload-btn" to="#"><img src="./admin_assets/images/dashboard/download432.svg" alt="Invoice Download"/></Link>
                                                <div className="search-bar-v1">
                                                    <button type="submit"><i className="fa fa-search"></i></button>
                                                    <input type="text" placeholder="Search here..."/>
                                                </div>
                                            </div>
                                    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      activeKey={key}   onSelect={(k) => setKey(k)}
      className="mb-3 "
    >
                                        {/* <nav className="invoice-tabs">
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                              <button className="nav-link active" id="nav-invoice-tab" data-bs-toggle="tab" data-bs-target="#nav-invoice" type="button" role="tab" aria-controls="nav-invoice" aria-selected="true"><h5>Invoice</h5></button>
                                              <button className="nav-link" id="nav-payment-schedules-tab" data-bs-toggle="tab" data-bs-target="#nav-payment-schedules" type="button" role="tab" aria-controls="nav-payment-schedules" aria-selected="false"><h5>Payment Schedules</h5></button>
                                              <button className="nav-link" id="nav-amended-invoices-tab" data-bs-toggle="tab" data-bs-target="#nav-amended-invoices" type="button" role="tab" aria-controls="nav-amended-invoices" aria-selected="false"><h5>Amended Invoices</h5></button>
                                              <button className="nav-link" id="nav-failedPay-tab" data-bs-toggle="tab" data-bs-target="#nav-failedPay" type="button" role="tab" aria-controls="nav-failedPay" aria-selected="false"><h5>Failed Pay</h5></button>
                                            </div>
                                            <div className="invoice-topbar-wrap">
                                                <Link className="invoiceDownload-btn" to="#"><img src="./admin_assets/images/dashboard/download432.svg" alt="Invoice Download"/></Link>
                                                <div className="search-bar-v1">
                                                    <button type="submit"><i className="fa fa-search"></i></button>
                                                    <input type="text" placeholder="Search here..."/>
                                                </div>
                                            </div>
                                        </nav> */}
                                        {/* <div className="invoice-tabs-content tab-content" id="nav-tabContent"> */}
                                        
                                        <Tab eventKey="nav-invoice-tab"        title="Invoice">
                                            {/* <div className="tab-pane fade show active" id="nav-invoice" role="tabpanel" aria-labelledby="nav-invoice-tab"> */}
                                                <div className="row frm-inner-row invoice-tab-frm">
                                                        <form action="" method="">
                                                            <div className="row">
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Invoices Number</label>
                                                                        <br/>
                                                                        <input type="text" name="form-control" placeholder="placeholder"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">First Name</label>
                                                                        <br/>
                                                                        <input type="text" name="form-control" placeholder="placeholder"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Last Name</label>
                                                                        <input type="text" name="form-control" id="" className="mg0" placeholder="placeholder"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Vehicle Registration Number</label>
                                                                        <input type="number" name="form-control" id="" className="mg0" placeholder="Omar"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="row frm-inner-row invoice-tab-frm-2">
                                                        <form action="" method="">
                                                            <div className="row">
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Applicant Date</label>
                                                                        <br/>
                                                                        <input type="date" name="form-control"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Amount</label>
                                                                        <br/>
                                                                        <input type="number" name="form-control"/>
                                                                    </div>
                                                                </div>
                                                                 <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Status</label>
                                                                        <select name="payment" id="payment-fld">
                                                                            <option value="volvo">Payment</option>
                                                                            <option value="volvo">Incoming</option>
                                                                            <option value="saab">Payment Hold</option>
                                                                            <option value="opel">Scheduled</option>
                                                                            <option value="audi">Failed</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Last 4 digits of card details</label>
                                                                        <input type="number" name="form-control" id="" className="mg0" placeholder="1231"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12">
                                                        <div style={{overflowX:"auto"}} className="">
                                                            <table className="maintenance-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="first-th">Invoice Number</th>
                                                                        <th className="first-th">invoice Name <ion-icon name="arrow-down-outline"></ion-icon></th>
                                                                        <th>Belongs to</th>
                                                                        <th>Invoices Date</th>
                                                                        <th>Vehicle Registration Number</th>
                                                                        <th>Amount</th>
                                                                        <th>Status</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>001</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link to="#" className="incoming-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Incoming</Link></td>
                                                                        <td><Link to="#" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>002</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£4,00</td>
                                                                        <td className="status-tagbtns"><Link to="#" className="payment-hold-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Payment Hold</Link></td>
                                                                        <td><Link to="#" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                     <tr>
                                                                        <td>003</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link to="#" className="failed-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Failed</Link></td>
                                                                        <td><Link to="/admin-refund-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>010</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link  className="scheduled-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Scheduled</Link></td>
                                                                        <td><Link to="/admin-schedule-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>010</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link  className="scheduled-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Scheduled</Link></td>
                                                                        <td><Link to="/admin-schedule-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>010</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link  className="scheduled-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Scheduled</Link></td>
                                                                        <td><Link to="/admin-schedule-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>010</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link  className="scheduled-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Scheduled</Link></td>
                                                                        <td><Link to="/admin-schedule-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="invoice-order-pagination">
                                                            <div className="pagination-indicator">
                                                                <h6>page <span className="initail">1</span> to <span className="total">10</span></h6>
                                                            </div>
                                                            <div className="pagination-nav">
                                                                <Link to="#" className="pg-prev">Previous</Link>
                                                                <Link to="#" className="pg-next">Next</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </Tab>
                                            {/* </div> */}
                                            {/* <div className="tab-pane fade" id="nav-payment-schedules" role="tabpanel" aria-labelledby="nav-payment-schedules-tab"> */}
                                            <Tab eventKey="nav-payment-schedules-tab" title="Payment Schedules">

                                                <div className="row frm-inner-row invoice-tab-frm scheduled-payment-tab-frm">
                                                    <div className="col-md-6">
                                                        <h2>Payment Schedules</h2>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="invoice-topbar-wrap">
                                                            <Link className="invoiceDownload-btn" to="#">
                                                                <img src="./admin_assets/images/dashboard/download432.svg" alt="Invoice Download"/></Link>
                                                            <div className="search-bar-v1">
                                                                <button type="submit"><i className="fa fa-search"></i></button>
                                                                <input type="text" placeholder="Search here..."/>
                                                            </div>
                                                            <div className="filter-btn">
                                                                <Link to="#">Filter</Link>
                                                            </div>
                                                            <div className="add-sh-pmnt">
                                                                <Link to="/admin-add-payment-schedule" className="shed-pmnt-btn">Add Schedules Payment</Link>
                                                            </div>
                                                        </div>
                                                    </div>       
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12">
                                                        <div style={{overflowX:"auto"}}>
                                                            <table className="maintenance-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="first-th">Receipt ID</th>
                                                                        <th className="first-th">Full Name <ion-icon name="arrow-down-outline"></ion-icon></th>
                                                                        <th>Date & Time</th>
                                                                        <th>Due Date</th>
                                                                        <th>Reason Payment</th>
                                                                        <th>Fees</th>
                                                                        <th>Status</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>001</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link to="#" className="incoming-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Incoming</Link></td>
                                                                        <td><Link to="#" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>002</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£4,00</td>
                                                                        <td className="status-tagbtns"><Link to="#" className="payment-hold-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Payment Hold</Link></td>
                                                                        <td><Link to="#" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                     <tr>
                                                                        <td>003</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link to="#" className="failed-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Failed</Link></td>
                                                                        <td><Link to="/admin-refund-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>010</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link  className="scheduled-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Scheduled</Link></td>
                                                                        <td><Link to="/admin-schedule-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>010</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link  className="scheduled-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Scheduled</Link></td>
                                                                        <td><Link to="/admin-schedule-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>010</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link  className="scheduled-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Scheduled</Link></td>
                                                                        <td><Link to="/admin-schedule-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>010</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link  className="scheduled-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Scheduled</Link></td>
                                                                        <td><Link to="/admin-schedule-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="invoice-order-pagination">
                                                            <div className="pagination-indicator">
                                                                <h6>page <span className="initail">1</span> to <span className="total">10</span></h6>
                                                            </div>
                                                            <div className="pagination-nav">
                                                                <Link to="#" className="pg-prev">Previous</Link>
                                                                <Link to="#" className="pg-next">Next</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </Tab>
                                            {/* </div> */}

                                            {/* <div className="tab-pane fade" id="nav-amended-invoices" role="tabpanel" aria-labelledby="nav-amended-invoices-tab"> */}
                                            <Tab eventKey="nav-amended-invoices" title="Amended Invoices">
                                                <div className="row frm-inner-row invoice-tab-frm">
                                                        <form action="" method="">
                                                            <div className="row">
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Invoices Number</label>
                                                                        <br/>
                                                                        <input type="text" name="form-control" placeholder="placeholder"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">First Name</label>
                                                                        <br/>
                                                                        <input type="text" name="form-control" placeholder="placeholder"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Last Name</label>
                                                                        <input type="text" name="form-control" id="" className="mg0" placeholder="placeholder"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Vehicle Registration Number</label>
                                                                        <input type="number" name="form-control" id="" className="mg0" placeholder="Omar"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="row frm-inner-row invoice-tab-frm-2">
                                                        <form action="" method="">
                                                            <div className="row">
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Applicant Date</label>
                                                                        <br/>
                                                                        <input type="date" name="form-control"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Amount</label>
                                                                        <br/>
                                                                        <input type="number" name="form-control"/>
                                                                    </div>
                                                                </div>
                                                                 <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Status</label>
                                                                        <select name="payment" id="payment-fld">
                                                                            <option value="volvo">Payment</option>
                                                                            <option value="volvo">Incoming</option>
                                                                            <option value="saab">Payment Hold</option>
                                                                            <option value="opel">Scheduled</option>
                                                                            <option value="audi">Failed</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Last 4 digits of card details</label>
                                                                        <input type="number" name="form-control" id="" className="mg0" placeholder="1231"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12">
                                                        <div style={{overflowX:"auto"}}>
                                                            <table className="maintenance-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="first-th">Invoice Number</th>
                                                                        <th className="first-th">invoice Name <ion-icon name="arrow-down-outline"></ion-icon></th>
                                                                        <th>Belongs to</th>
                                                                        <th>Invoices Date</th>
                                                                        <th>Vehicle Registration Number</th>
                                                                        <th>Amount</th>
                                                                        <th>Status</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>001</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link to="#" className="incoming-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Pay</Link></td>
                                                                        <td><Link to="/admin-ammend-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>002</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£4,00</td>
                                                                        <td className="status-tagbtns"><Link to="#" className="payment-hold-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Payment Hold</Link></td>
                                                                        <td><Link to="#" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                     <tr>
                                                                        <td>003</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link to="#" className="failed-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Refund</Link></td>
                                                                        <td><Link to="/admin-ammend-refund-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>010</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link  className="scheduled-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Scheduled</Link></td>
                                                                        <td><Link to="/admin-schedule-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>010</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link  className="scheduled-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Scheduled</Link></td>
                                                                        <td><Link to="/admin-schedule-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>010</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link  className="scheduled-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Scheduled</Link></td>
                                                                        <td><Link to="/admin-schedule-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>010</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link  className="scheduled-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Scheduled</Link></td>
                                                                        <td><Link to="/admin-schedule-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="invoice-order-pagination">
                                                            <div className="pagination-indicator">
                                                                <h6>page <span className="initail">1</span> to <span className="total">10</span></h6>
                                                            </div>
                                                            <div className="pagination-nav">
                                                                <Link to="#" className="pg-prev">Previous</Link>
                                                                <Link to="#" className="pg-next">Next</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </Tab>
                                            {/* </div> */}

                                            {/* <div className="tab-pane fade" id="nav-failedPay" role="tabpanel" aria-labelledby="nav-failedPay-tab"> */}
                                            <Tab eventKey="nav-failedPay" title="Failed Pay">
                                                <div className="row frm-inner-row invoice-tab-frm">
                                                        <form action="" method="">
                                                            <div className="row">
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Invoices Number</label>
                                                                        <br/>
                                                                        <input type="text" name="form-control" placeholder="placeholder"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">First Name</label>
                                                                        <br/>
                                                                        <input type="text" name="form-control" placeholder="placeholder"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Last Name</label>
                                                                        <input type="text" name="form-control" id="" className="mg0" placeholder="placeholder"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Vehicle Registration Number</label>
                                                                        <input type="number" name="form-control" id="" className="mg0" placeholder="Omar"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="row frm-inner-row invoice-tab-frm-2">
                                                        <form action="" method="">
                                                            <div className="row">
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Applicant Date</label>
                                                                        <br/>
                                                                        <input type="date" name="form-control"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Amount</label>
                                                                        <br/>
                                                                        <input type="number" name="form-control"/>
                                                                    </div>
                                                                </div>
                                                                 <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Status</label>
                                                                        <select name="payment" id="payment-fld">
                                                                            <option value="volvo">Payment</option>
                                                                            <option value="volvo">Incoming</option>
                                                                            <option value="saab">Payment Hold</option>
                                                                            <option value="opel">Scheduled</option>
                                                                            <option value="audi">Failed</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Last 4 digits of card details</label>
                                                                        <input type="number" name="form-control" id="" className="mg0" placeholder="1231"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12">
                                                        <div style={{overflowX:"auto"}}>
                                                            <table className="maintenance-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="first-th">Invoice Number</th>
                                                                        <th className="first-th">invoice Name <ion-icon name="arrow-down-outline"></ion-icon></th>
                                                                        <th>Belongs to</th>
                                                                        <th>Invoices Date</th>
                                                                        <th>Vehicle Registration Number</th>
                                                                        <th>Amount</th>
                                                                        <th>Status</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>001</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link to="#" className="failed-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Failed</Link></td>
                                                                        <td><Link to="/admin-failed-pay-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>002</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£4,00</td>
                                                                        <td className="status-tagbtns"><Link to="#" className="failed-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Failed</Link></td>
                                                                        <td><Link to="/admin-failed-pay-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                     <tr>
                                                                        <td>003</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link to="#" className="failed-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Failed</Link></td>
                                                                        <td><Link to="/admin-failed-pay-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>010</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link to="#" className="failed-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Failed</Link></td>
                                                                        <td><Link to="/admin-failed-pay-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>010</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link to="#" className="failed-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Failed</Link></td>
                                                                        <td><Link to="/admin-failed-pay-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>010</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link to="#" className="failed-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Failed</Link></td>
                                                                        <td><Link to="/admin-failed-pay-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>010</td>
                                                                        <td className="first-td">Invoices A</td>
                                                                        <td>Omar</td>
                                                                        <td>27 June, 2024</td>
                                                                        <td>MH2131241</td>
                                                                        <td>£5,00</td>
                                                                        <td className="status-tagbtns"><Link to="#" className="failed-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"></circle></svg>Failed</Link></td>
                                                                        <td><Link to="/admin-failed-pay-invoice" className="view-btn">View</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="invoice-order-pagination">
                                                            <div className="pagination-indicator">
                                                                <h6>page <span className="initail">1</span> to <span className="total">10</span></h6>
                                                            </div>
                                                            <div className="pagination-nav">
                                                                <Link to="#" className="pg-prev">Previous</Link>
                                                                <Link to="#" className="pg-next">Next</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </Tab>
                                            {/* </div> */}
                                        {/* </div> */}
                                        </Tabs>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Financialpayments
