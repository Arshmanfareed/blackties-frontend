import React from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function Supportmessage() {
  return (
    <>
      <section className="user-dashboard">
        <Container fluid>
          <Row className=" g-0">
            <Col lg={3} md={3} className="sidebar-col">
              <Sidebar />
            </Col>
            <Col lg={9} md={9} className="panel-col">
              <div className="dashboard-panel message-panel">
                <Row>
                  <Col lg={12} md={12}>
                    <Dashboardpaneltopbar />
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12}>
                    <div className="message-sec db-default-sec">
                      <div className="message-card db-default-wrapper">
                        <Row>
                          <Col lg={12} md={12}>
                            <div className="invoice-view-topbar">
                              <Link to="#" className="back-to">
                                <i className="fas fa-chevron-left"></i> Back
                              </Link>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <div className="chat-board-topBar">
                            <div className="chat-user-profile">
                              <img
                                src="./admin_assets/images/dashboard/Avatar.png"
                                alt="user profile"
                              />
                              <h6>Jenny Wilson</h6>
                            </div>
                            <div className="chat-XOptions">
                              <Link to="#" className="chat-fav">
                                <img src="./admin_assets/images/dashboard/Vector532.png" />
                              </Link>
                              <Link to="#" className="chat-copen">
                                <img src="./admin_assets/images/dashboard/Coupon3432.png" />
                              </Link>
                              <Link to="#" className="chat-sleep">
                                <img src="./admin_assets/images/dashboard/Group533.png" />
                              </Link>
                              <Link to="#" className="chat-sleep">
                                <img src="./admin_assets/images/envolope.png" />
                              </Link>
                              <Link to="#" className="chat-sleep">
                                <img src="./admin_assets/images/download.png" />
                              </Link>
                              <Link to="#" className="chat-option">
                                <i className="fa-solid fa-ellipsis"></i>
                              </Link>
                              <Link to="#" className="chat-close">
                                <img src="./admin_assets/images/dashboard/Vector4354.png" />{" "}
                                Close
                              </Link>
                            </div>
                          </div>
                          <Col lg={7}>
                            <div className="chat-board-wrapper">
                              <div className="chat-board-body support-msg">
                                <div className="admin1-wrap">
                                  <div className="msg-tabs-wrap">
                                    <div className="message-box">
                                      <p>
                                        Lorem ipsum dolor sit amet consectetur.
                                        Nascetur amet leo in sed quisque neque.
                                        Venenatis massa sit eleifend amet et sed
                                        ipsum eget. Massa convallis vitae
                                        consequat eu sagittis luctus nunc sit.
                                        Amet eleifend ipsum sed pellentesque
                                        ante euismod egestas.
                                      </p>
                                      <div className="msg-active-time">
                                        <span className="active">
                                          <i className="fa-solid fa-check"></i>
                                          Seen
                                        </span>
                                        <span className="timming">10:00</span>
                                      </div>
                                    </div>
                                    <div className="msg-us-profile">
                                      <img
                                        src="./admin_assets/images/dashboard/Avatar.png"
                                        alt="user"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="admin2-wrap">
                                  <div className="msg-tabs-wrap">
                                    <div className="msg-us-profile">
                                      <img
                                        src="./admin_assets/images/dashboard/Avatar.png"
                                        alt="user"
                                      />
                                    </div>
                                    <div className="message-box">
                                      <p>
                                        Lorem ipsum dolor sit amet consectetur.
                                        Nascetur amet leo in sed quisque neque.
                                        Venenatis massa sit eleifend amet et sed
                                        ipsum eget. Massa convallis vitae
                                        consequat eu sagittis luctus nunc sit.
                                        Amet eleifend ipsum sed pellentesque
                                        ante euismod egestas.
                                      </p>
                                      <div className="msg-active-time">
                                        <span className="active">
                                          <i className="fa-solid fa-check"></i>
                                          Seen
                                        </span>
                                        <span className="timming">10:00</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="admin1-wrap">
                                  <div className="msg-tabs-wrap">
                                    <div className="message-box">
                                      <p>
                                        Lorem ipsum dolor sit amet consectetur.
                                        Nascetur amet leo in sed quisque neque.
                                        Venenatis massa sit eleifend amet et sed
                                        ipsum eget. Massa convallis vitae
                                        consequat eu sagittis luctus nunc sit.
                                        Amet eleifend ipsum sed pellentesque
                                        ante euismod egestas.
                                      </p>
                                      <div className="msg-active-time">
                                        <span className="active">
                                          <i className="fa-solid fa-check"></i>
                                          Seen
                                        </span>
                                        <span className="timming">10:00</span>
                                      </div>
                                    </div>
                                    <div className="msg-us-profile">
                                      <img
                                        src="./admin_assets/images/dashboard/Avatar.png"
                                        alt="user"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="admin2-wrap">
                                  <div className="msg-tabs-wrap">
                                    <div className="msg-us-profile">
                                      <img
                                        src="./admin_assets/images/dashboard/Avatar.png"
                                        alt="user"
                                      />
                                    </div>
                                    <div className="message-box">
                                      <p>
                                        Lorem ipsum dolor sit amet consectetur.
                                        Nascetur amet leo in sed quisque neque.
                                        Venenatis massa sit eleifend amet et sed
                                        ipsum eget. Massa convallis vitae
                                        consequat eu sagittis luctus nunc sit.
                                        Amet eleifend ipsum sed pellentesque
                                        ante euismod egestas.
                                      </p>
                                      <div className="msg-active-time">
                                        <span className="active">
                                          <i className="fa-solid fa-check"></i>
                                          Seen
                                        </span>
                                        <span className="timming">10:00</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="chat-text-field">
                                <div className="wrap">
                                  <textarea
                                    name="msg"
                                    id=""
                                    placeholder="Lorem ipsum dolor sit amet consectetur."
                                  ></textarea>
                                  <div className="file-send-wrap">
                                    <span className="file-send-btn">
                                      <label htmlFor="chat-docs">
                                        <ion-icon name="add"></ion-icon>
                                      </label>
                                      <input
                                        type="file"
                                        name="chat-docs"
                                        id="chat-docs"
                                      />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col lg={5} md={5}>
                            <div className="details-colmn">
                              <h5>Details</h5>
                              <div className="details-column-txt">
                                <div className="tckt-txt">
                                  <p>Ticket ID</p>
                                </div>
                                <div className="code-id">
                                  <p>ADA2142</p>
                                </div>
                              </div>
                              <div className="details-column-txt">
                                <div className="tckt-txt">
                                  <p>Date & Time</p>
                                </div>
                                <div className="code-id">
                                  <p>27 June, 2024 10:00 AM</p>
                                </div>
                              </div>
                              <div className="details-column-txt">
                                <div className="tckt-txt">
                                  <p>Categories</p>
                                </div>
                                <div className="code-id">
                                  <p>Complaints</p>
                                </div>
                              </div>
                              <div className="details-column-txt">
                                <div className="tckt-txt">
                                  <p>Vehicle</p>
                                </div>
                                <div className="code-id">
                                  <p>Mercedes E220</p>
                                </div>
                              </div>
                              <div className="details-column-txt">
                                <div className="tckt-txt">
                                  <p>Status</p>
                                </div>
                                <div className="code-id">
                                  <p>
                                    <Link to="#" className="Open-btn">
                                      Open
                                    </Link>
                                  </p>
                                </div>
                              </div>
                              <div className="details-column-txt">
                                <div className="tckt-txt">
                                  <p>Priority</p>
                                </div>
                                <div className="code-id">
                                  <p>
                                    <Link to="#" className="High-btn">
                                      High
                                    </Link>
                                  </p>
                                </div>
                              </div>
                              <div className="user-head-text">
                                <h5>User Data</h5>
                              </div>
                              <div className="details-column-txt">
                                <div className="tckt-txt">
                                  <p>First Name</p>
                                </div>
                                <div className="code-id">
                                  <p>Rohan</p>
                                </div>
                              </div>
                              <div className="details-column-txt">
                                <div className="tckt-txt">
                                  <p>Last Name</p>
                                </div>
                                <div className="code-id">
                                  <p>Sibu</p>
                                </div>
                              </div>
                              <div className="details-column-txt">
                                <div className="tckt-txt">
                                  <p>Date of Birth</p>
                                </div>
                                <div className="code-id">
                                  <p>13 January 1991</p>
                                </div>
                              </div>
                              <div className="details-column-txt">
                                <div className="tckt-txt">
                                  <p>Phone Number</p>
                                </div>
                                <div className="code-id">
                                  <p>+44 2121 1235</p>
                                </div>
                              </div>
                              <div className="details-column-txt">
                                <div className="tckt-txt">
                                  <p>Email</p>
                                </div>
                                <div className="code-id">
                                  <p>Sample@gmail.com</p>
                                </div>
                              </div>
                              <div className="user-head-text">
                                <h5>User Notes</h5>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur.
                                  Nascetur amet leo in sed quisque neque.
                                  Venenatis massa sit eleifend amet et sed ipsum
                                  eget. Massa convallis vitae consequat eu
                                  sagittis luctus nunc sit.
                                </p>
                              </div>
                              <div className="user-head-text">
                                <h5>Company Notes</h5>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur.
                                  Nascetur amet leo in sed quisque neque.
                                  Venenatis massa sit eleifend amet et sed ipsum
                                  eget. Massa convallis vitae consequat eu
                                  sagittis luctus nunc sit.
                                </p>
                              </div>
                              <div className="message-resolved-btn">
                                <Link to="#" className="msg-resolve-btn">
                                  Resolved
                                </Link>
                              </div>
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

export default Supportmessage;
