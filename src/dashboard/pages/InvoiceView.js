import React from 'react'
import DashboardSidebar from '../partials/dashboard-sidebar'
import DashboardPanelTopbar from '../components/DashboardPanelTopbar'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function InvoiceView() {
  return (
    <>
      <section className="user-dashboard">
    <Container fluid >
        <Row className=" g-0">
            <Col lg={3} md={3} className=" sidebar-col">
                <DashboardSidebar/>
            </Col>
            <Col lg={9} md={9} className=" panel-col">
                <div className="dashboard-panel invoice-view-panel">
                    <Row>
                        <Col lg={12} md={12} >
                            <div className="dashboard-panel-topbar">
                                <DashboardPanelTopbar/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} >
                            <div className="invoice-view-sec db-default-sec">
                                <div className="invoice-view-card db-default-wrapper">
                                    <Row>
                                        <Col lg={12} md={12} >
                                            <div className="invoice-view-topbar">
                                                <Link to="/invoice"className="back-to"><i class="fa-solid fa-angle-left"></i><ion-icon name="chevron-back-outline" role="img" className="md hydrated"></ion-icon>  Back to Payment & Invoices</Link>
                                                    <div className="doc-prints-wrap">
                                                        <Link to="javascript:;"><img src="./assets/images/dashboard/huge-icon.svg" alt="PDF"/></Link>
                                                        <Link to="javascript:;"><img src="./assets/images/dashboard/Mail.svg" alt="Mail"/></Link>
                                                        <Link to="javascript:;"><img src="./assets/images/dashboard/printer.svg" alt="Print"/></Link>
                                                    </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="invoice-view-details">
                                        <Col lg={6} md={6} >
                                            <h2>BLACKTIES</h2>
                                            <p className="inv-address">328 Summerwood Road, <br/> Isleworth, <br/> Greater London, <br/> TW7 7QP</p>
                                        </Col>
                                        <Col lg={6} md={6} >
                                            <h3>INVOICE</h3>
                                            <p className="inv-info">Invoice#<strong>114152</strong> <br/> Invoice Date <strong>Aug 01, 2024</strong> <br/> Invoice Amount <strong>£360</strong></p>
                                            <p className="inv-info">Customer ID<strong>21312ADA</strong></p>
                                        </Col>
                                    </Row>
                                    <Row className=" invoice-view-subscription">
                                        <Col lg={6} md={6} >
                                            <p className="billing-name">Billing to</p>
                                            <p className="user">Omar Waldii</p>
                                            <p className="country">United Kingdom</p>
                                        </Col>
                                        <Col lg={6} md={6} >
                                            <p className="subscription-id">Subscription <br/> <strong>ID 213123jkhsad</strong> </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12} md={12} >
                                                <div style={{overflowX:'auto'}}>
                                                    <table className="cancellation-disc-table">
                                                        <thead>
                                                            <tr>
                                                                <th className="first-th">Description</th>
                                                                <th>Price</th>
                                                                <th>Vat %</th>
                                                                <th>Amount (GBP)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="first-td">PCN Fee</td>
                                                                <td>£360</td>
                                                                <td>10 %</td>
                                                                <td>£360</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="first-td">Insurance Excess</td>
                                                                <td>£360</td>
                                                                <td>-</td>
                                                                <td>£360</td>
                                                            </tr>
                                                            <tr>
                                                                <td></td>
                                                                <td>Total excl Vat</td>
                                                                <td></td>
                                                                <td>£360</td>
                                                            </tr>
                                                            <tr>
                                                                <td></td>
                                                                <td>VAT 20 %</td>
                                                                <td></td>
                                                                <td>£360</td>
                                                            </tr>
                                                            <tr>
                                                                <td></td>
                                                                <td></td>
                                                                <td>Total</td>
                                                                <td>£360</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </Container>
</section>
    </>
  )
}

export default InvoiceView
