import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Link } from "react-router-dom";

function Adminaddcontrol() {
  return (
    <>
      <section className="user-dashboard">
        <Container fluid>
          <Row className=" g-0">
            <Col lg={3} md={3} className="sidebar-col">
              <Sidebar />
            </Col>
            <Col lg={9} md={9} className=" panel-col">
              <div className="dashboard-panel profile-panel">
                <Row>
                  <Col lg={12} md={12}>
                    <div className="dashboard-panel-topbar">
                      <Dashboardpaneltopbar />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12}>
                    <div className="profile-sec db-default-sec user-pro permission-mian set-permi">
                      <div className="profile-card db-default-wrapper">
                        <Row>
                          <Col lg={12} md={12}>
                            <div className="control-form-main add_admin_control">
                              <Row>
                                <Col lg={12} md={12}>
                                  <div className="profile-top-bar user-pro-btn set-permission">
                                    <Link to="/admin-setting">
                                      <h5>
                                        <i className="fas fa-chevron-left"></i>
                                        Back to Admin Control
                                      </h5>
                                    </Link>
                                    <div className="profile-btn-wrap permission-btn">
                                      <Link
                                        to="#"
                                        className="control-cancel-btn"
                                      >
                                        Cancel
                                      </Link>
                                      <Link to="#" className="control-save-btn">
                                        Save
                                      </Link>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <div className="admin-control-form">
                                  <form action="" method="">
                                    <Row>
                                      <Col lg={12} md={12}>
                                        <div className="form-group">
                                          <label htmlFor="control-label">
                                            User Name
                                          </label>
                                          <br />
                                          <input
                                            type="text"
                                            name="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </Col>
                                      <Col lg={12} md={12}>
                                        <div className="form-group">
                                          <label htmlFor="control-label">
                                            Email
                                          </label>
                                          <br />
                                          <input
                                            type="email"
                                            name="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </Col>
                                      <Col lg={12} md={12}>
                                        <div className="form-group">
                                          <label htmlFor="control-label">
                                            Password
                                          </label>
                                          <br />
                                          <input
                                            type="password"
                                            name="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </Col>
                                      <Col lg={12} md={12}>
                                        <div className="form-group">
                                          <label htmlFor="control-label">
                                            Role
                                          </label>
                                          <br />
                                          <select name="Admin" id="Admin-fld">
                                            <option value="volvo">Admin</option>
                                            <option value="saab">Admin</option>
                                            <option value="opel">Admin</option>
                                            <option value="audi">Admin</option>
                                          </select>
                                        </div>
                                      </Col>
                                    </Row>
                                  </form>
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
  );
}

export default Adminaddcontrol;
