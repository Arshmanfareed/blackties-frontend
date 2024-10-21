import React from 'react'
import DashboardSidebar from '../partials/dashboard-sidebar'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Vehicledocument() {
  return (
    <>
<section className="user-dashboard">
    <Container fluid >
        <Row className="g-0">
            <Col lg={3} md={3} className="sidebar-col">
               <DashboardSidebar/>
            </Col>
            <Col lg={9} md={9} className="panel-col">
                <div className="dashboard-panel vehicle-documents-panel">
                    <Row >
                        <Col lg={12} md={12} >
                            <div className="dashboard-panel-topbar">
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col lg={12} md={12}>
                            <div className="vehicle-documents-sec db-default-sec">
                                <div className="vehicle-documents-card db-default-wrapper">
                                    <Row >
                                        <Col lg={3} md={3} >
                                            <ul className="vehicle-docs-menu">
                                                <li><Link to="#">Vehicle Document</Link></li>
                                                <li><Link to="#">Personal Document</Link></li>
                                            </ul>
                                        </Col>
                                        <Col lg={9} md={9} >
                                            <Row>
                                                <Col lg={12} md={12}>
                                                    <div className="search-bar-wrapper">
                                                        <h5 className="theme-h5">Vehicle Document</h5>
                                                        <div>
                                                            <div className="search-bar-v1">
                                                                <button type="submit"><i className="fa fa-search"></i></button>
                                                                <input type="text" placeholder="Search here..."/>
                                                            </div>
                                                            <Link to="#" className="filter-v1">Filter 
                                                                <img src="./assets/images/Tuning.svg" alt=""/></Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={4} md={4} >
                                                    <div className="documents-details-wrapper">
                                                        <div className="docs-snap-box">
                                                            <img src="./assets/images/dashboard/image 69.png" alt=""/>
                                                        </div>
                                                        <div className="docs-dics">
                                                            <h6>MOT Certificate</h6>
                                                            <p>Lorem ipsum dolor sit amet consectetur. Lectus erat amet at libero eget tincidunt lectus in velit.</p>
                                                            <p className="docs-size">3.6 MB</p>
                                                            <Link to="#">Download</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4} md={4}>
                                                    <div className="documents-details-wrapper">
                                                        <div className="docs-snap-box">
                                                            <img src="./assets/images/dashboard/image 70.png" alt=""/>
                                                        </div>
                                                        <div className="docs-dics">
                                                            <h6>Insurance Certificate</h6>
                                                            <p>Lorem ipsum dolor sit amet consectetur. Lectus erat amet at libero eget tincidunt lectus in velit.</p>
                                                            <p className="docs-size">3.6 MB</p>
                                                            <Link to="#">Download</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4} md={4}>
                                                    <div className="documents-details-wrapper">
                                                        <div className="docs-snap-box">
                                                            <img src="./assets/images/dashboard/image 69.png" alt=""/>
                                                        </div>
                                                        <div className="docs-dics">
                                                            <h6>Vehicle Licence</h6>
                                                            <p>Lorem ipsum dolor sit amet consectetur. Lectus erat amet at libero eget tincidunt lectus in velit.</p>
                                                            <p className="docs-size">3.6 MB</p>
                                                            <Link to="#">Download</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row >
                                                <Col lg={4} md={4}>
                                                    <div className="documents-details-wrapper">
                                                        <div className="docs-snap-box">
                                                            <img src="./assets/images/dashboard/image 69.png" alt=""/>
                                                        </div>
                                                        <div className="docs-dics">
                                                            <h6>Permission Letter</h6>
                                                            <p>Lorem ipsum dolor sit amet consectetur. Lectus erat amet at libero eget tincidunt lectus in velit.</p>
                                                            <p className="docs-size">3.6 MB</p>
                                                            <Link to="#">Download</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4} md={4}>
                                                    <div className="documents-details-wrapper">
                                                        <div className="docs-snap-box">
                                                            <img src="./assets/images/dashboard/image 70.png" alt=""/>
                                                        </div>
                                                        <div className="docs-dics">
                                                            <h6>V5C Document</h6>
                                                            <p>Lorem ipsum dolor sit amet consectetur. Lectus erat amet at libero eget tincidunt lectus in velit.</p>
                                                            <p className="docs-size">3.6 MB</p>
                                                            <Link to="#">Download</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4} md={4}>
                                                </Col>
                                            </Row>
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

export default Vehicledocument
