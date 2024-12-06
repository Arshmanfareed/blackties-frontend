import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from './partials/Sidebar'
import Dashboardpaneltopbar from './partials/Dashboardpaneltopbar'
import { Link } from 'react-router-dom'

function Adminrolepermission() {
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
                                            <Link
                                              to="#"
                                              className="control-save-btn"
                                            >
                                              Save
                                            </Link>
                                          </div>
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <div className="admin-control-form-two">
                                        <form action="" method="">
                                          <Row>
                                            <Col lg={12} md={12}>
                                              <div className="form-group">
                                                <label htmlFor="control-label">
                                                  Role
                                                </label>
                                                <br />
                                                <input
                                                  type="email"
                                                  name="form-control"
                                                  placeholder="Admin"
                                                />
                                              </div>
                                            </Col>
                                          </Row>
                                        </form>
                                        <Row>
                                          <Col lg={4} md={4}>
                                            <div className="checkboxes-columns">
                                              <h6>Dashboard</h6>
                                              <ul>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check01"
                                                  />
                                                  <span>Important Notices</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check02"
                                                  />
                                                  <span>Important Notices</span>
                                                </li>
                                              </ul>
                                            </div>
                                          </Col>

                                          <Col lg={4} md={4}>
                                            <div className="checkboxes-columns">
                                              <h6>User</h6>
                                              <ul>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check03"
                                                  />
                                                  <span>All Users</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check04"
                                                  />
                                                  <span>View Users</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check05"
                                                  />
                                                  <span>Amend Users</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check06"
                                                  />
                                                  <span>Application</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check07"
                                                  />
                                                  <span>Approval</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check08"
                                                  />
                                                  <span>Rejected</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check09"
                                                  />
                                                  <span>Amend</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check010"
                                                  />
                                                  <span>View Users</span>
                                                </li>
                                              </ul>
                                            </div>
                                          </Col>

                                          <Col lg={4} md={4}>
                                            <div className="checkboxes-columns">
                                              <h6>Vehicle</h6>
                                              <ul>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check011"
                                                  />
                                                  <span>Vehicle Search</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check012"
                                                  />
                                                  <span>View</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check013"
                                                  />
                                                  <span>View</span>
                                                </li>
                                              </ul>
                                            </div>
                                          </Col>
                                        </Row>
                                      </div>
                                    </Row>
                                    <Row className=" rw-two-check">
                                      <Col lg={4} md={4}>
                                        <div className="checkboxes-columns">
                                          <h6>Calendar</h6>
                                          <ul>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check014"
                                              />
                                              <span>View</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check015"
                                              />
                                              <span>Amend</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check016"
                                              />
                                              <span>Add Calendar</span>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="checkboxes-columns checkboxes-columns-two">
                                          <h6>PCNs</h6>
                                          <ul>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check017"
                                              />
                                              <span>View</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check018"
                                              />
                                              <span>Amend</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check019"
                                              />
                                              <span>Add PCNs</span>
                                            </li>
                                          </ul>
                                        </div>
                                      </Col>

                                      <Col lg={4} md={4}>
                                        <div className="checkboxes-columns">
                                          <h6>PCNs</h6>
                                          <ul>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check020"
                                              />
                                              <span>Add PCNs</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check021"
                                              />
                                              <span>View</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check022"
                                              />
                                              <span>Amend</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check023"
                                              />
                                              <span>Delete</span>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="checkboxes-columns checkboxes-columns-two">
                                          <h6>Support & Issue</h6>
                                          <ul>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check024"
                                              />
                                              <span>Add Issue</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check025"
                                              />
                                              <span>View</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check026"
                                              />
                                              <span>Amend</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check027"
                                              />
                                              <span>Delete</span>
                                            </li>
                                          </ul>
                                        </div>
                                      </Col>

                                      <Col lg={4} md={4}>
                                        <div className="checkboxes-columns">
                                          <h6>Financials</h6>
                                          <ul>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check028"
                                              />
                                              <span>Payment</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check029"
                                              />
                                              <span>View</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check030"
                                              />
                                              <span>Refund</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check031"
                                              />
                                              <span>Pay</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check032"
                                              />
                                              <span>Revenue</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check033"
                                              />
                                              <span>View</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check034"
                                              />
                                              <span>Add Data</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check035"
                                              />
                                              <span>Amend</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check036"
                                              />
                                              <span>Delete</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check037"
                                              />
                                              <span>Expanses</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check038"
                                              />
                                              <span>View</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check039"
                                              />
                                              <span>Add Data</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check040"
                                              />
                                              <span>Amend</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check041"
                                              />
                                              <span>Delete</span>
                                            </li>
                                          </ul>
                                        </div>
                                      </Col>
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

export default Adminrolepermission
