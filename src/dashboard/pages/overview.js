import React from 'react'
import DashboardSidebar from '../partials/dashboard-sidebar'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Overview() {
  return (
    <>
      
<section className="user-dashboard">
    <Container fluid className="container-fluid">
        <Row className="g-0">
            <Col className="sidebar-col" lg={3} md={3}>
                <DashboardSidebar/>
            </Col>
            <Col lg={9} md={9} className="panel-col">
                <div className="dashboard-panel overview-panel">
                    <Row >
                        <Col lg={12} md={12} >
                            <div className="dashboard-panel-topbar">
                                <h6 className="overview-vehicle-title">KM19 VTY</h6>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} >
                            <div className="overview-sec db-default-sec">
                                <div className="overview-card db-default-wrapper">
                                    <Row className=" vehicle-average-row">
                                        <Col lg={4} md={4} >
                                            <div className="vehicle-average-wrap">
                                                <h6 className="vehicle-average-title">Total Mileage</h6>
                                                <div className="average-score">
                                                    <h5>84573</h5>
                                                    <span>+4.2%<ion-icon name="arrow-up-outline"></ion-icon></span>
                                                </div>
                                                <span className="compared-weeks">Compared to (Last Week)</span>
                                            </div>
                                        </Col>
                                        <Col lg={4} md={4} >
                                            <div className="vehicle-average-wrap">
                                                <h6 className="vehicle-average-title">Current Mileage</h6>
                                                <div className="average-score">
                                                    <h5>84573</h5>
                                                    <span>+4.2%<ion-icon name="arrow-up-outline"></ion-icon></span>
                                                </div>
                                                <span className="compared-weeks">Compared to (Last Week)</span>
                                            </div>
                                        </Col>
                                        <Col lg={4} md={4} >
                                            <div className="vehicle-average-wrap">
                                                <h6 className="vehicle-average-title">Driving Score</h6>
                                                <div className="average-score">
                                                    <h5>84573</h5>
                                                    <span>+4.2%<ion-icon name="arrow-up-outline"></ion-icon></span>
                                                </div>
                                                <span className="compared-weeks">Compared to (Last Week)</span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6} md={6} >
                                            <div className="detail-rent-wrapper">
                                                <h5 className="theme-h5">Details Rental</h5>
                                                <div className="map">
                                                    <img src="./assets/images/dashboard/Maps.png" alt="Maps"/>
                                                </div>
                                                <div className="rental-vehicle-dt1">
                                                    <img src="./assets/images/dashboard/image 67.png" alt=""/>
                                                    <div>
                                                        <h5 className="theme-h5">Mercedes-Benz E className</h5>
                                                        <span>Sedan Car</span>
                                                    </div>
                                                    <p>#9761</p>
                                                </div>
                                                <div className="rental-vehicle-dt2">
                                                    <div>
                                                        <h6>Distance</h6>
                                                        <h5>102 Miles</h5>
                                                    </div>
                                                    <div>
                                                        <h6>Passenger</h6>
                                                        <h5>4 Persons</h5>
                                                    </div>
                                                </div>
                                                <div className="rental-vehicle-dt3">
                                                    <div>
                                                        <h6>Start</h6>
                                                        <h5>July 19, 2024</h5>
                                                    </div>
                                                    <div>
                                                        <h6>End</h6>
                                                        <h5>TBD</h5>
                                                    </div>
                                                </div>
                                                <div className="rental-vehicle-price">
                                                    <div>
                                                        <h5 className="theme-h5">Total Rental Price</h5>
                                                        <span>Overall price and includes rental discount</span>
                                                    </div>
                                                    <div>
                                                        <h3>£360</h3>
                                                    </div>
                                                </div>
                                                <Link  to="#" className="RRC-btn">Request Cancellation</Link>
                                            </div>
                                        </Col>
                                        <Col lg={6} md={6} >
                                            <div className="mileage-insights-wrap">
                                                <div className="head-options">
                                                    <h5>Details Rental</h5>
                                                    <Link to="#"><ion-icon name="ellipsis-horizontal"></ion-icon></Link>
                                                </div>
                                                <div className="mileage-graph">
                                                    <div className="mileage-indicate"><ion-icon name="ellipse"></ion-icon>Mileage</div>
                                                    <img src="./assets/images/dashboard/Graph.png" alt="Graph"/>
                                                </div>
                                            </div>
                                            <div className="rental-vehicle-docs-wrap">
                                                <div className="head-options">
                                                    <h4>Document</h4>
                                                    <Link to="#">View All</Link>
                                                </div>
                                                <ul className="rental-files">
                                                    <li>
                                                        <img src="./assets/images/dashboard/image 69.png" alt="Docs"/>
                                                        <div>
                                                            <h6>Insurance Document</h6>
                                                            <span>3.6 MB</span>
                                                        </div>
                                                        <Link to="#">Download</Link>
                                                    </li>
                                                    <li>
                                                        <img src="./assets/images/dashboard/image 70.png" alt="Docs"/>
                                                        <div>
                                                            <h6>MOT Certificate</h6>
                                                            <span>3.6 MB</span>
                                                        </div>
                                                        <Link to="#">Download</Link>
                                                    </li>
                                                    <li>
                                                        <img src="./assets/images/dashboard/image 70.png" alt="Docs"/>
                                                        <div>
                                                            <h6>TfL Vehicle Certificate</h6>
                                                            <span>3.6 MB</span>
                                                        </div>
                                                        <Link to="#">Download</Link>
                                                    </li>
                                                    <li>
                                                        <img src="./assets/images/dashboard/image 70.png" alt="Docs"/>
                                                        <div>
                                                            <h6>Permission Document</h6>
                                                            <span>3.6 MB</span>
                                                        </div>
                                                        <Link to="#">Download</Link>
                                                    </li>
                                                    <li>
                                                        <img src="./assets/images/dashboard/image 70.png" alt="Docs"/>
                                                        <div>
                                                            <h6>V5C Document</h6>
                                                            <span>3.6 MB</span>
                                                        </div>
                                                        <Link to="#">Download</Link>
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

export default Overview
