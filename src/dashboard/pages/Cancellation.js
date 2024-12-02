import React, { useState } from 'react';
import DashboardSidebar from '../partials/dashboard-sidebar';
import DashboardPanelTopbar from '../components/DashboardPanelTopbar';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

function Cancellation() {
  const [isActive, setIsActive] = useState(false);

  const popupAlrt = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <section className="user-dashboard">
        {/* Cancellation Alert Section */}
        <div className={`cancellation-alert-body ${isActive ? 'active' : ''}`}>
          <div className="cancellation-alert">
            <img src="./assets/images/dashboard/danger 1.png" alt="Cancellation Alert" />
            <div>
              <h6>Are you sure?</h6>
              <p>Cancellation requests are irreversible. Are you sure you want to proceed?</p>
            </div>
            <div className="cancel-alert-btn">
              <Link to="#" className="cancel-trip">Cancel Trip</Link>
              <button className="cancel-Return" onClick={popupAlrt}>RETURN</button>
            </div>
          </div>
        </div>

        <Container fluid>
          <Row className="g-0">
            <Col lg={3} md={3} className="sidebar-col">
              <DashboardSidebar />
            </Col>
            <Col lg={9} md={9} className="panel-col">
              <div className="dashboard-panel cancellation-panel">
                <Row>
                  <Col lg={12} md={12}>
                    <div className="dashboard-panel-topbar">
                      <h6 className="cancellation-vehicle-title">Cancellation</h6>
                      <DashboardPanelTopbar />
                    </div>
                  </Col>
                </Row>
                <Row >
                  <Col lg={12} md={12}>
                    <div className="cancellation-sec db-default-sec">
                      <div className="cancellation-card db-default-wrapper">
                        <Row className="back-to-sec">
                          <Col lg={12} md={12}>
                            <Link to="#" className="back-to">
                              <ion-icon name="arrow-back-outline"></ion-icon> Back
                            </Link>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={4} md={4}>
                            <img className="date-picker" src="./assets/images/dashboard/Date Picker.png" alt="Date" />
                          </Col>
                          <Col lg={8} md={8}>
                            <div style={{ overflowX: 'auto' }}>
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
                        <Row className="cancel-rental-detail-wrap">
                          <h5 className="theme-h5">Details Rental</h5>
                          <Col lg={6} md={6}>
                            <div className="map">
                              <img src="./assets/images/dashboard/Maps.png" alt="Maps" />
                            </div>
                          </Col>
                          <Col lg={6} md={6}>
                            <div className="rental-vehicle-dt1">
                              <img src="./assets/images/dashboard/image 67.png" alt="" />
                              <div>
                                <h5 className="theme-h5">Mercedes-Benz E Class</h5>
                                <span>Sedan Car</span>
                              </div>
                              <p>#9761</p>
                            </div>
                            <div className="rental-vehicle-dt2">
                              <div>
                                <h6>Distance</h6>
                                <h5>102 Miles</h5>
                              </div>
                              <div>
                                <h6>Passenger</h6>
                                <h5>4 Persons</h5>
                              </div>
                            </div>
                            <div className="rental-vehicle-dt3">
                              <div>
                                <h6>Start</h6>
                                <h5>July 19, 2024</h5>
                              </div>
                              <div>
                                <h6>End</h6>
                                <h5>TBD</h5>
                              </div>
                            </div>
                            <div className="cancel-conf-btn">
                              <button className="conform-btn" onClick={popupAlrt}>Confirmation</button>
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

export default Cancellation;
