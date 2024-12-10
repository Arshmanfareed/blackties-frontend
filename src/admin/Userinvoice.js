import React from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

function Userinvoice() {
  const [rows, setRows] = useState([
    {
      id: 1,
      payment: "",
      fee: "",
      description: "",
    },
  ]);

  const handleClone = () => {
    // Create a new row object
    const newRow = {
      id: rows.length + 1,
      payment: "",
      fee: "",
      description: "",
    };
    setRows([...rows, newRow]); // Append the new row to the array
  };

  return (
    <>
      <section className="user-dashboard">
        <Container fluid>
          <Row className=" g-0">
            <Col lg={3} md={3} className="sidebar-col">
              <Sidebar />
            </Col>
            <Col lg={9} md={9} className="panel-col">
              <div className="dashboard-panel invoice-view-panel payment-schedule-invoice-view-panel payment-schedule-two">
                <Row>
                  <Col lg={12} md={12}>
                    <div className="dashboard-panel-topbar">
                      <Dashboardpaneltopbar />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12}>
                    <div className="invoice-view-sec db-default-sec">
                      <Link to="#" className="back-to">
                        <ion-icon
                          name="chevron-back-outline"
                          role="img"
                          className="md hydrated"
                        ></ion-icon>{" "}
                        Back to Vehicle
                      </Link>
                      <Col md={12}>
                        <Row className="innr-row">
                          <Col md={6}>
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
                              <div className="drvrcar-main">
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
                                <button className="close-btn">×</button>
                              </div>
                            </div>
                            <div className="payment-schedule-disc">
                              <div className="row frm-inner-row invoice-tab-frm-2">
                                <form action="" method="">
                                  <Row>
                                    <Col lg={12} md={12}>
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
                                  </Row>
                                  {rows.map((row) => (
                                    <Row
                                      className="clone_another_payment"
                                      key={row.id}
                                    >
                                      <Col lg={12} md={12}>
                                        <div className="form-group">
                                          <label htmlhtmlFor="payment">
                                            Reason Payment
                                          </label>
                                          <select
                                            name="payment"
                                            id={`payment-${row.id}`}
                                            className="form-control"
                                          >
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
                                      <Col lg={12} md={12}>
                                        <div className="form-group">
                                          <label htmlhtmlFor="fee">Fee</label>
                                          <input
                                            type="number"
                                            name="fee"
                                            id={`fee-${row.id}`}
                                            placeholder="£2.000"
                                            className="form-control"
                                          />
                                        </div>
                                      </Col>
                                      <Col lg={12} md={12}>
                                        <div className="form-group">
                                          <label htmlhtmlFor="description">
                                            Description
                                          </label>
                                          <textarea
                                            name="description"
                                            id={`description-${row.id}`}
                                            placeholder="Damage Car"
                                            className="form-control mg0"
                                          ></textarea>
                                        </div>
                                      </Col>
                                    </Row>
                                  ))}
                                </form>
                              </div>
                              <div className="add-pcn-view-comm_head ">
                                <Link onClick={handleClone}>
                                  <img
                                    src="./admin_assets/images/plus.png"
                                    className="plus-img"
                                    alt="comm"
                                  />
                                  Add another Paymentr
                                </Link>
                              </div>
                            </div>
                          </Col>
                          <Col md={6}>
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
                              <div className="row invoice-view-details admin-invoice-view-details">
                                <Col lg={6} md={6}>
                                  <h2>BLACKTIES</h2>
                                  <h5>RENTAL</h5>
                                </Col>
                                <Col lg={6} md={6}>
                                  <p className="inv-address">
                                    328 Summerwood Road, Isleworth, Greater
                                    London, TW7 7QP{" "}
                                  </p>
                                </Col>
                              </div>
                              <div className="row invoice-view-subscription">
                                <Col lg={4} md={4}>
                                  <p>
                                    <span>Full Name</span>
                                    <br />
                                    John Doe
                                  </p>
                                </Col>
                                <Col lg={4} md={4}>
                                  <p>
                                    <span>Phone:</span>
                                    <br />
                                    +44 334 2345
                                  </p>
                                </Col>
                                <Col lg={4} md={4}>
                                  <p>
                                    <span>Email:</span>
                                    <br />
                                    example@gmail.com
                                  </p>
                                </Col>
                              </div>
                              <div className="row invoice-view-subscription-2">
                                <Col lg={4} md={4}>
                                  <p>
                                    <span>Receipt Date:</span>
                                    <br />
                                    12/8/2024
                                  </p>
                                </Col>
                                <Col lg={4} md={4}>
                                  <p>
                                    <span>Receipt #:</span>
                                    <br />
                                    RT-435
                                  </p>
                                </Col>
                                <Col lg={4} md={4}>
                                  <p>
                                    <span>Payment Method:</span>
                                    <br />
                                    Credit Card
                                  </p>
                                </Col>
                              </div>
                              <Row>
                                <Col lg={12} md={12}>
                                  <div style={{ overflowX: "auto" }}>
                                    <table className="cancellation-disc-table">
                                      <thead>
                                        <tr>
                                          <th className="first-th">
                                            Description
                                          </th>
                                          <th>Price</th>
                                          <th>Vat %</th>
                                          <th>Amount (GBP)</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td className="first-td">
                                            Damage Car
                                          </td>
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
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Userinvoice;
