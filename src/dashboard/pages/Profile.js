import React from "react";
import DashboardSidebar from "../partials/dashboard-sidebar";
import DashboardPanelTopbar from "../components/DashboardPanelTopbar";
import { Tab, Nav, Row, Col, Form, Button, Container } from "react-bootstrap";
import { IonIcon } from '@ionic/react';
import { useState } from "react";

function Profile() {

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isPasswordVisibleCurrent, setIsPasswordVisibleCurrent] = useState(true);
  const [isPasswordVisibleNew, setIsPasswordVisibleNew] = useState(true);
  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const togglePasswordcurrent = () => {
    setIsPasswordVisibleCurrent(!isPasswordVisibleCurrent);
  };
  const togglePasswordnew = () => {
    setIsPasswordVisibleNew(!isPasswordVisibleNew);
  };
  return (
    <>
      <section className="user-dashboard">
        <Container fluid>
          <Row className="g-0">
            <Col lg={3} md={3} className="sidebar-col">
              <DashboardSidebar />
            </Col>
            <Col lg={9} md={9} className="panel-col">
              <div className="dashboard-panel profile-panel">
                <Row>
                  <Col lg={12} md={12}>
                    <div className="dashboard-panel-topbar">
                      <DashboardPanelTopbar />
                    </div>
                  </Col>
                </Row>
                <Row className="row">
                  <Col lg={12} md={12}>
                    <div className="profile-sec db-default-sec">
                      <div className="profile-card db-default-wrapper">
                        <Row>
                          <Col lg={12} md={12}>
                            <Tab.Container defaultActiveKey="profile" className="Profile-password-tabs-v1 d-flex align-items-start">
                              <Row>
                                <Col lg={3} md={3}>
                                  <Nav variant="pills" className="flex-column nav flex-column nav-pills me-3">
                                    <Nav.Item>
                                      <Nav.Link eventKey="profile">
                                        Profile
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="password">
                                        Password
                                      </Nav.Link>
                                    </Nav.Item>
                                    <div className="profileAccount-delete">
                                      <a
                                        href="javascript:;"
                                        className="profileAccount-btn"
                                      >
                                        Deleted Account
                                      </a>
                                    </div>
                                  </Nav>
                                </Col>
                                <Col lg={9} md={9}>
                                  <Tab.Content>
                                    {/* Profile Tab */}
                                    <Tab.Pane eventKey="profile">
                                      <div className="profile-wrapper">
                                        <Row>
                                          <Col lg={12} md={12}>
                                            <div className="profile-top-bar">
                                              <h5>Profile</h5>
                                              <div className="profile-btn-wrap">
                                                <Button
                                                  className="profile-cancel-btn"
                                                >
                                                  Cancel
                                                </Button>
                                                <Button
                                                  className="profile-save-btn"
                                                >
                                                  Save
                                                </Button>
                                              </div>
                                            </div>
                                          </Col>
                                        </Row>
                                        <Row>
                                          <Col lg={12} md={12}>
                                            <div className="profile-meta-wrapper">
                                              <div className="profile-meta">
                                                <img
                                                  src="./assets/images/dashboard/Frame 81.png"
                                                  alt="profile"
                                                />
                                                <div>
                                                  <h4 className="profile-name">
                                                    Omar
                                                  </h4>
                                                  <h6 className="profile-status"><ion-icon name="checkmark-circle-outline"></ion-icon> Active</h6>
                                                  <h6 className="profile-id">
                                                    Customer ID 123123
                                                  </h6>
                                                </div>
                                              </div>
                                              <a
                                                href="javascript:;"
                                                className="change-img-btn"
                                              >
                                                Change Image
                                              </a>
                                            </div>
                                          </Col>
                                        </Row>
                                        <Row>
                                          <Col lg={12} md={12}>
                                            <div className="profile-info-form-wrap">
                                              <div className="head-wrap">
                                                <h3>Profile User</h3>
                                              </div>
                                              <Form>
                                                <Row>
                                                  <Col lg={6} md={6}>
                                                    <Form.Group className="form-group">
                                                      <Form.Label>
                                                        First Name
                                                      </Form.Label>
                                                      <Form.Control
                                                        type="text"
                                                        name="first_name"
                                                      />
                                                    </Form.Group>
                                                  </Col>
                                                  <Col lg={6} md={6}>
                                                   <Form.Group className="form-group">
                                                      <Form.Label>
                                                        Last Name
                                                      </Form.Label>
                                                      <Form.Control
                                                        type="text"
                                                        name="last_name"
                                                      />
                                                    </Form.Group>
                                                  </Col>
                                                  <Col lg={6} md={6}>
                                                   <Form.Group className="form-group">
                                                      <Form.Label>
                                                        Email Address
                                                      </Form.Label>
                                                      <Form.Control
                                                        type="email"
                                                        name="email"
                                                      />
                                                    </Form.Group>
                                                  </Col>
                                                  <Col lg={6} md={6}>
                                                   <Form.Group className="form-group">
                                                      <Form.Label>
                                                        Phone Number
                                                      </Form.Label>
                                                      <div className="t-flag">
                                                      <Form.Control
                                                        type="tel"
                                                        name="phone"
                                                        placeholder="+44"
                                                      /></div>
                                                    </Form.Group>
                                                  </Col>
                                                </Row>
                                              </Form>
                                            </div>
                                          </Col>
                                        </Row>
                                      </div>
                                    </Tab.Pane>

                                    {/* Password Tab */}
                                    <Tab.Pane eventKey="password">
                                      <div className="profile-password-wrapper">
                                        <Row>
                                          <Col lg={12} md={12}>
                                            <div className="profile-top-bar">
                                              <h5>Password</h5>
                                              <div className="profile-btn-wrap">
                                                <Button
                                                  className="profile-cancel-btn"
                                                >
                                                  Cancel
                                                </Button>
                                                <Button
                                                  className="profile-save-btn"
                                                >
                                                  Save
                                                </Button>
                                              </div>
                                            </div>
                                          </Col>
                                        </Row>
                                        <Row>
                                          <Col lg={12} md={12}>
                                            <div className="profile-info-form-wrap profile-password">
                                              <Form>
                                                <Row>
                                                  <Col lg={6} md={6}>
                                                   <Form.Group className="form-group">
                                                      <Form.Label>
                                                        Current Password
                                                      </Form.Label>
                                                      <Form.Control
                                                         type={isPasswordVisibleCurrent ?  "password" : "text" }
                                                        name="current_password"
                                                      />
                                                       <button 
                                                       type="button"
                                                        className="toggle-password"
                                                        onClick={togglePasswordcurrent} >
                                                          <i class="fa-regular fa-eye "></i>
                                                          </button>
                                                    </Form.Group>
                                                  </Col>
                                                  <Col lg={6} md={6}>
                                                   <Form.Group className="form-group">
                                                      <Form.Label>
                                                        New Password
                                                      </Form.Label>
                                                      <Form.Control
                                                         type={isPasswordVisibleNew ?  "password" : "text" }
                                                        name="new_password"
                                                      />
                                                          <button 
                                                       type="button"
                                                        className="toggle-password"
                                                        onClick={togglePasswordnew} >
                                                          <i class="fa-regular fa-eye "></i>
                                                          </button>
                                                    </Form.Group>
                                                  </Col>
                                                  <Col lg={6} md={6}>
                                                   <Form.Group className="form-group">
                                                      <Form.Label>
                                                        Confirm Password
                                                      </Form.Label>
                                                      <Form.Control
                                                           type={isPasswordVisible ?  "password" : "text" }
                                                        name="confirm_password"
                                                      />
                                                           <button 
                                                       type="button"
                                                        className="toggle-password"
                                                        onClick={togglePassword} >
                                                          <i class="fa-regular fa-eye "></i>
                                                          </button>
                                                    </Form.Group>
                                                  </Col>
                                                </Row>
                                              </Form>
                                            </div>
                                          </Col>
                                        </Row>
                                      </div>
                                    </Tab.Pane>
                                  </Tab.Content>
                                </Col>
                              </Row>
                            </Tab.Container>
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
  );
}

export default Profile;
