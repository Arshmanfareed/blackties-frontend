import React from 'react'
import DashboardSidebar from '../partials/dashboard-sidebar'
import DashboardPanelTopbar from '../components/DashboardPanelTopbar'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Payment() {
  return (
    <>
      
<section className="user-dashboard">
    <Container fluid >
        <Row className=" g-0">
            <Col lg={3} md={3} className=" sidebar-col">
               <DashboardSidebar/>
            </Col>
            <Col lg={9} md={9} className=" panel-col">
                <div className="dashboard-panel payment-panel">
                    <Row>
                        <Col lg={12} md={12} >
                            <div className="dashboard-panel-topbar">
                               <DashboardPanelTopbar/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12}>
                            <div className="payment-sec db-default-sec">
                                <div className="payment-card db-default-wrapper">
                                    <Row>
                                        <Col lg={12} >
                                            <div className="balance-wrapper">
                                                <div>
                                                    <h6>Outstanding Balance</h6>
                                                    <h2>£2.000</h2>
                                                </div>
                                                <div>
                                                    <Link to="#" className="payNow-btn">Pay Now</Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className=" payment-method-row">
                                        <Col lg={12} md={12}>
                                            <div className="payment-method-head">
                                                <h5>Payment Method</h5>
                                                <h6>Add Payment Method</h6>
                                            </div>
                                            <div className="payment-method-wrapper">
                                                <Form action="">
                                                    <div className="payment-options-list payment-options1">
                                                        <div className="checkboxes__item">
                                                            <label className="checkbox payment-radio">
                                                                <input type="checkbox" checked="checked"/>
                                                                <div className="checkbox__checkmark"></div>
                                                                <div className="checkbox__body">
                                                                    <div className="checkbox-inbody">
                                                                        <img src="./assets/images/dashboard/Visa_Inc._logo 1.svg" alt=""/>
                                                                        <div>
                                                                            <h6>Visa Ending in 1231</h6>
                                                                            <span className="exp">Expired date 12/24</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="pay-mathod-default">
                                                            <a href="javascript:;"><ion-icon name="ellipse"></ion-icon>default</a>
                                                        </div>
                                                    </div>
                                                    <div className="payment-options-list payment-options2">
                                                        <div className="checkboxes__item">
                                                            <label className="checkbox payment-radio">
                                                                <input type="checkbox"/>
                                                                <div className="checkbox__checkmark"></div>
                                                                <div className="checkbox__body">
                                                                    <div className="checkbox-inbody">
                                                                        <img src="./assets/images/dashboard/mc.svg" alt=""/>
                                                                        <div>
                                                                            <h6>Visa Ending in 1231</h6>
                                                                            <span className="exp">Expired date 12/24</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="default-or-delete">
                                                            <a href="javascript:;" className="set-def">Set as Default</a>
                                                            <a href="javascript:;" className="del"><ion-icon name="trash-outline"></ion-icon></a>
                                                        </div>
                                                    </div>
                                                </Form>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="payment-history-row">
                                        <Col lg={12} md={12} >
                                            <div className="payment-history-head">
                                                <h5>Payment History</h5>
                                            </div>
                                            <div className="payment-history">
                                                <ul>
                                                    <li>
                                                        <div className="pay-history-wrap">
                                                            <div className="pay-history-info">
                                                                <img src="./assets/images/dashboard/pay-history.png" alt=""/>
                                                                <div className="pay-record">
                                                                    <h5>Receipt ID <span className="phId">001243RP</span></h5>
                                                                    <h6><span className="pht">16:00 AM,</span> <span className="phd">27 June, 2024</span></h6>
                                                                </div>
                                                            </div>
                                                            <div className="pay-history-price">
                                                                <h5>£90</h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <div className="pay-history-wrap">
                                                            <div className="pay-history-info">
                                                                <img src="./assets/images/dashboard/pay-history.png" alt=""/>
                                                                <div className="pay-record">
                                                                    <h5>Receipt ID <span className="phId">001243RP</span></h5>
                                                                    <h6><span className="pht">16:00 AM,</span> <span className="phd">27 June, 2024</span></h6>
                                                                </div>
                                                            </div>
                                                            <div className="pay-history-price">
                                                                <h5>£90</h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <div className="pay-history-wrap">
                                                            <div className="pay-history-info">
                                                                <img src="./assets/images/dashboard/pay-history.png" alt=""/>
                                                                <div className="pay-record">
                                                                    <h5>Receipt ID <span className="phId">001243RP</span></h5>
                                                                    <h6><span className="pht">16:00 AM,</span> <span className="phd">27 June, 2024</span></h6>
                                                                </div>
                                                            </div>
                                                            <div className="pay-history-price">
                                                                <h5>£90</h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
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

export default Payment
