import React from 'react'
import Sidebar from './partials/Sidebar'
import Dashboardpaneltopbar from './partials/Dashboardpaneltopbar'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Refundinvoice() {
  return (
    <>
      <section className="user-dashboard">
    <div className="container-fluid">
        <Row className=" g-0">
            <Col lg={3} md={3} className="sidebar-col">
                <Sidebar/>
            </Col>
            <Col lg={9} md={9} className=" panel-col">
                <div className="dashboard-panel invoice-view-panel">
                    <Row className="">
                        <Col lg={12} md={12} className="">
                            <div className="dashboard-panel-topbar">
                              <Dashboardpaneltopbar/>
                            </div>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col lg={12} md={12} className="">
                            <div className="invoice-view-sec db-default-sec">
                                <div className="invoice-view-card db-default-wrapper admin-invoice-view-card admin-invoice-refund-card">
                                    <Row className="">
                                        <Col lg={12} md={12} className="">
                                            <div className="invoice-view-topbar ">
                                                <Link to="/admin-financialpayment" className="back-to"><i className="fas fa-chevron-left"></i> Back to Invoice</Link>
                                                    <div className="admin-invoice-view-card-btns">
                                                        <div className="admin-invoice-main-btn">
                                                            <Link to="#" className="cancel-btn">Cancel</Link>
                                                            <Link to="#" className="save-btn">Save</Link>
                                                            <Link to="#" className="refund-btn">Refund</Link>
                                                        </div>
                                                    </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className=" invoice-view-details admin-invoice-view-details">
                                        <Col lg={6} md={6} className="">
                                            <h2>BLACKTIES</h2>
                                            <h5>RENTAL</h5>
                                            <p className="inv-address">328 Summerwood Road, <br/> Isleworth, <br/> Greater London, <br/> TW7 7QP</p>
                                        </Col>
                                        <Col lg={6} md={6} className="">
                                            <h3>INVOICE</h3>
                                            <p className="inv-info">Invoice#<strong>114152</strong> <br/> Invoice Date <strong>Aug 01, 2024</strong> <br/> Invoice Amount <strong>£360</strong></p>
                                            <p className="inv-info">Customer ID<strong>21312ADA</strong></p>
                                        </Col>
                                    </Row>
                                    <Row className=" invoice-view-subscription">
                                        <Col lg={6} md={6} className="">
                                            <p className="billing-name">Billing to</p>
                                            <p className="user">Omar Waldii</p>
                                            <p className="country">United Kingdom</p>
                                        </Col>
                                        <Col lg={6} md={6} className="">
                                            <p className="subscription-id">Subscription <br/> <strong>ID 213123jkhsad</strong> </p>
                                        </Col>
                                    </Row>
                                    <Row className="">
                                        <Col lg={12} md={12} className="">
                                                <div style={{overflowX:"auto"}}>
                                                    <table className="cancellation-disc-table">
                                                        <thead>
                                                            <tr>
                                                                <th className="first-th">Description</th>
                                                                <th>Amount</th>
                                                                <th>Vat %</th>
                                                                <th>Amount (GBP)</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="first-td">PCN Fee</td>
                                                                <td>£360</td>
                                                                <td>10 %</td>
                                                                <td>£360</td>
                                                                <td><Link to="#"><img src="./admin_assets/images/trash-can.png" alt="delete"/></Link></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="first-td">Insurance Excess</td>
                                                                <td>£360</td>
                                                                <td>-</td>
                                                                <td>£360</td>
                                                                <td><Link to="#"><img src="./admin_assets/images/trash-can.png" alt="delete"/></Link></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="first-td">Refund</td>
                                                                <td>£360</td>
                                                                <td></td>
                                                                <td>£360</td>
                                                                <td><Link to="#"><img src="./admin_assets/images/trash-can.png" alt="delete"/></Link></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="big-td"><Link to="#"><img src="./admin_assets/images/plus.png" className="plus-img" alt="comm"/>Add another Payment</Link></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Col>
                                            <Col md={6} ></Col>
                                            <Col md={6} >
                                                <div style={{overflowX:"auto"}}>
                                                    <table className="cancellation-disc-table">
                                                        <tr>
                                                            <td>Total excl Vat</td>
                                                            <td></td>
                                                            <td>£360</td>
                                                        </tr>
                                                        <tr>
                                                            <td>VAT 20 %</td>
                                                            <td></td>
                                                            <td>£360</td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td>Total</td>
                                                            <td>£360</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </Col>
                                    </Row>
                                    <Row className=" totalamount">
                                        <div className="bal_amnt">
                                            <h3>Outstanding Balance</h3>
                                            <h3 className="refundpay">-£360</h3>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </div>
</section>
    </>
  )
}

export default Refundinvoice
