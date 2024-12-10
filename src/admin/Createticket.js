import React from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function Createticket() {
  return (
    <>
      <section className="user-dashboard">
        <Container fluid>
          <Row className=" g-0">
            <Col lg={3} md={3} className="sidebar-col">
              <Sidebar />{" "}
            </Col>

            <Col lg={9} md={9} className=" panel-col">
              <div className="dashboard-panel message-panel">
                <Row>
                  <Col lg={12} md={12}>
                    <Dashboardpaneltopbar />
                  </Col>
                </Row>
                <Row>
                  <Col ld={12} md={12}>
                    <div className="message-sec db-default-sec ticket-sec">
                      <div className="message-card db-default-wrapper">
                        <Row>
                          <Col lg={12} md={12}>
                            <div className="ticket-main">
                              <div className="invoice-view-topbar">
                                <Link to="#" className="back-to">
                                  <i className="fas fa-chevron-left"></i> Back
                                </Link>
                              </div>
                              <div className="create-ticket-top-btns">
                                <Link to="#" className="ticket-cancel-btn">
                                  Cancel
                                </Link>
                                <Link to="#" className="ticket-btn ml-3">
                                  Create Ticket
                                </Link>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={7}>
                            <div className="ticket-col-one">
                              <form action="">
                                <Row>
                                  <Col lg={12} md={12}>
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Date & Time
                                      </label>
                                      <br />
                                      <input
                                        type="date"
                                        name="form-control"
                                        id=""
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12}>
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Vehicle Registration Number
                                      </label>
                                      <br />
                                      <input
                                        type="number"
                                        name="form-control"
                                        id=""
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12}>
                                    <div className="form-group">
                                      <label htmlFor="categories">Categories</label>
                                      <br />
                                      <select name="categories" id="cars">
                                        <option value="Issue">Issue</option>
                                        <option value="Issue2">Issue2</option>
                                        <option value="Issue3">Issue3</option>
                                        <option value="Issue4">Issue4</option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12}>
                                    <div className="form-group">
                                      <label htmlFor="control-label">Send</label>
                                      <br />
                                      <Link to="#" className="serch-bar">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                        <input
                                          type="search"
                                          id="site-search"
                                          name="form-control"
                                        />
                                      </Link>
                                    </div>
                                  </Col>

                                  <div className="cstmr-bx ticket-bx-scrll">
                                    <div className="cstmr-srchbox">
                                      <div className="drvr_deta active">
                                        <div className="drvrmain">
                                          <img
                                            src="./admin_assets/images/new-customers-list.png"
                                            className="new-customers-img"
                                            alt="new-customers-img"
                                          />
                                          <div className="drvrnam">
                                            <h6>Rohan</h6>
                                            <span>Customer ID: D0012</span>
                                          </div>
                                        </div>
                                        <div className="drvrcar">
                                          <p>Mercedes-Benz E Class</p>
                                          <span>example@gmail.com</span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="9"
                                            height="8"
                                            viewBox="0 0 9 8"
                                            fill="none"
                                          >
                                            <circle
                                              cx="4.5"
                                              cy="4"
                                              r="3"
                                              fill="white"
                                            ></circle>
                                          </svg>
                                          <span>+44 334 2345</span>
                                        </div>
                                        <div className="cstmr-view-deta-eye">
                                          <Link to="#" className="uploaded-btn">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="16"
                                              height="16"
                                              viewBox="0 0 16 16"
                                              fill="none"
                                            >
                                              <path
                                                d="M7.9987 12C11.6806 12 14.6654 8 14.6654 8C14.6654 8 11.6806 4 7.9987 4C4.3168 4 1.33203 8 1.33203 8C1.33203 8 4.3168 12 7.9987 12Z"
                                                stroke="white"
                                                stroke-width="1.2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                              ></path>
                                              <path
                                                d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                                stroke="white"
                                                stroke-width="1.2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                              ></path>
                                            </svg>
                                            View
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="drvr_deta">
                                        <div className="drvrmain">
                                          <img
                                            src="./admin_assets/images/new-customers-list.png"
                                            className="new-customers-img"
                                            alt="new-customers-img"
                                          />
                                          <div className="drvrnam">
                                            <h6>Rohan Shibu</h6>
                                            <span>Customer ID: D0012</span>
                                          </div>
                                        </div>
                                        <div className="drvrcar">
                                          <p>Mercedes-Benz E Class</p>
                                          <span>example@gmail.com</span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="9"
                                            height="8"
                                            viewBox="0 0 9 8"
                                            fill="none"
                                          >
                                            <circle
                                              cx="4.5"
                                              cy="4"
                                              r="3"
                                              fill="white"
                                            ></circle>
                                          </svg>
                                          <span>+44 334 2345</span>
                                        </div>
                                        <div className="cstmr-view-deta-eye">
                                          <Link to="#" className="uploaded-btn">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="16"
                                              height="16"
                                              viewBox="0 0 16 16"
                                              fill="none"
                                            >
                                              <path
                                                d="M7.9987 12C11.6806 12 14.6654 8 14.6654 8C14.6654 8 11.6806 4 7.9987 4C4.3168 4 1.33203 8 1.33203 8C1.33203 8 4.3168 12 7.9987 12Z"
                                                stroke="white"
                                                stroke-width="1.2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                              ></path>
                                              <path
                                                d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                                stroke="white"
                                                stroke-width="1.2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                              ></path>
                                            </svg>
                                            View
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="drvr_deta">
                                        <div className="drvrmain">
                                          <img
                                            src="./admin_assets/images/new-customers-list.png"
                                            className="new-customers-img"
                                            alt="new-customers-img"
                                          />
                                          <div className="drvrnam">
                                            <h6>Rohan S</h6>
                                            <span>Customer ID: D0012</span>
                                          </div>
                                        </div>
                                        <div className="drvrcar">
                                          <p>Mercedes-Benz E Class</p>
                                          <span>example@gmail.com</span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="9"
                                            height="8"
                                            viewBox="0 0 9 8"
                                            fill="none"
                                          >
                                            <circle
                                              cx="4.5"
                                              cy="4"
                                              r="3"
                                              fill="white"
                                            ></circle>
                                          </svg>
                                          <span>+44 334 2345</span>
                                        </div>
                                        <div className="cstmr-view-deta-eye">
                                          <Link to="#" className="uploaded-btn">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="16"
                                              height="16"
                                              viewBox="0 0 16 16"
                                              fill="none"
                                            >
                                              <path
                                                d="M7.9987 12C11.6806 12 14.6654 8 14.6654 8C14.6654 8 11.6806 4 7.9987 4C4.3168 4 1.33203 8 1.33203 8C1.33203 8 4.3168 12 7.9987 12Z"
                                                stroke="white"
                                                stroke-width="1.2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                              ></path>
                                              <path
                                                d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                                stroke="white"
                                                stroke-width="1.2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                              ></path>
                                            </svg>
                                            View
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="drvr_deta">
                                        <div className="drvrmain">
                                          <img
                                            src="./admin_assets/images/new-customers-list.png"
                                            className="new-customers-img"
                                            alt="new-customers-img"
                                          />
                                          <div className="drvrnam">
                                            <h6>Rohan S</h6>
                                            <span>Customer ID: D0012</span>
                                          </div>
                                        </div>
                                        <div className="drvrcar">
                                          <p>Mercedes-Benz E Class</p>
                                          <span>example@gmail.com</span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="9"
                                            height="8"
                                            viewBox="0 0 9 8"
                                            fill="none"
                                          >
                                            <circle
                                              cx="4.5"
                                              cy="4"
                                              r="3"
                                              fill="white"
                                            ></circle>
                                          </svg>
                                          <span>+44 334 2345</span>
                                        </div>
                                        <div className="cstmr-view-deta-eye">
                                          <Link to="#" className="uploaded-btn">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="16"
                                              height="16"
                                              viewBox="0 0 16 16"
                                              fill="none"
                                            >
                                              <path
                                                d="M7.9987 12C11.6806 12 14.6654 8 14.6654 8C14.6654 8 11.6806 4 7.9987 4C4.3168 4 1.33203 8 1.33203 8C1.33203 8 4.3168 12 7.9987 12Z"
                                                stroke="white"
                                                stroke-width="1.2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                              ></path>
                                              <path
                                                d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                                stroke="white"
                                                stroke-width="1.2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                              ></path>
                                            </svg>
                                            View
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <Col lg={12} md={12}>
                                    <div className="form-group">
                                      <label htmlFor="Vehicle">Vehicle</label>
                                      <br />
                                      <select name="Vehicle" id="cars">
                                        <option value="Vehicle">
                                          Mercedes E220
                                        </option>
                                        <option value="Vehicle2">
                                          Mercedes E220
                                        </option>
                                        <option value="Vehicle3">
                                          Mercedes E220
                                        </option>
                                        <option value="Vehicle4">
                                          Mercedes E220
                                        </option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12}>
                                    <div className="form-group">
                                      <label htmlFor="Priority">Priority</label>
                                      <br />
                                      <select name="Priority" id="cars">
                                        <option value="Priority">Issue</option>
                                        <option value="Priority2">Issue</option>
                                        <option value="Priority3">Issue</option>
                                        <option value="Priority4">Issue</option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12}>
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Company Notes
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="form-control"
                                        id=""
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </form>
                            </div>
                          </Col>
                          <Col lg={5} md={5}>
                            <div className="ticket-col-two">
                              <div className="pay-Sch-PP-one pay-Sch-PP-three ">
                                <h6>Assignment Preview</h6>
                                <div className="pp-main-head">
                                  <img
                                    src="./admin_assets/images/customer2.png"
                                    className="customer2-img"
                                    alt="customer2-img"
                                  />
                                  <p>Customer ID: D0012</p>
                                </div>
                                <div className="frmmainbx">
                                  <div className="innr-bx">
                                    <h3>Profile User</h3>
                                    <div className="cstmr-details">
                                      <form action="">
                                        <Row className=" frm-inner-row2">
                                          <Col lg={6} md={6}>
                                            <div className="form-group">
                                              <label htmlFor="control-label">
                                                First Name
                                              </label>
                                              <br />
                                              <input
                                                type="text"
                                                name="form-control"
                                                placeholder=""
                                              />
                                            </div>
                                          </Col>
                                          <Col lg={6} md={6}>
                                            <div className="form-group">
                                              <label htmlFor="control-label">
                                                Last Name
                                              </label>
                                              <br />
                                              <input
                                                type="text"
                                                name="form-control"
                                                placeholder=""
                                              />
                                            </div>
                                          </Col>
                                        </Row>
                                        <Row>
                                          <Col lg={6} md={6}>
                                            <div className="form-group">
                                              <label htmlFor="control-label">
                                                Email Address
                                              </label>
                                              <br />
                                              <input
                                                type="email"
                                                name="form-control"
                                                placeholder=""
                                              />
                                            </div>
                                          </Col>
                                          <Col lg={6} md={6}>
                                            <div className="form-group">
                                              <label htmlFor="control-label">
                                                Phone Number
                                              </label>
                                              <br />
                                              <div className="t-flag">
                                                <input
                                                  type="number"
                                                  name="form-control"
                                                  placeholder="+44"
                                                  className="mg0"
                                                />
                                              </div>
                                            </div>
                                          </Col>
                                        </Row>
                                      </form>
                                    </div>
                                  </div>

                                  <div className="innr-bx">
                                    <h3>Driving Information</h3>
                                    <div className="cstmr-details">
                                      <form action="">
                                        <Row className=" frm-inner-row2">
                                          <Col lg={6} md={6}>
                                            <div className="form-group">
                                              <label htmlFor="control-label">
                                                Driving License Number
                                              </label>
                                              <br />
                                              <input
                                                type="text"
                                                name="form-control"
                                                placeholder=""
                                              />
                                            </div>
                                          </Col>
                                          <Col lg={6} md={6}>
                                            <div className="form-group">
                                              <label htmlFor="control-label">
                                                Driver License Expiry Date
                                              </label>
                                              <br />
                                              <input
                                                type="text"
                                                name="form-control"
                                                placeholder=""
                                              />
                                            </div>
                                          </Col>
                                        </Row>
                                        <Row>
                                          <Col lg={6} md={6}>
                                            <div className="form-group">
                                              <label htmlFor="control-label">
                                                PCO License Number
                                              </label>
                                              <br />
                                              <input
                                                type="email"
                                                name="form-control"
                                                placeholder=""
                                              />
                                            </div>
                                          </Col>
                                          <Col lg={6} md={6}>
                                            <div className="form-group">
                                              <label htmlFor="control-label">
                                                Expiry Date
                                              </label>
                                              <br />
                                              <input
                                                type="date"
                                                name="form-control"
                                                placeholder=""
                                              />
                                            </div>
                                          </Col>
                                        </Row>
                                      </form>
                                    </div>
                                  </div>

                                  <div className="innr-bx">
                                    <h3>Payment</h3>
                                    <div className="cstmr-details">
                                      <form action="">
                                        <Row>
                                          <Col lg={6} md={6}>
                                            <div className="form-group">
                                              <label htmlFor="control-label">
                                                Card Number
                                              </label>
                                              <br />
                                              <input
                                                type="number"
                                                name="form-control"
                                                placeholder=""
                                              />
                                            </div>
                                          </Col>
                                          <Col lg={6} md={6}>
                                            <div className="form-group">
                                              <label htmlFor="control-label">
                                                Expration Date
                                              </label>
                                              <br />
                                              <input
                                                type="date"
                                                name="form-control"
                                                placeholder=""
                                              />
                                            </div>
                                          </Col>
                                        </Row>
                                      </form>
                                    </div>
                                  </div>
                                </div>
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

export default Createticket;
