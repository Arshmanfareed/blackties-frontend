import React from 'react'
import DashboardSidebar from '../partials/dashboard-sidebar'
import DashboardPanelTopbar from '../components/DashboardPanelTopbar'
import { Col, Container, Form, Row } from 'react-bootstrap'

function PaymentProcess() {
  return (
    <>
      <section className="user-dashboard">
    <Container fluid>
        <Row className=" g-0">
            <Col lg={3} md={3} className=" sidebar-col">
            <DashboardSidebar/>
            </Col>
            <Col lg={9} md={9} className="panel-col">
                <div className="dashboard-panel payment-process-panel">
                    <Row >
                        <Col lg={12} md={12} >
                            <div className="dashboard-panel-topbar">
                               <DashboardPanelTopbar/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} >
                            <div className="payment-process-sec db-default-sec">
                                <div className="payment-process-card db-default-wrapper">
                                    <Row>
                                        <Col lg={12} md={12} >
                                            <div className="payment-process-top-bar">
                                                <div>
                                                    <a href="javascript" className="back-to"><i class="fa-solid fa-angle-left"></i><ion-icon name="chevron-back-outline" role="img" className="md hydrated"></ion-icon> Back to Payment</a>
                                                </div>
                                                <div className="payment-process-btn-wrap">
                                                    <a href="javascript:;" className="payCancel-tbn">Cancel</a>
                                                    <a href="javascript:;" className="paySave-btn">Save</a>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={7} md={7} >
                                            <div className="LR-Form-wrapper payment-process-form">
                                                <Form action="">
                                                    <div className="debit-card-wrap">
                                                        <div className="debit-card-title">
                                                            <h6>Debit Card</h6>
                                                            <img src="./assets/images/dashboard/Visa.png" alt="Visa"/>
                                                        </div>
                                                        <div className="row">
                                                            <Col lg={12} md={12}>
                                                                <div className="form-group">
                                                                    <label for="control-label">Card Number</label>
                                                                    <input type="number" name="form-control" placeholder="XXXX XXXX XXXX XXXX"/>
                                                                </div>
                                                            </Col>
                                                            <Col lg={12} md={12}>
                                                                <div className="form-group">
                                                                    <label for="control-label">Expration Date</label>
                                                                    <input type="date" name="form-control"/>
                                                                </div>
                                                            </Col>
                                                            <Col lg={12} md={12}>
                                                                <div className="form-group">
                                                                    <label for="control-label">Card Holder</label>
                                                                    <input type="text" name="form-control" placeholder="Your name"/>
                                                                </div>
                                                            </Col>
                                                            <Col lg={12} md={12}>
                                                                <div className="form-group">
                                                                    <label for="control-label">CVC</label>
                                                                    <input type="number" name="form-control" placeholder="CVC"/>
                                                                </div>
                                                            </Col>
                                                        </div>
                                                    </div>
                                                </Form>
                                            </div>
                                        </Col>
                                        <Col lg={5} md={5} >
                                            <div className="payment-card-wrapper">
                                                <img src="./assets/images/dashboard/card1.png" alt="card"/>
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

export default PaymentProcess
