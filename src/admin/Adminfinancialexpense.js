import React, { useState } from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Col, Container, Dropdown, Modal, ModalBody, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Adminfinancialexpense() {
// View Modal
const [showView, setShowview] = useState(false);
const handleCloseview = () => setShowview(false);
const handleOpenview = () => setShowview(true);

// Add Modal
const [showadd, SetShowadd] = useState(false);
const handleCloseadd = () => SetShowadd(false);
const handleOpenadd = () => SetShowadd(true);

const [isVisible, setIsVisible] = useState(false);

const handleToggle = () => {
  setIsVisible(!isVisible); // Toggle the visibility
};

//   Remove Modal
const [showremove,setShowremove]=useState(false);
const handleCloseremove=()=>setShowremove(false);
const handleOpenremove=()=>setShowremove(true);

return (
  <>
    <section className="user-dashboard">
      <Container fluid>
        <Row className=" g-0">
          <Col lg={3} md={3} className="sidebar-col">
            <Sidebar />
          </Col>
          <Col lg={9} md={9} className="panel-col">
            <div className="dashboard-panel penalty-panel">
              <Row>
                <Col lg={12} md={12} >
                  <div className="dashboard-panel-topbar">
                    <Dashboardpaneltopbar />
                  </div>
                </Col>
              </Row>
              <Row >
                <Col lg={12} md={12} >
                  <div className="penalty-sec db-default-sec">
                    <Row className=" main-payments">
                      <Col md={4} >
                        <div className="main-payments-bx">
                          <div className="pmnt-name">
                            <p>Revenue</p>
                            <h4>£2.000</h4>
                          </div>
                          <div className="pmnt-dt">
                            <span>Next Payment Date</span>
                            <span>27 June, 2024</span>
                          </div>
                        </div>
                      </Col>
                      <Col md={4} >
                        <div className="main-payments-bx">
                          <div className="pmnt-name">
                            <p>Expenses</p>
                            <h4>£1.000</h4>
                          </div>
                          <div className="pmnt-dt">
                            <span>Payment Expired Date</span>
                            <span>27 June, 2024</span>
                          </div>
                        </div>
                      </Col>
                      <Col md={4} >
                        <div className="main-payments-bx">
                          <div className="pmnt-name">
                            <p>Total Revenue</p>
                            <h4>£1.000</h4>
                          </div>
                          <div className="pmnt-dt">
                            <span>Next Payment Date</span>
                            <span>27 June, 2024</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="penalty-card db-default-wrapper admin-financial-revenue">
                      <Row>
                        <nav className="invoice-tabs">
                          <div
                            className="nav nav-tabs"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              className="nav-link active"
                              id="nav-revenue-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-revenue"
                              type="button"
                              role="tab"
                              aria-controls="nav-revenue"
                              aria-selected="true"
                            >
                              <h5>Revenue</h5>
                            </button>
                            <button
                              className="nav-link"
                              id="nav-recently-delete-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-recently-delete"
                              type="button"
                              role="tab"
                              aria-controls="nav-recently-delete"
                              aria-selected="false"
                            >
                              <h5>Recently Delete</h5>
                            </button>
                          </div>
                        </nav>
                        <div
                          className="invoice-tabs-content tab-content"
                          id="nav-tabContent"
                        >
                          <div
                            className="tab-pane fade show active"
                            id="nav-revenue"
                            role="tabpanel"
                            aria-labelledby="nav-revenue-tab"
                          >
                            <div className="support-issue-head">
                              <h4>Revenue</h4>
                              <div className="viewbyd">
                                <Link to="#" className="view-support">
                                  View
                                </Link>
                                <div className="issue-btns">
                                  <Link to="#" className="active">
                                    Weekly
                                  </Link>
                                  <Link to="#">Monthly</Link>
                                  <Link to="#">Yearly</Link>
                                  <Link to="#">Custom</Link>
                                </div>
                              </div>
                              <div className="time-frame">
                                <span>
                                  Timeframe
                                  <input
                                    type="date"
                                    name="form-control"
                                    placeholder="14 October to 20 October 2024"
                                  />
                                </span>
                              </div>
                              <div className="revenue-main-btns">
                                <div className="tivcket-btn">
                                  <Link
                                    to="#"
                                    onClick={handleOpenadd}
                                  >
                                    Add Data <i className="fas fa-plus"></i>
                                  </Link>
                                </div>
                                <div className="file-dow-btn">
                                  <Link to="#">
                                    <img
                                      src="./admin_assets/images/File-download.png"
                                      alt="file-download"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <Row className=" frm-inner-row invoice-tab-frm revenue-tab-frm">
                              <form action="" method="">
                                <Row>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Date & Time
                                      </label>
                                      <br />
                                      <input
                                        type="date"
                                        name="form-control"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Transaction ID
                                      </label>
                                      <br />
                                      <input
                                        type="number"
                                        name="form-control"
                                        placeholder="placeholder"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Transaction Description
                                      </label>
                                      <input
                                        type="text"
                                        name="form-control"
                                        id=""
                                        className="mg0"
                                        placeholder="placeholder"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">From</label>
                                      <select name="payment" id="payment-fld">
                                        <option value="volvo">
                                          placeholder
                                        </option>
                                        <option value="volvo">Omar</option>
                                        <option value="volvo">Rohan</option>
                                        <option value="saab">Omar</option>
                                        <option value="opel">Rohan</option>
                                        <option value="audi">Omar</option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">To</label>
                                      <select name="payment" id="payment-fld">
                                        <option value="volvo">
                                          placeholder
                                        </option>
                                        <option value="volvo">Omar</option>
                                        <option value="volvo">Rohan</option>
                                        <option value="saab">Omar</option>
                                        <option value="opel">Rohan</option>
                                        <option value="audi">Omar</option>
                                      </select>
                                    </div>
                                  </Col>
                                </Row>
                              </form>
                            </Row>

                            <Row className=" frm-inner-row invoice-tab-frm revenue-tab-frm2">
                              <form action="" method="">
                                <Row>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Amount
                                      </label>
                                      <br />
                                      <input
                                        type="number"
                                        name="form-control"
                                        placeholder="placeholder"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Categories
                                      </label>
                                      <select name="payment" id="payment-fld">
                                        <option value="audi">
                                          placeholder
                                        </option>
                                        <option value="volvo">Income</option>
                                        <option value="volvo">
                                          Liability
                                        </option>
                                        <option value="saab">Asset</option>
                                        <option value="opel">Expense</option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Income/Expense
                                      </label>
                                      <select name="payment" id="payment-fld">
                                        <option value="volvo">Income</option>
                                        <option value="volvo">
                                          Liability
                                        </option>
                                        <option value="saab">Asset</option>
                                        <option value="opel">Expense</option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Asset/Liability
                                      </label>
                                      <select name="payment" id="payment-fld">
                                        <option value="volvo">Asset</option>
                                        <option value="volvo">Asset</option>
                                        <option value="saab">Asset</option>
                                        <option value="opel">Asset</option>
                                        <option value="audi">Asset</option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        PDF Uploaded?
                                      </label>
                                      <select name="payment" id="payment-fld">
                                        <option value="volvo">Yes</option>
                                        <option value="volvo">No</option>
                                      </select>
                                    </div>
                                  </Col>
                                </Row>
                              </form>
                            </Row>
                            <Row>
                              <Col lg={12} md={12} >
                                <div style={{ overflowX: "auto" }}>
                                  <table className="maintenance-table">
                                    <thead>
                                      <tr>
                                        <th className="first-th">Date & Time</th>
                                        <th className="first-th">
                                          Transaction ID
                                        </th>
                                        <th>Transaction Description</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Amount</th>
                                        <th>Categories</th>
                                        <th>Income/Expense</th>
                                        <th>Asset/Liability</th>
                                        <th></th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td>TR124301</td>
                                        <td className="first-td">Invoices A</td>
                                        <td>Omar</td>
                                        <td>Rohan</td>
                                        <td>£5,00</td>
                                        <td className="status-tagbtns">
                                          <Link
                                            to="#"
                                            className="incoming-btn"
                                          >
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
                                            Incoming
                                          </Link>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Income
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Assets
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Link
                                            to="#"
                                            className="v-pdf-btn"
                                          >
                                            <img
                                              src="./admin_assets/images/files.png"
                                              alt="filesg"
                                            />
                                          </Link>
                                        </td>
                                        <td>
                                          <Link
                                            to="#"
                                            className="view-btn"
                                            onClick={handleOpenview}
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td>TR124301</td>
                                        <td className="first-td">Invoices A</td>
                                        <td>Omar</td>
                                        <td>Rohan</td>
                                        <td>£4,00</td>
                                        <td className="status-tagbtns">
                                          <Link
                                            to="#"
                                            className="incoming-btn"
                                          >
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
                                            Incoming
                                          </Link>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Income
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Assets
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Link
                                            to="#"
                                            className="v-pdf-btn"
                                          >
                                            <img
                                              src="./admin_assets/images/files.png"
                                              alt="filesg"
                                            />
                                          </Link>
                                        </td>
                                        <td>
                                          <Link
                                            to="#"
                                            onClick={handleOpenview}
                                            className="view-btn"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td>TR124301</td>
                                        <td className="first-td">Invoices A</td>
                                        <td>Omar</td>
                                        <td>Rohan</td>
                                        <td>£5,00</td>
                                        <td className="status-tagbtns">
                                          <Link
                                            to="#"
                                            className="liability-btn"
                                          >
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
                                            Liability
                                          </Link>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Income
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Assets
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Link
                                            to="#"
                                            className="v-pdf-btn"
                                          >
                                            <img
                                              src="./admin_assets/images/files.png"
                                              alt="filesg"
                                            />
                                          </Link>
                                        </td>
                                        <td>
                                          <Link
                                            to="#"
                                            onClick={handleOpenview}
                                            className="view-btn"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td>TR124301</td>
                                        <td className="first-td">Invoices A</td>
                                        <td>Omar</td>
                                        <td>Rohan</td>
                                        <td>£5,00</td>
                                        <td className="status-tagbtns">
                                          <Link
                                            to="#"
                                            className="cat-asset-btn"
                                          >
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
                                            Asset
                                          </Link>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Income
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Assets
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Link
                                            to="#"
                                            className="v-pdf-btn"
                                          >
                                            <img
                                              src="./admin_assets/images/files.png"
                                              alt="filesg"
                                            />
                                          </Link>
                                        </td>
                                        <td>
                                          <Link
                                            to="#"
                                            onClick={handleOpenview}
                                            className="view-btn"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td>TR124301</td>
                                        <td className="first-td">Invoices A</td>
                                        <td>Omar</td>
                                        <td>Rohan</td>
                                        <td>£5,00</td>
                                        <td className="status-tagbtns">
                                          <Link
                                            to="#"
                                            className="expense-btn"
                                          >
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
                                            Expense
                                          </Link>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Income
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Assets
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Link
                                            to="#"
                                            className="v-pdf-btn"
                                          >
                                            <img
                                              src="./admin_assets/images/files.png"
                                              alt="filesg"
                                            />
                                          </Link>
                                        </td>
                                        <td>
                                          <Link
                                            to="#"
                                            onClick={handleOpenview}
                                            className="view-btn"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td>TR124301</td>
                                        <td className="first-td">Invoices A</td>
                                        <td>Omar</td>
                                        <td>Rohan</td>
                                        <td>£5,00</td>
                                        <td className="status-tagbtns">
                                          <Link
                                            to="#"
                                            className="incoming-btn"
                                          >
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
                                            Incoming
                                          </Link>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Income
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Assets
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Link
                                            to="#"
                                            className="v-pdf-btn"
                                          >
                                            <img
                                              src="./admin_assets/images/files.png"
                                              alt="filesg"
                                            />
                                          </Link>
                                        </td>
                                        <td>
                                          <Link
                                            to="#"
                                            onClick={handleOpenview}
                                            className="view-btn"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td>TR124301</td>
                                        <td className="first-td">Invoices A</td>
                                        <td>Omar</td>
                                        <td>Rohan</td>
                                        <td>£5,00</td>
                                        <td className="status-tagbtns">
                                          <Link
                                            to="#"
                                            className="incoming-btn"
                                          >
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
                                            Incoming
                                          </Link>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Income
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Assets
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Link
                                            to="#"
                                            className="d-pdf-btn"
                                          >
                                            <img
                                              src="./admin_assets/images/files2.png"
                                              alt="filesr"
                                            />
                                          </Link>
                                        </td>
                                        <td>
                                          <Link
                                            to="#"
                                            onClick={handleOpenview}
                                            className="view-btn"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={12} md={12} >
                                <div className="invoice-order-pagination">
                                  <div className="pagination-indicator">
                                    <h6>
                                      page <span className="initail">1</span> to{" "}
                                      <span className="total">10</span>
                                    </h6>
                                  </div>
                                  <div className="pagination-nav">
                                    <Link to="#" className="pg-prev">
                                      Previous
                                    </Link>
                                    <Link to="#" className="pg-next">
                                      Next
                                    </Link>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>

                          <div
                            className="tab-pane fade show"
                            id="nav-recently-delete"
                            role="tabpanel"
                            aria-labelledby="nav-recently-delete"
                          >
                            <div className="support-issue-head">
                              <h4>Revenue</h4>
                              <div className="viewbyd">
                                <Link to="#" className="view-support">
                                  View
                                </Link>
                                <div className="issue-btns">
                                  <Link to="#" className="active">
                                    Weekly
                                  </Link>
                                  <Link to="#">Monthly</Link>
                                  <Link to="#">Yearly</Link>
                                  <Link to="#">Custom</Link>
                                </div>
                              </div>
                              <div className="time-frame">
                                <span>
                                  Timeframe
                                  <input
                                    type="date"
                                    name="form-control"
                                    placeholder="14 October to 20 October 2024"
                                  />
                                </span>
                              </div>
                              <div className="revenue-main-btns">
                                <div className="file-dow-btn">
                                  <Link to="#">
                                    <img
                                      src="./admin_assets/images/File-download.png"
                                      alt="file-download"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <Row className="frm-inner-row invoice-tab-frm revenue-tab-frm">
                              <form action="" method="">
                                <Row>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Date & Time
                                      </label>
                                      <br />
                                      <input
                                        type="date"
                                        name="form-control"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Transaction ID
                                      </label>
                                      <br />
                                      <input
                                        type="number"
                                        name="form-control"
                                        placeholder="placeholder"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Transaction Description
                                      </label>
                                      <input
                                        type="text"
                                        name="form-control"
                                        id=""
                                        className="mg0"
                                        placeholder="placeholder"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">From</label>
                                      <select name="payment" id="payment-fld">
                                        <option value="volvo">
                                          placeholder
                                        </option>
                                        <option value="volvo">Omar</option>
                                        <option value="volvo">Rohan</option>
                                        <option value="saab">Omar</option>
                                        <option value="opel">Rohan</option>
                                        <option value="audi">Omar</option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">To</label>
                                      <select name="payment" id="payment-fld">
                                        <option value="volvo">
                                          placeholder
                                        </option>
                                        <option value="volvo">Omar</option>
                                        <option value="volvo">Rohan</option>
                                        <option value="saab">Omar</option>
                                        <option value="opel">Rohan</option>
                                        <option value="audi">Omar</option>
                                      </select>
                                    </div>
                                  </Col>
                                </Row>
                              </form>
                            </Row>

                            <Row className=" frm-inner-row invoice-tab-frm revenue-tab-frm2">
                              <form action="" method="">
                                <Row >
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Amount
                                      </label>
                                      <br />
                                      <input
                                        type="number"
                                        name="form-control"
                                        placeholder="placeholder"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Categories
                                      </label>
                                      <select name="payment" id="payment-fld">
                                        <option value="audi">
                                          placeholder
                                        </option>
                                        <option value="volvo">Income</option>
                                        <option value="volvo">
                                          Liability
                                        </option>
                                        <option value="saab">Asset</option>
                                        <option value="opel">Expense</option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Income/Expense
                                      </label>
                                      <select name="payment" id="payment-fld">
                                        <option value="volvo">Income</option>
                                        <option value="volvo">
                                          Liability
                                        </option>
                                        <option value="saab">Asset</option>
                                        <option value="opel">Expense</option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Asset/Liability
                                      </label>
                                      <select name="payment" id="payment-fld">
                                        <option value="volvo">Asset</option>
                                        <option value="volvo">Asset</option>
                                        <option value="saab">Asset</option>
                                        <option value="opel">Asset</option>
                                        <option value="audi">Asset</option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg={2} md={2} >
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        PDF Uploaded?
                                      </label>
                                      <select name="payment" id="payment-fld">
                                        <option value="volvo">Yes</option>
                                        <option value="volvo">No</option>
                                      </select>
                                    </div>
                                  </Col>
                                </Row>
                              </form>
                            </Row>
                            <Row>
                              <Col lg={12} md={12} >
                                <div style={{ overflowX: "auto" }}>
                                  <table className="maintenance-table">
                                    <thead>
                                      <tr>
                                        <th className="first-th">Date & Time</th>
                                        <th className="first-th">
                                          Transaction ID
                                        </th>
                                        <th>Transaction Description</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Amount</th>
                                        <th>Categories</th>
                                        <th>Income/Expense</th>
                                        <th>Asset/Liability</th>
                                        <th></th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td>TR124301</td>
                                        <td className="first-td">Invoices A</td>
                                        <td>Omar</td>
                                        <td>Rohan</td>
                                        <td>£5,00</td>
                                        <td className="status-tagbtns">
                                          <Link
                                            to="#"
                                            className="incoming-btn"
                                          >
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
                                            Incoming
                                          </Link>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Income
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Assets
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td className="pdfs-td">
                                          <Link
                                            to="#"
                                            className="view-pdf-btn"
                                          >
                                            <img
                                              src="./admin_assets/images/files.png"
                                              alt="filesg"
                                            />
                                          </Link>
                                          <div className="hidden-content pdf-content">
                                            <div className="pdfs-pp-btns">
                                              <Link
                                                to="#"
                                                className="pdf-view-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/Eye2.png"
                                                  className="Eye2-img"
                                                  alt="Eye2-img"
                                                />
                                                View
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-change-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/Edit 1.png"
                                                  className="Edit 1-img"
                                                  alt="Edit 1-img"
                                                />
                                                Change
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-upload-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/file_upload.png"
                                                  className="file_upload"
                                                  alt="file_upload-img"
                                                />
                                                Upload PDF
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-delete-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/trash-can.png"
                                                  className="trash-can-img"
                                                  alt="trash-can-img"
                                                />
                                                Delete
                                              </Link>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="dot-td">
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="link"
                                              id="dropdown-basic"
                                              className="v-dots-btn p-0 border-0"
                                            >
                                              <img
                                                src="./admin_assets/images/pepicons-pop_dots-y.png"
                                                alt="dots"
                                                style={{
                                                  width: "20px",
                                                  height: "20px",
                                                }}
                                              />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="hidden-content dots-content ">
                                              <Dropdown.Item
                                                to="#"
                                                className="dot-brng-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/check.png"
                                                  alt="check-img"
                                                  style={{
                                                    width: "16px",
                                                    marginRight: "8px",
                                                  }}
                                                />
                                                Bring Back
                                              </Dropdown.Item>
                                              <Dropdown.Item
                                              onClick={handleOpenremove}
                                                to="#"
                                                className="dot-delete-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/trash-can.png"
                                                  alt="trash-can-img"
                                                  style={{
                                                    width: "16px",
                                                    marginRight: "8px",
                                                  }}
                                                />
                                                Delete
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td>TR124301</td>
                                        <td className="first-td">Invoices A</td>
                                        <td>Omar</td>
                                        <td>Rohan</td>
                                        <td>£4,00</td>
                                        <td className="status-tagbtns">
                                          <Link
                                            to="#"
                                            className="incoming-btn"
                                          >
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
                                            Incoming
                                          </Link>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Income
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Assets
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td className="pdfs-td">
                                          <Link
                                            to="#"
                                            className="view-pdf-btn"
                                          >
                                            <img
                                              src="./admin_assets/images/files.png"
                                              alt="filesg"
                                            />
                                          </Link>
                                          <div className="hidden-content pdf-content">
                                            <div className="pdfs-pp-btns">
                                              <Link
                                                to="#"
                                                className="pdf-view-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/Eye2.png"
                                                  className="Eye2-img"
                                                  alt="Eye2-img"
                                                />
                                                View
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-change-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/Edit 1.png"
                                                  className="Edit 1-img"
                                                  alt="Edit 1-img"
                                                />
                                                Change
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-upload-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/file_upload.png"
                                                  className="file_upload"
                                                  alt="file_upload-img"
                                                />
                                                Upload PDF
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-delete-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/trash-can.png"
                                                  className="trash-can-img"
                                                  alt="trash-can-img"
                                                />
                                                Delete
                                              </Link>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="dot-td">
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="link"
                                              id="dropdown-basic"
                                              className="v-dots-btn p-0 border-0"
                                            >
                                              <img
                                                src="./admin_assets/images/pepicons-pop_dots-y.png"
                                                alt="dots"
                                                style={{
                                                  width: "20px",
                                                  height: "20px",
                                                }}
                                              />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="hidden-content dots-content ">
                                              <Dropdown.Item
                                                to="#"
                                                className="dot-brng-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/check.png"
                                                  alt="check-img"
                                                  style={{
                                                    width: "16px",
                                                    marginRight: "8px",
                                                  }}
                                                />
                                                Bring Back
                                              </Dropdown.Item>
                                              <Dropdown.Item
                                              onClick={handleOpenremove}
                                                to="#"
                                                className="dot-delete-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/trash-can.png"
                                                  alt="trash-can-img"
                                                  style={{
                                                    width: "16px",
                                                    marginRight: "8px",
                                                  }}
                                                />
                                                Delete
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td>TR124301</td>
                                        <td className="first-td">Invoices A</td>
                                        <td>Omar</td>
                                        <td>Rohan</td>
                                        <td>£5,00</td>
                                        <td className="status-tagbtns">
                                          <Link
                                            to="#"
                                            className="liability-btn"
                                          >
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
                                            Liability
                                          </Link>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Income
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Assets
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td className="pdfs-td">
                                          <Link
                                            to="#"
                                            className="view-pdf-btn"
                                          >
                                            <img
                                              src="./admin_assets/images/files.png"
                                              alt="filesg"
                                            />
                                          </Link>
                                          <div className="hidden-content pdf-content">
                                            <div className="pdfs-pp-btns">
                                              <Link
                                                to="#"
                                                className="pdf-view-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/Eye2.png"
                                                  className="Eye2-img"
                                                  alt="Eye2-img"
                                                />
                                                View
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-change-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/Edit 1.png"
                                                  className="Edit 1-img"
                                                  alt="Edit 1-img"
                                                />
                                                Change
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-upload-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/file_upload.png"
                                                  className="file_upload"
                                                  alt="file_upload-img"
                                                />
                                                Upload PDF
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-delete-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/trash-can.png"
                                                  className="trash-can-img"
                                                  alt="trash-can-img"
                                                />
                                                Delete
                                              </Link>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="dot-td">
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="link"
                                              id="dropdown-basic"
                                              className="v-dots-btn p-0 border-0"
                                            >
                                              <img
                                                src="./admin_assets/images/pepicons-pop_dots-y.png"
                                                alt="dots"
                                                style={{
                                                  width: "20px",
                                                  height: "20px",
                                                }}
                                              />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="hidden-content dots-content ">
                                              <Dropdown.Item
                                                to="#"
                                                className="dot-brng-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/check.png"
                                                  alt="check-img"
                                                  style={{
                                                    width: "16px",
                                                    marginRight: "8px",
                                                  }}
                                                />
                                                Bring Back
                                              </Dropdown.Item>
                                              <Dropdown.Item
                                              onClick={handleOpenremove}
                                                to="#"
                                                className="dot-delete-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/trash-can.png"
                                                  alt="trash-can-img"
                                                  style={{
                                                    width: "16px",
                                                    marginRight: "8px",
                                                  }}
                                                />
                                                Delete
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td>TR124301</td>
                                        <td className="first-td">Invoices A</td>
                                        <td>Omar</td>
                                        <td>Rohan</td>
                                        <td>£5,00</td>
                                        <td className="status-tagbtns">
                                          <Link
                                            to="#"
                                            className="cat-asset-btn"
                                          >
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
                                            Asset
                                          </Link>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Income
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Assets
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td className="pdfs-td">
                                          <Link
                                            to="#"
                                            className="view-pdf-btn"
                                          >
                                            <img
                                              src="./admin_assets/images/files.png"
                                              alt="filesg"
                                            />
                                          </Link>
                                          <div className="hidden-content pdf-content">
                                            <div className="pdfs-pp-btns">
                                              <Link
                                                to="#"
                                                className="pdf-view-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/Eye2.png"
                                                  className="Eye2-img"
                                                  alt="Eye2-img"
                                                />
                                                View
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-change-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/Edit 1.png"
                                                  className="Edit 1-img"
                                                  alt="Edit 1-img"
                                                />
                                                Change
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-upload-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/file_upload.png"
                                                  className="file_upload"
                                                  alt="file_upload-img"
                                                />
                                                Upload PDF
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-delete-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/trash-can.png"
                                                  className="trash-can-img"
                                                  alt="trash-can-img"
                                                />
                                                Delete
                                              </Link>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="dot-td">
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="link"
                                              id="dropdown-basic"
                                              className="v-dots-btn p-0 border-0"
                                            >
                                              <img
                                                src="./admin_assets/images/pepicons-pop_dots-y.png"
                                                alt="dots"
                                                style={{
                                                  width: "20px",
                                                  height: "20px",
                                                }}
                                              />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="hidden-content dots-content ">
                                              <Dropdown.Item
                                                to="#"
                                                className="dot-brng-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/check.png"
                                                  alt="check-img"
                                                  style={{
                                                    width: "16px",
                                                    marginRight: "8px",
                                                  }}
                                                />
                                                Bring Back
                                              </Dropdown.Item>
                                              <Dropdown.Item
                                              onClick={handleOpenremove}
                                                to="#"
                                                className="dot-delete-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/trash-can.png"
                                                  alt="trash-can-img"
                                                  style={{
                                                    width: "16px",
                                                    marginRight: "8px",
                                                  }}
                                                />
                                                Delete
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td>TR124301</td>
                                        <td className="first-td">Invoices A</td>
                                        <td>Omar</td>
                                        <td>Rohan</td>
                                        <td>£5,00</td>
                                        <td className="status-tagbtns">
                                          <Link
                                            to="#"
                                            className="expense-btn"
                                          >
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
                                            Expense
                                          </Link>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Income
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Assets
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td className="pdfs-td">
                                          <Link
                                            to="#"
                                            className="view-pdf-btn"
                                          >
                                            <img
                                              src="./admin_assets/images/files.png"
                                              alt="filesg"
                                            />
                                          </Link>
                                          <div className="hidden-content pdf-content">
                                            <div className="pdfs-pp-btns">
                                              <Link
                                                to="#"
                                                className="pdf-view-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/Eye2.png"
                                                  className="Eye2-img"
                                                  alt="Eye2-img"
                                                />
                                                View
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-change-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/Edit 1.png"
                                                  className="Edit 1-img"
                                                  alt="Edit 1-img"
                                                />
                                                Change
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-upload-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/file_upload.png"
                                                  className="file_upload"
                                                  alt="file_upload-img"
                                                />
                                                Upload PDF
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-delete-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/trash-can.png"
                                                  className="trash-can-img"
                                                  alt="trash-can-img"
                                                />
                                                Delete
                                              </Link>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="dot-td">
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="link"
                                              id="dropdown-basic"
                                              className="v-dots-btn p-0 border-0"
                                            >
                                              <img
                                                src="./admin_assets/images/pepicons-pop_dots-y.png"
                                                alt="dots"
                                                style={{
                                                  width: "20px",
                                                  height: "20px",
                                                }}
                                              />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="hidden-content dots-content ">
                                              <Dropdown.Item
                                                to="#"
                                                className="dot-brng-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/check.png"
                                                  alt="check-img"
                                                  style={{
                                                    width: "16px",
                                                    marginRight: "8px",
                                                  }}
                                                />
                                                Bring Back
                                              </Dropdown.Item>
                                              <Dropdown.Item
                                              onClick={handleOpenremove}
                                                to="#"
                                                className="dot-delete-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/trash-can.png"
                                                  alt="trash-can-img"
                                                  style={{
                                                    width: "16px",
                                                    marginRight: "8px",
                                                  }}
                                                />
                                                Delete
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td>TR124301</td>
                                        <td className="first-td">Invoices A</td>
                                        <td>Omar</td>
                                        <td>Rohan</td>
                                        <td>£5,00</td>
                                        <td className="status-tagbtns">
                                          <Link
                                            to="#"
                                            className="incoming-btn"
                                          >
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
                                            Incoming
                                          </Link>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Income
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Assets
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td className="pdfs-td">
                                          <Link
                                            to="#"
                                            className="view-pdf-btn"
                                          >
                                            <img
                                              src="./admin_assets/images/files.png"
                                              alt="filesg"
                                            />
                                          </Link>
                                          <div className="hidden-content pdf-content">
                                            <div className="pdfs-pp-btns">
                                              <Link
                                                to="#"
                                                className="pdf-view-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/Eye2.png"
                                                  className="Eye2-img"
                                                  alt="Eye2-img"
                                                />
                                                View
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-change-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/Edit 1.png"
                                                  className="Edit 1-img"
                                                  alt="Edit 1-img"
                                                />
                                                Change
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-upload-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/file_upload.png"
                                                  className="file_upload"
                                                  alt="file_upload-img"
                                                />
                                                Upload PDF
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-delete-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/trash-can.png"
                                                  className="trash-can-img"
                                                  alt="trash-can-img"
                                                />
                                                Delete
                                              </Link>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="dot-td">
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="link"
                                              id="dropdown-basic"
                                              className="v-dots-btn p-0 border-0"
                                            >
                                              <img
                                                src="./admin_assets/images/pepicons-pop_dots-y.png"
                                                alt="dots"
                                                style={{
                                                  width: "20px",
                                                  height: "20px",
                                                }}
                                              />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="hidden-content dots-content ">
                                              <Dropdown.Item
                                                to="#"
                                                className="dot-brng-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/check.png"
                                                  alt="check-img"
                                                  style={{
                                                    width: "16px",
                                                    marginRight: "8px",
                                                  }}
                                                />
                                                Bring Back
                                              </Dropdown.Item>
                                              <Dropdown.Item
                                              onClick={handleOpenremove}
                                                to="#"
                                                className="dot-delete-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/trash-can.png"
                                                  alt="trash-can-img"
                                                  style={{
                                                    width: "16px",
                                                    marginRight: "8px",
                                                  }}
                                                />
                                                Delete
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td>TR124301</td>
                                        <td className="first-td">Invoices A</td>
                                        <td>Omar</td>
                                        <td>Rohan</td>
                                        <td>£5,00</td>
                                        <td className="status-tagbtns">
                                          <Link
                                            to="#"
                                            className="incoming-btn"
                                          >
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
                                            Incoming
                                          </Link>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Income
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              variant="primary"
                                              className="income-btn"
                                            >
                                              Assets
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                              <Dropdown.Item to="#">
                                                Action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Another action
                                              </Dropdown.Item>
                                              <Dropdown.Item to="#">
                                                Something else here
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                        <td className="pdfs-td">
                                          <Link
                                            to="#"
                                            className="view-pdf-btn"
                                          >
                                            <img
                                              src="./admin_assets/images/files2.png"
                                              alt="filesr"
                                            />
                                          </Link>
                                          <div className="hidden-content pdf-content">
                                            <div className="pdfs-pp-btns">
                                              <Link
                                                to="#"
                                                className="pdf-view-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/Eye2.png"
                                                  className="Eye2-img"
                                                  alt="Eye2-img"
                                                />
                                                View
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-change-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/Edit 1.png"
                                                  className="Edit 1-img"
                                                  alt="Edit 1-img"
                                                />
                                                Change
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-upload-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/file_upload.png"
                                                  className="file_upload"
                                                  alt="file_upload-img"
                                                />
                                                Upload PDF
                                              </Link>
                                              <Link
                                                to="#"
                                                className="pdf-delete-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/trash-can.png"
                                                  className="trash-can-img"
                                                  alt="trash-can-img"
                                                />
                                                Delete
                                              </Link>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="dot-td">
                                          <Link
                                            to="#"
                                            className="view-dots-btn"
                                          >
                                            <img
                                              src="./admin_assets/images/pepicons-pop_dots-y.png"
                                              alt="dots"
                                            />
                                          </Link>
                                          <div
                                            className={`hidden-content dots-content ${
                                              isVisible ? "visible" : ""
                                            }`}
                                          >
                                            <div className="dot-pp-btns">
                                              <Link
                                                to="#"
                                                className="dot-brng-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/check.png"
                                                  className="check-img"
                                                  alt="check-img"
                                                />
                                                Bring Back
                                              </Link>
                                              <Link
                                                to="#"
                                                className="dot-delete-btn"
                                              >
                                                <img
                                                  src="./admin_assets/images/trash-can.png"
                                                  className="trash-can-img"
                                                  alt="trash-can-img"
                                                />
                                                Delete
                                              </Link>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={12} md={12} >
                                <div className="invoice-order-pagination">
                                  <div className="pagination-indicator">
                                    <h6>
                                      page <span className="initail">1</span> to{" "}
                                      <span className="total">10</span>
                                    </h6>
                                  </div>
                                  <div className="pagination-nav">
                                    <Link to="#" className="pg-prev">
                                      Previous
                                    </Link>
                                    <Link to="#" className="pg-next">
                                      Next
                                    </Link>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <!----------------------------- Admin Financials Invoice Revenue ADD Popup  ------------------------------------> */}

      <Modal
        show={showadd}
        onHide={handleCloseadd}
        className="password_modal"
      >
        <ModalBody>
          <div className="revenue-PP-one">
            <div className="pp-main-head">
              <h2>Add Data</h2>
              <button className="close-btn" onClick={handleCloseadd}>
                ×
              </button>
            </div>
            <Row className=" frm-inner-row Popup-inner-row">
              <form action="" method="">
                <Row>
                  <Col lg={6} md={6} >
                    <div className="form-group">
                      <label htmlFor="control-label">Date & Time</label>
                      <br />
                      <input
                        type="date"
                        name="form-control"
                        placeholder="Omar"
                      />
                    </div>
                  </Col>
                  <Col lg={6} md={6} >
                    <div className="form-group">
                      <label htmlFor="control-label">
                        Transaction Description
                      </label>
                      <br />
                      <input
                        type="number"
                        name="form-control"
                        placeholder="123123"
                      />
                    </div>
                  </Col>
                </Row>
                <Row >
                  <Col lg={12} md={12} >
                    <div className="form-group">
                      <label htmlFor="control-label">From</label>
                      <select name="Council" id="Rented-fld">
                        <option value="volvo">Rohan</option>
                        <option value="saab">Rohan Shibu</option>
                        <option value="opel">Rohan S</option>
                        <option value="audi">Omar</option>
                      </select>
                    </div>
                  </Col>
                </Row>
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
                          <circle cx="4.5" cy="4" r="3" fill="white"></circle>
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
                          <circle cx="4.5" cy="4" r="3" fill="white"></circle>
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
                          <circle cx="4.5" cy="4" r="3" fill="white"></circle>
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
                          <circle cx="4.5" cy="4" r="3" fill="white"></circle>
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
                          <circle cx="4.5" cy="4" r="3" fill="white"></circle>
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
                <Row>
                  <Col lg={12} md={12} >
                    <div className="form-group">
                      <label htmlFor="control-label">To</label>
                      <select name="Council" id="Rented-fld">
                        <option value="volvo">Rohan</option>
                        <option value="saab">Rohan Shibu</option>
                        <option value="opel">Rohan S</option>
                        <option value="audi">Omar</option>
                      </select>
                    </div>
                  </Col>
                </Row>
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
                          <circle cx="4.5" cy="4" r="3" fill="white"></circle>
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
                          <circle cx="4.5" cy="4" r="3" fill="white"></circle>
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
                          <circle cx="4.5" cy="4" r="3" fill="white"></circle>
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
                          <circle cx="4.5" cy="4" r="3" fill="white"></circle>
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
                          <circle cx="4.5" cy="4" r="3" fill="white"></circle>
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
                <Row>
                  <Col lg={6} md={6} >
                    <div className="form-group">
                      <label htmlFor="control-label">Amount</label>
                      <br />
                      <input
                        type="number"
                        name="form-control"
                        placeholder="2024 Mersedes E220"
                      />
                    </div>
                  </Col>
                  <Col lg={6} md={6} >
                    <div className="form-group">
                      <label htmlFor="control-label">Categories</label>
                      <select name="Council" id="Rented-fld">
                        <option value="volvo">10 December, 2024</option>
                        <option value="saab">10 December, 2024</option>
                        <option value="opel">10 December, 2024</option>
                        <option value="audi">10 December, 2024</option>
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} md={6} >
                    <div className="form-group">
                      <label htmlFor="control-label">Income/Expense</label>
                      <select name="Council" id="Rented-fld">
                        <option value="volvo">Expense</option>
                        <option value="saab">Income</option>
                        <option value="opel">Expense</option>
                        <option value="audi">Income</option>
                      </select>
                    </div>
                  </Col>
                  <Col lg={6} md={6} >
                    <div className="form-group">
                      <label htmlFor="control-label">Asset/Liability</label>
                      <select name="Council" id="Rented-fld">
                        <option value="volvo">Asset</option>
                        <option value="saab">Asset</option>
                        <option value="opel">Asset</option>
                        <option value="audi">Asset</option>
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row className=" rental-vehicle-docs-wrap">
                  <h5>Document Upload</h5>
                  <div className="pdf_upl-bx">
                    <input type="file" name="" />
                    <img
                      src="./admin_assets/images/pdf-upload.png"
                      alt="pdf-upload"
                    />
                    <div className="filedetails">
                      <span>Click to upload</span>
                      <span>or drag and drop Maximum file size 50 MB.</span>
                    </div>
                  </div>
                </Row>
              </form>
              <div className="revenue-add-action-btns">
                <Link to="#" className="delete-btn">
                  Delete
                </Link>
                <Link to="#" className="cancel-btn">
                  Cancel
                </Link>
                <Link to="#" className="submit-btn">
                  Submit
                </Link>
              </div>
            </Row>
          </div>
        </ModalBody>
      </Modal>

      {/* <!----------------------------- Admin Financials Invoice Revenue View Popup  ------------------------------------> */}

      <Modal
        show={showView}
        onHide={handleCloseview}
        className="password_modal"
      >
        <ModalBody>
          <div className="revenue-PP-two">
            <div className="pp-main-head">
              <h2>View Data</h2>
              <button className="close-btn" onClick={handleCloseview}>
                ×
              </button>
            </div>
            <Row className="frm-inner-row Popup-inner-row">
              <form action="" method="">
                <Row>
                  <Col lg={6} md={6} >
                    <div className="form-group">
                      <label htmlFor="control-label">Date & Time</label>
                      <br />
                      <input
                        type="text"
                        name="form-control"
                        placeholder="27 June, 2024 10:00 AM"
                      />
                    </div>
                  </Col>
                  <Col lg={6} md={6} >
                    <div className="form-group">
                      <label htmlFor="control-label">
                        Transaction Description
                      </label>
                      <br />
                      <input
                        type="number"
                        name="form-control"
                        placeholder="123123"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12} >
                    <div className="form-group">
                      <label htmlFor="control-label">From</label>
                      <div className="drvr_deta active">
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
                    </div>
                  </Col>
                  <div className="form-group">
                    <label htmlFor="control-label">To</label>
                    <div className="drvr_deta active">
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
                          <circle cx="4.5" cy="4" r="3" fill="white"></circle>
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
                </Row>
                <Row>
                  <Col lg={6} md={6} >
                    <div className="form-group">
                      <label htmlFor="control-label">Amount</label>
                      <br />
                      <input
                        type="number"
                        name="form-control"
                        placeholder="2024 Mersedes E220"
                      />
                    </div>
                  </Col>
                  <Col lg={6} md={6} >
                    <div className="form-group">
                      <label htmlFor="control-label">Categories</label>
                      <input
                        type="text"
                        name="form-control"
                        placeholder="10 December, 2024"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} md={6} >
                    <div className="form-group">
                      <label htmlFor="control-label">Income/Expense</label>
                      <input
                        type="text"
                        name="form-control"
                        placeholder="Expense"
                      />
                    </div>
                  </Col>
                  <Col lg={6} md={6} >
                    <div className="form-group">
                      <label htmlFor="control-label">Asset/Liability</label>
                      <input
                        type="text"
                        name="form-control"
                        placeholder="Asset"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} >
                    <div className="chngs-pdf-ppr">
                      <img
                        src="./admin_assets/images/paper-pdf.png"
                        className="paper-pdf-img"
                        alt="paper-pdf-img"
                      />
                      <div className="pdfdetail">
                        <h6>Paper Copy</h6>
                        <p>3.6 MB</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} >
                    <div className="pdf-chng-btns">
                      <Link to="#" className="view-btn">
                        View
                      </Link>
                      <Link to="#" className="download-btn">
                        Download
                      </Link>
                    </div>
                  </Col>
                </Row>
              </form>
            </Row>
          </div>
        </ModalBody>
      </Modal>

      {/* <!----------------------------- Admin Financials Invoice Revenue Remove Popup  ------------------------------------> */}

<Modal className="password_modal" show={showremove} onHide={handleCloseremove}>
  <ModalBody>
  <div className="remove-alert-pop-up">
     <img src="./admin_assets/images/Icon.png" className="Icon-img" alt="Icon-img"/>
     <div className="alrt-deta">
         <h6>Are sure to want to Remove?</h6>
         <p>Lorem ipsum dolor sit amet consectetur. Gravida sed sit nisl metus.</p>
         <div className="alrt-btns">
             <Link to="#" className="cancel-btn" onClick={handleCloseremove}>Cancel</Link>
             <Link to="#" className="yes-btn" onClick={handleCloseremove}>Yes</Link>
         </div>
     </div>
  </div>
  </ModalBody>
</Modal>

    </section>
  </>
);
}


export default Adminfinancialexpense
