import React, { useState } from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Col, Container, Modal, ModalBody, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Userinfo() {
  // Reject Application
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
              <div className="dashboard-panel vehicle-documents-panel">
                <Row>
                  <Col lg={12} md={12} className="">
                    <div className="dashboard-panel-topbar">
                      <Dashboardpaneltopbar />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12}>
                    <div className="vehicle-documents-sec db-default-sec pro-doc admin-user-pro-one">
                      <div className="vehicle-documents-card db-default-wrapper">
                        <div className="back-hme">
                          <h5>
                            <i className="fas fa-chevron-left"></i>
                            <Link to="#">Application</Link>
                          </h5>
                        </div>
                        <Row>
                          <Col lg={12} md={12}>
                            <div className="admin-pro-main">
                              <div className="tabs-container ">
                                {/* <!-- Tabs Header --> */}
                                <div className="vehicle-tabs">
                                  <ul
                                    className="nav nav-tabs"
                                    id="myTab"
                                    role="tablist"
                                  >
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <Link
                                        className="nav-link active"
                                        id="all-users-pro-tab"
                                        data-bs-toggle="tab"
                                        to="#all-users-pro"
                                        role="tab"
                                        aria-controls="all-users-pro"
                                        aria-selected="true"
                                      >
                                        User Profile
                                      </Link>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <Link
                                        className="nav-link "
                                        id="user-pro-application-tab"
                                        data-bs-toggle="tab"
                                        to="#user-pro-application"
                                        role="tab"
                                        aria-controls="user-pro-application"
                                        aria-selected="false"
                                      >
                                        Application
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="tab-content" id="myTabContent">
                                  <div
                                    className="tab-pane fade show active"
                                    id="all-users-pro"
                                    role="tabpanel"
                                    aria-labelledby="all-users-pro-tab"
                                  >
                                    <div className="profile-tb-main">
                                      <div className="vehicle-document-tabs-v1 d-flex align-items-start">
                                        <div
                                          className="nav flex-column nav-pills me-3 Maintenance-bx admin-user-pro-bx"
                                          id="v-pills-tab"
                                          role="tablist"
                                          aria-orientation="vertical"
                                        >
                                          <button
                                            className="nav-link active"
                                            id="v-pills-Profile-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#v-pills-Profile"
                                            type="button"
                                            role="tab"
                                            aria-controls="v-pills-Profile"
                                            aria-selected="true"
                                          >
                                            Profile
                                          </button>
                                          <button
                                            className="nav-link"
                                            id="v-pills-vehicle-history-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#v-pills-vehicle-history"
                                            type="button"
                                            role="tab"
                                            aria-controls="v-pills-vehicle-history"
                                            aria-selected="true"
                                          >
                                            Vehicle History
                                          </button>
                                          <button
                                            className="nav-link"
                                            id="v-pills-Payment-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#v-pills-Payment"
                                            type="button"
                                            role="tab"
                                            aria-controls="v-pills-Payment"
                                            aria-selected="false"
                                          >
                                            Payment & Invoice
                                          </button>
                                          <button
                                            className="nav-link"
                                            id="v-pills-PCN-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#v-pills-PCN"
                                            type="button"
                                            role="tab"
                                            aria-controls="v-pills-PCN"
                                            aria-selected="false"
                                          >
                                            PCN
                                          </button>
                                        </div>
                                        <div
                                          className="tab-content"
                                          id="v-pills-tabContent"
                                        >
                                          <div
                                            className="tab-pane fade show active"
                                            id="v-pills-Profile"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-Profile-tab"
                                          >
                                            <div className="profile-wrapper">
                                              <Row>
                                                <Col lg={12} md={12}>
                                                  <div className="profile-top-bar">
                                                    <h5>Profile</h5>
                                                    <div className="profile-btn-wrap user-pro-one-btn">
                                                      <Link
                                                        to="#"
                                                        className="profile-cancel-btn"
                                                      >
                                                        Amend
                                                      </Link>
                                                    </div>
                                                  </div>
                                                </Col>
                                              </Row>
                                              <Row>
                                                <Col lg={12} md={12}>
                                                  <div className="profile-meta-wrapper user-pro-one-wrapper">
                                                    <div className="profile-meta">
                                                      <img
                                                        src="./admin_assets/images/dashboard/Frame 81.png"
                                                        alt="prfile"
                                                      />
                                                      <div>
                                                        <h4 className="profile-name">
                                                          Omar Benyoucef
                                                        </h4>
                                                        <h6 className="profile-date">
                                                          Member Since: July 19,
                                                          2024
                                                        </h6>
                                                        <div className="name-bx ">
                                                          <h6 className="profile-active">
                                                            Renting the
                                                          </h6>
                                                          <span>
                                                            Mercedes-Benz E
                                                            Class . 2019 . KJ19
                                                            0JX
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <Link
                                                      to="#"
                                                      className="Approved-btn"
                                                    >
                                                      Approved
                                                    </Link>
                                                  </div>
                                                </Col>
                                              </Row>
                                              <Row>
                                                <Col lg={12} md={12}>
                                                  <div className="profile-info-form-wrap user-pro-one-form">
                                                    <div className="head-wrap">
                                                      <h3>
                                                        Personal Information{" "}
                                                      </h3>
                                                    </div>
                                                    <form action="" method="">
                                                      <Row>
                                                        <Col lg={6} md={6}>
                                                          <div className="form-group">
                                                            <label htmlFor="control-label">
                                                              First Name
                                                            </label>
                                                            <br />
                                                            <input
                                                              type="text"
                                                              name="form-control"
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
                                                            />
                                                          </div>
                                                        </Col>
                                                        <Col lg={6} md={6}>
                                                          <div className="form-group">
                                                            <label htmlFor="control-label">
                                                              Email Address
                                                            </label>
                                                            <br />
                                                            <input
                                                              type="email"
                                                              name="form-control"
                                                              id=""
                                                              className="mg0"
                                                            />
                                                            <h5>
                                                              <Link
                                                                to="#"
                                                                className="Verified-btn"
                                                              >
                                                                Verified
                                                              </Link>
                                                            </h5>
                                                          </div>
                                                        </Col>
                                                        <Col lg={6} md={6}>
                                                          <div className="form-group">
                                                            <label htmlFor="control-label">
                                                              Phone Number
                                                            </label>
                                                            <br />
                                                            <input
                                                              type="tel"
                                                              name="form-control"
                                                              id=""
                                                              placeholder=""
                                                              className="mg0"
                                                            />
                                                            <h5>
                                                              <Link
                                                                to="#"
                                                                className="Verified-btn"
                                                              >
                                                                Verified
                                                              </Link>
                                                            </h5>
                                                          </div>
                                                        </Col>
                                                      </Row>
                                                    </form>
                                                  </div>
                                                </Col>
                                              </Row>
                                              <Row>
                                                <Col lg={12} md={12}>
                                                  <div className="profile-info-form-wrap user-pro-two-form">
                                                    <div className="pass-reset">
                                                      <div className="head-wrap">
                                                        <h3>Password</h3>
                                                      </div>
                                                      <div className="Reset-Password-btn">
                                                        <h5>
                                                          <Link to="#">
                                                            Reset Password
                                                          </Link>
                                                        </h5>
                                                      </div>
                                                    </div>
                                                    <form action="" method="">
                                                      <Row>
                                                        <Col lg={6} md={6}>
                                                          <div className="form-group">
                                                            <label htmlFor="control-label">
                                                              Password
                                                            </label>
                                                            <br />
                                                            <input
                                                              type="Password"
                                                              name="form-control"
                                                            />
                                                          </div>
                                                        </Col>
                                                        <Col lg={6} md={6}>
                                                          <div className="form-group">
                                                            <label htmlFor="control-label">
                                                              Confirm Password
                                                            </label>
                                                            <br />
                                                            <input
                                                              type="password"
                                                              name="form-control"
                                                            />
                                                          </div>
                                                        </Col>
                                                      </Row>
                                                    </form>
                                                  </div>
                                                </Col>
                                              </Row>
                                            </div>
                                          </div>
                                          <div
                                            className="tab-pane fade"
                                            id="v-pills-vehicle-history"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-vehicle-history-tab"
                                          >
                                            <div className="profile-wrapper">
                                              <Row>
                                                <Col lg={12} md={12}>
                                                  <div className="profile-meta-wrapper user-pro-one-wrapper user-vehicles">
                                                    <div className="profile-meta">
                                                      <img
                                                        src="./admin_assets/images/dashboard/Frame 81.png"
                                                        alt="prfile"
                                                      />
                                                      <div>
                                                        <h4 className="profile-name">
                                                          Omar Benyoucef
                                                        </h4>
                                                        <h6 className="profile-date">
                                                          <ion-icon name="checkmark-circle-outline"></ion-icon>
                                                          Active
                                                        </h6>
                                                      </div>
                                                    </div>
                                                    <Link
                                                      to="#"
                                                      className="change-img-btn"
                                                    >
                                                      Member Since: July 19,
                                                      2024
                                                    </Link>
                                                  </div>
                                                </Col>
                                              </Row>
                                              <Row>
                                                <Col lg={12} md={12}>
                                                  <div className="vehicle-rent-wrapper user-vehicle-app-wrapper">
                                                    <div className="veh-ren">
                                                      <h5>Vehicle Rental</h5>
                                                    </div>
                                                    <div className="vehicle-rent-main">
                                                      <Row>
                                                        <Col lg={6} md={6}>
                                                          <div className="veh-rent-image">
                                                            <img
                                                              src="./admin_assets/images/Frame 2085663709.png"
                                                              alt="car"
                                                            />
                                                          </div>
                                                          <div className="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                                                            <ul className="rental-files contract-files">
                                                              <span>
                                                                Contract
                                                              </span>
                                                              <li>
                                                                <img
                                                                  src="./admin_assets/images/Frame 2085663522.png"
                                                                  alt="Docs"
                                                                />
                                                                <div>
                                                                  <h6>
                                                                    Contract
                                                                  </h6>
                                                                  <span>
                                                                    3.6 MB
                                                                  </span>
                                                                </div>
                                                                <Link
                                                                  to="#"
                                                                  className="down-btn"
                                                                >
                                                                  Download
                                                                </Link>
                                                              </li>
                                                            </ul>
                                                          </div>
                                                        </Col>
                                                        <Col lg={6} md={6}>
                                                          <div className="detail-rent-wrapper adm-wrapper user-vehicle-app">
                                                            <div className="rental-vehicle-dt1">
                                                              <div>
                                                                <h5 className="theme-h5">
                                                                  Mercedes-Benz
                                                                  E Class
                                                                </h5>
                                                                <span>
                                                                  Sedan Car
                                                                </span>
                                                              </div>
                                                              <p>KM19 VUG</p>
                                                            </div>
                                                            <div className="rental-vehicle-dt2">
                                                              <div>
                                                                <h6>
                                                                  Distance
                                                                </h6>
                                                                <h5>
                                                                  102 Miles
                                                                </h5>
                                                              </div>
                                                              <div>
                                                                <h6>
                                                                  Passenger
                                                                </h6>
                                                                <h5>
                                                                  4 Persons
                                                                </h5>
                                                              </div>
                                                            </div>
                                                            <div className="rental-vehicle-dt3">
                                                              <div>
                                                                <h6>Start</h6>
                                                                <h5>
                                                                  July 19, 2024
                                                                </h5>
                                                              </div>
                                                              <div>
                                                                <h6>End</h6>
                                                                <h5>TBD</h5>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="rental-vehicle-docs-wrap contract-doc user-pro-doc ">
                                                            <ul className="rental-files contract-files">
                                                              <span>
                                                                Damage Report
                                                              </span>
                                                              <li>
                                                                <img
                                                                  src="./admin_assets/images/Frame 2085663522.png"
                                                                  alt="Docs"
                                                                />
                                                                <div>
                                                                  <h6>
                                                                    Damage
                                                                    Report
                                                                  </h6>
                                                                  <span>
                                                                    3.6 MB
                                                                  </span>
                                                                </div>
                                                                <Link
                                                                  to="#"
                                                                  className="down-btn"
                                                                >
                                                                  Download
                                                                </Link>
                                                              </li>
                                                            </ul>
                                                          </div>
                                                        </Col>
                                                      </Row>
                                                    </div>
                                                  </div>
                                                </Col>
                                              </Row>
                                              <Row>
                                                <div className="user-vehcle-tble">
                                                  <div className="veh-ren">
                                                    <h5>Vehicle History</h5>
                                                  </div>

                                                  <table className="maintenance-table ds-table veh-history-tble adm-user-tble">
                                                    <thead>
                                                      <tr>
                                                        <th>Vehicle ID</th>
                                                        <th>
                                                          Car Model
                                                          <i className="fas fa-arrow-down"></i>
                                                        </th>
                                                        <th>
                                                          Vehicle Registration
                                                          Number
                                                        </th>
                                                        <th>Start Date</th>
                                                        <th>End Date</th>
                                                        <th>Contract</th>
                                                        <th>Damage Report</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <td>001</td>
                                                        <td className="td-clr">
                                                          Mercedes E220
                                                        </td>
                                                        <td>KM19 VUG</td>
                                                        <td>July 19, 2024</td>
                                                        <td>July 19, 2024</td>
                                                        <td className="file-img">
                                                          <Link to="#">
                                                            <img
                                                              src="./admin_assets/images/files.png"
                                                              alt="Docs"
                                                            />
                                                          </Link>
                                                        </td>
                                                        <td className="file-img">
                                                          <Link to="#">
                                                            <img
                                                              src="./admin_assets/images/files.png"
                                                              alt="Docs"
                                                            />
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>002</td>
                                                        <td className="td-clr">
                                                          Mercedes E220
                                                        </td>
                                                        <td>KM19 VUG</td>
                                                        <td>July 19, 2024</td>
                                                        <td>July 19, 2024</td>
                                                        <td className="file-img">
                                                          <Link to="#">
                                                            <img
                                                              src="./admin_assets/images/files.png"
                                                              alt="Docs"
                                                            />
                                                          </Link>
                                                        </td>
                                                        <td className="file-img">
                                                          <Link to="#">
                                                            <img
                                                              src="./admin_assets/images/files.png"
                                                              alt="Docs"
                                                            />
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>003</td>
                                                        <td className="td-clr">
                                                          Mercedes E220
                                                        </td>
                                                        <td>KM19 VUG</td>
                                                        <td>July 19, 2024</td>
                                                        <td>July 19, 2024</td>
                                                        <td className="file-img">
                                                          <Link to="#">
                                                            <img
                                                              src="./admin_assets/images/files.png"
                                                              alt="Docs"
                                                            />
                                                          </Link>
                                                        </td>
                                                        <td className="file-img">
                                                          <Link to="#">
                                                            <img
                                                              src="./admin_assets/images/files.png"
                                                              alt="Docs"
                                                            />
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                                <div className="show-paginaion adm-user-nxt-btn">
                                                  <div className="showing-txt">
                                                    <h5>Page 1 of 10</h5>
                                                  </div>
                                                  <div className="showing-pagination-number">
                                                    <Link
                                                      to="#"
                                                      className="previous-btn"
                                                    >
                                                      Previous
                                                    </Link>
                                                    <Link
                                                      to="#"
                                                      className="previous-btn"
                                                    >
                                                      Next
                                                    </Link>
                                                  </div>
                                                </div>
                                              </Row>
                                            </div>
                                          </div>

                                          <div
                                            className="tab-pane fade"
                                            id="v-pills-Payment"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-Payment-tab"
                                          >
                                            <div className="payments-wrapper">
                                              <div className="row">
                                                <Col lg={12} md={12}>
                                                  <div className="payment-bx">
                                                    <Row>
                                                      <Col lg={6} md={6}>
                                                        <div className="outstanding-bx">
                                                          <div className="outstanding-txt">
                                                            <h4>
                                                              Outstanding
                                                              Balance
                                                            </h4>
                                                            <h3>£2.000</h3>
                                                          </div>
                                                        </div>
                                                      </Col>
                                                      <Col lg={6} md={6}>
                                                        <div className="outstanding-bx">
                                                          <div className="outstanding-txt">
                                                            <h4>
                                                              Total Payment
                                                              Amount
                                                            </h4>
                                                            <h3>£2.000</h3>
                                                          </div>
                                                        </div>
                                                      </Col>
                                                    </Row>
                                                  </div>
                                                </Col>
                                              </div>
                                              <Row>
                                                <div className="user-vehcle-tble payment-tble-main">
                                                  <div className="payment-tble-head">
                                                    <h5>
                                                      Invoices Outstanding
                                                    </h5>
                                                  </div>

                                                  <table className="maintenance-table ds-table veh-history-tble adm-user-tble payment-tble">
                                                    <thead>
                                                      <tr>
                                                        <th>Invoice Number</th>
                                                        <th>
                                                          Invoice Name
                                                          <i className="fas fa-arrow-down"></i>
                                                        </th>
                                                        <th>Invoices Date</th>
                                                        <th>Reason Payment</th>
                                                        <th>Amount</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <td>001</td>
                                                        <td className="td-clr">
                                                          Invoices A
                                                        </td>
                                                        <td>27 June, 2024</td>
                                                        <td>Damage a Car</td>
                                                        <td>£5,00</td>
                                                        <td className="Failed-btn">
                                                          <Link to="#">
                                                            Failed
                                                          </Link>
                                                        </td>
                                                        <td className="View-btn">
                                                          <Link to="#">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>002</td>
                                                        <td className="td-clr">
                                                          Invoices A
                                                        </td>
                                                        <td>27 June, 2024</td>
                                                        <td>Damage a Car</td>
                                                        <td>£4,00</td>
                                                        <td className="Failed-btn">
                                                          <Link to="#">
                                                            Failed
                                                          </Link>
                                                        </td>
                                                        <td className="View-btn">
                                                          <Link to="#">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>003</td>
                                                        <td className="td-clr">
                                                          Invoices A
                                                        </td>
                                                        <td>27 June, 2024</td>
                                                        <td>Damage a Car</td>
                                                        <td>£5,00</td>
                                                        <td className="Failed-btn">
                                                          <Link to="#">
                                                            Failed
                                                          </Link>
                                                        </td>
                                                        <td className="View-btn">
                                                          <Link to="#">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                                <div className="user-vehcle-tble payment-tble-main pay-history">
                                                  <div className="payment-tble-head">
                                                    <h5>Payment History</h5>
                                                  </div>

                                                  <table className="maintenance-table ds-table veh-history-tble adm-user-tble payment-tble">
                                                    <thead>
                                                      <tr>
                                                        <th>Invoice Number</th>
                                                        <th>
                                                          Invoice Name
                                                          <i className="fas fa-arrow-down"></i>
                                                        </th>
                                                        <th>Invoices Date</th>
                                                        <th>Reason Payment</th>
                                                        <th>Fees</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <td>001</td>
                                                        <td className="td-clr">
                                                          Invoices A
                                                        </td>
                                                        <td>27 June, 2024</td>
                                                        <td>Damage a Car</td>
                                                        <td>£5,00</td>
                                                        <td className="Incoming-btn">
                                                          <Link to="#">
                                                            Incoming
                                                          </Link>
                                                        </td>
                                                        <td className="View-btn">
                                                          <Link to="#">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>002</td>
                                                        <td className="td-clr">
                                                          Invoices A
                                                        </td>
                                                        <td>27 June, 2024</td>
                                                        <td>Damage a Car</td>
                                                        <td>£4,00</td>
                                                        <td className="Hold-btn">
                                                          <Link to="#">
                                                            Payment Hold
                                                          </Link>
                                                        </td>
                                                        <td className="View-btn">
                                                          <Link to="#">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>003</td>
                                                        <td className="td-clr">
                                                          Invoices A
                                                        </td>
                                                        <td>27 June, 2024</td>
                                                        <td>Damage a Car</td>
                                                        <td>£5,00</td>
                                                        <td className="Failed-btn">
                                                          <Link to="#">
                                                            Failed
                                                          </Link>
                                                        </td>
                                                        <td className="View-btn">
                                                          <Link to="#">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>010</td>
                                                        <td className="td-clr">
                                                          Invoices A
                                                        </td>
                                                        <td>27 June, 2024</td>
                                                        <td>Damage a Car</td>
                                                        <td>£5,00</td>
                                                        <td className="Scheduled-btn">
                                                          <Link to="#">
                                                            Scheduled
                                                          </Link>
                                                        </td>
                                                        <td className="View-btn">
                                                          <Link to="#">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>003</td>
                                                        <td className="td-clr">
                                                          Invoices A
                                                        </td>
                                                        <td>27 June, 2024</td>
                                                        <td>Damage a Car</td>
                                                        <td>£5,00</td>
                                                        <td className="Failed-btn">
                                                          <Link to="#">
                                                            Failed
                                                          </Link>
                                                        </td>
                                                        <td className="View-btn">
                                                          <Link to="#">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                                <div className="show-paginaion adm-user-nxt-btn">
                                                  <div className="showing-txt">
                                                    <h5>Page 1 of 10</h5>
                                                  </div>
                                                  <div className="showing-pagination-number">
                                                    <Link
                                                      to="#"
                                                      className="previous-btn"
                                                    >
                                                      Previous
                                                    </Link>
                                                    <Link
                                                      to="#"
                                                      className="previous-btn"
                                                    >
                                                      Next
                                                    </Link>
                                                  </div>
                                                </div>
                                              </Row>
                                            </div>
                                          </div>

                                          <div
                                            className="tab-pane fade"
                                            id="v-pills-PCN"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-PCN-tab"
                                          >
                                            <div className="profile-wrapper">
                                              <div className="vehicle-documnents-wrapper Maintenance-main pcns-main">
                                                <Row>
                                                  <Col lg={12} md={12}>
                                                    <div className="search-bar-wrapper">
                                                      <h5 className="theme-h5">
                                                        Penalty Charge Notice
                                                      </h5>
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
                                                      </div>
                                                    </div>
                                                  </Col>
                                                </Row>
                                              </div>
                                              <Row>
                                                <div className="user-vehcle-tble">
                                                  <div className="veh-ren">
                                                    <h5>Vehicle History</h5>
                                                  </div>

                                                  <table className="maintenance-table ds-table veh-history-tble adm-user-tble pcn-tble">
                                                    <thead>
                                                      <tr>
                                                        <th>
                                                          Penalty Charge Notice
                                                          <i className="fas fa-arrow-down"></i>
                                                        </th>
                                                        <th>Date & Time</th>
                                                        <th>PCN Fee</th>
                                                        <th></th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <td className="td-clr">
                                                          0839
                                                        </td>
                                                        <td>July 31, 2024</td>
                                                        <td>£10</td>
                                                        <td className="View-btn">
                                                          <Link to="#">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td className="td-clr">
                                                          0838
                                                        </td>
                                                        <td>July 21, 2024</td>
                                                        <td>£10</td>
                                                        <td className="View-btn">
                                                          <Link to="#">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td className="td-clr">
                                                          0839
                                                        </td>
                                                        <td>July 31, 2024</td>
                                                        <td>£10</td>
                                                        <td className="View-btn">
                                                          <Link to="#">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td className="td-clr">
                                                          0838
                                                        </td>
                                                        <td>July 21, 2024</td>
                                                        <td>£10</td>
                                                        <td className="View-btn">
                                                          <Link to="#">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td className="td-clr">
                                                          0839
                                                        </td>
                                                        <td>July 31, 2024</td>
                                                        <td>£10</td>
                                                        <td className="View-btn">
                                                          <Link to="#">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td className="td-clr">
                                                          0838
                                                        </td>
                                                        <td>July 21, 2024</td>
                                                        <td>£10</td>
                                                        <td className="View-btn">
                                                          <Link to="#">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td className="td-clr">
                                                          0839
                                                        </td>
                                                        <td>July 31, 2024</td>
                                                        <td>£10</td>
                                                        <td className="View-btn">
                                                          <Link to="#">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td className="td-clr">
                                                          0838
                                                        </td>
                                                        <td>July 21, 2024</td>
                                                        <td>£10</td>
                                                        <td className="View-btn">
                                                          <Link to="#">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                                <div className="show-paginaion adm-user-nxt-btn">
                                                  <div className="showing-txt">
                                                    <h5>Page 1 of 10</h5>
                                                  </div>
                                                  <div className="showing-pagination-number">
                                                    <Link
                                                      to="#"
                                                      className="previous-btn"
                                                    >
                                                      Previous
                                                    </Link>
                                                    <Link
                                                      to="#"
                                                      className="previous-btn"
                                                    >
                                                      Next
                                                    </Link>
                                                  </div>
                                                </div>
                                              </Row>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    className="tab-pane fade "
                                    id="user-pro-application"
                                    role="tabpanel"
                                    aria-labelledby="user-pro-application-tab"
                                  >
                                    <div className="view-app-btn reject_btn">
                                      <div className="back-hme"></div>
                                      <div className="profile-btn-wrap user-pro-one-btn view-app-buttons">
                                        <Link
                                          to="/admin-user-application-ammend"
                                          className="Amend-cancel-btn"
                                        >
                                          Amend
                                        </Link>
                                        <Link
                                          to="#"
                                          className="Rejected-cancel-btn"
                                          onClick={handleShow}
                                        >
                                          Rejected
                                        </Link>
                                        <Link
                                          to="#"
                                          className="Approved-cancel-btn"
                                        >
                                          Approved
                                        </Link>
                                      </div>
                                    </div>
                                    <Row>
                                      <Col lg={12} md={12}>
                                        <div className="app-col-1">
                                          <Row>
                                            <Col lg={6} md={6}>
                                              <div className="app-col-2">
                                                <div className="app-personal-head">
                                                  <h5>Personal Information </h5>
                                                </div>
                                                <div className="form-personal">
                                                  <form action="" method="">
                                                    <Row>
                                                      <Col lg={6} md={6}>
                                                        <div className="form-group">
                                                          <label htmlFor="control-label">
                                                            First Name
                                                          </label>
                                                          <br />
                                                          <input
                                                            type="text"
                                                            name="form-control"
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
                                                          />
                                                        </div>
                                                      </Col>
                                                      <Col lg={6} md={6}>
                                                        <div className="form-group">
                                                          <label htmlFor="control-label">
                                                            Email Address
                                                          </label>
                                                          <input
                                                            type="email"
                                                            name="form-control"
                                                            id=""
                                                            className="mg0"
                                                          />
                                                        </div>
                                                      </Col>
                                                      <Col lg={6} md={6}>
                                                        <div className="form-group">
                                                          <label htmlFor="control-label">
                                                            Phone Number
                                                          </label>
                                                          <input
                                                            type="number"
                                                            name="form-control"
                                                            id=""
                                                            className="mg0"
                                                          />
                                                        </div>
                                                      </Col>
                                                    </Row>
                                                  </form>
                                                </div>
                                                <div className="app-personal-head">
                                                  <h5>PCO Licence</h5>
                                                </div>
                                                <div className="pro-license-txt">
                                                  <div className="pro-pera">
                                                    <p>
                                                      How you had a PCO License
                                                      for more than 12 Months
                                                    </p>
                                                  </div>
                                                  <div className="pro-yes">
                                                    <span>Yes</span>
                                                  </div>
                                                </div>
                                                <div className="form-personal">
                                                  <form action="" method="">
                                                    <Row>
                                                      <Col lg={6} md={6}>
                                                        <div className="form-group">
                                                          <label htmlFor="control-label">
                                                            PCO License Number
                                                          </label>
                                                          <br />
                                                          <input
                                                            type="number"
                                                            name="form-control"
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
                                                          />
                                                        </div>
                                                      </Col>
                                                    </Row>
                                                  </form>
                                                </div>
                                                <div className="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                                                  <ul className="rental-files contract-files">
                                                    <li>
                                                      <img
                                                        src="./admin_assets/images/Frame 2085663522.png"
                                                        alt="Docs"
                                                      />
                                                      <div>
                                                        <h6>Paper Copy</h6>
                                                        <span>3.6 MB</span>
                                                      </div>
                                                      <Link
                                                        to="#"
                                                        className="View-btn"
                                                      >
                                                        View
                                                      </Link>
                                                      <Link
                                                        to="#"
                                                        className="down-btn"
                                                      >
                                                        Download
                                                      </Link>
                                                    </li>
                                                    <li>
                                                      <img
                                                        src="./admin_assets/images/Frame 2085663522.png"
                                                        alt="Docs"
                                                      />
                                                      <div>
                                                        <h6>Badge</h6>
                                                        <span>3.6 MB</span>
                                                      </div>
                                                      <Link
                                                        to="#"
                                                        className="View-btn"
                                                      >
                                                        View
                                                      </Link>
                                                      <Link
                                                        to="#"
                                                        className="down-btn"
                                                      >
                                                        Download
                                                      </Link>
                                                    </li>
                                                  </ul>
                                                </div>
                                                <div className="app-personal-head">
                                                  <h5>Proof of Address</h5>
                                                </div>
                                                <div className="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                                                  <ul className="rental-files contract-files">
                                                    <li>
                                                      <img
                                                        src="./admin_assets/images/Frame 2085663522.png"
                                                        alt="Docs"
                                                      />
                                                      <div>
                                                        <h6>
                                                          Bank Statement fot
                                                          last 3 Month
                                                        </h6>
                                                        <span>3.6 MB</span>
                                                      </div>
                                                      <Link
                                                        to="#"
                                                        className="View-btn"
                                                      >
                                                        View
                                                      </Link>
                                                      <Link
                                                        to="#"
                                                        className="down-btn"
                                                      >
                                                        Download
                                                      </Link>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </Col>

                                            <Col lg={6} md={6}>
                                              <div className="app-col-2">
                                                <div className="app-personal-head">
                                                  <h5>Driving Information</h5>
                                                </div>
                                                <div className="form-personal">
                                                  <form action="" method="">
                                                    <Row>
                                                      <Col lg={6} md={6}>
                                                        <div className="form-group">
                                                          <label htmlFor="control-label">
                                                            Driving License
                                                            Number
                                                          </label>
                                                          <br />
                                                          <input
                                                            type="number"
                                                            name="form-control"
                                                          />
                                                        </div>
                                                      </Col>
                                                      <Col lg={6} md={6}>
                                                        <div className="form-group">
                                                          <label htmlFor="control-label">
                                                            Driver License
                                                            Expiry Date
                                                          </label>
                                                          <br />
                                                          <input
                                                            type="date"
                                                            name="form-control"
                                                          />
                                                        </div>
                                                      </Col>
                                                      <Col lg={6} md={6}>
                                                        <div className="form-group">
                                                          <label htmlFor="control-label">
                                                            DVLA Check Code 1
                                                          </label>
                                                          <input
                                                            type="number"
                                                            name="form-control"
                                                            id=""
                                                            className="mg0"
                                                          />
                                                        </div>
                                                      </Col>
                                                      <Col lg={6} md={6}>
                                                        <div className="form-group">
                                                          <label htmlFor="control-label">
                                                            DVLA Check Code 2
                                                          </label>
                                                          <input
                                                            type="number"
                                                            name="form-control"
                                                            id=""
                                                            className="mg0"
                                                          />
                                                        </div>
                                                      </Col>
                                                      <Col lg={6} md={6}>
                                                        <div className="form-group">
                                                          <label htmlFor="control-label">
                                                            National Insurance
                                                            Number
                                                          </label>
                                                          <input
                                                            type="number"
                                                            name="form-control"
                                                            id=""
                                                            className="mg0"
                                                          />
                                                        </div>
                                                      </Col>
                                                    </Row>
                                                  </form>
                                                </div>
                                                <div className="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                                                  <ul className="rental-files contract-files">
                                                    <li>
                                                      <img
                                                        src="./admin_assets/images/Frame 2085663522.png"
                                                        alt="Docs"
                                                      />
                                                      <div>
                                                        <h6>
                                                          Driving License Number
                                                        </h6>
                                                        <span>3.6 MB</span>
                                                      </div>
                                                      <Link
                                                        to="#"
                                                        className="View-btn"
                                                      >
                                                        View
                                                      </Link>
                                                      <Link
                                                        to="#"
                                                        className="down-btn"
                                                      >
                                                        Download
                                                      </Link>
                                                      <Link
                                                        to="#"
                                                        className="delete-img"
                                                      >
                                                        <img
                                                          src="./admin_assets/images/Trash.png"
                                                          alt="delete"
                                                        />
                                                      </Link>
                                                    </li>
                                                  </ul>
                                                </div>
                                                <div className="app-personal-head">
                                                  <h5>Driving History</h5>
                                                </div>
                                                <div className="pro-license-txt">
                                                  <div className="pro-pera">
                                                    <p>
                                                      Have you got more than 6
                                                      Points on your License ?
                                                    </p>
                                                  </div>
                                                  <div className="pro-yes">
                                                    <span>Yes</span>
                                                  </div>
                                                </div>
                                                <div className="pro-license-txt">
                                                  <div className="pro-pera">
                                                    <p>
                                                      Have you been in any
                                                      accidents in the last
                                                      three years?
                                                    </p>
                                                  </div>
                                                  <div className="pro-yes">
                                                    <span>Yes</span>
                                                  </div>
                                                </div>
                                                <div className="app-accident-head">
                                                  <h5>Accident</h5>
                                                </div>
                                                <div className="form-personal">
                                                  <form action="" method="">
                                                    <Row>
                                                      <Col lg={6} md={6}>
                                                        <div className="form-group">
                                                          <label htmlFor="control-label">
                                                            Date of Accident
                                                          </label>
                                                          <br />
                                                          <input
                                                            type="date"
                                                            name="form-control"
                                                          />
                                                        </div>
                                                      </Col>
                                                      <Col lg={6} md={6}>
                                                        <div className="form-group">
                                                          <label htmlFor="control-label">
                                                            Fault/ Non Fault /
                                                            Pending
                                                          </label>
                                                          <br />
                                                          <input
                                                            type="text"
                                                            name="form-control"
                                                          />
                                                        </div>
                                                      </Col>
                                                    </Row>
                                                  </form>
                                                </div>
                                                <div className="deails-pera">
                                                  <span>Details</span>
                                                  <p>
                                                    At Blackties, we believe in
                                                    smart risk management to
                                                    ensure a seamless rental
                                                    experience for both our
                                                    customers and our business
                                                    partners.
                                                  </p>
                                                </div>
                                              </div>
                                            </Col>
                                          </Row>
                                        </div>
                                      </Col>
                                    </Row>
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

        <Modal
          show={show}
          onHide={handleClose}
          className="password_modal reject_user_application"
        >
          <ModalBody>
            <div className="user-app-popup">
              <div className="succes-alert">
                <div className="warning-img">
                  <img src="./admin_assets/images/Icon.png" alt="warning" />
                </div>
                <div className="userr-pop-txt-head">
                  <h5>Are sure to want to Rejected?</h5>
                  <p>Are you sure you want to close the ticket?</p>
                </div>
                <div className="userr-pop-txt-form">
                  <div className="form-personal">
                    <form action="" method="">
                      <Row>
                        <Col lg={12} md={12}>
                          <div className="form-group">
                            <label htmlFor="control-label">Reason to Reject</label>
                            <br />
                            <input
                              type="textarea"
                              name="form-control"
                              className="popup-massage"
                            />
                          </div>
                        </Col>
                        <Col lg={12} md={12}>
                          <div className="form-group">
                            <label htmlFor="control-label">date to reapply</label>
                            <br />
                            <input type="date" name="form-control" />
                          </div>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </div>
                <div className="succes-return-btn Confirm-alert-btns userr-pop-txt-btns">
                  <Link onClick={handleClose} to="#" className="chng-otp-ver">
                    Cancel
                  </Link>
                  <Link to="#" onClick={handleClose} className="succes-return">
                    Yes
                  </Link>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </section>
    </>
  );
}

export default Userinfo;
