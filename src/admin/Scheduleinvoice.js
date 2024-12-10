import React from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { useState } from "react";
import { Col, Container, Modal, ModalBody, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Scheduleinvoice() {
  // For Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="user-dashboard">
        <Container fluid>
          <Row className=" g-0">
            <Col lg={3} md={3} className=" sidebar-col">
              <Sidebar />
            </Col>
            <Col lg={9} md={9} className=" panel-col">
              <div className="dashboard-panel invoice-view-panel">
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
                      <div className="invoice-view-card db-default-wrapper admin-invoice-view-card admin-invoice-pay-card">
                        <Row>
                          <Col lg={12} md={12}>
                            <div className="invoice-view-topbar ">
                              <Link to="#" className="back-to">
                                <ion-icon
                                  name="chevron-back-outline"
                                  role="img"
                                  className="md hydrated"
                                ></ion-icon>{" "}
                                Back to Invoice
                              </Link>
                              <div className="admin-invoice-view-card-btns">
                                <div className="admin-invoice-main-btn">
                                  <Link to="#" className="cancel-btn">
                                    Cancel
                                  </Link>
                                  <Link to="#" className="save-btn">
                                    Save
                                  </Link>
                                  <Link
                                    onClick={handleShow}
                                    className="pay-btn"
                                  >
                                    Pay
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className=" invoice-view-details admin-invoice-view-details">
                          <Col lg={6} md={6}>
                            <h2>BLACKTIES</h2>
                            <h5>RENTAL</h5>
                            <p className="inv-address">
                              328 Summerwood Road, <br /> Isleworth, <br />{" "}
                              Greater London, <br /> TW7 7QP
                            </p>
                          </Col>
                          <Col lg={6} md={6}>
                            <h3>INVOICE</h3>
                            <p className="inv-info">
                              Invoice#<strong>114152</strong> <br /> Invoice
                              Date <strong>Aug 01, 2024</strong> <br /> Invoice
                              Amount <strong>£360</strong>
                            </p>
                            <p className="inv-info">
                              Customer ID<strong>21312ADA</strong>
                            </p>
                          </Col>
                        </Row>
                        <Row className=" invoice-view-subscription">
                          <Col lg={6} md={6}>
                            <p className="billing-name">Billing to</p>
                            <p className="user">Omar Waldii</p>
                            <p className="country">United Kingdom</p>
                          </Col>
                          <Col lg={6} md={6}>
                            <p className="subscription-id">
                              Subscription <br />{" "}
                              <strong>ID 213123jkhsad</strong>{" "}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12} md={12}>
                            <div style={{ overflowX: "auto" }}>
                              <table className="cancellation-disc-table">
                                <thead>
                                  <tr>
                                    <th className="first-th">Description</th>
                                    <th>Amount</th>
                                    <th>Vat %</th>
                                    <th>Amount (GBP)</th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="first-td">PCN Fee</td>
                                    <td>£360</td>
                                    <td>10 %</td>
                                    <td>£360</td>
                                    <td>
                                      <Link to="#">
                                        <img
                                          src="./admin_assets/images/trash-can.png"
                                          alt="delete"
                                        />
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="first-td">
                                      Insurance Excess
                                    </td>
                                    <td>£360</td>
                                    <td>-</td>
                                    <td>£360</td>
                                    <td>
                                      <Link to="#">
                                        <img
                                          src="./admin_assets/images/trash-can.png"
                                          alt="delete"
                                        />
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="first-td">Refund</td>
                                    <td>£360</td>
                                    <td></td>
                                    <td>£360</td>
                                    <td>
                                      <Link to="#">
                                        <img
                                          src="./admin_assets/images/trash-can.png"
                                          alt="delete"
                                        />
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="big-td">
                                      <Link to="#">
                                        <img
                                          src="./admin_assets/images/plus.png"
                                          className="plus-img"
                                          alt="comm"
                                        />
                                        Add another Payment
                                      </Link>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </Col>
                          <Col md={6}></Col>
                          <Col md={6}>
                            <div style={{ msOverflowX: "auto" }}>
                              <table className="cancellation-disc-table">
                                <tr>
                                  <td>Total excl Vat</td>
                                  <td></td>
                                  <td>£360</td>
                                </tr>
                                <tr>
                                  <td>VAT 20 %</td>
                                  <td></td>
                                  <td>£360</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Total</td>
                                  <td>£360</td>
                                </tr>
                              </table>
                            </div>
                          </Col>
                        </Row>
                        <Row className="totalamount">
                          <div className="bal_amnt">
                            <h3>Outstanding Balance</h3>
                            <h3>£360</h3>
                          </div>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* <!--          CARD PAYMET PopUp           --> */}
            <Modal show={show} onHide={handleClose} className="password_modal ">
              <ModalBody>
                <div className="cardpay-popup_bx">
                  <div className="card-main-head">
                    <h2>Confirmation</h2>
                    <button className="close-btn" onClick={handleClose}>
                      ×
                    </button>
                  </div>
                  <div className="card-innr-blk">
                    <div className="card-selection">
                      <h4>Select a Card</h4>
                      <Link to="#">
                        <img
                          src="./admin_assets/images/plus.png"
                          className="plus-img"
                          alt="comm"
                        />
                        Add Card
                      </Link>
                    </div>
                    <div className="payment-method-wrapper">
                      <form action="">
                        <div className="payment-options-list payment-options1">
                          <div className="checkboxes__item">
                            <label className="checkbox payment-radio">
                              <input type="checkbox" checked="checked" />
                              <div className="checkbox__checkmark"></div>
                              <div className="checkbox__body">
                                <div className="checkbox-inbody">
                                  <img
                                    src="./admin_assets/images/dashboard/Visa_Inc._logo 1.svg"
                                    alt=""
                                  />
                                  <div>
                                    <h6>Visa Ending in 1231</h6>
                                    <span className="exp">
                                      Expired date 12/24
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="payment-options-list payment-options2">
                          <div className="checkboxes__item">
                            <label className="checkbox payment-radio">
                              <input type="checkbox" />
                              <div className="checkbox__checkmark"></div>
                              <div className="checkbox__body">
                                <div className="checkbox-inbody">
                                  <img
                                    src="./admin_assets/images/dashboard/mc.svg"
                                    alt=""
                                  />
                                  <div>
                                    <h6>Visa Ending in 1231</h6>
                                    <span className="exp">
                                      Expired date 12/24
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card-bttm-head">
                    <h3>Total Refund</h3>
                    <h3>£360</h3>
                  </div>

                  <div className="card-pay-action-btns">
                    <Link onClick={handleClose} className="cancel-btn">
                      Cancel
                    </Link>
                    <Link onClick={handleClose} className="refund-btn">
                      Refund
                    </Link>
                  </div>
                </div>
              </ModalBody>
            </Modal>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Scheduleinvoice;
