import React from 'react'
import DashboardSidebar from '../partials/dashboard-sidebar'
import { Col, Container, Tab, Row, Nav, Button, FormControl, InputGroup } from 'react-bootstrap'
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
        <Tab.Container defaultActiveKey="vehicleDoc">
          <Row>
            <Col lg={12} md={12}>
              <div className="vehicle-document-tabs-v1 d-flex align-items-start">
                <Nav variant="pills" className="flex-column me-3" id="v-pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="vehicleDoc">Vehicle Document</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="personalDoc">Personal Document</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="vehicleDoc">
                    <div className="vehicle-documents-wrapper">
                      <Row>
                        <Col lg={12} md={12}>
                          <div className="search-bar-wrapper">
                            <h5 className="theme-h5">Vehicle Document</h5>
                            {/* <div>
                              <div className="search-bar-v1">
                                <InputGroup>
                                  <Button type="submit"><i className="fa fa-search"></i></Button>
                                  <FormControl placeholder="Search here..." />
                                </InputGroup>
                              </div>
                              <a href="javascript:;" className="filter-v1">Filter <img src="./assets/images/Tuning.svg" alt="" /></a>
                            </div> */}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={4} md={4}>
                          <div className="documents-details-wrapper">
                            <div className="docs-snap-box">
                              <img src="./assets/images/dashboard/image 69.png" alt="" />
                            </div>
                            <div className="docs-dics">
                              <h6>MOT Certificate</h6>
                              <p>Lorem ipsum dolor sit amet consectetur. Lectus erat amet at libero eget tincidunt lectus in velit.</p>
                              <p className="docs-size">3.6 MB</p>
                              <a href="javascript:;">Download</a>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4} md={4}>
                          <div className="documents-details-wrapper">
                            <div className="docs-snap-box">
                              <img src="./assets/images/dashboard/image 70.png" alt="" />
                            </div>
                            <div className="docs-dics">
                              <h6>Insurance Certificate</h6>
                              <p>Lorem ipsum dolor sit amet consectetur. Lectus erat amet at libero eget tincidunt lectus in velit.</p>
                              <p className="docs-size">3.6 MB</p>
                              <a href="javascript:;">Download</a>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4} md={4}>
                          <div className="documents-details-wrapper">
                            <div className="docs-snap-box">
                              <img src="./assets/images/dashboard/image 69.png" alt="" />
                            </div>
                            <div className="docs-dics">
                              <h6>Vehicle Licence</h6>
                              <p>Lorem ipsum dolor sit amet consectetur. Lectus erat amet at libero eget tincidunt lectus in velit.</p>
                              <p className="docs-size">3.6 MB</p>
                              <a href="javascript:;">Download</a>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={4} md={4}>
                          <div className="documents-details-wrapper">
                            <div className="docs-snap-box">
                              <img src="./assets/images/dashboard/image 69.png" alt="" />
                            </div>
                            <div className="docs-dics">
                              <h6>Permission Letter</h6>
                              <p>Lorem ipsum dolor sit amet consectetur. Lectus erat amet at libero eget tincidunt lectus in velit.</p>
                              <p className="docs-size">3.6 MB</p>
                              <a href="javascript:;">Download</a>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4} md={4}>
                          <div className="documents-details-wrapper">
                            <div className="docs-snap-box">
                              <img src="./assets/images/dashboard/image 70.png" alt="" />
                            </div>
                            <div className="docs-dics">
                              <h6>V5C Document</h6>
                              <p>Lorem ipsum dolor sit amet consectetur. Lectus erat amet at libero eget tincidunt lectus in velit.</p>
                              <p className="docs-size">3.6 MB</p>
                              <a href="javascript:;">Download</a>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="personalDoc">
                    <div className="personal-documents-wrapper">
                      <Row>
                        <Col lg={12} md={12}>
                          <div className="search-bar-wrapper">
                            <h5 className="theme-h5">Personal Document</h5>
                            {/* <div>
                              <div className="search-bar-v1">
                                <InputGroup>
                                  <Button type="submit"><i className="fa fa-search"></i></Button>
                                  <FormControl placeholder="Search here..." />
                                </InputGroup>
                              </div>
                              <a href="javascript:;" className="filter-v1">Filter <img src="./assets/images/Tuning.svg" alt="" /></a>
                            </div> */}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={4} md={4}>
                          <div className="documents-details-wrapper">
                            <div className="docs-snap-box">
                              <img src="./assets/images/dashboard/image 69.png" alt="" />
                            </div>
                            <div className="docs-dics">
                              <h6>Contract</h6>
                              <p>Lorem ipsum dolor sit amet consectetur. Lectus erat amet at libero eget tincidunt lectus in velit.</p>
                              <p className="docs-size">3.6 MB</p>
                              <a href="javascript:;">Download</a>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4} md={4}>
                          <div className="documents-details-wrapper">
                            <div className="docs-snap-box">
                              <img src="./assets/images/dashboard/image 70.png" alt="" />
                            </div>
                            <div className="docs-dics">
                              <h6>Damage Report</h6>
                              <p>Lorem ipsum dolor sit amet consectetur. Lectus erat amet at libero eget tincidunt lectus in velit.</p>
                              <p className="docs-size">3.6 MB</p>
                              <a href="javascript:;">Download</a>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Col>
          </Row>
        </Tab.Container>
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
