import React from "react";
import Sidebar from "./partials/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";

function Financialinvoice() {
  return (
    <>
      <section className="user-dashboard">
        <Container fluid>
          <Row className=" g-0">
            <Col lg={3} md={3} className="sidebar-col">
              <Sidebar />
            </Col>
            <Col lg={9} md={9} className="panel-col">
              <div className="dashboard-panel invoice-view-panel">
                <Row>
                  <Col lg={12} md={12} >
                    <div className="dashboard-panel-topbar">
                      <Dashboardpaneltopbar />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12} >
                    <div className="invoice-view-sec db-default-sec">
                      <div className="invoice-view-card db-default-wrapper admin-invoice-view-card">
                        <Row>
                          <Col lg={12} md={12} >
                            <div className="invoice-view-topbar ">
                              <Link to="/admin-financialpayment" className="back-to">
                              <i className="fa-solid fa-chevron-left"></i>{" "}
                                Back to Invoice
                              </Link>
                              <div className="admin-invoice-view-card-btns">
                                <div className="doc-prints-wrap">
                                  <Link to="#">
                                    <img
                                      src="./admin_assets/images/dashboard/huge-icon.svg"
                                      alt="PDF"
                                    />
                                  </Link>
                                  <Link to="#">
                                    <img
                                      src="./admin_assets/images/dashboard/Mail.svg"
                                      alt="Mail"
                                    />
                                  </Link>
                                  <Link to="#">
                                    <img
                                      src="./admin_assets/images/dashboard/printer.svg"
                                      alt="Print"
                                    />
                                  </Link>
                                </div>
                                <div className="admin-invoice-main-btn">
                                  <Link to=";" className="amend-btn">
                                    Amend
                                  </Link>
                                  <Link to=";" className="refund-btn">
                                    Refund
                                  </Link>
                                  <Link to=";" className="pay-btn">
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
                          <Col lg={12} md={12} >
                            <div style={{ overflowX: "auto" }}>
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
                                    <td className="first-td">PCN Fee</td>
                                    <td>£360</td>
                                    <td>10 %</td>
                                    <td>£360</td>
                                  </tr>
                                  <tr>
                                    <td className="first-td">Insurance Excess</td>
                                    <td>£360</td>
                                    <td>-</td>
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
                        <Row className=" totalamount">
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
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Financialinvoice;
