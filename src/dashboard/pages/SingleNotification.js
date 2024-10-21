import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DashboardSidebar from '../partials/dashboard-sidebar'
import DashboardPanelTopbar from '../components/DashboardPanelTopbar'
import { Link } from 'react-router-dom'

function SingleNotification() {
  return (
    <>
      <section className="user-dashboard">
    <Container fluid>
        <Row className=" g-0">
            <Col lg={3} md={3} className=" sidebar-col">
                <DashboardSidebar/>
            </Col>
            <Col lg={9} md={9} className="panel-col">
                <div className="dashboard-panel notification-inPage-panel">
                    <Row>
                        <Col lg={12} md={12} >
                            <div className="dashboard-panel-topbar">
                                <DashboardPanelTopbar/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} >
                            <div className="notification-inPage-sec db-default-sec">
                                <div className="notification-inPage-card db-default-wrapper">
                                    <Row>
                                        <Col lg={12} md={12} >
                                            <div className="search-bar-wrapper">
                                                <div>
                                                    <Link to="/notifications" className="back-to"><ion-icon name="chevron-back-outline" role="img" className="md hydrated"></ion-icon> Back to Notification</Link>
                                                </div>
                                                <div>
                                                    <div className="search-bar-v1">
                                                        <button type="submit"><i className="fa fa-search"></i></button>
                                                        <input type="text" placeholder="Search here..."/>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="notification-inBody">
                                        <Row>
                                            <Col lg={12} md={12} >
                                                <div className="notfic-main-img">
                                                    <img src="./assets/images/dashboard/imagenote.png" alt=""/>
                                                </div>
                                            </Col>
                                            <Col lg={12} md={12} >
                                                <div className="notfic-main-user">
                                                    <div className="noific-user-img">
                                                        <img src="./assets/images/dashboard/New Customers List.png" alt="User"/>
                                                        <ion-icon name="ellipse"></ion-icon>
                                                    </div>
                                                    <div className="notific-user-note">
                                                        <span className="notific-user">Michael Dane</span>
                                                        <span className="notific-time">10:13 AM</span>
                                                        <span className="notific-date"><ion-icon name="ellipse"></ion-icon> Sep 23, 2024</span>
                                                        <p className="short-notific">You have a new ride scheduled for March 20, 2024. Pickup is at 8:00 AM from 123 Main St. and drop-off by 9:00 AM at 456 Park Ave. Remember to check the vehicle's condition prior to the journey.</p>
                                                        <div className="notific-alert">
                                                            <p>Please ensure you arrive 10 minutes early to avoid any delays. Contact the client ahead of time if there are any changes or if you foresee any issues.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
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

export default SingleNotification
