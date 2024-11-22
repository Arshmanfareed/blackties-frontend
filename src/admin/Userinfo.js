import React, { useState } from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Col, Container, Modal, ModalBody } from "react-bootstrap";
import { Link } from "react-router-dom";

function Userinfo() {
  // Reject Application
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section class="user-dashboard">
        <Container fluid>
          <div class="row g-0">
            <div class="col-lg-3 col-md-3 sidebar-col">
              <Sidebar />
            </div>
            <div class="col-lg-9 col-md-9 panel-col">
              <div class="dashboard-panel vehicle-documents-panel">
                <div class="row">
                  <Col lg={12} md={12} class="col-lg-12 col-md-12">
                    <div class="dashboard-panel-topbar">
                      <Dashboardpaneltopbar />
                    </div>
                  </Col>
                </div>
                <div class="row">
                  <Col lg={12} md={12} class="col-lg-12 col-md-12">
                    <div class="vehicle-documents-sec db-default-sec pro-doc admin-user-pro-one">
                      <div class="vehicle-documents-card db-default-wrapper">
                        <div class="back-hme">
                          <h5>
                            <i class="fas fa-chevron-left"></i>
                            <Link to="javascript:;">Application</Link>
                          </h5>
                        </div>
                        <div class="row">
                          <Col lg={12} md={12} class="col-lg-12 col-md-12">
                            <div class="admin-pro-main">
                              <div class="tabs-container ">
                                {/* <!-- Tabs Header --> */}
                                <div class="vehicle-tabs">
                                  <ul
                                    class="nav nav-tabs"
                                    id="myTab"
                                    role="tablist"
                                  >
                                    <li class="nav-item" role="presentation">
                                      <Link
                                        class="nav-link"
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
                                    <li class="nav-item" role="presentation">
                                      <Link
                                        class="nav-link active"
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
                                <div class="tab-content" id="myTabContent">
                                  <div
                                    class="tab-pane fade"
                                    id="all-users-pro"
                                    role="tabpanel"
                                    aria-labelledby="all-users-pro-tab"
                                  >
                                    <div class="profile-tb-main">
                                      <div class="vehicle-document-tabs-v1 d-flex align-items-start">
                                        <div
                                          class="nav flex-column nav-pills me-3 Maintenance-bx admin-user-pro-bx"
                                          id="v-pills-tab"
                                          role="tablist"
                                          aria-orientation="vertical"
                                        >
                                          <button
                                            class="nav-link active"
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
                                            class="nav-link"
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
                                            class="nav-link"
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
                                            class="nav-link"
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
                                          class="tab-content"
                                          id="v-pills-tabContent"
                                        >
                                          <div
                                            class="tab-pane fade show active"
                                            id="v-pills-Profile"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-Profile-tab"
                                          >
                                            <div class="profile-wrapper">
                                              <div class="row">
                                                <Col
                                                  lg={12}
                                                  md={12}
                                                  class="col-lg-12 col-md-12"
                                                >
                                                  <div class="profile-top-bar">
                                                    <h5>Profile</h5>
                                                    <div class="profile-btn-wrap user-pro-one-btn">
                                                      <Link
                                                        to="javascript:;"
                                                        class="profile-cancel-btn"
                                                      >
                                                        Amend
                                                      </Link>
                                                    </div>
                                                  </div>
                                                </Col>
                                              </div>
                                              <div class="row">
                                                <Col
                                                  lg={12}
                                                  md={12}
                                                  class="col-lg-12 col-md-12"
                                                >
                                                  <div class="profile-meta-wrapper user-pro-one-wrapper">
                                                    <div class="profile-meta">
                                                      <img
                                                        src="./admin_assets/images/dashboard/Frame 81.png"
                                                        alt="prfile"
                                                      />
                                                      <div>
                                                        <h4 class="profile-name">
                                                          Omar Benyoucef
                                                        </h4>
                                                        <h6 class="profile-date">
                                                          Member Since: July 19,
                                                          2024
                                                        </h6>
                                                        <div class="name-bx ">
                                                          <h6 class="profile-active">
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
                                                      to="javascript:;"
                                                      class="Approved-btn"
                                                    >
                                                      Approved
                                                    </Link>
                                                  </div>
                                                </Col>
                                              </div>
                                              <div class="row">
                                                <Col
                                                  lg={12}
                                                  md={12}
                                                  class="col-lg-12 col-md-12"
                                                >
                                                  <div class="profile-info-form-wrap user-pro-one-form">
                                                    <div class="head-wrap">
                                                      <h3>
                                                        Personal Information{" "}
                                                      </h3>
                                                    </div>
                                                    <form action="" method="">
                                                      <div class="row">
                                                        <Col
                                                          lg={6}
                                                          md={6}
                                                          
                                                        >
                                                          <div class="form-group">
                                                            <label for="control-label">
                                                              First Name
                                                            </label>
                                                            <br />
                                                            <input
                                                              type="text"
                                                              name="form-control"
                                                            />
                                                          </div>
                                                        </Col>
                                                        <Col
                                                          lg={6}
                                                          md={6}
                                                          
                                                        >
                                                          <div class="form-group">
                                                            <label for="control-label">
                                                              Last Name
                                                            </label>
                                                            <br />
                                                            <input
                                                              type="text"
                                                              name="form-control"
                                                            />
                                                          </div>
                                                        </Col>
                                                        <Col
                                                          lg={6}
                                                          md={6}
                                                          
                                                        >
                                                          <div class="form-group">
                                                            <label for="control-label">
                                                              Email Address
                                                            </label>
                                                            <br />
                                                            <input
                                                              type="email"
                                                              name="form-control"
                                                              id=""
                                                              class="mg0"
                                                            />
                                                            <h5>
                                                              <Link
                                                                to="javascript:;"
                                                                class="Verified-btn"
                                                              >
                                                                Verified
                                                              </Link>
                                                            </h5>
                                                          </div>
                                                        </Col>
                                                        <Col
                                                          lg={6}
                                                          md={6}
                                                          
                                                        >
                                                          <div class="form-group">
                                                            <label for="control-label">
                                                              Phone Number
                                                            </label>
                                                            <br />
                                                            <input
                                                              type="tel"
                                                              name="form-control"
                                                              id=""
                                                              placeholder=""
                                                              class="mg0"
                                                            />
                                                            <h5>
                                                              <Link
                                                                to="javascript:;"
                                                                class="Verified-btn"
                                                              >
                                                                Verified
                                                              </Link>
                                                            </h5>
                                                          </div>
                                                        </Col>
                                                      </div>
                                                    </form>
                                                  </div>
                                                </Col>
                                              </div>
                                              <div class="row">
                                                <Col
                                                  lg={12}
                                                  md={12}
                                                  class="col-lg-12 col-md-12"
                                                >
                                                  <div class="profile-info-form-wrap user-pro-two-form">
                                                    <div class="pass-reset">
                                                      <div class="head-wrap">
                                                        <h3>Password</h3>
                                                      </div>
                                                      <div class="Reset-Password-btn">
                                                        <h5>
                                                          <Link to="javascript:;">
                                                            Reset Password
                                                          </Link>
                                                        </h5>
                                                      </div>
                                                    </div>
                                                    <form action="" method="">
                                                      <div class="row">
                                                        <Col
                                                          lg={6}
                                                          md={6}
                                                          
                                                        >
                                                          <div class="form-group">
                                                            <label for="control-label">
                                                              Password
                                                            </label>
                                                            <br />
                                                            <input
                                                              type="Password"
                                                              name="form-control"
                                                            />
                                                          </div>
                                                        </Col>
                                                        <Col
                                                          lg={6}
                                                          md={6}
                                                          
                                                        >
                                                          <div class="form-group">
                                                            <label for="control-label">
                                                              Confirm Password
                                                            </label>
                                                            <br />
                                                            <input
                                                              type="password"
                                                              name="form-control"
                                                            />
                                                          </div>
                                                        </Col>
                                                      </div>
                                                    </form>
                                                  </div>
                                                </Col>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            class="tab-pane fade"
                                            id="v-pills-vehicle-history"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-vehicle-history-tab"
                                          >
                                            <div class="profile-wrapper">
                                              <div class="row">
                                                <Col
                                                  lg={12}
                                                  md={12}
                                                  class="col-lg-12 col-md-12"
                                                >
                                                  <div class="profile-meta-wrapper user-pro-one-wrapper user-vehicles">
                                                    <div class="profile-meta">
                                                      <img
                                                        src="./admin_assets/images/dashboard/Frame 81.png"
                                                        alt="prfile"
                                                      />
                                                      <div>
                                                        <h4 class="profile-name">
                                                          Omar Benyoucef
                                                        </h4>
                                                        <h6 class="profile-date">
                                                          <ion-icon name="checkmark-circle-outline"></ion-icon>
                                                          Active
                                                        </h6>
                                                      </div>
                                                    </div>
                                                    <Link
                                                      to="javascript:;"
                                                      class="change-img-btn"
                                                    >
                                                      Member Since: July 19,
                                                      2024
                                                    </Link>
                                                  </div>
                                                </Col>
                                              </div>
                                              <div class="row">
                                                <Col
                                                  lg={12}
                                                  md={12}
                                                  class="col-lg-12 col-md-12"
                                                >
                                                  <div class="vehicle-rent-wrapper user-vehicle-app-wrapper">
                                                    <div class="veh-ren">
                                                      <h5>Vehicle Rental</h5>
                                                    </div>
                                                    <div class="vehicle-rent-main">
                                                      <div class="row">
                                                        <Col
                                                          lg={6}
                                                          md={6}
                                                          
                                                        >
                                                          <div class="veh-rent-image">
                                                            <img
                                                              src="./admin_assets/images/Frame 2085663709.png"
                                                              alt="car"
                                                            />
                                                          </div>
                                                          <div class="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                                                            <ul class="rental-files contract-files">
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
                                                                  to="javascript:;"
                                                                  class="down-btn"
                                                                >
                                                                  Download
                                                                </Link>
                                                              </li>
                                                            </ul>
                                                          </div>
                                                        </Col>
                                                        <Col
                                                          lg={6}
                                                          md={6}
                                                          
                                                        >
                                                          <div class="detail-rent-wrapper adm-wrapper user-vehicle-app">
                                                            <div class="rental-vehicle-dt1">
                                                              <div>
                                                                <h5 class="theme-h5">
                                                                  Mercedes-Benz
                                                                  E Class
                                                                </h5>
                                                                <span>
                                                                  Sedan Car
                                                                </span>
                                                              </div>
                                                              <p>KM19 VUG</p>
                                                            </div>
                                                            <div class="rental-vehicle-dt2">
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
                                                            <div class="rental-vehicle-dt3">
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
                                                          <div class="rental-vehicle-docs-wrap contract-doc user-pro-doc ">
                                                            <ul class="rental-files contract-files">
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
                                                                  to="javascript:;"
                                                                  class="down-btn"
                                                                >
                                                                  Download
                                                                </Link>
                                                              </li>
                                                            </ul>
                                                          </div>
                                                        </Col>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </Col>
                                              </div>
                                              <div class="row">
                                                <div class="user-vehcle-tble">
                                                  <div class="veh-ren">
                                                    <h5>Vehicle History</h5>
                                                  </div>

                                                  <table class="maintenance-table ds-table veh-history-tble adm-user-tble">
                                                    <thead>
                                                      <tr>
                                                        <th>Vehicle ID</th>
                                                        <th>
                                                          Car Model
                                                          <i class="fas fa-arrow-down"></i>
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
                                                        <td class="td-clr">
                                                          Mercedes E220
                                                        </td>
                                                        <td>KM19 VUG</td>
                                                        <td>July 19, 2024</td>
                                                        <td>July 19, 2024</td>
                                                        <td class="file-img">
                                                          <Link to="javascript:;">
                                                            <img
                                                              src="./admin_assets/images/files.png"
                                                              alt="Docs"
                                                            />
                                                          </Link>
                                                        </td>
                                                        <td class="file-img">
                                                          <Link to="javascript:;">
                                                            <img
                                                              src="./admin_assets/images/files.png"
                                                              alt="Docs"
                                                            />
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>002</td>
                                                        <td class="td-clr">
                                                          Mercedes E220
                                                        </td>
                                                        <td>KM19 VUG</td>
                                                        <td>July 19, 2024</td>
                                                        <td>July 19, 2024</td>
                                                        <td class="file-img">
                                                          <Link to="javascript:;">
                                                            <img
                                                              src="./admin_assets/images/files.png"
                                                              alt="Docs"
                                                            />
                                                          </Link>
                                                        </td>
                                                        <td class="file-img">
                                                          <Link to="javascript:;">
                                                            <img
                                                              src="./admin_assets/images/files.png"
                                                              alt="Docs"
                                                            />
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>003</td>
                                                        <td class="td-clr">
                                                          Mercedes E220
                                                        </td>
                                                        <td>KM19 VUG</td>
                                                        <td>July 19, 2024</td>
                                                        <td>July 19, 2024</td>
                                                        <td class="file-img">
                                                          <Link to="javascript:;">
                                                            <img
                                                              src="./admin_assets/images/files.png"
                                                              alt="Docs"
                                                            />
                                                          </Link>
                                                        </td>
                                                        <td class="file-img">
                                                          <Link to="javascript:;">
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
                                                <div class="show-paginaion adm-user-nxt-btn">
                                                  <div class="showing-txt">
                                                    <h5>Page 1 of 10</h5>
                                                  </div>
                                                  <div class="showing-pagination-number">
                                                    <Link
                                                      to="javascript:;"
                                                      class="previous-btn"
                                                    >
                                                      Previous
                                                    </Link>
                                                    <Link
                                                      to="javascript:;"
                                                      class="previous-btn"
                                                    >
                                                      Next
                                                    </Link>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div
                                            class="tab-pane fade"
                                            id="v-pills-Payment"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-Payment-tab"
                                          >
                                            <div class="payments-wrapper">
                                              <div class="row">
                                                <Col
                                                  lg={12}
                                                  md={12}
                                                  class="col-lg-12 col-md-12"
                                                >
                                                  <div class="payment-bx">
                                                    <div class="row">
                                                      <Col
                                                        lg={6}
                                                        md={6}
                                                        
                                                      >
                                                        <div class="outstanding-bx">
                                                          <div class="outstanding-txt">
                                                            <h4>
                                                              Outstanding
                                                              Balance
                                                            </h4>
                                                            <h3>£2.000</h3>
                                                          </div>
                                                        </div>
                                                      </Col>
                                                      <Col
                                                        lg={6}
                                                        md={6}
                                                        
                                                      >
                                                        <div class="outstanding-bx">
                                                          <div class="outstanding-txt">
                                                            <h4>
                                                              Total Payment
                                                              Amount
                                                            </h4>
                                                            <h3>£2.000</h3>
                                                          </div>
                                                        </div>
                                                      </Col>
                                                    </div>
                                                  </div>
                                                </Col>
                                              </div>
                                              <div class="row">
                                                <div class="user-vehcle-tble payment-tble-main">
                                                  <div class="payment-tble-head">
                                                    <h5>
                                                      Invoices Outstanding
                                                    </h5>
                                                  </div>

                                                  <table class="maintenance-table ds-table veh-history-tble adm-user-tble payment-tble">
                                                    <thead>
                                                      <tr>
                                                        <th>Invoice Number</th>
                                                        <th>
                                                          Invoice Name
                                                          <i class="fas fa-arrow-down"></i>
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
                                                        <td class="td-clr">
                                                          Invoices A
                                                        </td>
                                                        <td>27 June, 2024</td>
                                                        <td>Damage a Car</td>
                                                        <td>£5,00</td>
                                                        <td class="Failed-btn">
                                                          <Link to="javascript:;">
                                                            Failed
                                                          </Link>
                                                        </td>
                                                        <td class="View-btn">
                                                          <Link to="javascript:;">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>002</td>
                                                        <td class="td-clr">
                                                          Invoices A
                                                        </td>
                                                        <td>27 June, 2024</td>
                                                        <td>Damage a Car</td>
                                                        <td>£4,00</td>
                                                        <td class="Failed-btn">
                                                          <Link to="javascript:;">
                                                            Failed
                                                          </Link>
                                                        </td>
                                                        <td class="View-btn">
                                                          <Link to="javascript:;">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>003</td>
                                                        <td class="td-clr">
                                                          Invoices A
                                                        </td>
                                                        <td>27 June, 2024</td>
                                                        <td>Damage a Car</td>
                                                        <td>£5,00</td>
                                                        <td class="Failed-btn">
                                                          <Link to="javascript:;">
                                                            Failed
                                                          </Link>
                                                        </td>
                                                        <td class="View-btn">
                                                          <Link to="javascript:;">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                                <div class="user-vehcle-tble payment-tble-main pay-history">
                                                  <div class="payment-tble-head">
                                                    <h5>Payment History</h5>
                                                  </div>

                                                  <table class="maintenance-table ds-table veh-history-tble adm-user-tble payment-tble">
                                                    <thead>
                                                      <tr>
                                                        <th>Invoice Number</th>
                                                        <th>
                                                          Invoice Name
                                                          <i class="fas fa-arrow-down"></i>
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
                                                        <td class="td-clr">
                                                          Invoices A
                                                        </td>
                                                        <td>27 June, 2024</td>
                                                        <td>Damage a Car</td>
                                                        <td>£5,00</td>
                                                        <td class="Incoming-btn">
                                                          <Link to="javascript:;">
                                                            Incoming
                                                          </Link>
                                                        </td>
                                                        <td class="View-btn">
                                                          <Link to="javascript:;">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>002</td>
                                                        <td class="td-clr">
                                                          Invoices A
                                                        </td>
                                                        <td>27 June, 2024</td>
                                                        <td>Damage a Car</td>
                                                        <td>£4,00</td>
                                                        <td class="Hold-btn">
                                                          <Link to="javascript:;">
                                                            Payment Hold
                                                          </Link>
                                                        </td>
                                                        <td class="View-btn">
                                                          <Link to="javascript:;">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>003</td>
                                                        <td class="td-clr">
                                                          Invoices A
                                                        </td>
                                                        <td>27 June, 2024</td>
                                                        <td>Damage a Car</td>
                                                        <td>£5,00</td>
                                                        <td class="Failed-btn">
                                                          <Link to="javascript:;">
                                                            Failed
                                                          </Link>
                                                        </td>
                                                        <td class="View-btn">
                                                          <Link to="javascript:;">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>010</td>
                                                        <td class="td-clr">
                                                          Invoices A
                                                        </td>
                                                        <td>27 June, 2024</td>
                                                        <td>Damage a Car</td>
                                                        <td>£5,00</td>
                                                        <td class="Scheduled-btn">
                                                          <Link to="javascript:;">
                                                            Scheduled
                                                          </Link>
                                                        </td>
                                                        <td class="View-btn">
                                                          <Link to="javascript:;">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>003</td>
                                                        <td class="td-clr">
                                                          Invoices A
                                                        </td>
                                                        <td>27 June, 2024</td>
                                                        <td>Damage a Car</td>
                                                        <td>£5,00</td>
                                                        <td class="Failed-btn">
                                                          <Link to="javascript:;">
                                                            Failed
                                                          </Link>
                                                        </td>
                                                        <td class="View-btn">
                                                          <Link to="javascript:;">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                                <div class="show-paginaion adm-user-nxt-btn">
                                                  <div class="showing-txt">
                                                    <h5>Page 1 of 10</h5>
                                                  </div>
                                                  <div class="showing-pagination-number">
                                                    <Link
                                                      to="javascript:;"
                                                      class="previous-btn"
                                                    >
                                                      Previous
                                                    </Link>
                                                    <Link
                                                      to="javascript:;"
                                                      class="previous-btn"
                                                    >
                                                      Next
                                                    </Link>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div
                                            class="tab-pane fade"
                                            id="v-pills-PCN"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-PCN-tab"
                                          >
                                            <div class="profile-wrapper">
                                              <div class="vehicle-documnents-wrapper Maintenance-main pcns-main">
                                                <div class="row">
                                                  <Col
                                                    lg={12}
                                                    md={12}
                                                    class="col-lg-12 col-md-12"
                                                  >
                                                    <div class="search-bar-wrapper">
                                                      <h5 class="theme-h5">
                                                        Penalty Charge Notice
                                                      </h5>
                                                      <div>
                                                        <div class="search-bar-v1">
                                                          <button type="submit">
                                                            <i class="fa fa-search"></i>
                                                          </button>
                                                          <input
                                                            type="text"
                                                            placeholder="Search here..."
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </Col>
                                                </div>
                                              </div>
                                              <div class="row">
                                                <div class="user-vehcle-tble">
                                                  <div class="veh-ren">
                                                    <h5>Vehicle History</h5>
                                                  </div>

                                                  <table class="maintenance-table ds-table veh-history-tble adm-user-tble pcn-tble">
                                                    <thead>
                                                      <tr>
                                                        <th>
                                                          Penalty Charge Notice
                                                          <i class="fas fa-arrow-down"></i>
                                                        </th>
                                                        <th>Date & Time</th>
                                                        <th>PCN Fee</th>
                                                        <th></th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <td class="td-clr">
                                                          0839
                                                        </td>
                                                        <td>July 31, 2024</td>
                                                        <td>£10</td>
                                                        <td class="View-btn">
                                                          <Link to="javascript:;">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td class="td-clr">
                                                          0838
                                                        </td>
                                                        <td>July 21, 2024</td>
                                                        <td>£10</td>
                                                        <td class="View-btn">
                                                          <Link to="javascript:;">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td class="td-clr">
                                                          0839
                                                        </td>
                                                        <td>July 31, 2024</td>
                                                        <td>£10</td>
                                                        <td class="View-btn">
                                                          <Link to="javascript:;">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td class="td-clr">
                                                          0838
                                                        </td>
                                                        <td>July 21, 2024</td>
                                                        <td>£10</td>
                                                        <td class="View-btn">
                                                          <Link to="javascript:;">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td class="td-clr">
                                                          0839
                                                        </td>
                                                        <td>July 31, 2024</td>
                                                        <td>£10</td>
                                                        <td class="View-btn">
                                                          <Link to="javascript:;">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td class="td-clr">
                                                          0838
                                                        </td>
                                                        <td>July 21, 2024</td>
                                                        <td>£10</td>
                                                        <td class="View-btn">
                                                          <Link to="javascript:;">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td class="td-clr">
                                                          0839
                                                        </td>
                                                        <td>July 31, 2024</td>
                                                        <td>£10</td>
                                                        <td class="View-btn">
                                                          <Link to="javascript:;">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td class="td-clr">
                                                          0838
                                                        </td>
                                                        <td>July 21, 2024</td>
                                                        <td>£10</td>
                                                        <td class="View-btn">
                                                          <Link to="javascript:;">
                                                            View
                                                          </Link>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                                <div class="show-paginaion adm-user-nxt-btn">
                                                  <div class="showing-txt">
                                                    <h5>Page 1 of 10</h5>
                                                  </div>
                                                  <div class="showing-pagination-number">
                                                    <Link
                                                      to="javascript:;"
                                                      class="previous-btn"
                                                    >
                                                      Previous
                                                    </Link>
                                                    <Link
                                                      to="javascript:;"
                                                      class="previous-btn"
                                                    >
                                                      Next
                                                    </Link>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    class="tab-pane fade show active"
                                    id="user-pro-application"
                                    role="tabpanel"
                                    aria-labelledby="user-pro-application-tab"
                                  >
                                    <div class="view-app-btn reject_btn">
                                      <div class="back-hme"></div>
                                      <div class="profile-btn-wrap user-pro-one-btn view-app-buttons">
                                        <Link
                                          to="javascript:;"
                                          class="Amend-cancel-btn"
                                        >
                                          Amend
                                        </Link>
                                        <Link
                                          to="javascript:;"
                                          class="Rejected-cancel-btn"
                                          onClick={handleShow}
                                        >
                                          Rejected
                                        </Link>
                                        <Link
                                          to="javascript:;"
                                          class="Approved-cancel-btn"
                                        >
                                          Approved
                                        </Link>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <Col
                                        lg={12}
                                        md={12}
                                        class="col-lg-12 col-md-12"
                                      >
                                        <div class="app-col-1">
                                          <div class="row">
                                            <Col
                                              lg={6}
                                              md={6}
                                              
                                            >
                                              <div class="app-col-2">
                                                <div class="app-personal-head">
                                                  <h5>Personal Information </h5>
                                                </div>
                                                <div class="form-personal">
                                                  <form action="" method="">
                                                    <div class="row">
                                                      <Col
                                                        lg={6}
                                                        md={6}
                                                        
                                                      >
                                                        <div class="form-group">
                                                          <label for="control-label">
                                                            First Name
                                                          </label>
                                                          <br />
                                                          <input
                                                            type="text"
                                                            name="form-control"
                                                          />
                                                        </div>
                                                      </Col>
                                                      <Col
                                                        lg={6}
                                                        md={6}
                                                        
                                                      >
                                                        <div class="form-group">
                                                          <label for="control-label">
                                                            Last Name
                                                          </label>
                                                          <br />
                                                          <input
                                                            type="text"
                                                            name="form-control"
                                                          />
                                                        </div>
                                                      </Col>
                                                      <Col
                                                        lg={6}
                                                        md={6}
                                                        
                                                      >
                                                        <div class="form-group">
                                                          <label for="control-label">
                                                            Email Address
                                                          </label>
                                                          <input
                                                            type="email"
                                                            name="form-control"
                                                            id=""
                                                            class="mg0"
                                                          />
                                                        </div>
                                                      </Col>
                                                      <Col
                                                        lg={6}
                                                        md={6}
                                                        
                                                      >
                                                        <div class="form-group">
                                                          <label for="control-label">
                                                            Phone Number
                                                          </label>
                                                          <input
                                                            type="number"
                                                            name="form-control"
                                                            id=""
                                                            class="mg0"
                                                          />
                                                        </div>
                                                      </Col>
                                                    </div>
                                                  </form>
                                                </div>
                                                <div class="app-personal-head">
                                                  <h5>PCO Licence</h5>
                                                </div>
                                                <div class="pro-license-txt">
                                                  <div class="pro-pera">
                                                    <p>
                                                      How you had a PCO License
                                                      for more than 12 Months
                                                    </p>
                                                  </div>
                                                  <div class="pro-yes">
                                                    <span>Yes</span>
                                                  </div>
                                                </div>
                                                <div class="form-personal">
                                                  <form action="" method="">
                                                    <div class="row">
                                                      <Col
                                                        lg={6}
                                                        md={6}
                                                        
                                                      >
                                                        <div class="form-group">
                                                          <label for="control-label">
                                                            PCO License Number
                                                          </label>
                                                          <br />
                                                          <input
                                                            type="number"
                                                            name="form-control"
                                                          />
                                                        </div>
                                                      </Col>
                                                      <Col
                                                        lg={6}
                                                        md={6}
                                                        
                                                      >
                                                        <div class="form-group">
                                                          <label for="control-label">
                                                            Expiry Date
                                                          </label>
                                                          <br />
                                                          <input
                                                            type="date"
                                                            name="form-control"
                                                          />
                                                        </div>
                                                      </Col>
                                                    </div>
                                                  </form>
                                                </div>
                                                <div class="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                                                  <ul class="rental-files contract-files">
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
                                                        to="javascript:;"
                                                        class="View-btn"
                                                      >
                                                        View
                                                      </Link>
                                                      <Link
                                                        to="javascript:;"
                                                        class="down-btn"
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
                                                        to="javascript:;"
                                                        class="View-btn"
                                                      >
                                                        View
                                                      </Link>
                                                      <Link
                                                        to="javascript:;"
                                                        class="down-btn"
                                                      >
                                                        Download
                                                      </Link>
                                                    </li>
                                                  </ul>
                                                </div>
                                                <div class="app-personal-head">
                                                  <h5>Proof of Address</h5>
                                                </div>
                                                <div class="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                                                  <ul class="rental-files contract-files">
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
                                                        to="javascript:;"
                                                        class="View-btn"
                                                      >
                                                        View
                                                      </Link>
                                                      <Link
                                                        to="javascript:;"
                                                        class="down-btn"
                                                      >
                                                        Download
                                                      </Link>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </Col>
                                         
                                          <Col
                                            lg={6}
                                            md={6}
                                            
                                          >
                                            <div class="app-col-2">
                                              <div class="app-personal-head">
                                                <h5>Driving Information</h5>
                                              </div>
                                              <div class="form-personal">
                                                <form action="" method="">
                                                  <div class="row">
                                                    <Col
                                                      lg={6}
                                                      md={6}
                                                      
                                                    >
                                                      <div class="form-group">
                                                        <label for="control-label">
                                                          Driving License Number
                                                        </label>
                                                        <br />
                                                        <input
                                                          type="number"
                                                          name="form-control"
                                                        />
                                                      </div>
                                                    </Col>
                                                    <Col
                                                      lg={6}
                                                      md={6}
                                                      
                                                    >
                                                      <div class="form-group">
                                                        <label for="control-label">
                                                          Driver License Expiry
                                                          Date
                                                        </label>
                                                        <br />
                                                        <input
                                                          type="date"
                                                          name="form-control"
                                                        />
                                                      </div>
                                                    </Col>
                                                    <Col
                                                      lg={6}
                                                      md={6}
                                                      
                                                    >
                                                      <div class="form-group">
                                                        <label for="control-label">
                                                          DVLA Check Code 1
                                                        </label>
                                                        <input
                                                          type="number"
                                                          name="form-control"
                                                          id=""
                                                          class="mg0"
                                                        />
                                                      </div>
                                                    </Col>
                                                    <Col
                                                      lg={6}
                                                      md={6}
                                                      
                                                    >
                                                      <div class="form-group">
                                                        <label for="control-label">
                                                          DVLA Check Code 2
                                                        </label>
                                                        <input
                                                          type="number"
                                                          name="form-control"
                                                          id=""
                                                          class="mg0"
                                                        />
                                                      </div>
                                                    </Col>
                                                    <Col
                                                      lg={6}
                                                      md={6}
                                                      
                                                    >
                                                      <div class="form-group">
                                                        <label for="control-label">
                                                          National Insurance
                                                          Number
                                                        </label>
                                                        <input
                                                          type="number"
                                                          name="form-control"
                                                          id=""
                                                          class="mg0"
                                                        />
                                                      </div>
                                                    </Col>
                                                  </div>
                                                </form>
                                              </div>
                                              <div class="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                                                <ul class="rental-files contract-files">
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
                                                      to="javascript:;"
                                                      class="View-btn"
                                                    >
                                                      View
                                                    </Link>
                                                    <Link
                                                      to="javascript:;"
                                                      class="down-btn"
                                                    >
                                                      Download
                                                    </Link>
                                                    <Link
                                                      to="javascript:;"
                                                      class="delete-img"
                                                    >
                                                      <img
                                                        src="./admin_assets/images/Trash.png"
                                                        alt="delete"
                                                      />
                                                    </Link>
                                                  </li>
                                                </ul>
                                              </div>
                                              <div class="app-personal-head">
                                                <h5>Driving History</h5>
                                              </div>
                                              <div class="pro-license-txt">
                                                <div class="pro-pera">
                                                  <p>
                                                    Have you got more than 6
                                                    Points on your License ?
                                                  </p>
                                                </div>
                                                <div class="pro-yes">
                                                  <span>Yes</span>
                                                </div>
                                              </div>
                                              <div class="pro-license-txt">
                                                <div class="pro-pera">
                                                  <p>
                                                    Have you been in any
                                                    accidents in the last three
                                                    years?
                                                  </p>
                                                </div>
                                                <div class="pro-yes">
                                                  <span>Yes</span>
                                                </div>
                                              </div>
                                              <div class="app-accident-head">
                                                <h5>Accident</h5>
                                              </div>
                                              <div class="form-personal">
                                                <form action="" method="">
                                                  <div class="row">
                                                    <Col
                                                      lg={6}
                                                      md={6}
                                                      
                                                    >
                                                      <div class="form-group">
                                                        <label for="control-label">
                                                          Date of Accident
                                                        </label>
                                                        <br />
                                                        <input
                                                          type="date"
                                                          name="form-control"
                                                        />
                                                      </div>
                                                    </Col>
                                                    <Col
                                                      lg={6}
                                                      md={6}
                                                      
                                                    >
                                                      <div class="form-group">
                                                        <label for="control-label">
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
                                                  </div>
                                                </form>
                                              </div>
                                              <div class="deails-pera">
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
                                          </div>
                                        </div>
                                      </Col>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </div>
                      </div>
                    </div>
                  </Col>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Modal
          show={show}
          onHide={handleClose}
          className="password_modal reject_user_application"
        >
          <ModalBody>
            <div class="user-app-popup">
              <div class="succes-alert">
                <div class="warning-img">
                  <img src="./admin_assets/images/Icon.png" alt="warning" />
                </div>
                <div class="userr-pop-txt-head">
                  <h5>Are sure to want to Rejected?</h5>
                  <p>Are you sure you want to close the ticket?</p>
                </div>
                <div class="userr-pop-txt-form">
                  <div class="form-personal">
                    <form action="" method="">
                      <div class="row">
                        <Col lg={12} md={12} class="col-lg-12 col-md-12">
                          <div class="form-group">
                            <label for="control-label">Reason to Reject</label>
                            <br />
                            <input
                              type="textarea"
                              name="form-control"
                              class="popup-massage"
                            />
                          </div>
                        </Col>
                        <Col lg={12} md={12} class="col-lg-12 col-md-12">
                          <div class="form-group">
                            <label for="control-label">date to reapply</label>
                            <br />
                            <input type="date" name="form-control" />
                          </div>
                        </Col>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="succes-return-btn Confirm-alert-btns userr-pop-txt-btns">
                  <Link to="javascript:;" class="chng-otp-ver">
                    Cancel
                  </Link>
                  <Link
                    to="javascript:void(0);"
                    onclick="popup_alrt(this)"
                    class="succes-return"
                  >
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
