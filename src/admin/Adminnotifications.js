import React from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function Adminnotifications() {
  return (
    <>
      <section className="user-dashboard">
        <Container fluid>
          <Row className=" g-0">
            <Col lg={3} md={3} className="sidebar-col">
              <Sidebar />
            </Col>
            <Col lg={9} md={9} className=" panel-col">
              <div className="dashboard-panel notifications-panel">
                <Row>
                  <Col lg={12} md={12}>
                    <div className="dashboard-panel-topbar">
                      <Dashboardpaneltopbar />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12}>
                    <div className="notifications-sec db-default-sec">
                      <div className="notifications-card db-default-wrapper">
                        <Row>
                          <Col lg={12} md={12}>
                            <div className="search-bar-wrapper">
                              <h5 className="theme-h5">Notifications</h5>
                              <div>
                                <div className="search-bar-v1">
                                  <button type="submit">
                                    <i className="fa fa-search"></i>
                                  </button>
                                  <input
                                    type="text"
                                    placeholder="Search here..."
                                  />
                                </div>
                                <Link
                                  to="javacscript:;"
                                  className="nofitic-markRead-btn"
                                >
                                  Mark as Read
                                </Link>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12} md={12}>
                            <div className="user-notifications-wrapper">
                              <ul>
                                <li>
                                  <Link to="/admin-notification" className="active">
                                    <div className="notific-data-box">
                                      <div className="noific-user-img">
                                        <img
                                          src="./admin_assets/images/dashboard/New Customers List.png"
                                          alt="User"
                                        />
                                        <i className="fas fa-circle"></i>
                                      </div>
                                      <div>
                                        <h6 className="notific-user">
                                          Michael Dane
                                        </h6>
                                        <p className="short-notific">
                                          Lorem ipsum dolor sit amet
                                          consectetur. Consequat habitasse
                                          tincidunt ut sed semper.
                                        </p>
                                        <span className="notific-time">
                                          10:13 AM
                                        </span>
                                        <span className="notific-date">
                                          <i className="fas fa-circle"></i> Sep 23,
                                          2024
                                        </span>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/admin-notification">
                                    <div className="notific-data-box">
                                      <div className="noific-user-img">
                                        <img
                                          src="./admin_assets/images/dashboard/New Customers List.png"
                                          alt="User"
                                        />
                                        <i className="fas fa-circle"></i>
                                      </div>
                                      <div>
                                        <h6 className="notific-user">
                                          Michael Dane
                                        </h6>
                                        <p className="short-notific">
                                          Lorem ipsum dolor sit amet
                                          consectetur. Consequat habitasse
                                          tincidunt ut sed semper.
                                        </p>
                                        <span className="notific-time">
                                          10:13 AM
                                        </span>
                                        <span className="notific-date">
                                          <i className="fas fa-circle"></i> Sep 23,
                                          2024
                                        </span>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/admin-notification">
                                    <div className="notific-data-box">
                                      <div className="noific-user-img">
                                        <img
                                          src="./admin_assets/images/dashboard/New Customers List.png"
                                          alt="User"
                                        />
                                        <i className="fas fa-circle"></i>
                                      </div>
                                      <div>
                                        <h6 className="notific-user">
                                          Michael Dane
                                        </h6>
                                        <p className="short-notific">
                                          Lorem ipsum dolor sit amet
                                          consectetur. Consequat habitasse
                                          tincidunt ut sed semper.
                                        </p>
                                        <span className="notific-time">
                                          10:13 AM
                                        </span>
                                        <span className="notific-date">
                                          <i className="fas fa-circle"></i> Sep 23,
                                          2024
                                        </span>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/admin-notification">
                                    <div className="notific-data-box">
                                      <div className="noific-user-img">
                                        <img
                                          src="./admin_assets/images/dashboard/New Customers List.png"
                                          alt="User"
                                        />
                                        <i className="fas fa-circle"></i>
                                      </div>
                                      <div>
                                        <h6 className="notific-user">
                                          Michael Dane
                                        </h6>
                                        <p className="short-notific">
                                          Lorem ipsum dolor sit amet
                                          consectetur. Consequat habitasse
                                          tincidunt ut sed semper.
                                        </p>
                                        <span className="notific-time">
                                          10:13 AM
                                        </span>
                                        <span className="notific-date">
                                          <i className="fas fa-circle"></i> Sep 23,
                                          2024
                                        </span>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/admin-notification">
                                    <div className="notific-data-box">
                                      <div className="noific-user-img">
                                        <img
                                          src="./admin_assets/images/dashboard/New Customers List.png"
                                          alt="User"
                                        />
                                        <i className="fas fa-circle"></i>
                                      </div>
                                      <div>
                                        <h6 className="notific-user">
                                          Michael Dane
                                        </h6>
                                        <p className="short-notific">
                                          Lorem ipsum dolor sit amet
                                          consectetur. Consequat habitasse
                                          tincidunt ut sed semper.
                                        </p>
                                        <span className="notific-time">
                                          10:13 AM
                                        </span>
                                        <span className="notific-date">
                                          <i className="fas fa-circle"></i> Sep 23,
                                          2024
                                        </span>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/admin-notification">
                                    <div className="notific-data-box">
                                      <div className="noific-user-img">
                                        <img
                                          src="./admin_assets/images/dashboard/New Customers List.png"
                                          alt="User"
                                        />
                                        <i className="fas fa-circle"></i>
                                      </div>
                                      <div>
                                        <h6 className="notific-user">
                                          Michael Dane
                                        </h6>
                                        <p className="short-notific">
                                          Lorem ipsum dolor sit amet
                                          consectetur. Consequat habitasse
                                          tincidunt ut sed semper.
                                        </p>
                                        <span className="notific-time">
                                          10:13 AM
                                        </span>
                                        <span className="notific-date">
                                          <i className="fas fa-circle"></i> Sep 23,
                                          2024
                                        </span>
                                      </div>
                                    </div>
                                    <div className="nofitic-vehicles">
                                      <img
                                        src="./admin_assets/images/dashboard/image 67.png"
                                        alt="vehicle"
                                      />
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/admin-notification">
                                    <div className="notific-data-box">
                                      <div className="noific-user-img">
                                        <img
                                          src="./admin_assets/images/dashboard/New Customers List.png"
                                          alt="User"
                                        />
                                        <i className="fas fa-circle"></i>
                                      </div>
                                      <div>
                                        <h6 className="notific-user">
                                          Michael Dane
                                        </h6>
                                        <p className="short-notific">
                                          Lorem ipsum dolor sit amet
                                          consectetur. Consequat habitasse
                                          tincidunt ut sed semper.
                                        </p>
                                        <span className="notific-time">
                                          10:13 AM
                                        </span>
                                        <span className="notific-date">
                                          <i className="fas fa-circle"></i> Sep 23,
                                          2024
                                        </span>
                                      </div>
                                    </div>
                                  </Link>
                                  <div className="notific-file-download">
                                    <div className="notific-file-data">
                                      <img
                                        src="./admin_assets/images/dashboard/img-frame.png"
                                        alt="jpg"
                                      />
                                      <div>
                                        <h6>Table Sample.jpg</h6>
                                        <span className="file-size">3 MB</span>
                                      </div>
                                    </div>
                                    <div>
                                      <Link to="#" className="notific-file-down">
                                        Download
                                      </Link>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12} md={12}>
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

export default Adminnotifications;
