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
      <section class="user-dashboard">
        <Container fluid>
          <Row class=" g-0">
            <Col lg={3} md={3} class="sidebar-col">
              <Sidebar />
            </Col>
            <Col lg={9} md={9} class="panel-col">
              <div class="dashboard-panel invoice-view-panel payment-schedule-invoice-view-panel payment-schedule-two">
                <Row>
                  <Col lg={12} md={12}>
                    <div class="dashboard-panel-topbar">
                      <Dashboardpaneltopbar />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12}>
                    <div class="invoice-view-sec db-default-sec">
                      <Link href="javascript" class="back-to">
                        <ion-icon
                          name="chevron-back-outline"
                          role="img"
                          class="md hydrated"
                        ></ion-icon>{" "}
                        Back to Vehicle
                      </Link>
                      <div class="col-md-12">
                        <div class="row innr-row">
                          <div class="col-md-6">
                            <div class="drvr_deta">
                              <div class="drvrmain">
                                <img
                                  src="./admin_assets/images/new-customers-list.png"
                                  class="new-customers-img"
                                  alt="new-customers-img"
                                />
                                <div class="drvrnam">
                                  <h6>Omar A</h6>
                                  <span>Customer ID: D0012</span>
                                </div>
                              </div>
                              <div class="drvrcar-main">
                                <div class="drvrcar">
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
                                <button class="close-btn">×</button>
                              </div>
                            </div>
                            <div class="payment-schedule-disc">
                              <div class="row frm-inner-row invoice-tab-frm-2">
                                <form action="" method="">
                                  <Row>
                                    <Col lg={12} md={12}>
                                      <div class="form-group">
                                        <label for="control-label">
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
                                          <label htmlFor="payment">
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
                                          <label htmlFor="fee">Fee</label>
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
                                          <label htmlFor="description">
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
                              <div class="add-pcn-view-comm_head ">
                                <Link onClick={handleClone}>
                                  <img
                                    src="./admin_assets/images/plus.png"
                                    class="plus-img"
                                    alt="comm"
                                  />
                                  Add another Paymentr
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="payment-schedule-card-main-head">
                              <h4>Invoice Preview</h4>
                              <div class="zoom-options">
                                <Link href="javascript:;" class="incoming-btn">
                                  <img
                                    src="./admin_assets/images/zoom-out.png"
                                    alt="zoom-out"
                                  />
                                </Link>
                                <Link href="javascript:;" class="incoming-btn">
                                  <img
                                    src="./admin_assets/images/zoom-in.png"
                                    alt="zoom-in"
                                  />
                                </Link>
                              </div>
                            </div>
                            <div class="invoice-view-card db-default-wrapper payment-schedule-card">
                              <div class="row invoice-view-details admin-invoice-view-details">
                                <Col lg={6} md={6}>
                                  <h2>BLACKTIES</h2>
                                  <h5>RENTAL</h5>
                                </Col>
                                <Col lg={6} md={6}>
                                  <p class="inv-address">
                                    328 Summerwood Road, Isleworth, Greater
                                    London, TW7 7QP{" "}
                                  </p>
                                </Col>
                              </div>
                              <div class="row invoice-view-subscription">
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
                              <div class="row invoice-view-subscription-2">
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
                                    <table class="cancellation-disc-table">
                                      <thead>
                                        <tr>
                                          <th class="first-th">Description</th>
                                          <th>Price</th>
                                          <th>Vat %</th>
                                          <th>Amount (GBP)</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td class="first-td">Damage Car</td>
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
                            <div class="pay-schedule-btns">
                              <Link href="javascript:;" class="cancel-btn">
                                Cancel
                              </Link>
                              <Link href="javascript:;" class="send-btn">
                                Send
                              </Link>
                            </div>
                          </div>
                        </div>
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

export default Userinvoice;
