import React from 'react'
import Sidebar from './partials/Sidebar'
import Dashboardpaneltopbar from './partials/Dashboardpaneltopbar'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

function Ammendinvoice() {
  return (
    <>
      <section className="user-dashboard">
    <Container fluid>
        <Row className="g-0">
            <Col lg={3} md={3} className=" sidebar-col">
               <Sidebar/>
            </Col>
            <Col lg={9} md={9} className=" panel-col">
                <div className="dashboard-panel invoice-view-panel amended-invoice-view-panel">
                    <Row>
                        <Col lg={12} md={12} >
                            <div className="dashboard-panel-topbar">
                               <Dashboardpaneltopbar/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} >
                            <div className="invoice-view-sec db-default-sec">
                                <div className="invoice-view-card db-default-wrapper admin-invoice-view-card admin-invoice-pay-card admin-amended-invoice-pay-card">
                                    <Row>
                                        <Col lg={12} md={12} >
                                            <div className="invoice-view-topbar ">
                                                <Link to="#" className="back-to"><i className="fas fa-chevron-left"></i> Back to Invoice</Link>
                                                    <div className="admin-invoice-view-card-btns">
                                                        <div className="admin-invoice-main-btn">
                                                            <Link to="#" className="reamand-btn">Reamand</Link>
                                                            <Link to="#" className="send-email-btn">Send Email</Link>
                                                        </div>
                                                    </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className=" inner-amend-box">
                                        <Col md={6} >
                                            <div className="invoice-view-card db-default-wrapper payment-schedule-card amend-bx">
                                                <div className="row invoice-view-details admin-invoice-view-details">
                                                    <Col lg={6} md={6} >
                                                        <h2>BLACKTIES</h2>
                                                        <h5>RENTAL</h5>
                                                    </Col>
                                                    <Col lg={6} md={6} >
                                                       <p className="inv-address">328 Summerwood Road, Isleworth, Greater London, TW7 7QP </p>
                                                    </Col>
                                                </div>
                                                <Row className=" invoice-view-subscription">
                                                    <Col lg={4} md={4} >
                                                       <p><span>Full Name</span>
                                                        <br/>
                                                        John Doe
                                                    </p> 
                                                    </Col>
                                                    <Col lg={4} md={4} >
                                                       <p><span>Phone:</span>
                                                        <br/>
                                                        +44 334 2345
                                                    </p> 
                                                    </Col>
                                                    <Col lg={4} md={4} >
                                                       <p><span>Email:</span>
                                                        <br/>
                                                        example@gmail.com
                                                    </p>
                                                    </Col>
                                                </Row>
                                                 <div className="row invoice-view-subscription-2">
                                                    <Col lg={4} md={4} >
                                                       <p><span>Receipt Date:</span>
                                                        <br/>
                                                        12/8/2024
                                                    </p> 
                                                    </Col>
                                                    <Col lg={4} md={4} >
                                                       <p><span>Receipt #:</span>
                                                        <br/>
                                                        RT-435
                                                    </p> 
                                                    </Col>
                                                    <Col lg={4} md={4} >
                                                       <p><span>Payment Method:</span>
                                                        <br/>
                                                        Credit Card
                                                    </p>
                                                    </Col>
                                                </div>
                                                <Row>
                                                    <Col lg={12} md={12} >
                                                        <div style={{overflowX:"auto"}}>
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
                                                                        <td className="first-td">Damage Car</td>
                                                                        <td>£360</td>
                                                                        <td>10 %</td>
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
                                                <div className="amend-bx-btns">
                                                     <Link to="#" className="download-btn">Download</Link>
                                                     <Link to="#" className="refund-btn">Refund</Link>
                                                </div>
                                                </Row>
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

export default Ammendinvoice
