import React from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Col, Container, Modal, ModalBody, Row } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

function Addpaymentschedule() {
  // Search User
  const [searchusershow, setSearchusershow] = useState(false);
  const handleClosesearchuser = () => setSearchusershow(false);
  const handleShowsearchuser = () => setSearchusershow(true);

  // Name Modal
  const [usernameshow, setusernameshow] = useState(false);
  const handleCloseusername = () => {
    setusernameshow(false);
    setSearchusershow(true);
  };
  const handleShowusername = () => {
    setusernameshow(true);
    setSearchusershow(false);
  };
  return (
    <>
      <section className="user-dashboard">
        <Container fluid className="container-fluid">
          <Row className=" g-0">
            <Col lg={3} md={3} className="sidebar-col">
              <Sidebar />
            </Col>
            <Col lg={9} md={9} className="panel-col">
              <div className="dashboard-panel invoice-view-panel payment-schedule-invoice-view-panel">
                <Row >
                  <Col lg={12} md={12} >
                    <div className="dashboard-panel-topbar">
                      <Dashboardpaneltopbar />
                    </div>
                  </Col>
                </Row>
                <Row >
                  <Col lg={12} md={12} >
                    <div className="invoice-view-sec db-default-sec">
                      <Link to="#" className="back-to">
                        <ion-icon
                          name="chevron-back-outline"
                          role="img"
                          className="md hydrated"
                        ></ion-icon>{" "}
                        Back to Vehicle
                      </Link>
                      <Col md={12} >
                        <Row className=" innr-row">
                          <Col md={6} >
                            <div className="invoice-topbar-wrap">
                              <div
                                className="search-bar-v1"
                                onClick={handleShowsearchuser}
                              >
                                <button type="submit">
                                  <i className="fa fa-search"></i>
                                </button>
                                <input
                                  type="text"
                                  placeholder="Search here..."
                                />
                              </div>
                            </div>
                            <div className="payment-schedule-disc">
                              <Row className=" frm-inner-row invoice-tab-frm-2">
                                <form action="" method="">
                                  <Row >
                                    <Col lg={12} md={12} >
                                      <div className="form-group">
                                        <label htmlFor="control-label">
                                          Schedule Pay Date
                                        </label>
                                        <br />
                                        <input
                                          type="date"
                                          name="form-control"
                                        />
                                      </div>
                                    </Col>
                                    <Col lg={12} md={12} >
                                      <div className="form-group">
                                        <label htmlFor="control-label">
                                          Reason Payment
                                        </label>
                                        <select name="payment" id="payment-fld">
                                          <option value="volvo">
                                            Damage Car
                                          </option>
                                          <option value="volvo">
                                            Damage Car
                                          </option>
                                          <option value="saab">
                                            Damage Car
                                          </option>
                                          <option value="opel">
                                            Damage Car
                                          </option>
                                          <option value="audi">
                                            Damage Car
                                          </option>
                                        </select>
                                      </div>
                                    </Col>
                                    <Col lg={12} md={12} >
                                      <div className="form-group">
                                        <label htmlFor="control-label">Fee</label>
                                        <input
                                          type="number"
                                          name="form-control"
                                          id=""
                                          placeholder="£2.000"
                                        />
                                      </div>
                                    </Col>
                                    <Col lg={12} md={12} >
                                      <div className="form-group">
                                        <label htmlFor="control-label">
                                          Description
                                        </label>
                                        <textarea
                                          type="textarea"
                                          name="form-control"
                                          id=""
                                          placeholder="Damage Cae"
                                          className="mg0"
                                        ></textarea>
                                      </div>
                                    </Col>
                                  </Row>
                                </form>
                              </Row>
                              <div className="add-pcn-view-comm_head">
                                <Link to="#">
                                  <img
                                    src="./admin_assets/images/plus.png"
                                    className="plus-img"
                                    alt="comm"
                                  />
                                  Add another Payment
                                </Link>
                              </div>
                            </div>
                          </Col>
                          <Col md={6} >
                            <div className="payment-schedule-card-main-head">
                              <h4>Invoice Preview</h4>
                              <div className="zoom-options">
                                <Link to="#" className="incoming-btn">
                                  <img
                                    src="./admin_assets/images/zoom-out.png"
                                    alt="zoom-out"
                                  />
                                </Link>
                                <Link to="#" className="incoming-btn">
                                  <img
                                    src="./admin_assets/images/zoom-in.png"
                                    alt="zoom-in"
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="invoice-view-card db-default-wrapper payment-schedule-card">
                              <Row className=" invoice-view-details admin-invoice-view-details">
                                <Col lg={6} md={6} >
                                  <h2>BLACKTIES</h2>
                                  <h5>RENTAL</h5>
                                </Col>
                                <Col lg={6} md={6} >
                                  <p className="inv-address">
                                    328 Summerwood Road, Isleworth, Greater
                                    London, TW7 7QP{" "}
                                  </p>
                                </Col>
                              </Row>
                              <Row className=" invoice-view-subscription">
                                <Col lg={4} md={4} >
                                  <p>
                                    <span>Full Name</span>
                                    <br />
                                    John Doe
                                  </p>
                                </Col>
                                <Col lg={4} md={4} >
                                  <p>
                                    <span>Phone:</span>
                                    <br />
                                    +44 334 2345
                                  </p>
                                </Col>
                                <Col lg={4} md={4} >
                                  <p>
                                    <span>Email:</span>
                                    <br />
                                    example@gmail.com
                                  </p>
                                </Col>
                              </Row>
                              <Row className=" invoice-view-subscription-2">
                                <Col lg={4} md={4} >
                                  <p>
                                    <span>Receipt Date:</span>
                                    <br />
                                    12/8/2024
                                  </p>
                                </Col>
                                <Col lg={4} md={4} >
                                  <p>
                                    <span>Receipt #:</span>
                                    <br />
                                    RT-435
                                  </p>
                                </Col>
                                <Col lg={4} md={4} >
                                  <p>
                                    <span>Payment Method:</span>
                                    <br />
                                    Credit Card
                                  </p>
                                </Col>
                              </Row>
                              <Row >
                                <Col lg={12} md={12} >
                                  <div style={{ msOverflowX: "auto" }}>
                                    <table className="cancellation-disc-table">
                                      <thead>
                                        <tr>
                                          <th className="first-th">Description</th>
                                          <th>Price</th>
                                          <th>Vat %</th>
                                          <th>Amount (GBP)</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td className="first-td">Damage Car</td>
                                          <td>£360</td>
                                          <td>10 %</td>
                                          <td>£360</td>
                                        </tr>
                                        <tr>
                                          <td></td>
                                          <td>Total excl Vat</td>
                                          <td></td>
                                          <td>£360</td>
                                        </tr>
                                        <tr>
                                          <td></td>
                                          <td>VAT 20 %</td>
                                          <td></td>
                                          <td>£360</td>
                                        </tr>
                                        <tr>
                                          <td></td>
                                          <td></td>
                                          <td>Total</td>
                                          <td>£360</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                            <div className="pay-schedule-btns">
                              <Link to="#" className="cancel-btn">
                                Cancel
                              </Link>
                              <Link to="#" className="send-btn">
                                Send
                              </Link>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* <!---------------------------------Admin Financials Payment Schedule ONE pop-up-one  -------------------------------------------> */}
            <Modal
              show={searchusershow}
              onHide={handleClosesearchuser}
              className="password_modal"
            >
              <ModalBody>
                <div className="pay-Sch-PP-one">
                  <div className="pp-main-head">
                    <h2>Search User</h2>
                    <button className="close-btn" onClick={handleClosesearchuser}>
                      ×
                    </button>
                  </div>
                  <Row className=" frm-inner-row pcn_amend-inner-row">
                    <form action="" method="">
                      <Row >
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">First Name</label>
                            <br />
                            <input
                              type="text"
                              name="form-control"
                              placeholder="Omar"
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">Last Name</label>
                            <br />
                            <input
                              type="text"
                              name="form-control"
                              placeholder="placeholder"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row >
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">Have Vehicle</label>
                            <select name="Council" id="Rented-fld">
                              <option value="volvo">Yes</option>
                              <option value="saab">No</option>
                              <option value="opel">Yes</option>
                              <option value="audi">No</option>
                            </select>
                          </div>
                        </Col>
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">Active User</label>
                            <select name="Council" id="Rented-fld">
                              <option value="volvo">Active</option>
                              <option value="saab">Non-active</option>
                              <option value="volvo">Active</option>
                              <option value="saab">Non-active</option>
                            </select>
                          </div>
                        </Col>
                      </Row>
                      <Row >
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">
                              PCO License Number
                            </label>
                            <br />
                            <input
                              type="text"
                              name="form-control"
                              placeholder="placeholder"
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">
                              Drivers License Number
                            </label>
                            <br />
                            <input
                              type="text"
                              name="form-control"
                              placeholder="placeholder"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row >
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">Email</label>
                            <br />
                            <input
                              type="email"
                              name="form-control"
                              placeholder="placeholder"
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">
                              Vehicle Registration Number
                            </label>
                            <br />
                            <input
                              type="text"
                              name="form-control"
                              placeholder="placeholder"
                            />
                          </div>
                        </Col>
                      </Row>
                    </form>
                    <div className="pcn-view-action-btns">
                      <Link onClick={handleShowusername} className="search-btn">
                        Search 12 Name
                      </Link>
                      <Link onClick={handleCloseusername} className="filter-btn">
                        Reset Filter
                      </Link>
                    </div>
                  </Row>
                </div>
              </ModalBody>
            </Modal>

            {/* <!---------------------------------Admin Financials Payment Schedule ONE pop-up-one  -------------------------------------------> */}

            {/* <!---------------------------------Admin Financials Payment Schedule ONE pop-up-two  -------------------------------------------> */}

            <Modal
              show={usernameshow}
              onHide={handleCloseusername}
              className="password_modal"
            >
              <ModalBody>
                <div className="pay-Sch-PP-one pay-Sch-PP-two">
                  <div className="pp-main-head">
                    <h2>Search User</h2>
                    <button className="close-btn" onClick={handleCloseusername}>
                      ×
                    </button>
                  </div>
                  <Row className=" frm-inner-row pcn_amend-inner-row">
                    <form action="" method="">
                      <Row >
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">First Name</label>
                            <br />
                            <input
                              type="text"
                              name="form-control"
                              placeholder="Omar"
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">Last Name</label>
                            <br />
                            <input
                              type="text"
                              name="form-control"
                              placeholder="placeholder"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row >
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">Email</label>
                            <br />
                            <input
                              type="email"
                              name="form-control"
                              placeholder="Placeholder"
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">Phone Number</label>
                            <br />
                            <input
                              type="number"
                              name="form-control"
                              placeholder="placeholder"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row >
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">Have Vehicle</label>
                            <select name="Council" id="Rented-fld">
                              <option value="volvo">Yes</option>
                              <option value="saab">No</option>
                              <option value="opel">Yes</option>
                              <option value="audi">No</option>
                            </select>
                          </div>
                        </Col>
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">Active User</label>
                            <select name="Council" id="Rented-fld">
                              <option value="volvo">Active</option>
                              <option value="saab">Non-active</option>
                              <option value="volvo">Active</option>
                              <option value="saab">Non-active</option>
                            </select>
                          </div>
                        </Col>
                      </Row>
                      <Row >
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">
                              PCO License Number
                            </label>
                            <br />
                            <input
                              type="text"
                              name="form-control"
                              placeholder="placeholder"
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">
                              Drivers License Number
                            </label>
                            <br />
                            <input
                              type="text"
                              name="form-control"
                              placeholder="placeholder"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row >
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">
                              Vehicle Registration Number
                            </label>
                            <br />
                            <input
                              type="text"
                              name="form-control"
                              placeholder="placeholder"
                            />
                          </div>
                        </Col>
                      </Row>
                    </form>
                    <div className="pcn-view-action-btns">
                      <Link to="#" className="search-btn">
                        Search 12 Name
                      </Link>
                      <Link
                        to="#"
                        className="filter-btn"
                        onClick={handleCloseusername}
                      >
                        Reset Filter
                      </Link>
                    </div>

                    <div className="cstmr-bx">
                      <div className="cstmr-srchbox">
                        <div className="drvr_deta active">
                          <div className="drvrmain">
                            <img
                              src="./admin_assets/images/new-customers-list.png"
                              className="new-customers-img"
                              alt="new-customers-img"
                            />
                            <div className="drvrnam">
                              <h6>Omar</h6>
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
                            <Link to="/admin-user-invoice" className="uploaded-btn">
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
                                />
                                <path
                                  d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                  stroke="white"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
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
                              <h6>Omar A</h6>
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
                                />
                                <path
                                  d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                  stroke="white"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
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
                              <h6>Omar A</h6>
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
                                />
                                <path
                                  d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                  stroke="white"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
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
                              <h6>Omar A</h6>
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
                                />
                                <path
                                  d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                  stroke="white"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
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
                              <h6>Omar A</h6>
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
                                />
                                <path
                                  d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                  stroke="white"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
              </ModalBody>
            </Modal>

            {/* 
<!---------------------------------Admin Financials Payment Schedule ONE pop-up-two  ------------------------------------------->


<!---------------------------------Admin Financials Payment Schedule ONE pop-up-three  -------------------------------------------> */}

            {/* <div className="pay-Sch-PP-one pay-Sch-PP-three">
              <button className="close-btn">×</button>
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
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">First Name</label>
                            <br />
                            <input
                              type="text"
                              name="form-control"
                              placeholder="Rohan"
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">Last Name</label>
                            <br />
                            <input
                              type="text"
                              name="form-control"
                              placeholder="Shibu"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row >
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">Email Address</label>
                            <br />
                            <input
                              type="email"
                              name="form-control"
                              placeholder="Ron.don@gmail.com "
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">Phone Number</label>
                            <br />
                            <input
                              type="number"
                              name="form-control"
                              placeholder="+44 123 123 123"
                            />
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
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">
                              Driving License Number
                            </label>
                            <br />
                            <input
                              type="text"
                              name="form-control"
                              placeholder="Rohan"
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">
                              Driver License Expiry Date
                            </label>
                            <br />
                            <input
                              type="text"
                              name="form-control"
                              placeholder="Shibu"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row >
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">
                              PCO License Number
                            </label>
                            <br />
                            <input
                              type="email"
                              name="form-control"
                              placeholder="Ron.don@gmail.com "
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">Expiry Date</label>
                            <br />
                            <input
                              type="number"
                              name="form-control"
                              placeholder="123 123 123"
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
                      <Row >
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">Card Number</label>
                            <br />
                            <input
                              type="text"
                              name="form-control"
                              placeholder="XXXXXXXXX"
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} >
                          <div className="form-group">
                            <label htmlFor="control-label">Expration Date</label>
                            <br />
                            <input
                              type="datemin"
                              name="form-control"
                              placeholder="09/27"
                            />
                          </div>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </div>

                <div className="innr-bx">
                  <h3>Vehicle</h3>
                  <div className="cstmr-details">
                    <div className="drvr_deta">
                      <div className="drvrmain">
                        <img
                          src="./admin_assets/images/car1212.png"
                          className="car-img"
                          alt="car-img"
                        />
                        <div className="drvrnam">
                          <Link to="#" className="active-btn">
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
                            Active
                          </Link>
                          <h6>Mercedes-Benz E Class</h6>
                          <span>VH12893719HJFHJ</span>
                        </div>
                      </div>
                      <div className="drvrcar">
                        <span>26 April at 16:05</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="8"
                          viewBox="0 0 9 8"
                          fill="none"
                        >
                          <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                        </svg>
                        <span>KE19 OJS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <!---------------------------------Admin Financials Payment Schedule ONE pop-up-three  -------------------------------------------> */}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Addpaymentschedule;
